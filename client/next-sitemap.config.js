// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.oplyx.tech", // ← Your domain here (no slash at end)
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/dashboard/*", "/admin/*"], // optional: exclude protected routes
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://www.oplyx.tech/server-sitemap.xml"],
  },
};
