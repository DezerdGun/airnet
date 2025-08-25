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
      // {
      //   source: "/sitemap.xml",
      //   destination: "/sitemap",
      //   permanent: true,
      // },
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
      {
        source: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        destination: "/blog/infocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        permanent: true,
      },
      {
        source: "/en/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        destination: "/en/blog/infocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        permanent: true,
      },
      {
        source: "/uz//blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        destination: "/uz/blog/infocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        permanent: true,
      },
      {
        source: "/cheap-vds",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/big-vds",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/custom-vds",
        destination: "/vds#constructor",
        permanent: true,
      },
      {
        source: "/en/cheap-vds",
        destination: "/en/vds",
        permanent: true,
      },
      {
        source: "/en/big-vds",
        destination: "/en/vds",
        permanent: true,
      },
      {
        source: "/en/custom-vds",
        destination: "/en/vds#constructor",
        permanent: true,
      },
      {
        source: "/uz/cheap-vds",
        destination: "/uz/vds",
        permanent: true,
      },
      {
        source: "/uz/big-vds",
        destination: "/uz/vds",
        permanent: true,
      },
      {
        source: "/uz/custom-vds",
        destination: "/uz/vds#constructor",
        permanent: true,
      },
      {
        source: "/en/blog/nastroika-ip-telefonii-v-ofise-poshagovaya-instruktsiya",
        destination: "/en/blog/setting-up-ip-telephony-in-the-office-step-by-step-instructions",
        permanent: true,
      },
      {
        source: "/uz/blog/nastroika-ip-telefonii-v-ofise-poshagovaya-instruktsiya",
        destination: "/uz/blog/ofisda-ip-telefoniyani-sozlash-bosqichma-bosqich-korsatmalar",
        permanent: true,
      },
      {
        source: "/blog/ofisda-ip-telefoniyani-sozlash-bosqichma-bosqich-korsatmalar",
        destination: "/blog/nastroika-ip-telefonii-v-ofise-poshagovaya-instruktsiya",
        permanent: true,
      },
      {
        source: "/en/blog/ofisda-ip-telefoniyani-sozlash-bosqichma-bosqich-korsatmalar",
        destination: "/blog/ofisda-ip-telefoniyani-sozlash-bosqichma-bosqich-korsatmalar",
        permanent: true,
      },
      {
        source: "/blog/setting-up-ip-telephony-in-the-office-step-by-step-instructions",
        destination: "/en/blog/setting-up-ip-telephony-in-the-office-step-by-step-instructions",
        permanent: true,
      },
      {
        source: "/uz/blog/setting-up-ip-telephony-in-the-office-step-by-step-instructions",
        destination: "/en/blog/setting-up-ip-telephony-in-the-office-step-by-step-instructions",
        permanent: true,
      },
      {
        source: "/blog/veb-sayt-hosting-uchun-serverni-qanday-tanlash",
        destination: "/uz/blog/veb-sayt-hosting-uchun-serverni-qanday-tanlash",
        permanent: true,
      },
      {
        source: "/en/blog/subdomenlar-nima-va-ular-nima-uchun-kerak",
        destination: "/uz/blog/subdomenlar-nima-va-ular-nima-uchun-kerak",
        permanent: true,
      },
      {
        source: "/uz/uz/help/site/file-htaccess",
        destination: "/uz/help/site/file-htaccess",
        permanent: true,
      },
      {
        source: "/en/blog/sip-telefoniya-bu-nima",
        destination: "/uz/blog/sip-telefoniya-bu-nima",
        permanent: true,
      },
      {
        source: "/en/blog/xato-403-taqiqlangan-bu-nimani-anglatadi",
        destination: "/uz/blog/xato-403-taqiqlangan-bu-nimani-anglatadi",
        permanent: true,
      },
      {
        source: "/blog/what-is-smtp",
        destination: "/en/blog/what-is-smtp",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-root-prava",
        destination: "/blog/chto-takoye-root-prava",
        permanent: true,
      },
      {
        source: "/blog/protocol-ipv6-what-is-this",
        destination: "/en/blog/protocol-ipv6-what-is-this",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-the-csr-and-how-to-create-it",
        destination: "/en/blog/what-is-the-csr-and-how-to-create-it",
        permanent: true,
      },
      {
        source: "/en/blog/apache-http-server-nima",
        destination: "/uz/blog/apache-http-server-nima",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoe-apache-http-server",
        destination: "/blog/chto-takoe-apache-http-server",
        permanent: true,
      },
      {
        source: "/uz/blog/how-to-protect-vps-from-hacking",
        destination: "/en/blog/how-to-protect-vps-from-hacking",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-a-dns-server",
        destination: "/en/blog/what-is-a-dns-server",
        permanent: true,
      },
      {
        source: "/blog/news-on-realistic-products-of-foreign-brides",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/nima-rdp",
        destination: "/uz/blog/nima-rdp",
        permanent: true,
      },
      {
        source: "/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane/feed",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/wp-content/themes/airnet/images/banner_2W.webp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/documents/transfer-owner/domain-owner,",
        destination: "/documents/transfer-owner/domain-owner",
        permanent: true,
      },
      {
        source: "/uz/en/vds",
        destination: "/uz/vds",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-smtp",
        destination: "/blog/chto-takoye-smtp",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-rdp",
        destination: "/blog/chto-takoye-rdp",
        permanent: true,
      },
      {
        source: "/uz/en/anti-ddos",
        destination: "/en/anti-ddos",
        permanent: true,
      },
      {
        source: "/blog/no-hassle-russ-bride-methods-insights",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoe-imya-hosta",
        destination: "/blog/chto-takoe-imya-hosta",
        permanent: true,
      },
      {
        source: "/en/reviews",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/uz/reviews",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-ip-address",
        destination: "/blog/chto-takoye-ip-address",
        permanent: true,
      },
      {
        source: "/en/blog/chem-otlichaetsya-sip-telefoniya-ot-ip",
        destination: "/blog/chem-otlichaetsya-sip-telefoniya-ot-ip",
        permanent: true,
      },
      {
        source: "/red-bean",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uz/blog/protocol-sftp-chto-eto",
        destination: "/blog/protocol-sftp-chto-eto",
        permanent: true,
      },
      {
        source: "/ru/hurma",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog/oshibka-403-forbidden-chto-eto-znachit",
        destination: "/blog/oshibka-403-forbidden-chto-eto-znachit",
        permanent: true,
      },
      {
        source: "/ru/plov",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/bagishlangan-serverni-qanday-tanlash",
        destination: "/uz/blog/bagishlangan-serverni-qanday-tanlash",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoe-vps-server",
        destination: "/blog/chto-takoe-vps-server",
        permanent: true,
      },
      {
        source: "/en/uz/dc",
        destination: "/uz/dc",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-docker",
        destination: "/blog/chto-takoye-docker",
        permanent: true,
      },
      {
        source: "/wp-admin/admin-ajax.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/faq/pravilo-registracii-domena-v-zone-uz",
        destination: "/en/help/domain",
        permanent: true,
      },
      {
        source: "/uz/en/dedicated",
        destination: "/en/dedicated",
        permanent: true,
      },
      {
        source: "/domains/uz",
        destination: "/domains",
        permanent: true,
      },
      {
        source: "/blog/what-is-apache-http-server",
        destination: "/en/blog/what-is-apache-http-server",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-ispmanager",
        destination: "/en/blog/what-is-ispmanager",
        permanent: true,
      },
      {
        source: "/blog/what-is-ip-address",
        destination: "/en/blog/what-is-ip-address",
        permanent: true,
      },
      {
        source: "/faq/ya-zaregistriroval-domen-chto-dalshe",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/vds.",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/en/blog/nastroika-ip-telefonii-v-ofise-poshagovaya-instruktsiya%20copy",
        destination: "/blog/nastroika-ip-telefonii-v-ofise-poshagovaya-instruktsiya",
        permanent: true,
      },
      {
        source: "/en/blog/nginx-nima",
        destination: "/uz/blog/nginx-nima",
        permanent: true,
      },
      {
        source: "/oferta)",
        destination: "/oferta",
        permanent: true,
      },
      {
        source: "/dried-apricot",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uz/uz/domains",
        destination: "/uz/domains",
        permanent: true,
      },
      {
        source: "/blog/docker-nima",
        destination: "/uz/blog/docker-nima",
        permanent: true,
      },
      {
        source: "/uz/blog/difference-between-hosting-and-domain",
        destination: "/en/blog/difference-between-hosting-and-domain",
        permanent: true,
      },
      {
        source: "/en/blog/nima-xato-404",
        destination: "/uz/blog/nima-xato-404",
        permanent: true,
      },
      {
        source: "/uz/blog/how-to-register-a-domain",
        destination: "/en/blog/how-to-register-a-domain",
        permanent: true,
      },
      {
        source: "/price",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/uz/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        destination: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        permanent: true,
      },
      {
        source: "/blog/2018/12",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/en/uz/domains/whois",
        destination: "/uz/domains/whois",
        permanent: true,
      },
      {
        source: "/tr/nar",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog/kak-vybrat-server-dlya-khostinga-sayta",
        destination: "/blog/kak-vybrat-server-dlya-khostinga-sayta",
        permanent: true,
      },
      {
        source: "/en/blog/markaziy-protsessor-tspu-cpu-nima",
        destination: "/uz/blog/markaziy-protsessor-tspu-cpu-nima",
        permanent: true,
      },
      {
        source: "/en/blog/kak-zaschitit-vps-ot-vzloma",
        destination: "/blog/kak-zaschitit-vps-ot-vzloma",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-apache-http-server",
        destination: "/blog/chto-takoe-apache-http-server",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-dns-server",
        destination: "/blog/chto-takoe-dns-server",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-veb-interfeys",
        destination: "/blog/chto-takoye-veb-interfeys",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-smtp",
        destination: "/en/blog/what-is-smtp",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-a-vps-server",
        destination: "/en/blog/what-is-a-vps-server",
        permanent: true,
      },
      {
        source: "/%C2%A0",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/ipv4-bu-nima",
        destination: "/uz/blog/ipv4-bu-nima",
        permanent: true,
      },
      {
        source: "/en/en/hosting",
        destination: "/en/hosting",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-joomla",
        destination: "/blog/chto-takoye-joomla",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-vps-server",
        destination: "/blog/chto-takoe-vps-server",
        permanent: true,
      },
      {
        source: "/en/blog/bagishlangan-serverni-qanday-tanlash",
        destination: "/uz/blog/bagishlangan-serverni-qanday-tanlash",
        permanent: true,
      },
      {
        source: "/uz/en/blog/v-kitae-reshili-otkazatsya-ot-3g",
        destination: "/blog/v-kitae-reshili-otkazatsya-ot-3g",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-a-host-name",
        destination: "/en/blog/what-is-a-host-name",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-the-difference-between-sip-telephony-and-ip",
        destination: "/en/blog/what-is-the-difference-between-sip-telephony-and-ip",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-ip-address",
        destination: "/blog/chto-takoye-ip-address",
        permanent: true,
      },
      {
        source: "/blog/host-nima",
        destination: "/uz/blog/host-nima",
        permanent: true,
      },
      {
        source: "/s.w.org",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uz/blog/how-to-connect-ip-phone-instructions-for-beginners",
        destination: "/en/blog/how-to-connect-ip-phone-instructions-for-beginners",
        permanent: true,
      },
      {
        source: "/blog/sip-telefoniya-bu-nima",
        destination: "/uz/blog/sip-telefoniya-bu-nima",
        permanent: true,
      },
      {
        source: "/uz/vds/arenda-servera-game",
        destination: "/vds/arenda-servera-game",
        permanent: true,
      },
      {
        source: "/blog/tickets-property-generated-by-automated-and-stadium-cheap-jerseys-from-china",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/uz/help/billing/delete",
        destination: "/help/billing/delete",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/17",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/apache-http-server-nima",
        destination: "/uz/blog/apache-http-server-nima",
        permanent: true,
      },
      {
        source: "/uz/help/billing/transfer",
        destination: "/help/billing/transfer",
        permanent: true,
      },
      {
        source: "/uz/reviews",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/en/blog/protokol-sftp-bu-nima",
        destination: "/uz/blog/protokol-sftp-bu-nima",
        permanent: true,
      },
      {
        source: "/ru/domains/com",
        destination: "/domains/com",
        permanent: true,
      },
      {
        source: "/uz/services/vds",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-docker",
        destination: "/en/blog/what-is-docker",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-dns-server",
        destination: "/blog/chto-takoe-dns-server",
        permanent: true,
      },
      {
        source: "/vdsnarxi",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-apache-http-server",
        destination: "/blog/chto-takoe-apache-http-server",
        permanent: true,
      },
      {
        source: "/blog/full-season-as-a-starter-1-place-era-wholesale-nfl-jerseys",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/6-historic-finally-bumped-buildings-week-authentic-josh-allen-jersey",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-ispmanager",
        destination: "/blog/chto-takoye-ispmanager",
        permanent: true,
      },
      {
        source: "/en/blog/host-nima",
        destination: "/uz/blog/host-nima",
        permanent: true,
      },
      {
        source: "/uz/en/hosting",
        destination: "/uz/hosting",
        permanent: true,
      },
      {
        source: "/19",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog/veb-interfeys-nima",
        destination: "/uz/blog/veb-interfeys-nima",
        permanent: true,
      },
      {
        source: "/blog/understanding-vital-factors-of-your-beauty-brides",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/998974048404-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cheap-vds.",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/blog/hand-jake-debrusk-brad-marchand-bills-will-release-greg-little-authentic-jersey",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/protokol-sftp-bu-nima",
        destination: "/uz/blog/protokol-sftp-bu-nima",
        permanent: true,
      },
      {
        source: "/landing-vds",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/blog/strength-despite-the-forward-logging",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/en/blog/protokol-ipv6-bu-nima",
        destination: "/uz/blog/protokol-ipv6-bu-nima",
        permanent: true,
      },
      {
        source: "/blog/2020/12",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-vps-server",
        destination: "/en/blog/what-is-a-vps-server",
        permanent: true,
      },
      {
        source: "/domains/whois&search_source=dzen_touch_safe",
        destination: "/domains/whois",
        permanent: true,
      },
      {
        source: "/en/blog/raznitsa-mezhdu-hostingom-i-domenom",
        destination: "/blog/raznitsa-mezhdu-hostingom-i-domenom",
        permanent: true,
      },
      {
        source: "/uz/blog/protocol-ipv6-what-is-this",
        destination: "/en/blog/protocol-ipv6-what-is-this",
        permanent: true,
      },
      {
        source: "/blog/chto-takoe-tsentralniy-protsessor-tcpu-cpu",
        destination: "/blog/chto-takoye-tsentralniy-protsessor-tspu-cpu",
        permanent: true,
      },
      {
        source: "/en/blog/vps-ni-xakerlikdan-qanday-himoya-qilish-kerak",
        destination: "/uz/blog/vps-ni-xakerlikdan-qanday-himoya-qilish-kerak",
        permanent: true,
      },
      {
        source: "/en/help/billing/transfer",
        destination: "/help/billing/transfer",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-rdp",
        destination: "/blog/chto-takoye-rdp",
        permanent: true,
      },
      {
        source: "/blog/mac-address-nima",
        destination: "/uz/blog/mac-address-nima",
        permanent: true,
      },
      {
        source: "/en/blog/ip-telefoniya-nima-va-u-qanday-ishlaydi",
        destination: "/uz/blog/ip-telefoniya-nima-va-u-qanday-ishlaydi",
        permanent: true,
      },
      {
        source: "/blog/wordpress-nima",
        destination: "/uz/blog/wordpress-nima",
        permanent: true,
      },
      {
        source: "/blog/sip-telephony-what-is-it",
        destination: "/en/blog/sip-telephony-what-is-it",
        permanent: true,
      },
      {
        source: "/uz/uz/help/ssl",
        destination: "/uz/help/ssl",
        permanent: true,
      },
      {
        source: "/bitrix",
        destination: "/vds/arenda-servera-bitrix",
        permanent: true,
      },
      {
        source: "/uz/uz/partners",
        destination: "/uz/partners",
        permanent: true,
      },
      {
        source: "/blog/csr-nima-va-uni-qanday-yaratish-kerak",
        destination: "/uz/blog/csr-nima-va-uni-qanday-yaratish-kerak",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2021/03/BT_Inovation.pdf",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/what-is-the-csr-and-how-to-create-it",
        destination: "/en/blog/what-is-the-csr-and-how-to-create-it",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoe-mac-address",
        destination: "/blog/chto-takoe-mac-address",
        permanent: true,
      },
      {
        source: "/en/blog/root-huquqlari-nima",
        destination: "/uz/blog/root-huquqlari-nima",
        permanent: true,
      },
      {
        source: "/en/blog/veb-sayt-hosting-uchun-serverni-qanday-tanlash",
        destination: "/uz/blog/veb-sayt-hosting-uchun-serverni-qanday-tanlash",
        permanent: true,
      },
      {
        source: "/blog/chto-takoye-smt",
        destination: "/blog/chto-takoye-smtp",
        permanent: true,
      },
      {
        source: "/en/uz",
        destination: "/uz",
        permanent: true,
      },
      {
        source: "/en/blog/yangi-boshlanuvchilar-uchun-ip-telefonga-qanday-ulanish-boyicha-korsatmala",
        destination: "/uz/blog/yangi-boshlanuvchilar-uchun-ip-telefonga-qanday-ulanish-boyicha-korsatmala",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-nginx",
        destination: "/blog/chto-takoye-nginx",
        permanent: true,
      },
      {
        source: "/ru/vps",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/en/ru/domains/com",
        destination: "/domains/com",
        permanent: true,
      },
      {
        source: "/en/blog/ipv4-bu-nima",
        destination: "/uz/blog/ipv4-bu-nima",
        permanent: true,
      },
      {
        source: "/en/help/billing/delete",
        destination: "/help/billing/delete",
        permanent: true,
      },
      {
        source: "/blog/what-is-rdp",
        destination: "/en/blog/what-is-rdp",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-rdp",
        destination: "/blog/chto-takoye-rdp",
        permanent: true,
      },
      {
        source: "/uzb",
        destination: "/uz",
        permanent: true,
      },
      {
        source: "/en/blog/ipv4-chto-eto-takoye",
        destination: "/blog/ipv4-chto-eto-takoye",
        permanent: true,
      },
      {
        source: "/blog/receivers-open-and-work-course-less-pick-sixes-lineup",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-veb-interfeys",
        destination: "/blog/chto-takoye-veb-interfeys",
        permanent: true,
      },
      {
        source: "/uz/blog/how-to-choose-a-dedicated-server",
        destination: "/en/blog/how-to-choose-a-dedicated-server",
        permanent: true,
      },
      {
        source: "/blog/server-nomi-nima",
        destination: "/uz/blog/server-nomi-nima",
        permanent: true,
      },
      {
        source: "/blog/xosting-va-domen-ortasidagi-farq",
        destination: "/uz/blog/xosting-va-domen-ortasidagi-farq",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-poddomeny-i-zachem-oni-nuzhny",
        destination: "/blog/chto-takoye-poddomeny-i-zachem-oni-nuzhny",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/how-to-protect-vps-from-hacking",
        destination: "/en/blog/how-to-protect-vps-from-hacking",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/in-recent-years-offensively-2016-last-wholesale-jerseys-from-china",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/listed-as-day-come-day-sum-even-made-cheap-nfl-jerseys",
        destination: "/blog/blog/vkontakte-zavela-profil-v-instagram",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/sip-telefoniya-va-ip-ortasidagi-farq-nima",
        destination: "/uz/blog/sip-telefoniya-va-ip-ortasidagi-farq-nima",
        permanent: true,
      },
      {
        source: "/en/blog/dns-server-nima",
        destination: "/uz/blog/dns-server-nima",
        permanent: true,
      },
      {
        source: "/oferta).",
        destination: "/oferta",
        permanent: true,
      },
      {
        source: "/product/t-shirts",
        destination: "/",
        permanent: true,
      },
      {
        source: "/product/t-shirts-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sitepad,",
        destination: "/sitepad",
        permanent: true,
      },
      {
        source: "/blog/test",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/setlocale/ru",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog/kak-podklyuchit-ip-telefon-instruktsiya-dlya-novichkov",
        destination: "/blog/kak-podklyuchit-ip-telefon-instruktsiya-dlya-novichkov",
        permanent: true,
      },
      {
        source: "/help/billing/account/transfer",
        destination: "/help/billing/account",
        permanent: true,
      },
      {
        source: "/blog/introducing-best-vpn-for-windows__trashed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi/feed",
        destination: "/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi",
        permanent: true,
      },
      {
        source: "/en/uz/help/ssl/zachem-nuzhen-ssl-sertifikat",
        destination: "/help/ssl/zachem-nuzhen-ssl-sertifikat",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov/feed",
        destination: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
        permanent: true,
      },
      {
        source: "/compote-mixture",
        destination: "/",
        permanent: true,
      },
      {
        source: "/search/opensearch",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-rdp",
        destination: "/en/blog/what-is-rdp",
        permanent: true,
      },
      {
        source: "/uz/en/contacts",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/team/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/themes/airnet/images/banner_2W.webp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/partner",
        destination: "/partners",
        permanent: true,
      },
      {
        source: "/technology/podpiska-na-ssl-sertifikat",
        destination: "/ssl",
        permanent: true,
      },
      {
        source: "/uz/help/billing/restore",
        destination: "/help/billing/restore",
        permanent: true,
      },
      {
        source: "/blog/bigger-faster-and-better-so-contusion-will-season-sure-authentic-jordan-scarlett-jersey",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-ip-address",
        destination: "/en/blog/what-is-ip-address",
        permanent: true,
      },
      {
        source: "/uz/vps",
        destination: "/uz/vds",
        permanent: true,
      },
      {
        source: "/faq/pravilo-registracii-domena-v-zone-uz",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/blog/what-is-gitlab",
        destination: "/en/blog/what-is-gitlab",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-poddomeny-i-zachem-oni-nuzhny",
        destination: "/blog/chto-takoye-poddomeny-i-zachem-oni-nuzhny",
        permanent: true,
      },
      {
        source: "/blog/were-the-stylish-compact-velar",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-gitlab",
        destination: "/en/blog/what-is-gitlab",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-a-dedicated-server",
        destination: "/en/blog/how-to-choose-a-dedicated-server",
        permanent: true,
      },
      {
        source: "/faq/kak-zaregistrirovat-domen",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/blog/news-on-essential-criteria-of-russian-women-dates",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/en/blog/chem-otlichaetsya-sip-telefoniya-ot-ip",
        destination: "/blog/chem-otlichaetsya-sip-telefoniya-ot-ip",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-a-server-for-website-hosting",
        destination: "/en/blog/how-to-choose-a-server-for-website-hosting",
        permanent: true,
      },
      {
        source: "/blog/what-is-the-difference-between-sip-telephony-and-ip",
        destination: "/en/blog/what-is-the-difference-between-sip-telephony-and-ip",
        permanent: true,
      },
      {
        source: "/blog/how-to-connect-ip-phone-instructions-for-beginners",
        destination: "/en/blog/how-to-connect-ip-phone-instructions-for-beginners",
        permanent: true,
      },
      {
        source: "/help/billing/account/restore",
        destination: "/help/billing/restore",
        permanent: true,
      },
      {
        source: "/uz/en/blog/cyberpunk-2077",
        destination: "/blog/cyberpunk-2077",
        permanent: true,
      },
      {
        source: "/en/uz/help/domain/dns",
        destination: "/help/domain/dns",
        permanent: true,
      },
      {
        source: "/pear",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-csr-i-kak-ego-sozdat",
        destination: "/blog/chto-takoye-csr-i-kak-ego-sozdat",
        permanent: true,
      },
      {
        source: "/blog/what-is-error-404",
        destination: "/en/blog/what-is-error-404",
        permanent: true,
      },
      {
        source: "/blog/what-is-joomla",
        destination: "/en/blog/what-is-joomla",
        permanent: true,
      },
      {
        source: "/uz/en/help",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/uz/en/help/vds/preimushhestva-vds-i-vps-serverov",
        destination: "/help/vds/preimushhestva-vds-i-vps-serverov",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-root-prava",
        destination: "/blog/chto-takoye-root-prava",
        permanent: true,
      },
      {
        source: "/wp-includes/wlwmanifest.xml",
        destination: "/",
        permanent: true,
      },
      {
        source: "/landing-host",
        destination: "/hosting",
        permanent: true,
      },
      {
        source: "/en/blog/ssh-klyuchi-chto-eto-takoye",
        destination: "/blog/ssh-klyuchi-chto-eto-takoye",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-tsentralniy-protsessor-tspu-cpu",
        destination: "/blog/chto-takoye-tsentralniy-protsessor-tspu-cpu",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-wordpress",
        destination: "/blog/chto-takoye-wordpress",
        permanent: true,
      },
      {
        source: "/en/blog/ip-manzil-nima",
        destination: "/uz/blog/ip-manzil-nima",
        permanent: true,
      },
      {
        source: "/debug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sslp",
        destination: "/ssl",
        permanent: true,
      },
      {
        source: "/blog/what-is-name-server-ns",
        destination: "/en/blog/what-is-name-server-ns",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-error-404",
        destination: "/blog/chto-takoye-error-404",
        permanent: true,
      },
      {
        source: "/uz/blog/kak-zaregistrirovat-domen",
        destination: "/blog/kak-zaregistrirovat-domen",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-nginx",
        destination: "/en/blog/what-is-nginx",
        permanent: true,
      },
      {
        source: "/uz/blog/domen-com-chto-eto",
        destination: "/blog/domen-com-chto-eto",
        permanent: true,
      },
      {
        source: "/en/blog/ispmanager-nima",
        destination: "/uz/blog/ispmanager-nima",
        permanent: true,
      },
      {
        source: "/blog/ispmanager-nima",
        destination: "/blog/chto-takoye-ispmanager",
        permanent: true,
      },
      {
        source: "/en/vds/arenda-servera-game",
        destination: "/vds/arenda-servera-game",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-wordpress",
        destination: "/en/blog/what-is-wordpress",
        permanent: true,
      },
      {
        source: "/wp-admin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/what-is-mas-address",
        destination: "/en/blog/what-is-mas-address",
        permanent: true,
      },
      {
        source: "/en/blog/domen-com-chto-eto",
        destination: "/blog/domen-com-chto-eto",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-host",
        destination: "/blog/chto-takoye-host",
        permanent: true,
      },
      {
        source: "/en/blog/voip-chto-eto-takoe-i-kak-rabotaet",
        destination: "/blog/voip-chto-eto-takoe-i-kak-rabotaet",
        permanent: true,
      },
      {
        source: "/uz/blog/how-to-connect-sip-phone-yourself",
        destination: "/en/blog/how-to-connect-sip-phone-yourself",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-joomla",
        destination: "/en/blog/what-is-joomla",
        permanent: true,
      },
      {
        source: "/blog/gitlab-nima",
        destination: "/uz/blog/gitlab-nima",
        permanent: true,
      },
      {
        source: "/blog/how-to-connect-sip-phone-yourself",
        destination: "/en/blog/how-to-connect-sip-phone-yourself",
        permanent: true,
      },
      {
        source: "/ru/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/what-is-ispmanager",
        destination: "/en/blog/what-is-ispmanager",
        permanent: true,
      },
      {
        source: "/en/blog/xosting-va-domen-ortasidagi-farq",
        destination: "/uz/blog/xosting-va-domen-ortasidagi-farq",
        permanent: true,
      },
      {
        source: "/uz/faq/pravilo-registracii-domena-v-zone-uz",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/en/blog/protocol-ipv6-chto-eto-takoe",
        destination: "/blog/protocol-ipv6-chto-eto-takoe",
        permanent: true,
      },
      {
        source: "/en/blog/domenni-qanday-royxatdan-otkazish",
        destination: "/uz/blog/domenni-qanday-royxatdan-otkazish",
        permanent: true,
      },
      {
        source: "/blog/yangi-boshlanuvchilar-uchun-ip-telefonga-qanday-ulanish-boyicha-korsatmala",
        destination: "/uz/blog/yangi-boshlanuvchilar-uchun-ip-telefonga-qanday-ulanish-boyicha-korsatmala",
        permanent: true,
      },
      {
        source: "/mail",
        destination: "/email",
        permanent: true,
      },
      {
        source: "/storage",
        destination: "/vds",
        permanent: true,
      },
      {
        source: "/en/blog/ssh-keys-bu-nima",
        destination: "/uz/blog/ssh-keys-bu-nima",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-a-web-interface",
        destination: "/en/blog/what-is-a-web-interface",
        permanent: true,
      },
      {
        source: "/uz/blog/ipv4-chto-eto-takoye",
        destination: "/blog/ipv4-chto-eto-takoye",
        permanent: true,
      },
      {
        source: "/kontrakt",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/uz/blog/ssh-klyuchi-chto-eto-takoye",
        destination: "/blog/ssh-klyuchi-chto-eto-takoye",
        permanent: true,
      },
      {
        source: "/blog/what-is-docker",
        destination: "/en/blog/what-is-docker",
        permanent: true,
      },
      {
        source: "/uz/uz/contacts",
        destination: "/uz/contacts",
        permanent: true,
      },
      {
        source: "/uz/blog/wwww",
        destination: "/uz/blog",
        permanent: true,
      },
      {
        source: "/uz/blog/oshibka-403-forbidden-chto-eto-znachit",
        destination: "/blog/oshibka-403-forbidden-chto-eto-znachit",
        permanent: true,
      },
      {
        source: "/blog/telefonni-ozingizga-qanday-ulash-mumkin",
        destination: "/uz/blog/telefonni-ozingizga-qanday-ulash-mumkin",
        permanent: true,
      },
      {
        source: "/blog/nginx-nima",
        destination: "/uz/blog/nginx-nima",
        permanent: true,
      },
      {
        source: "/en/faq/kak-zaregistrirovat-domen",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-mas-address",
        destination: "/en/blog/what-is-mas-address",
        permanent: true,
      },
      {
        source: "/en/blog/joomla-nima",
        destination: "/uz/blog/joomla-nima",
        permanent: true,
      },
      {
        source: "/en/blog/voip-nima-va-qanday-ishlaydi",
        destination: "/uz/blog/voip-nima-va-qanday-ishlaydi",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-root-rights",
        destination: "/en/blog/what-is-root-rights",
        permanent: true,
      },
      {
        source: "/blog/difference-between-hosting-and-domain",
        destination: "/en/blog/difference-between-hosting-and-domain",
        permanent: true,
      },
      {
        source: "/en/blog/telefonni-ozingizga-qanday-ulash-mumkin",
        destination: "/uz/blog/telefonni-ozingizga-qanday-ulash-mumkin",
        permanent: true,
      },
      {
        source: "/en/blog/domen-com-bu-nima",
        destination: "/uz/blog/domen-com-bu-nima",
        permanent: true,
      },
      {
        source: "/uz/blog/sip-telephony-what-is-it",
        destination: "/en/blog/sip-telephony-what-is-it",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-tsentralniy-protsessor-tspu-cpu",
        destination: "/blog/chto-takoye-tsentralniy-protsessor-tspu-cpu",
        permanent: true,
      },
      {
        source: "/uz/uz/help/cms/chto-takoe-cms",
        destination: "/help/cms/chto-takoe-cms",
        permanent: true,
      },
      {
        source: "/blog/protokol-ipv6-bu-nima",
        destination: "/uz/blog/protokol-ipv6-bu-nima",
        permanent: true,
      },
      {
        source: "/help/dns/add-record,",
        destination: "/help/dns/add-record",
        permanent: true,
      },
      {
        source: "/uz/blog/protocol-ipv6-chto-eto-takoe",
        destination: "/blog/protocol-ipv6-chto-eto-takoe",
        permanent: true,
      },
      {
        source: "/blog/voip-nima-va-qanday-ishlaydi",
        destination: "/uz/blog/voip-nima-va-qanday-ishlaydi",
        permanent: true,
      },
      {
        source: "/en/help/billing/transfer",
        destination: "/help/billing/transfer",
        permanent: true,
      },
      {
        source: "/uz/blog/raznitsa-mezhdu-hostingom-i-domenom",
        destination: "/blog/raznitsa-mezhdu-hostingom-i-domenom",
        permanent: true,
      },
      {
        source: "/uz/uz/ssl",
        destination: "/uz/ssl",
        permanent: true,
      },
      {
        source: "/uz/blog/domain-com-what-is-this",
        destination: "/en/blog/domain-com-what-is-this",
        permanent: true,
      },
      {
        source: "/sample-page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-nginx",
        destination: "/blog/chto-takoye-nginx",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-dns-server",
        destination: "/en/blog/what-is-a-dns-server",
        permanent: true,
      },
      {
        source: "/uz/en/support",
        destination: "/en/support",
        permanent: true,
      },
      {
        source: "/blog/domenni-qanday-royxatdan-otkazish",
        destination: "/uz/blog/domenni-qanday-royxatdan-otkazish",
        permanent: true,
      },
      {
        source: "/blog/xato-403-taqiqlangan-bu-nimani-anglatadi",
        destination: "/uz/blog/xato-403-taqiqlangan-bu-nimani-anglatadi",
        permanent: true,
      },
      {
        source: "/documents/transfer-owner.",
        destination: "/documents/transfer-owner",
        permanent: true,
      },
      {
        source: "/uz/faq/kak-zaregistrirovat-domen",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/uz/blog/protocol-sftp-what-is-this",
        destination: "/en/blog/protocol-sftp-what-is-this",
        permanent: true,
      },
      {
        source: "/contacts/feed",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/blog/dns-server-nima",
        destination: "/uz/blog/dns-server-nima",
        permanent: true,
      },
      {
        source: "/blog/domen-com-bu-nima",
        destination: "/uz/blog/domen-com-bu-nima",
        permanent: true,
      },
      {
        source: "/blog/ip-manzil-nima",
        destination: "/uz/blog/ip-manzil-nima",
        permanent: true,
      },
      {
        source: "/blog/ip-telefoniya-nima-va-u-qanday-ishlaydi",
        destination: "/uz/blog/ip-telefoniya-nima-va-u-qanday-ishlaydi",
        permanent: true,
      },
      {
        source: "/blog/ip-telephony-what-is-it-and-how-does-it-work",
        destination: "/en/blog/ip-telephony-what-is-it-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/blog/joomla-nima",
        destination: "/uz/blog/joomla-nima",
        permanent: true,
      },
      {
        source: "/blog/markaziy-protsessor-tspu-cpu-nima",
        destination: "/uz/blog/markaziy-protsessor-tspu-cpu-nima",
        permanent: true,
      },
      {
        source: "/blog/nima-xato-404",
        destination: "/uz/blog/nima-xato-404",
        permanent: true,
      },
      {
        source: "/blog/root-huquqlari-nima",
        destination: "/uz/blog/root-huquqlari-nima",
        permanent: true,
      },
      {
        source: "/blog/subdomenlar-nima-va-ular-nima-uchun-kerak",
        destination: "/uz/blog/subdomenlar-nima-va-ular-nima-uchun-kerak",
        permanent: true,
      },
      {
        source: "/blog/vps-ni-xakerlikdan-qanday-himoya-qilish-kerak",
        destination: "/uz/blog/vps-ni-xakerlikdan-qanday-himoya-qilish-kerak",
        permanent: true,
      },
      {
        source: "/blog/what-is-nginx",
        destination: "/en/blog/what-is-nginx",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoe-dns-server",
        destination: "/blog/chto-takoe-dns-server",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoe-name-server-ns",
        destination: "/blog/chto-takoe-name-server-ns",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-docker",
        destination: "/blog/chto-takoye-docker",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-error-404",
        destination: "/blog/chto-takoye-error-404",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-gitlab",
        destination: "/blog/chto-takoye-gitlab",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-ispmanager",
        destination: "/blog/chto-takoye-ispmanager",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-smtp",
        destination: "/blog/chto-takoye-smtp",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoye-wordpress",
        destination: "/blog/chto-takoye-wordpress",
        permanent: true,
      },
      {
        source: "/en/blog/docker-nima",
        destination: "/uz/blog/docker-nima",
        permanent: true,
      },
      {
        source: "/en/blog/gitlab-nima",
        destination: "/uz/blog/gitlab-nima",
        permanent: true,
      },
      {
        source: "/en/blog/kak-vybrat-vydelenniy-server",
        destination: "/blog/kak-vybrat-vydelenniy-server",
        permanent: true,
      },
      {
        source: "/en/blog/kak-zaregistrirovat-domen",
        destination: "/blog/kak-zaregistrirovat-domen",
        permanent: true,
      },
      {
        source: "/en/blog/mac-address-nima",
        destination: "/uz/blog/mac-address-nima",
        permanent: true,
      },
      {
        source: "/en/blog/protocol-sftp-chto-eto",
        destination: "/blog/protocol-sftp-chto-eto",
        permanent: true,
      },
      {
        source: "/en/blog/smtp-nima",
        destination: "/uz/blog/smtp-nima",
        permanent: true,
      },
      {
        source: "/en/blog/xost-nomi-nima",
        destination: "/uz/blog/xost-nomi-nima",
        permanent: true,
      },
      {
        source: "/en/help/billing/restore",
        destination: "/help/billing/restore",
        permanent: true,
      },
      {
        source: "/enundefined",
        destination: "/",
        permanent: true,
      },
      {
        source: "/help/billing/account/delete",
        destination: "/help/billing/delete",
        permanent: true,
      },
      {
        source: "/undefined",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-csr-i-kak-ego-sozdat",
        destination: "/blog/chto-takoye-csr-i-kak-ego-sozdat",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-gitlab",
        destination: "/blog/chto-takoye-gitlab",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-joomla",
        destination: "/blog/chto-takoye-joomla",
        permanent: true,
      },
      {
        source: "/uz/blog/ip-telephony-what-is-it-and-how-does-it-work",
        destination: "/en/blog/ip-telephony-what-is-it-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/uz/blog/kak-vybrat-server-dlya-khostinga-sayta",
        destination: "/blog/kak-vybrat-server-dlya-khostinga-sayta",
        permanent: true,
      },
      {
        source: "/uz/blog/kak-vybrat-vydelenniy-server",
        destination: "/blog/kak-vybrat-vydelenniy-server",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-apache-http-server",
        destination: "/en/blog/what-is-apache-http-server",
        permanent: true,
      },
      {
        source: "/uzundefined",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog/kak-podklyuchit-sip-telefon-samostoyatelno",
        destination: "/blog/kak-podklyuchit-sip-telefon-samostoyatelno",
        permanent: true,
      },
      {
        source: "/uz/blog/kak-podklyuchit-sip-telefon-samostoyatelno",
        destination: "/blog/kak-podklyuchit-sip-telefon-samostoyatelno",
        permanent: true,
      },
      {
        source: "/en/blog/ip-telefoniya-chto-eto-takoe-i-kak-ona-rabotaet",
        destination: "/blog/ip-telefoniya-chto-eto-takoe-i-kak-ona-rabotaet",
        permanent: true,
      },
      {
        source: "/uz/blog/ip-telefoniya-chto-eto-takoe-i-kak-ona-rabotaet",
        destination: "/blog/ip-telefoniya-chto-eto-takoe-i-kak-ona-rabotaet",
        permanent: true,
      },
      {
        source: "/en/blog/chto-takoe-tas-ix",
        destination: "/blog/chto-takoe-tas-ix",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-tas-ix",
        destination: "/blog/chto-takoe-tas-ix",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-tas-ix",
        destination: "/en/blog/what-is-a-tas-ix",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-a-tas-ix",
        destination: "/en/blog/what-is-a-tas-ix",
        permanent: true,
      },
      {
        source: "/blog/tas-ix-nima-bu",
        destination: "/uz/blog/tas-ix-nima-bu",
        permanent: true,
      },
      {
        source: "/en/blog/tas-ix-nima-bu",
        destination: "/uz/blog/tas-ix-nima-bu",
        permanent: true,
      },
      {
        source: "/en/blog/nastroyka-ubuntu",
        destination: "/blog/nastroyka-ubuntu",
        permanent: true,
      },
      {
        source: "/uz/blog/nastroyka-ubuntu",
        destination: "/blog/nastroyka-ubuntu",
        permanent: true,
      },
      {
        source: "/blog/ubuntu-setup",
        destination: "/en/blog/ubuntu-setup",
        permanent: true,
      },
      {
        source: "/uz/blog/ubuntu-setup",
        destination: "/en/blog/ubuntu-setup",
        permanent: true,
      },
      {
        source: "/blog/ubuntu-sozlash",
        destination: "/uz/blog/ubuntu-sozlash",
        permanent: true,
      },
      {
        source: "/en/blog/ubuntu-sozlash",
        destination: "/uz/blog/ubuntu-sozlash",
        permanent: true,
      },
      {
        source: "/en/blog/vibrat-hosting-2025",
        destination: "/blog/vibrat-hosting-2025",
        permanent: true,
      },
      {
        source: "/uz/blog/vibrat-hosting-2025",
        destination: "/blog/vibrat-hosting-2025",
        permanent: true,
      },
      {
        source: "/blog/choose-hosting-2025",
        destination: "/en/blog/choose-hosting-2025",
        permanent: true,
      },
      {
        source: "/uz/blog/choose-hosting-2025",
        destination: "/en/blog/choose-hosting-2025",
        permanent: true,
      },
      {
        source: "/blog/hosting-2025",
        destination: "/uz/blog/hosting-2025",
        permanent: true,
      },
      {
        source: "/en/blog/hosting-2025",
        destination: "/uz/blog/hosting-2025",
        permanent: true,
      },
      {
        source: "/uz/blog/kak-podklyuchit-ip-telefon-instruktsiya-dlya-novichkov",
        destination: "/blog/kak-podklyuchit-ip-telefon-instruktsiya-dlya-novichkov",
        permanent: true,
      },
      {
        source: "/blog/how-to-register-a-domain",
        destination: "/en/blog/how-to-register-a-domain",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-host",
        destination: "/en/blog/what-is-a-host",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoye-host",
        destination: "/blog/chto-takoye-host",
        permanent: true,
      },
      {
        source: "/blog/what-is-wordpress",
        destination: "/en/blog/what-is-wordpress",
        permanent: true,
      },
      {
        source: "/blog/error-403-forbidden-what-does-this-mean",
        destination: "/en/blog/error-403-forbidden-what-does-this-mean",
        permanent: true,
      },
      {
        source: "/uz/blog/ipv4-what-is-this",
        destination: "/en/blog/ipv4-what-is-this",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-mac-address",
        destination: "/blog/chto-takoe-mac-address",
        permanent: true,
      },
      {
        source: "/uz/blog/chem-otlichaetsya-sip-telefoniya-ot-ip",
        destination: "/blog/chem-otlichaetsya-sip-telefoniya-ot-ip",
        permanent: true,
      },
      {
        source: "/en/blog/wordpress-nima",
        destination: "/uz/blog/wordpress-nima",
        permanent: true,
      },
      {
        source: "/blog/ssh-keys-bu-nima",
        destination: "/uz/blog/ssh-keys-bu-nima",
        permanent: true,
      },
      {
        source: "/uz/blog/how-to-choose-a-server-for-website-hosting",
        destination: "/en/blog/how-to-choose-a-server-for-website-hosting",
        permanent: true,
      },
      {
        source: "/blog/page/undefined",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-name-server-ns",
        destination: "/blog/chto-takoe-name-server-ns",
        permanent: true,
      },
      {
        source: "/en/blog/sip-telefoniya-chto-eto-takoe",
        destination: "/blog/sip-telefoniya-chto-eto-takoe",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-host-name",
        destination: "/en/blog/what-is-a-host-name",
        permanent: true,
      },
      {
        source: "/blog/what-is-root-rights",
        destination: "/en/blog/what-is-root-rights",
        permanent: true,
      },
      {
        source: "/uz/blog/what-are-subdomains-and-why-are-they-needed",
        destination: "/en/blog/what-are-subdomains-and-why-are-they-needed",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-a-host",
        destination: "/en/blog/what-is-a-host",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-web-interface",
        destination: "/en/blog/what-is-a-web-interface",
        permanent: true,
      },
      {
        source: "/en/blog/csr-nima-va-uni-qanday-yaratish-kerak",
        destination: "/uz/blog/csr-nima-va-uni-qanday-yaratish-kerak",
        permanent: true,
      },
      {
        source: "/uz/blog/chto-takoe-imya-hosta",
        destination: "/blog/chto-takoe-imya-hosta",
        permanent: true,
      },
      {
        source: "/blog/veb-interfeys-nima",
        destination: "/uz/blog/veb-interfeys-nima",
        permanent: true,
      },
      {
        source: "/blog/domain-com-what-is-this",
        destination: "/en/blog/domain-com-what-is-this",
        permanent: true,
      },
      {
        source: "/blog/protocol-sftp-what-is-this",
        destination: "/en/blog/protocol-sftp-what-is-this",
        permanent: true,
      },
      {
        source: "/uz/blog/sip-telefoniya-chto-eto-takoe",
        destination: "/blog/sip-telefoniya-chto-eto-takoe",
        permanent: true,
      },
      {
        source: "/blog/xost-nomi-nima",
        destination: "/uz/blog/xost-nomi-nima",
        permanent: true,
      },
      {
        source: "/uz/blog/voip-chto-eto-takoe-i-kak-rabotaet",
        destination: "/blog/voip-chto-eto-takoe-i-kak-rabotaet",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-name-server-ns",
        destination: "/en/blog/what-is-name-server-ns",
        permanent: true,
      },
      {
        source: "/en/blog/vps-server-nima",
        destination: "/uz/blog/vps-server-nima",
        permanent: true,
      },
      {
        source: "/uz/blog/voip-what-is-it-and-how-does-it-work",
        destination: "/en/blog/voip-what-is-it-and-how-does-it-work",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-a-central-processor-tspu-cpu",
        destination: "/en/blog/what-is-a-central-processor-tspu-cpu",
        permanent: true,
      },
      {
        source: "/blog/vps-server-nima",
        destination: "/uz/blog/vps-server-nima",
        permanent: true,
      },
      {
        source: "/en/blog/server-nomi-nima",
        destination: "/uz/blog/server-nomi-nima",
        permanent: true,
      },
      {
        source: "/blog/ipv4-what-is-this",
        destination: "/en/blog/ipv4-what-is-this",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-central-processor-tspu-cpu",
        destination: "/en/blog/what-is-a-central-processor-tspu-cpu",
        permanent: true,
      },
      {
        source: "/blog/smtp-nima",
        destination: "/uz/blog/smtp-nima",
        permanent: true,
      },
      {
        source: "/blog/ssh-keys-what-is-this",
        destination: "/en/blog/ssh-keys-what-is-this",
        permanent: true,
      },
      {
        source: "/blog/ssh-keys-what-is-this",
        destination: "/en/blog/ssh-keys-what-is-this",
        permanent: true,
      },
      {
        source: "/en/blog/nima-rdp",
        destination: "/uz/blog/nima-rdp",
        permanent: true,
      },
      {
        source: "/uz/blog/error-403-forbidden-what-does-this-mean",
        destination: "/en/blog/error-403-forbidden-what-does-this-mean",
        permanent: true,
      },
      {
        source: "/blog/what-are-subdomains-and-why-are-they-needed",
        destination: "/en/blog/what-are-subdomains-and-why-are-they-needed",
        permanent: true,
      },
      {
        source: "/uz/blog/what-is-error-404",
        destination: "/en/blog/what-is-error-404",
        permanent: true,
      },
      {
        source: "/uz/blog/ssh-keys-what-is-this",
        destination: "/en/blog/ssh-keys-what-is-this",
        permanent: true,
      },
      {
        source: "/en/blog/sip-telefoniya-va-ip-ortasidagi-farq-nima",
        destination: "/uz/blog/sip-telefoniya-va-ip-ortasidagi-farq-nima",
        permanent: true,
      },
      {
        source: "/blog/voip-what-is-it-and-how-does-it-work",
        destination: "/en/blog/voip-what-is-it-and-how-does-it-work",
        permanent: true,
      },
    ];
  },
};