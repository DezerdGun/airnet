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
    ];
  },
};
