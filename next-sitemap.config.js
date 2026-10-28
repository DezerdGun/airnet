const siteUrl = 'https://airnet.uz',
  allow = ['/*.css', '/*.jpg', '/*.png', '/*.js'],
  disallowBots = [
    '/*_wpnonce=',
    '/*add-to-cart=',
    '/*C=',
    '/*dtai=',
    '/*password-protected=',
    '/*s=',
  ],
  disallow = ['/wp-admin/', '/wp-login.php', '/wp-json/']

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/documents/*', '/en/documents/*', '/uz/documents/*'],
  sitemapBaseFileName: 'sitemap',
  priority: NaN,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: [...allow, '/wp-admin/admin-ajax.php'],
        disallow,
        'clean-param':
          'add-to-wishlist&_wpnonce&add-to-cart&C&dtai&password-protected&redirect_to&s&mnu_catgory',
      },
      {
        userAgent: 'Googlebot',
        allow: allow,
        disallow: disallowBots,
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  sitemapSize: 50000,
}
