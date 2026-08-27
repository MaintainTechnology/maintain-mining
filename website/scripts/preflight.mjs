// Build preflight.
//
// app/globals.css imports ../../design-system/tokens.css — the design system is
// the single source of truth and it lives OUTSIDE this directory, one level up
// in the repo. That works locally and it works on Vercel, but only when the
// build context actually contains the repo root.
//
// Without this check, a build that cannot see the design system fails deep
// inside Turbopack with "FileSystemPath("").join("../design-system/tokens.css")
// leaves the filesystem root", which says nothing about the cause. This turns
// that into one line naming the exact setting to change.
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const websiteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tokens = path.join(websiteDir, "..", "design-system", "tokens.css");

if (!existsSync(tokens)) {
  const onVercel = Boolean(process.env.VERCEL);
  console.error(
    [
      "",
      "  Build preflight failed: the design system is not in the build context.",
      "",
      `  Expected: ${tokens}`,
      "  Needed by: app/globals.css -> @import \"../../design-system/tokens.css\"",
      "",
      onVercel
        ? [
            "  On Vercel this means the build cannot see files above the Root Directory.",
            "  Fix in Project Settings -> Build and Deployment -> Root Directory:",
            "    - Root Directory must be `website`",
            "    - enable \"Include files outside of the Root Directory in the Build Step\"",
          ].join("\n")
        : "  Run the build from a full checkout of the repository, not from website/ alone.",
      "",
    ].join("\n"),
  );
  process.exit(1);
}
