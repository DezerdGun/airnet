import { useEffect, useState } from "react";
import Container from "../../components/container";
import FAQ from "../../components/faq";
import ImageFullScreen from "../../components/imageFullScreen";
import Partners from "../../components/partners";
import SEO from "../../components/seo";
import styles from "./payment.module.scss";
import Reviews from "@/components/reviews";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

const faq = [
    {
      title: {
        ru: "Банковский перевод (SWIFT)",
        uz: "Bank o'tkazmasi (SWIFT)",
        en: "Bank transfer (SWIFT)",
      },
      description: {
        ru: (
          <>
            <p>
              Чтобы воспользоваться банковским переводом по договору, нужно оформить заказ у нас на сайте, пройти
              регистрацию и далее обратится к технической поддержке для составления договора для юридического лица, для
              этого потребуется всего 3 документа:
            </p>
            <br />
            <p>
              1. Гувохнома (Свидетельство о регистрации компании)
              <br />
              2. ФИО директора (Удостверение личности)
              <br />
              3. Банковские Реквизиты компании
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Shartnoma bo'yicha bank o'tkazmasidan foydalanish uchun sizga kerak veb-saytimizga buyurtma bering,
              ro'yxatdan o'ting va keyin shartnoma tuzish uchun texnik yordamga murojaat qiling yuridik shaxs bo'lsa, bu
              faqat 3 ta hujjatni talab qiladi:
            </p>
            <br />
            <p>
              1. “Guvohnoma” (firmani ro‘yxatdan o‘tkazish to‘g‘risidagi guvohnoma)
              <br />
              2. Direktorning to'liq ismi (sharifi)
              <br />
              3. Kompaniyaning bank rekvizitlari
            </p>
          </>
        ),
        en: (
          <>
            <p>
              To use a bank transfer under an agreement, you need to place an order on our website, go registration and
              then turn to technical support to draw up an agreement for a legal entity, for This will require only 3
              documents:
            </p>
            <br />
            <p>
              1. Certificate (Company Registration Certificate)
              <br />
              2. Full name of the director (ID)
              <br />
              3. Bank details of the company
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Международные банковские карты",
        uz: "Xalqaro bank kartalari",
        en: "International bank cards",
      },
      description: {
        ru: (
          <>
            <p>
              Для нерезидентов Узбекистана и карт выпущенных не в банках Узбекистана - доступна оплата через платежные
              системы Freedom Pay, PAYZE и Oson.uz
            </p>
            <p>
              Чтобы произвести оплату через Freedom Pay перейдите во вкладку "Кабинет" {"->"} "Счета" выберите № счета
              и нажмите кнопку "Оплатить счет", далее выберите из предложенных способов оплаты "Freedom Pay" и нажмите на
              кнопку оплатить...
            </p>
            <br />
            <img src="/payments/1.png" />
          </>
        ),
        uz: (
          <>
            <p>
              Oʻzbekiston norezidentlari va banklar tomonidan chiqarilgan kartalar uchun O'zbekiston - to'lovni
              Freedom Pay va orqali amalga oshirish mumkin oson.uz
            </p>
            <p>
            Freedom Pay orqali toʻlovni amalga oshirish uchun yorligʻiga oʻting "Kabinet" {"->"} "Hisoblar" hisob
              raqamini tanlang va "To'lash" tugmasini bosing hisob", keyin taklif qilingan to'lov usullaridan "Freedom Pay"
              va tanlang to'lov tugmasini bosing...
            </p>
            <br />
            <img src="/payments/1.png" />
          </>
        ),
        en: (
          <>
            <p>
              For non-residents of Uzbekistan and cards issued not in banks of Uzbekistan - payment is available through
              payment Freedom Pay and oson.uz systems
            </p>
            <p>
              To make a payment via Freedom Pay, go to the tab "Account" {"->"} "Accounts" select the account number
              and click the "Pay invoice" button, then select "Freedom Pay" from the offered payment methods and click on pay
              button...
            </p>
            <br />
            <img src="/payments/1.png" />
          </>
        ),
      },
    },
    {
      title: { ru: "PAYNET.uz", uz: "PAYNET.uz", en: "PAYNET.uz" },
      description: {
        ru: (
          <>
            <p>
              Зайдите с мобильного приложение PAYNET через сайт https://paynet.uz, а также через диллеров PAYNET,
              найдите нас в категории "Хостинг-провайдеры" - AIRNET.uz хостинг, для оплаты введите ваш ID или № счета и
              сумму оплаты.
            </p>
            <img className="width-50" src="/payments/2.jpg" />
            <img className="width-50" src="/payments/3.jpg" />
          </>
        ),
        uz: (
          <>
            <p>
              https://paynet.uz sayti orqali PAYNET mobil ilovasidan tizimga kiring, shuningdek, PAYNET dilerlari orqali
              bizni toifadan toping "Xosting provayderlari" - AIRNET.uz xostingi, to'lash uchun shaxsiy guvohnomangizni
              kiriting yoki hisob raqami va to'lov miqdori.
            </p>
            <img className="width-50" src="/payments/2.jpg" />
            <img className="width-50" src="/payments/3.jpg" />
          </>
        ),
        en: (
          <>
            <p>
              Log in from the PAYNET mobile application through the site https://paynet.uz, as well as through PAYNET
              dealers, find us in the category "Hosting providers" - AIRNET.uz hosting, for payment enter your ID or
              account number and payment amount.
            </p>
            <img className="width-50" src="/payments/2.jpg" />
            <img className="width-50" src="/payments/3.jpg" />
          </>
        ),
      },
    },
    {
      title: { ru: "PAYME.uz", uz: "PAYME.uz", en: "PAYME.uz" },
      description: {
        ru: (
          <>
            <p>
              Зайдите с мобильного приложение PAYME.uz найдите нас в категории "Хостинг-провайдеры" - AIRNET.uz хостинг,
              для оплаты введите ваш ID или № счета и сумму оплаты.
            </p>
            <img className="width-50" src="/payments/5.jpg" />
            <img className="width-50" src="/payments/6.jpg" />
            <p>
              В биллинг панели выбрать способ оплаты через PAYME.uz и нажать на кнопку "Оплатить Payme" и вас переведет
              на сайт платежной системы где нужно будет указать данные вашей карты для быстрой оплаты.
            </p>
            <br />
            <img src="/payments/4.png" />
          </>
        ),
        uz: (
          <>
            <p>
              PAYME.uz mobil ilovasidan tizimga kiring, bizni turkumda toping "Xosting provayderlari" - AIRNET.uz
              xostingi, to'lov uchun o'zingizni kiriting ID yoki hisob raqami va to'lov miqdori.
            </p>
            <img className="width-50" src="/payments/5.jpg" />
            <img className="width-50" src="/payments/6.jpg" />
            <p>
              Billing panelida PAYME.uz orqali to‘lov usulini tanlang va ustiga bosing "Payme bilan to'lash" tugmasini
              bosing va siz to'lov tizimining veb-saytiga yo'naltirilasiz bu erda tez to'lov uchun kartangiz
              ma'lumotlarini kiritishingiz kerak bo'ladi.
            </p>
            <br />
            <img src="/payments/4.png" />
          </>
        ),
        en: (
          <>
            <p>
              Log in from the mobile application PAYME.uz find us in the category "Hosting providers" - AIRNET.uz
              hosting, to pay, enter your ID or account number and the amount of payment.
            </p>
            <img className="width-50" src="/payments/5.jpg" />
            <img className="width-50" src="/payments/6.jpg" />
            <p>
              In the billing panel, select the payment method via PAYME.uz and click on the "Pay with Payme" button and
              you will be transferred to the website of the payment system where you will need to specify your card
              details for quick payment.
            </p>
            <br />
            <img src="/payments/4.png" />
          </>
        ),
      },
    },
    {
      title: { ru: "Click.uz", uz: "Click.uz", en: "Click.uz" },
      description: {
        ru: (
          <>
            <p>
              Зайдите с мобильного приложение Click.uz найдите нас в категории "Хостинг и домены" - AIRNET.uz хостинг,
              для оплаты введите № счета и сумму оплаты.
            </p>
            <img className="width-50" src="/payments/7.jpg" />
            <img className="width-50" src="/payments/8.jpg" />
            <p>
              В биллинг панели выбрать способ оплаты через CLICK.uz и нажать на кнопку "Оплатить" и вас переведет на
              сайт платежной системы где нужно будет указать данные вашей карты для быстрой оплаты.
            </p>
            <br />
            <img src="/payments/9.png" />
          </>
        ),
        uz: (
          <>
            <p>
              Click.uz mobil ilovasidan tizimga kiring, bizni turkumda toping "Xosting va domenlar" - AIRNET.uz
              xostingi, to'lov uchun hisob raqamini kiriting va to'lov miqdori.
            </p>
            <img className="width-50" src="/payments/7.jpg" />
            <img className="width-50" src="/payments/8.jpg" />
            <p>
              Billing panelida CLICK.uz orqali to‘lov usulini tanlang va ustiga bosing "To'lash" tugmasi va siz to'lov
              tizimining saytiga o'tasiz Tez to'lov uchun karta ma'lumotlarini kiritishingiz kerak.
            </p>
            <br />
            <img src="/payments/9.png" />
          </>
        ),
        en: (
          <>
            <p>
              Log in from the Click.uz mobile application find us in the category "Hosting and domains" - AIRNET.uz
              hosting, to pay, enter the account number and payment amount.
            </p>
            <img className="width-50" src="/payments/7.jpg" />
            <img className="width-50" src="/payments/8.jpg" />
            <p>
              In the billing panel, select the payment method via CLICK.uz and click on the "Pay" button and you will be
              transferred to payment system website where you will need to specify your card details for quick payment.
            </p>
            <br />
            <img src="/payments/9.png" />
          </>
        ),
      },
    },
    {
      title: { ru: "UPAY.uz", uz: "UPAY.uz", en: "UPAY.uz" },
      description: {
        ru: (
          <>
            <p>
              Зайдите с мобильного приложение UPAY.uz найдите нас в категории "Хостинг услуги" - AIRNET.uz хостинг, для
              оплаты введите ваш ID клиента и сумму оплаты.
            </p>
            <img className="width-50" src="/payments/11.jpg" />
            <img className="width-50" src="/payments/12.jpg" />
            <p>
              В биллинг панели выбрать способ оплаты через UPAY.uz и нажать на кнопку "Перейти на сайт UPAY" и вас
              переведет на сайт платежной системы где нужно будет указать данные вашей карты для быстрой оплаты.
            </p>
            <br />
            <img src="/payments/10.png" />
          </>
        ),
        uz: (
          <>
            <p>
              UPAY.uz mobil ilovasidan tizimga kiring, bizni turkumda toping "Xosting xizmatlari" - AIRNET.uz xostingi,
              to'lash uchun shaxsingizni tasdiqlovchi hujjatni kiriting mijoz va to'lov miqdori.
            </p>
            <img className="width-50" src="/payments/11.jpg" />
            <img className="width-50" src="/payments/12.jpg" />
            <p>
              Billing panelida UPAY.uz orqali to‘lov usulini tanlang va ustiga bosing "UPAY saytiga o'tish" tugmasini
              bosing va siz to'lov saytiga o'tasiz karta ma'lumotlarini tezda kiritishingiz kerak bo'lgan tizim to'lov.
            </p>
            <br />
            <img src="/payments/10.png" />
          </>
        ),
      },
    },
    {
      title: { ru: "Oson.uz", uz: "Oson.uz", en: "Oson.uz" },
      description: {
        ru: (
          <>
            <p>
              Зайдите с мобильного приложение OSON.uz найдите нас в категории "Хостинг провайдеры" - AIRNET.uz хостинг,
              для оплаты введите ваш ID клиента или № счета и сумму оплаты.
            </p>
            <img className="width-50" src="/payments/16.jpg" />
            <img className="width-50" src="/payments/17.jpg" />
            <p>
              В биллинг панели выбрать способ оплаты через OSON.uz и нажать на кнопку "Оплатить OSON" и вам откроется
              дополнительное окно платежной системы где нужно будет указать данные вашей карты для быстрой оплаты.
            </p>
            <br />
            <img src="/payments/13.png" />
            <br />
            <p>Можно выбрать оплата банковской картой UZCARD или HUMO</p>
            <br />
            <img src="/payments/14.png" />
            <br />
            <p>Можно выбрать оплата банковской картой VISA или MasterCard</p>
            <br />
            <img src="/payments/15.png" />
          </>
        ),
        uz: (
          <>
            <p>
              OSON.uz mobil ilovasidan tizimga kiring, bizni turkumda toping "Xosting provayderlari" - AIRNET.uz
              xostingi, to'lov uchun o'zingizni kiriting Mijoz identifikatori yoki hisob raqami va to'lov miqdori.
            </p>
            <img className="width-50" src="/payments/16.jpg" />
            <img className="width-50" src="/payments/17.jpg" />
            <p>
              Billing panelida OSON.uz orqali toʻlov usulini tanlang va ustiga bosing "OSON to'lash" tugmasi va siz
              uchun qo'shimcha oyna ochiladi karta ma'lumotlarini kiritishingiz kerak bo'lgan to'lov tizimi tez to'lov.
            </p>
            <br />
            <img src="/payments/13.png" />
            <br />
            <p>Siz UZCARD yoki HUMO bank kartasi bilan toʻlashni tanlashingiz mumkin</p>
            <br />
            <img src="/payments/14.png" />
            <br />
            <p>Siz VISA yoki MasterCard orqali to'lashni tanlashingiz mumkin</p>
            <br />
            <img src="/payments/15.png" />
          </>
        ),
        en: (
          <>
            <p>
              Log in from the mobile application OSON.uz find us in the category "Hosting providers" - AIRNET.uz
              hosting, to pay, enter your customer ID or account number and the payment amount.
            </p>
            <img className="width-50" src="/payments/16.jpg" />
            <img className="width-50" src="/payments/17.jpg" />
            <p>
              In the billing panel, select the payment method through OSON.uz and click on the "Pay OSON" button and you
              will see an additional window of the payment system where you will need to specify your card details for
              quick payment.
            </p>
            <br />
            <img src="/payments/13.png" />
            <br />
            <p>You can choose to pay with a UZCARD or HUMO bank card</p>
            <br />
            <img src="/payments/14.png" />
            <br />
            <p>You can choose to pay by VISA or MasterCard</p>
            <br />
            <img src="/payments/15.png" />
          </>
        ),
      },
    },
    {
      title: { ru: "Freedom Pay", uz: "Freedom Pay", en: "Freedom Pay" },
      description: {
        ru: (
          <>
            <p>
              Перейдите в счета, выберите способ оплаты через "Freedom Pay", далее вас перебросит на сайт платежной
              систему введите данные вашей карты и следуйте инструкциям на сайте платежной системы.
            </p>
            <img className="width-100" src="/payments/freedompay.png" />
          </>
        ),
        uz: (
          <>
            <p>
              Hisoblarga o'ting, "Freedom Pay" orqali to'lov usulini tanlang, keyin siz to'lov tizimining veb-saytiga
              o'tasiz, kartangiz ma'lumotlarini kiritasiz va to'lov tizimi veb-saytidagi ko'rsatmalarga amal qiling.
            </p>
            <img className="width-100" src="/payments/freedompay.png" />
          </>
        ),
        en: (
          <>
            <p>
              Go to accounts, select the payment method via "Freedom Pay", then you will be transferred to the payment
              system website, enter your card details and follow the instructions on the payment system website.
            </p>
            <img className="width-100" src="/payments/freedompay.png" />
          </>
        ),
      },
    },
    {
      title: { ru: "PAYZE.uz", uz: "PAYZE.uz", en: "PAYZE.uz" },
      description: {
        ru: (
          <>
            <p>
              Перейдите в счета, выберите способ оплаты через "
              PAYZE.uz
              ", далее вас перебросит на сайт платежной систему выберите в корзину требуемую суммы оплаты и нажмите
              "Оформить заказ", следуйте инструкциям на сайте платежной системы и в поле "Дополнительные комментарии"
              введите номер оплачиваемого счета или ваш ID в нашей системе.
            </p>
            <img className="width-100" src="/payments/payze.uz.png" />
          </>
        ),
        uz: (
          <>
            <p>
              Hisoblarga o'ting, " orqali to'lov usulini tanlang "
              PAYZE.uz
              ", keyin siz to'lov tizimining saytiga o'tasiz, savatdagi kerakli to'lov miqdorini tanlang va bosing
              "Buyurtma bering", to'lov tizimining veb-saytidagi va "Qo'shimcha sharhlar" maydonidagi ko'rsatmalarga
              amal qiling. tizimimizga hisob raqamini yoki ID raqamingizni kiriting.
            </p>
            <img className="width-100" src="/payments/payze.uz.png" />
          </>
        ),
        en: (
          <>
            <p>
              Go to accounts, select payment method via "
              PAYZE.uz
              ", then you will be transferred to the site of the payment system, select the required payment amount in
              the basket and click "Place an order", follow the instructions on the website of the payment system and in
              the field "Additional comments" enter the billing account number or your ID in our system.
            </p>
            <img className="width-100" src="/payments/payze.uz.png" />
          </>
        ),
      },
    },
    {
      title: {
        ru: "Киоск самообслуживания",
        uz: "O'z-o'ziga hizat korsatish kioskasi",
        en: "Self-service kiosk",
      },
      description: {
        ru: <p>Киоски самообслуживания находятся на балансе коммерческих банков</p>,
        uz: <p>O‘z-o‘ziga xizmat ko‘rsatish infokiosklari tijorat banklari balansida</p>,
        en: <p>Self-service kiosks are on the balance sheet of commercial banks</p>,
      },
    },
  ],
  data = [
    {
      title: {
        ru: "Шаг № 1 (Найдите Конструктор сайтов SitePad и нажмите на него)",
        uz: "1-qadam (SitePad Website Builder-ni qidiring va ustiga bosing)",
        en: "Step 1 (Search for SitePad Website Builder and click on it)",
      },
      img: "/sitepad/step-1.jpg",
      width: 500,
      height: 264,
    },
    {
      title: {
        ru: "Шаг № 2 (Выберите слева Добавить сайт)",
        uz: "2-qadam (chapdagi Veb-sayt qo'shish-ni tanlang)",
        en: "Step 2 (Select Add Site on the Left)",
      },
      img: "/sitepad/step-2.jpg",
      width: 500,
      height: 283,
    },
    {
      title: {
        ru: "Шаг № 3 (Нажмите Начать)",
        uz: "3-qadam (Ishga tushirish tugmasini bosing)",
        en: "Step 3 (Press Start)",
      },
      img: "/sitepad/step-3.jpg",
      width: 500,
      height: 243,
    },
    {
      title: {
        ru: "Шаг № 4 (Найдите подходящую тему по категории создаваемого сайта)",
        uz: "4-qadam (Siz yaratayotgan sayt toifasiga mos mavzuni toping)",
        en: "Step 4 (Find a suitable theme for the category of the site you are creating)",
      },
      img: "/sitepad/step-4.jpg",
      width: 500,
      height: 297,
    },
    {
      title: {
        ru: "Шаг № 5 (Визуальный просмотр демо-сайта)",
        uz: "5-qadam (demo saytning vizual ko'rinishi)",
        en: "Step 5 (Visual view of the demo site)",
      },
      img: "/sitepad/step-5.jpg",
      width: 500,
      height: 356,
    },
    {
      title: {
        ru: "Шаг № 6 (Подтвердите установку выбранной темы)",
        uz: "6-qadam (Tanlangan mavzuni o'rnatishni tasdiqlang)",
        en: "Step 6 (Confirm installation of selected theme)",
      },
      img: "/sitepad/step-6.jpg",
      width: 500,
      height: 367,
    },
    {
      title: {
        ru: "Шаг № 7 (Заполните поля настройки вашего будущего сайта и нажмите установить)",
        uz: "7-qadam (Kelajak saytingizni o'rnatish uchun maydonlarni to'ldiring va o'rnatish tugmasini bosing)",
        en: "Step 7 (Fill in the fields for setting up your future site and click install)",
      },
      img: "/sitepad/step-7.jpg",
      width: 500,
      height: 287,
    },
    {
      title: {
        ru: "Шаг № 8 (После установки вы можете с легкостью изменить внутренние страницы вашего сайта)",
        uz: "8-qadam (O'rnatishdan so'ng saytingizning ichki sahifalarini osongina o'zgartirishingiz mumkin)",
        en: "Step 8 (After installation, you can easily change the internal pages of your site)",
      },
      img: "/sitepad/step-8.jpg",
      width: 500,
      height: 216,
    },
    {
      title: {
        ru: "Шаг № 9 (Опции по редактированию страницы)",
        uz: "9-qadam (sahifani tahrirlash parametrlari)",
        en: "Step 9 (Page Editing Options)",
      },
      img: "/sitepad/step-9.jpg",
      width: 500,
      height: 237,
    },
  ];

export default function Payment({ language }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (image) document.body.style = "overflow:hidden";
    else document.body.style = "overflow:unset";
  }, [image]);

  const langData = {
    seoT: {
      ru: "Способы оплаты услуг | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "Xizmatlar uchun to'lov usullari | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
      en: "Methods of payment for services | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    descT: {
      ru: "Способы оплаты услуг",
      uz: "Xizmatlar uchun to'lov usullari",
      en: "Methods of payment for services",
    },
    headTitle: {
      ru: "Способы оплаты услуг",
      uz: "To'lov usullari",
      en: "Methods of payment for services",
    },
    payment: {
      ru: (
        <>
          <h3>Об услуге</h3>
          <p>Услуги нашей компании можно оплачивать различными способами. Выбирайте наиболее удобный:</p>
          {/* <Link href={checkLang(language)+LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link> */}
        </>
      ),
      uz: (
        <>
          <h3>Hizmatlar haqida</h3>
          <p>Kompaniyamiz xizmatlari turli yo'llar bilan to'lanishi mumkin. Eng qulayini tanlang:</p>
          {/* <Link href={checkLang(language)+LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link> */}
        </>
      ),
      en: (
        <>
          <h3>About service</h3>
          <p>You can pay for the services of our company in various ways. Choose the most convenient:</p>
          {/* <Link href={checkLang(language)+LINKS.HELP}>
			<a>How to enable DDoS?</a>
			</Link> */}
        </>
      ),
    },
    table: {
      ru: (
        <>
          <ul>
            <li>
              <a href="#transfer-swift">Банковский перевод</a> (SWIFT) оплата по договору.
            </li>
            <li>
              <a href="#transfer-card">Банковские карты</a> (UzCard, HUMO, VISA, MasterCard)
            </li>
            <li>
              <a href="#transfer-freedompay">Международные банковские карты</a> VISA, MasterCard (Freedom Pay)
            </li>
            <li>
              <a href="#transfer-paynet">PAYNET.uz</a>
            </li>
            <li>
              <a href="#transfer-payme">PAYME.uz</a>
            </li>
            <li>
              <a href="#transfer-click">Click.uz</a>
            </li>
            <li>
              <a href="#transfer-upay">UPAY.uz</a>
            </li>
            <li>
              <a href="#transfer-oson">Oson.uz</a>
            </li>
            <li>
              <a href="#transfer-freedompay">Freedom Pay</a>
            </li>
            <li>
              <a href="#transfer-payze">PAYZE.uz</a>
            </li>
            <li>
              <a href="#transfer-bank">Киоск самообслуживания</a>
            </li>
          </ul>
          <p>
            Для зачисления средств на баланс аккаунта необходимо создать счёт и оплатить его. Откройте Личный кабинет,
            перейдите вверху балансовые счет - выберите "Пополнить", введите "Сумму пополнения" нажмите кнопку "Перейти
            к оплате счета".
          </p>
        </>
      ),
      uz: (
        <>
          <ul>
            <li>
              <a href="#transfer-swift">Bank o'tkazmasi</a> (SWIFT) To'lovi asosida.
            </li>
            <li>
              <a href="#transfer-card">Bank kartasi</a> (UzCard, HUMO, VISA, MasterCard)
            </li>
            <li>
              <a href="#transfer-freedompay">Halqaro o'tkazmalar</a> VISA, MasterCard (Freedom Pay)
            </li>
            <li>
              <a href="#transfer-paynet">PAYNET.uz</a>
            </li>
            <li>
              <a href="#transfer-payme">PAYME.uz</a>
            </li>
            <li>
              <a href="#transfer-click">Click.uz</a>
            </li>
            <li>
              <a href="#transfer-upay">UPAY.uz</a>
            </li>
            <li>
              <a href="#transfer-oson">Oson.uz</a>
            </li>
            <li>
              <a href="#transfer-bank">Kiosak o'z - o'ziga hizmat ko'rsatish</a>
            </li>
          </ul>
          <p>
            Hisob balansiga pul mablag'larini kiritish uchun siz hisob yaratishingiz kerak va buning uchun to'lang.
            Shaxsiy hisobingizni oching, tepaga o'ting balans hisobi - "To'ldirish" -ni tanlang, "To'ldirish summasi" ni
            kiriting. "To'lov-fakturaga o'tish" tugmasini bosing.
          </p>
        </>
      ),
      en: (
        <>
          <ul>
            <li>
              <a href="#transfer-swift">Bank transfer</a> (SWIFT) payment under the contract.
            </li>
            <li>
              <a href="#transfer-card">Bank cards</a> (UzCard, HUMO, VISA, MasterCard)
            </li>
            <li>
              <a href="#transfer-freedompay">International bank cards</a> VISA, MasterCard (Freedom Pay)
            </li>
            <li>
              <a href="#transfer-paynet">PAYNET.uz</a>
            </li>
            <li>
              <a href="#transfer-payme">PAYME.uz</a>
            </li>
            <li>
              <a href="#transfer-click">Click.uz</a>
            </li>
            <li>
              <a href="#transfer-upay">UPAY.uz</a>
            </li>
            <li>
              <a href="#transfer-oson">Oson.uz</a>
            </li>
            <li>
              <a href="#transfer-bank">Self-Service Kiosk</a>
            </li>
          </ul>
          <p>
            To credit funds to the account balance, you need to create an account and pay for it. Open your personal
            account go to the top of the balance account - select "Top up", enter the "Top up amount" click the "Go to
            to pay the bill."
          </p>
        </>
      ),
    },
    title: {
      ru: "Подробные способы оплаты",
      uz: "Batafsil to'lov usullari",
      en: "Detailed payment methods",
    },
  };

  return (
    <div className={styles.payment}>
      <SEO title={langData.seoT[language]} desc={langData.descT[language]} />
      
      <BreadCrumbs data={[{ name: 'Способы оплаты' }]} />
      <PageBreadcrumb links={[{ name: 'Способы оплаты' }]} />

      <Container headTitle={langData.headTitle[language]}>
        <div className={styles.payment__info}>
          <div className={styles.payment__info__content}>{langData.payment[language]}</div>
          <div className={styles.payment__info__img}>
            <img src="/payment-img.png" />
          </div>
        </div>
      </Container>

      {/* <Container
				style={{ background: "url('/servers-2.jpg') no-repeat" }}
				title="Конструктор сайтов SitePad"
				className="my-0">
			</Container> */}
      <Container className="px-3">
        {langData.table[language]}

        {/* <h2 id="transfer-swift">Банковский перевод</h2>

				<p>Банковским переводом могут воспользоваться компании. Для юридических лиц предоставляются все необходимые бухгалтерские документы.</p>

				<h2 id="transfer-card">Банковские карты</h2>

				<h2 id="transfer-paybox">Международные банковские карты</h2>

				<h2 id="transfer-paynet">PAYNET.uz</h2>

				<h2 id="transfer-payme">PAYME.uz</h2>

				<h2 id="transfer-click">Click.uz</h2>

				<h2 id="transfer-upay">UPAY.uz</h2>

				<h2 id="transfer-oson">Oson.uz</h2>

				<h2 id="transfer-bank">Инфокиоск</h2> */}

        {/* <div className={styles.sitepad__block}>
					{data.map((item) => (
						<div className={styles.sitepad__block__item}>
							<p>{item.title}</p>
							<Image
								loading="lazy"
								onClick={() => setImage(item.img)}
								width={item.width}
								height={item.height}
								src={item.img}
							/>
						</div>
					))}
				</div> */}

        {/* <p>+99871-200-87-00</p>
				<p>+99890-324-30-80 </p>
				<p>
					Наш{" "}
					<a
						href="https://t.me/airnetuzb"
						target="_blank"
						rel="noreferrer noopener"
						title="https://t.me/airnetuzb"
						className="text-decoration-underline"
					>
						телеграм
					</a>{' '}
				</p> */}
      </Container>
      {image && <ImageFullScreen image={image} setImage={setImage} />}
      <FAQ faq={faq} title={langData.title[language]} language={language} />

      <Partners language={language} />
      <Reviews language={language} />
    </div>
  );
}
