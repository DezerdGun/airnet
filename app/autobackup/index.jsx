import { checkLang } from "@/utils/checkLang.js";
import Link from "next/link";
import Container from "../../components/container/index.jsx";
import Partners from "../../components/partners";
import { LINKS } from "../../components/requirements";
import WhyBlock from "../../components/whyBlock";
import st from "./autobackup.module.scss";
import { serversIcon } from "shared/icons/serversIcon.js";
import { calendarIcon } from "shared/icons/calendarIcon.js";
import { notificationIcon } from "shared/icons/notificationIcon.js";
import { cloudsIcon } from "shared/icons/cloudsIcon.js";
import { BeautyNum, CalcBlock, CalcHeader, CalcInput, CalcSelect } from "@/components/calculator/index.jsx";
import { useState } from "react";
import Reviews from "@/components/reviews";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

export default function Autobackup({ language }) {
  const content = [
    {
      title: { ru: "Независимые серверы", uz: "Mustaqil severlar", en: "Independent Servers" },
      description: {
        ru: (
          <p>Копии хранятся на отдельном VDS: сможете восстановить информацию, даже если Ваш сервер выйдет из строя.</p>
        ),
        uz: (
          <p>
            Nusxalari SIDSning alohida holatlarida topiladi: sizning lezyoningiz tuzilishdan kelib chiqqan bo'lsa ham,
            o'simta tiklanishi mumkin.
          </p>
        ),
        en: <p>Copies are stored on a separate VDS: you can recover information even if your server goes down.</p>,
      },
      icon: serversIcon,
    },
    {
      title: { ru: "Частота обновлений", uz: "Qaytayonish soni", en: "Update frequency" },
      description: {
        ru: (
          <p>
            Полные копии создаются еженедельно, а дифференциальные - ежедневно. В случае форс-мажора восстанавливаются
            файты за любой день последних 5 недель.
          </p>
        ),
        uz: (
          <p>
            To'liq zaxiralar har hafta, differensial zaxiralar esa har kuni yaratiladi. Fors-major holatlarida janglar
            oxirgi 5 haftaning istalgan kunida tiklanadi
          </p>
        ),
        en: (
          <p>
            Full backups are created weekly, and differential backups are created daily. In case of force majeure,
            fights are restored for any day of the last 5 weeks.
          </p>
        ),
      },
      icon: calendarIcon,
    },
    {
      title: { ru: "Уведомляем об ошибках", uz: "Xatolar haqida xabar berish", en: "Notify Errors" },
      description: {
        ru: (
          <p>
            Система ежедневно проверят корректную работу резервного копирования. Если что-то пойдет не так - Вы получите
            уведомление.
          </p>
        ),
        uz: (
          <p>
            Tizim har kuni zahiraning to'g'ri ishlashini tekshiradi. Agar biror narsa noto'g'ri bo'lsa, sizga xabarnoma
            keladi.
          </p>
        ),
        en: (
          <p>
            The system will check the correct operation of the backup daily. If something goes wrong, you will receive a
            notification.
          </p>
        ),
      },
      icon: notificationIcon,
    },
    {
      title: { ru: "Фоновая загрузка", uz: "Fon yuklab olish", en: "Background download" },
      description: {
        ru: <p>Копирование происходит в фоновом режиме и не требует остановки сервера или отключния сайта.</p>,
        uz: <p>Nusxalash fonda amalga oshiriladi va serverni o'chirish yoki saytni o'chirishni talab qilmaydi.</p>,
        en: (
          <p>
            Copying takes place in the background and does not require stopping the server or shutting down the site.
          </p>
        ),
      },
      icon: cloudsIcon,
    },
  ];

  const langData = {
    title: {
      ru: "Преимущества автобэкапов",
      uz: "Autobackupning avfzalliklari",
      en: "Advantages of Autobackups",
    },
    headTitle: {
      ru: "Автоматическое резервное копирование",
      uz: "Avtomatik zaxiralash",
      en: "Auto backup",
    },
    about: {
      ru: "Об услуге",
      uz: "Hizmatlar haqida",
      en: "About service",
    },
    autoDownload: {
      ru: "Автоматические бэкапы позволят вам не беспокоиться о том, что вы забыли или не успели сделать бэкап.",
      uz: "Avtomatik zahira nusxalari siz unutgan yoki vaqtingiz yo'qligi haqida tashvishlanmaslik imkonini beradi zaxira nusxasini yarating.",
      en: "Automatic backups will allow you not to worry that you forgot or did not have time to make a backup.",
    },
    hack: {
      ru: "В случае взлома, случайного удаления или неудачного обновления у вас под рукой будет свежая копия для быстрого восстановления данных.",
      uz: "Buzg'unchilik, tasodifiy o'chirish yoki muvaffaqiyatsiz yangilanish holatlarida sizda shunday bo'ladi tez ma'lumotlarni tiklash uchun yangi nusxasi.",
      en: "In the event of a hack, accidental deletion, or failed update, you'll have a fresh copy at hand for quick data recovery.",
    },
    join: {
      ru: "Как подключить бэкапы?",
      uz: "Qanday qilib ulanish",
      en: "How to connect backups?",
    },
    backupUsluga: {
      ru: "Backup услуга",
      uz: "Zaxira xizmati",
      en: "Backup service",
    },
    countCopies: {
      ru: "Число копий",
      uz: "Nusxalar soni",
      en: "Number of copies",
    },
    sum: {
      ru: "сум",
      uz: "so'm",
      en: "sum",
    },
    wHard: {
      ru: "Объём диска",
      uz: "Disk hajmi",
      en: "Disk capacity",
    },
    GB: {
      ru: "Гб",
      uz: "Gb",
      en: "Gb",
    },
  };

  const copyValues = [1, 3, 7, 16, 30];
  const [state, setState] = useState({
    copies: 1,
    ssd: 100,
  });

  return (
    <div className={st.autobackup}>
            
      <BreadCrumbs data={[{ name: 'Резервное копирование' }]} />
      <PageBreadcrumb links={[{ name: 'Резервное копирование' }]} />
      
      <Container headTitle={langData.headTitle[language]}>
        <div className={st.autobackup__info}>
          <div className={st.autobackup__info__content}>
            <h3>{langData.about[language]}</h3>
            <p>{langData.autoDownload[language]}</p>
            <p>{langData.hack[language]}</p>
            <Link href={checkLang(language) + LINKS.HELP}>
              <a>{langData.join[language]}</a>
            </Link>
          </div>
          <div className={st.autobackup__info__img}>
            <img src="/intro-img.png" />
          </div>
        </div>
      </Container>
      <WhyBlock title={langData.title[language]} content={content} language={language} />
      <Container>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <CalcBlock title={langData.backupUsluga[language]}>
            <CalcHeader title={langData.countCopies[language]} sum={langData.sum[language]} />
            <div className="d-flex flex-wrap gap-2 mb-2">
              {copyValues.map((item) => (
                <CalcSelect
                  key={item}
                  title={item}
                  isChecked={state.copies === item}
                  setChecked={(event) => setState((prev) => ({ ...prev, copies: +event.target.innerHTML }))}
                />
              ))}
            </div>
            <CalcHeader
              title={langData.wHard[language]}
              price={BeautyNum(state.ssd * 1000 * state.copies)}
              sum={langData.sum[language]}
            />
            <CalcInput
              text={langData.GB[language]}
              step={100}
              min={100}
              max={2000}
              name="ssd"
              state={state}
              setState={setState}
            />
          </CalcBlock>
        </div>
      </Container>
      <Partners language={language} />
      <Reviews language={language} />
    </div>
  );
}
