import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maintain Mining",
    short_name: "Maintain Mining",
    description:
      "Predictive maintenance and asset intelligence for mining operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#131416",
    theme_color: "#131416",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
