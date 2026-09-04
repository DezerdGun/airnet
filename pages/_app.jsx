import "bootstrap/dist/css/bootstrap-reboot.min.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import Header from "../components/header";
import Analytics from "../components/analytics";
import "../styles/utilities.scss";
import "../styles/globals.scss";

const ChatLiveWidget = dynamic(() => import("../components/chatlive/index.jsx"), {
  ssr: false,
});
const Cookies = dynamic(() => import("../components/cookies/index.jsx"), {
  ssr: false,
});

function MyApp({ Component, pageProps, url }) {
  const router = useRouter(),
    language = router.asPath.includes("/uz")
      ? "uz"
      : router.asPath.includes("/en")
      ? "en"
      : "ru";

  function removeLanguagePrefix(url) {
    const languagePrefixRegex = /^\/(uz|ru|en)/;
    return url.replace(languagePrefixRegex, "");
  }

  const realPath = (router.asPath || "/").split("?")[0].split("#")[0];
  const isBlogDetail = /^\/(?:uz\/|en\/)?blog\/[^/]+/.test(realPath);
  const isHome = /^\/(?:uz|en)?\/?$/.test(realPath);

  return (
    <>
      <Head>
        <title>
          {language == "uz"
            ? "Airnet.uz - TAS-IXda virtual xosting, UZ zonasida domen, VDS/VPS - serverlar, Toshkent, O'zbekiston"
            : language == "en"
            ? "Airnet.uz - Virtual hosting in TAS-IX, domain in UZ zone, VDS/VPS - servers, Tashkent, Uzbekistan"
            : "Airnet.uz - Виртуальный хостинг в TAS-IX, домена в зоне UZ, VDS/VPS - сервера, Ташкент,	Узбекистане"}
        </title>
        <meta
          name="description"
          content={
            language == "uz"
              ? "Virtual xosting, Toshkentda xosting, qayta sotish hosting, arzon VDS, VPS serverlar, Toshkentda VDS, virtual serverlar, ajratilgan serverlar, domen nomlari"
              : language == "en"
              ? "Virtual hosting, hosting in Tashkent, reselling hosting, cheap VDS, VPS servers, VDS in Tashkent, virtual servers, dedicated servers, domain names"
              : "Виртуальный хостинг, хостинг в Ташкенте, реселлинг хостинга, дешевые VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера, доменные имена"
          }
        />
        <meta name="yandex-verification" content="e5fe79390705ede1" />
        <link rel="shortcut icon" href="/favicon.png" />
        {isHome && (
          <link
            rel="preload"
            as="image"
            href="/banner3.webp"
            fetchpriority="high"
          />
        )}

        {!isBlogDetail && (
          <>
            <link
              rel="alternate"
              hrefLang="uz-ru"
              href={`https://airnet.uz${removeLanguagePrefix(realPath)}`}
            />
            <link
              rel="alternate"
              hrefLang="uz-en"
              href={`https://airnet.uz${
                `/en` + removeLanguagePrefix(realPath)
              }`}
            />
            <link
              rel="alternate"
              hrefLang="uz"
              href={`https://airnet.uz${
                `/uz` + (url ?? removeLanguagePrefix(realPath))
              }`}
            />
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`https://airnet.uz${
                `/uz` + (url ?? removeLanguagePrefix(realPath))
              }`}
            />
          </>
        )}
        <meta name="referrer" content="strict-origin" />

        {/* <!-- Yandex.Metrika counter --> */}

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/50412993"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        {/* <!-- /Yandex.Metrika counter --> */}
        {/* ------------- Organization ------------- */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "AIRNET",
                url: "https://airnet.uz/",
                logo: "https://airnet.uz/logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "99890 3243080",
                  contactType: "customer service",
                  areaServed: "UZ",
                  availableLanguage: "ru",
                },
              },
              null,
              2
            ),
          }}
        ></script>
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4WXM93"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
      <Analytics />
      <Header language={language} />
      <div className="app">
        <Component {...pageProps} language={language} />
        <Cookies language={language} />
      </div>
      <Footer language={language} />
      <ChatLiveWidget language={language} />
    </>
  );
}

export default MyApp;
