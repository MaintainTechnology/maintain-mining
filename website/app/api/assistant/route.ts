import { anthropic } from "@ai-sdk/anthropic";
import {
  convertToModelMessages,
  streamText,
  validateUIMessages,
  type UIMessage,
} from "ai";
import { z } from "zod";

// Streaming assistant channel for the Maintain Mining site. Disabled until
// ANTHROPIC_API_KEY is configured (see .env.example); it never pretends.
export const maxDuration = 30;

const bodySchema = z.object({
  messages: z.array(z.unknown()).min(1).max(50),
});

const SYSTEM = `You are the Maintain Mining site assistant. Maintain Mining is
the Maintain group's mining-sector brand: predictive maintenance and asset
intelligence for mining operations (the fleet, the plant and the pit).
Answer briefly and plainly. Never invent prices, customers, legal entities or
capabilities; when asked for specifics you do not have, point the visitor to
accounts@maintain.com.au.`;

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      {
        error:
          "Assistant not configured. Set ANTHROPIC_API_KEY to enable this endpoint.",
      },
      { status: 503 },
    );
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  let messages: UIMessage[];
  try {
    messages = await validateUIMessages({ messages: parsed.data.messages });
  } catch {
    return Response.json({ error: "Invalid messages." }, { status: 400 });
  }

  const result = streamText({
    model: anthropic("claude-sonnet-5"),
    system: SYSTEM,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}

export function GET() {
  return Response.json({
    channel: "assistant",
    configured: Boolean(process.env.ANTHROPIC_API_KEY),
  });
}
