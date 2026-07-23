import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/configuration/caps/ada693e3-60f5-41f8-b22e-eef3f6c9c833",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
