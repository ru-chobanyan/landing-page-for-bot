import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: "https://www.wb-primerochnaya.ru/sitemap.xml",
        host: "https://www.wb-primerochnaya.ru",
    };
}
