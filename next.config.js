// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;

module.exports = {
  redirects: async () => {
    return [
      {
        source: "/cheap_vds",
        destination: "/cheap-vds",
        permanent: true,
      },
      {
        source: "/big_vds",
        destination: "/big-vds",
        permanent: true,
      },
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap",
        permanent: true,
      },
      {
        source: "/free-domains",
        destination: "/domains",
        permanent: true,
      },
      {
        source: "/blog/enovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
        destination: "/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
        permanent: true,
      },
      {
        source: "/net",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cpanel",
        destination: "/hosting",
        permanent: true,
      },
      {
        source: "/virtual",
        destination: "/hosting",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/chto-takoe-domen",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/kak-perenesti-sajt-na-xosting-airnet",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/kak-poluchit-testovyj-period",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/kak-proverit-domen-na-zanyatost",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/kak-ustanovit-wordpress-na-xosting",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/kak-zaklyuchit-dogovor",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/kak-zaregistrirovat-domen",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/oshibochno-zaregistriroval-domen",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/pravilo-registracii-domena-v-zone-uz",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/ya-zaregistriroval-domen-chto-dalshe",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/en/faq",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/chto-takoe-domen",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/kak-perenesti-sajt-na-xosting-airnet",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/kak-poluchit-testovyj-period",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/kak-proverit-domen-na-zanyatost",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/kak-ustanovit-wordpress-na-xosting",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/kak-zaklyuchit-dogovor",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/kak-zaregistrirovat-domen",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/oshibochno-zaregistriroval-domen",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/pravilo-registracii-domena-v-zone-uz",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/en/ya-zaregistriroval-domen-chto-dalshe",
        destination: "/en/help",
        permanent: true,
      },
      {
        source: "/uz/faq",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/chto-takoe-domen",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/kak-perenesti-sajt-na-xosting-airnet",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/kak-poluchit-testovyj-period",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/kak-proverit-domen-na-zanyatost",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/kak-ustanovit-wordpress-na-xosting",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/kak-zaklyuchit-dogovor",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/kak-zaregistrirovat-domen",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/oshibochno-zaregistriroval-domen",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/pravilo-registracii-domena-v-zone-uz",
        destination: "/uz/help",
        permanent: true,
      },
      {
        source: "/uz/ya-zaregistriroval-domen-chto-dalshe",
        destination: "/uz/help",
        permanent: true,
      },
      { source: "/faq/oshibochno-zaregistriroval-domen", destination: "/", permanent: true },
      { source: "/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov", destination: "/", permanent: true },
      { source: "/faq/chto-takoe-domen", destination: "/", permanent: true },
      { source: "/faq/kak-perenesti-sajt-na-xosting-airnet", destination: "/", permanent: true },
      { source: "/faq/kak-poluchit-testovyj-period", destination: "/", permanent: true },
      { source: "/faq/kak-proverit-domen-na-zanyatost", destination: "/", permanent: true },
      { source: "/faq/kak-ustanovit-wordpress-na-xosting", destination: "/", permanent: true },
      { source: "/faq/kak-zaklyuchit-dogovor", destination: "/", permanent: true },
      { source: "/uz/faq/oshibochno-zaregistriroval-domen", destination: "/uz", permanent: true },
      {
        source: "/uz/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov",
        destination: "/uz",
        permanent: true,
      },
      { source: "/uz/faq/chto-takoe-domen", destination: "/uz", permanent: true },
      { source: "/uz/faq/kak-perenesti-sajt-na-xosting-airnet", destination: "/uz", permanent: true },
      { source: "/uz/faq/kak-poluchit-testovyj-period", destination: "/uz", permanent: true },
      { source: "/uz/faq/kak-proverit-domen-na-zanyatost", destination: "/uz", permanent: true },
      { source: "/uz/faq/kak-ustanovit-wordpress-na-xosting", destination: "/uz", permanent: true },
      { source: "/uz/faq/kak-zaklyuchit-dogovor", destination: "/uz", permanent: true },
      { source: "/en/faq/oshibochno-zaregistriroval-domen", destination: "/en", permanent: true },
      {
        source: "/en/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov",
        destination: "/en",
        permanent: true,
      },
      { source: "/en/faq/chto-takoe-domen", destination: "/en", permanent: true },
      { source: "/en/faq/kak-perenesti-sajt-na-xosting-airnet", destination: "/en", permanent: true },
      { source: "/en/faq/kak-poluchit-testovyj-period", destination: "/en", permanent: true },
      { source: "/en/faq/kak-proverit-domen-na-zanyatost", destination: "/en", permanent: true },
      { source: "/en/faq/kak-ustanovit-wordpress-na-xosting", destination: "/en", permanent: true },
      { source: "/en/faq/kak-zaklyuchit-dogovor", destination: "/en", permanent: true },
      {
        source: "/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner",
        destination: "/documents/transfer-owner",
        permanent: true,
      },
      {
        source: "/documents/transferring-a-domain-to-another-registrar",
        destination: "/documents/transfer-registrar",
        permanent: true,
      },
      {
        source: "/documents/change-contact-email/application-templates-for-changing-the-contact-e-mail-box",
        destination: "/documents/change-contact-email/e-mail",
        permanent: true,
      },
      {
        source:
          "/documents/transferring-a-domain-to-another-registrar/application-templates-for-domain-transfer-to-another-registrar",
        destination: "/documents/transfer-registrar/domain-transfer-registrar",
        permanent: true,
      },
      {
        source:
          "/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/application-templates-for-transferring-a-domain-to-another-owner",
        destination: "/documents/transfer-owner/domain-owner",
        permanent: true,
      },
      {
        source:
          "/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-of-applications-for-the-transfer-of-the-server-to-another-owner",
        destination: "/documents/transfer-owner/server-owner",
        permanent: true,
      },
      {
        source:
          "/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-for-transferring-a-hosting-account-to-another-owner",
        destination: "/documents/transfer-owner/hosting-owner",
        permanent: true,
      },
      {
        source: "/uz/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner",
        destination: "/uz/documents/transfer-owner",
        permanent: true,
      },
      {
        source: "/uz/documents/transferring-a-domain-to-another-registrar",
        destination: "/uz/documents/transfer-registrar",
        permanent: true,
      },
      {
        source: "/uz/documents/change-contact-email/application-templates-for-changing-the-contact-e-mail-box",
        destination: "/uz/documents/change-contact-email/e-mail",
        permanent: true,
      },
      {
        source:
          "/uz/documents/transferring-a-domain-to-another-registrar/application-templates-for-domain-transfer-to-another-registrar",
        destination: "/uz/documents/transfer-registrar/domain-transfer-registrar",
        permanent: true,
      },
      {
        source:
          "/uz/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/application-templates-for-transferring-a-domain-to-another-owner",
        destination: "/uz/documents/transfer-owner/domain-owner",
        permanent: true,
      },
      {
        source:
          "/uz/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-of-applications-for-the-transfer-of-the-server-to-another-owner",
        destination: "/uz/documents/transfer-owner/server-owner",
        permanent: true,
      },
      {
        source:
          "/uz/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-for-transferring-a-hosting-account-to-another-owner",
        destination: "/uz/documents/transfer-owner/hosting-owner",
        permanent: true,
      },
      {
        source: "/en/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner",
        destination: "/en/documents/transfer-owner",
        permanent: true,
      },
      {
        source: "/en/documents/transferring-a-domain-to-another-registrar",
        destination: "/en/documents/transfer-registrar",
        permanent: true,
      },
      {
        source: "/en/documents/change-contact-email/application-templates-for-changing-the-contact-e-mail-box",
        destination: "/en/documents/change-contact-email/e-mail",
        permanent: true,
      },
      {
        source:
          "/en/documents/transferring-a-domain-to-another-registrar/application-templates-for-domain-transfer-to-another-registrar",
        destination: "/en/documents/transfer-registrar/domain-transfer-registrar",
        permanent: true,
      },
      {
        source:
          "/en/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/application-templates-for-transferring-a-domain-to-another-owner",
        destination: "/en/documents/transfer-owner/domain-owner",
        permanent: true,
      },
      {
        source:
          "/en/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-of-applications-for-the-transfer-of-the-server-to-another-owner",
        destination: "/en/documents/transfer-owner/server-owner",
        permanent: true,
      },
      {
        source:
          "/en/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-for-transferring-a-hosting-account-to-another-owner",
        destination: "/en/documents/transfer-owner/hosting-owner",
        permanent: true,
      },
    ];
  },
};
