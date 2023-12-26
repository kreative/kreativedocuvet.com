/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kreativedocuvet.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  priority: 0.7,
  exclude: [
    "/404",
  ],
  changefreq: "weekly",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
