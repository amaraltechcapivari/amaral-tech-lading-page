import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.seo.title,
    short_name: siteConfig.name,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#080d19",
    theme_color: "#080d19",
    lang: "pt-BR",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
