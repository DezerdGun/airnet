import Partners from "@/components/partners";
import TarifMaket from "@/components/tarifMaket";
import { validateEmail } from "@/utils/validateEmail";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useIMask } from "react-imask";
import st from "./support.module.scss";
import Reviews from "@/components/reviews";
import SEO from "@/components/seo";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

export default function Support({ language }) {
  const [show, setShow] = useState(false),
    [isError, setIsError] = useState({
      name: false,
      email: false,
      phone: false,
      message: false,
    }),
    [loading, setLoading] = useState(false),
    [message, setMessage] = useState(false);

  useEffect(() => {
    IMask(document.getElementById("tel"), { mask: "+998 ** *******" });
  }, []);

  useEffect(() => {
    if (show) document.body.style = "overflow:hidden";
    else document.body.style = "overflow:unset";
  }, [show]);

  const handleCheck = (condition, id) => {
    if (condition) {
      setIsError((prev) => ({ ...prev, [id]: false }));
      return true;
    }
    setIsError((prev) => ({ ...prev, [id]: true }));
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkName = handleCheck(document.querySelector("#name").value.length >= 10, "name"),
      checkEmail = handleCheck(validateEmail(document.querySelector("#email").value), "email"),
      checkPhone = handleCheck(
        document.querySelector("#tel").value.length === 15 &&
          isFinite(+document.querySelector("#tel").value.slice(5, 7)) &&
          isFinite(+document.querySelector("#tel").value.slice(8)),
        "phone"
      ),
      checkMessage = handleCheck(document.querySelector("#message").value.length >= 10, "message");

    if (checkName && checkEmail && checkPhone && checkMessage) {
      setLoading(true);

      emailjs.sendForm("service_8y8kawd", "template_d3e40pc", e.target, "4UNI67N1PkcmUoyUx").then(
        () => {
          setLoading(false);
          e.target.reset();
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  const langData = {
		seo: {
			ru: "Круглосуточная техническая поддержка клиентов хостинга AIRNET в Ташкенте",
			uz: "Toshkentda AIRNET hosting mijozlari uchun 24/7 texnik yordam",
			en: "24/7 technical support for AIRNET hosting clients in Tashkent",
		},
		desc: {
			ru: "Круглосуточная техническая поддержка клиентов осуществляется через тикет систему 24/7",
			uz: "Mijozlarga 24/7 texnik yordam chipta tizimi orqali 24/7 taqdim etiladi",
			en: "24/7 technical support for customers is provided through a ticket system 24/7",
		},
    title: {
      ru: "Поддержка клиентов",
      uz: "Mijozlarni qo'llash",
      en: "Customer support",
    },
    description: {
      ru: (
        <>
          <p>
            Наша служба поддержки работает ежедневно без выходных и праздников, с 10 до 22 часов.
            <br />
            Техническая поддержка работает клуглосуточно, без выходных и праздников.
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            Bizning qo'llab-quvvatlash xizmatimiz har kuni dam olish va bayramlarsiz ishlaydi, ertalab soat 10 dan 22
            gacha.
            <br />
            Texnik qo'llab-quvvatlash haftada etti kun va bayramlarda kechayu kunduz ishlaydi.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Our support service works every day without days off and holidays, from 10 am to 10 pm.
            <br />
            Technical support works around the clock, without days off and holidays.
          </p>
        </>
      ),
    },
    born: {
      ru: (
        <>
          <p>Техническая поддержка клиентов осуществляется через тикет систему 24/7</p>
          <p>Предпродажные вопросы можно задать:</p>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
              </svg>
              <div>
                <label>По электронной почте</label>
                <a href="maito:info@airnet.uz">info@airnet.uz</a>
              </div>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z" />
              </svg>
              <div>
                <label>Через форму</label>
                <a href="https://billing.airnet.uz/billing.php?do=tickets" target="_blank" rel="noopener noreferrer">
                  Открыть форму
                </a>
              </div>
            </li>
            {/* <li>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
											<path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
										</svg>
										<div>
											<label>Skype</label>
											<a href="#">skype</a>
										</div>
									</li> */}
          </ul>
          {/* <p>
									Ваши предложения и жалобы о работе нашей компании готовы выслушать по адресу{' '}
									<a href="" target="_blank">
										airnet.uz
									</a>{' '}
									или через <a href="#">форму</a>.
								</p> */}
        </>
      ),
      uz: (
        <>
          <p>Mijozlarga texnik yordam chipta tizimi orqali amalga oshiriladi 24/7</p>
          <p>Savdo oldidan savollar berilishi mumkin:</p>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
              </svg>
              <div>
                <label>Elektron pochta orqali</label>
                <a href="maito:info@airnet.uz">info@airnet.uz</a>
              </div>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z" />
              </svg>
              <div>
                <label>Forma orqali</label>
                <a href="https://billing.airnet.uz/billing.php?do=tickets" target="_blank" rel="noopener noreferrer">
                  Formani ochish
                </a>
              </div>
            </li>
            {/* <li>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
											<path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
										</svg>
										<div>
											<label>Skype</label>
											<a href="#">skype</a>
										</div>
									</li> */}
          </ul>
          {/* <p>
									Ваши предложения и жалобы о работе нашей компании готовы выслушать по адресу{' '}
									<a href="" target="_blank">
										airnet.uz
									</a>{' '}
									или через <a href="#">форму</a>.
								</p> */}
        </>
      ),
      en: (
        <>
          <p>Technical customer support is provided through the ticket system 24/7</p>
          <p>Presale questions can be asked:</p>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
              </svg>
              <div>
                <label>By email</label>
                <a href="maito:info@airnet.uz">info@airnet.uz</a>
              </div>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z" />
              </svg>
              <div>
                <label>Via form</label>
                <a href="https://billing.airnet.uz/billing.php?do=tickets" target="_blank" rel="noopener noreferrer">
                  open form
                </a>
              </div>
            </li>
            {/* <li>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 102 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61 -8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-6.2 42.3-11.4 -16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30-38.3 31.8-30-38.3 31.8-30-23.3 -75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
						</svg>
						<div>
						<label>Skype</label>
						<a href="#">skype</a>
						</div>
						</li> */}
          </ul>
          {/* <p>
						We are ready to listen to your suggestions and complaints about the work of our company at {' '}
						<a href="" target="_blank">
						airnet.uz
						</a>{' '}
						or via <a href="#">form</a>.
						</p> */}
        </>
      ),
    },
    jaloba: {
      ru: "Жалобы",
      uz: "Shikoyat",
      en: "Complaints",
    },
    body: {
      ru: (
        <p>
          Если Вы обнаружили, что клиент "AIRNET" нарушает Ваши права или осуществляет неправомерные действия в сети
          Интернет, пожалуйста, свяжитесь с нами через форму жалоб или по электронной почте{" "}
          <a href="mailto:admin@airnet.uz">admin@airnet.uz</a>
        </p>
      ),
      uz: (
        <p>
          Agar siz "AIRNET" mijozi, sizning huquqlaringizni buzayotganini aniqlasangiz yoki Internetda noqonuniy
          faoliyat bilan shug'ullanayotishganini sezsangiz, iltimos shikoyat shakli yoki elektron pochta{" "}
          <a href="mailto:admin@airnet.uz">admin@airnet.uz</a> orqali biz bilan bog'laning .
        </p>
      ),
      en: (
        <p>
          If you find that the "AIRNET" client violates your rights or performs illegal actions on the network Internet,
          please contact us via the complaint form or email <a href="mailto:admin@airnet.uz">admin@airnet.uz</a>
        </p>
      ),
    },
    openJ: {
      ru: "Открыть форму жалобы",
      uz: "Shikoyat varaqasini ochish",
      en: "Open the complaint form",
    },
    phone: {
      ru: "Телефоны",
      uz: "Telefonlar",
      en: "Phones",
    },
    generalQuestions: {
      ru: "Общие вопросы",
      uz: "Umumiy savollar",
      en: "General questions",
    },
    contractsDept: {
      ru: "Отдел по договорам (счет-фактуры и домена)",
      uz: "Shartnomalar bo'limi (hisob-fakturalar va domenlar)",
      en: "Contracts department (invoices and domains)",
    },
    techVds: {
      ru: "Техническая поддержка (VDS/VPS)",
      uz: "Texnik yordam (VDS/VPS)",
      en: "Technical support (VDS/VPS)",
    },
    techHosting: {
      ru: "Техническая поддержка (хостинг/SSL/Почта)",
      uz: "Texnik yordam (hosting/SSL/Pochta)",
      en: "Technical support (hosting/SSL/Mail)",
    },
    headTitle: {
      ru: "Прием звонков с 09:00 до 20:00",
      uz: "Soat 09:00 dan 20:00 gacha qo'ng'iroqlarni qabul qilamiz",
      en: "Receiving calls from 09:00 to 20:00",
    },
    wC: {
      ru: "Способы связи",
      uz: "Bog'lanish yo'llari",
      en: "Methods of communication",
    },
    sendJ: {
      ru: "Отправить жалобу",
      uz: "Shikoyatni jo'natish",
      en: "Submit a complaint",
    },
    table: {
      ru: (
        <>
          <label htmlFor="name">ФИО</label>
          <div className={`${st.modal__block__item__input} ${isError.name ? st.modal__block__item__input__error : ""}`}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Акромов Акбар Акромович"
              required
              onChange={(e) => isError.name && handleCheck(document.querySelector("#name").value.length >= 10, "name")}
            />
          </div>
          {isError.name && <span>Пожалуйста, введите ваше ФИО</span>}
        </>
      ),
      uz: (
        <>
          <label htmlFor="name">FIO</label>
          <div className={`${st.modal__block__item__input} ${isError.name ? st.modal__block__item__input__error : ""}`}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Akromov Akbar Akrommovich"
              required
              onChange={(e) => isError.name && handleCheck(document.querySelector("#name").value.length >= 10, "name")}
            />
          </div>
          {isError.name && <span>Iltimos FIO kiriting</span>}
        </>
      ),
      en: (
        <>
          <label htmlFor="name">Name</label>
          <div className={`${st.modal__block__item__input} ${isError.name ? st.modal__block__item__input__error : ""}`}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Akromov Akbar Akromovich"
              required
              onChange={(e) => isError.name && handleCheck(document.querySelector("#name").value.length >= 10, "name")}
            />
          </div>
          {isError.name && <span>Please enter your full name</span>}
        </>
      ),
    },
    amail: {
      ru: "Пожалуйста, введите ваш email",
      uz: "Iltimos amailingizni kiriting",
      en: "Please enter your email",
    },
    phoneN: {
      ru: "Пожалуйста, введите ваш номер",
      uz: "Iltimos telefon raqamingizni kiriting",
      en: "Please enter your number",
    },
    masage: {
      ru: "Сообщение",
      uz: "Xabarnoma",
      en: "Message",
    },
    join: {
      ru: (
        <>
          <textarea
            id="message"
            name="message"
            placeholder="Трудности с подключением..."
            required
            onChange={(e) =>
              isError.message && handleCheck(document.querySelector("#message").value.length >= 10, "message")
            }
          />
        </>
      ),
      uz: (
        <>
          <textarea
            id="message"
            name="message"
            placeholder="Ulanishda qiynalish..."
            required
            onChange={(e) =>
              isError.message && handleCheck(document.querySelector("#message").value.length >= 10, "message")
            }
          />
        </>
      ),
      en: (
        <>
          <textarea
            id="message"
            name="message"
            placeholder="Difficulty connecting..."
            required
            onChange={(e) =>
              isError.message && handleCheck(document.querySelector("#message").value.length >= 10, "message")
            }
          />
        </>
      ),
    },
    wMassage: {
      ru: "Пожалуйста, введите ваше сообщение",
      uz: "Iltimos habarnomangizni kiriting",
      en: "Please enter your message",
    },
    mF: {
      ru: "Ваша жалоба успешно отправлена",
      uz: "Sizning shikoyatingiz yuborildi",
      en: "Your complaint has been successfully sent",
    },
    phoneText: {
      ru: "Телефон",
      uz: "Telefon",
      en: "Phone",
    },
    sendText: {
      ru: "Отправить",
      uz: "Yuborish",
      en: "Send",
    },
  };

  const breadCrumbs = [
    {
      name: {
        ru: "Техническая поддержка",
        uz: "Техническая поддержка",
        en: "Техническая поддержка",
      },
      link: "/support",
    },
  ];

  return (
    <>
      <div className={st.support}>
            
      <SEO title={langData.seo[language]} desc={langData.desc[language]} />

      {breadCrumbs && breadCrumbs.length ? (
      <>
        <BreadCrumbs data={breadCrumbs} language={language} />
        <PageBreadcrumb links={breadCrumbs} language={language} />
      </>
      ) : null}

        <TarifMaket
          // bgImg={'/servers-2.jpg'}
          title={langData.title[language]}
          description={langData.description[language]}
        >
          <div className={st.support__block}>
            <div className={st.support__block__item}>
              <h3>{langData.wC[language]}</h3>
              <div className={st.support__block__item__content}>{langData.born[language]}</div>
            </div>
            <div className={st.support__block__item}>
              <div>
                {langData.jaloba[language]}
                <div className={st.support__block__item__content}>{langData.body[language]}</div>
              </div>
              <button onClick={() => setShow(true)}>{langData.openJ[language]}</button>
            </div>
            <div className={st.support__block__item}>
              <div>
                <h3>{langData.phone[language]}</h3>
                <div className={st.support__block__item__content}>
                  <ul>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                      </svg>
                      <div>
                        <label>{langData.generalQuestions[language]}</label>
                        <a href="tel:+998712008700">+998 (71) 200-87-00</a>
                      </div>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                      </svg>
                      <div>
                        <label>{langData.contractsDept[language]}</label>
                        <a href="tel:+998712028700">+998 (71) 202-87-00</a>
                      </div>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
                      </svg>
                      <div>
                        <label>{langData.techVds[language]}</label>
                        <a href="tel:+998903248700">+998 (90) 324-87-00</a>{" "}
                        <a href="https://t.me/airnetuzb" target="_blank">
                          (telegram)
                        </a>
                      </div>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                      </svg>
                      <div>
                        <label>{langData.techHosting[language]}</label>
                        <a href="tel:+998903243080">+998 (90) 324-30-80</a>
                      </div>
                    </li>
                    <li className={st.support__block__item__content__hours}>{langData.headTitle[language]}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TarifMaket>
      </div>
      <Partners language={language} />
      <Reviews language={language} />
      <div className={`${st.modal} ${show ? st.modal__active : ""}`}>
        <div className={st.modal__block}>
          <div className={st.modal__block__header}>
            <div>{langData.sendJ[language]}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={() => setShow(false)}>
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={st.modal__block__item}>{langData.table[language]}</div>
            <div className={st.modal__block__item}>
              <label htmlFor="email">Email</label>
              <div
                className={`${st.modal__block__item__input} ${
                  isError.email ? st.modal__block__item__input__error : ""
                }`}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="akbar@gmail.com"
                  required
                  onChange={(e) =>
                    isError.email && handleCheck(validateEmail(document.querySelector("#email").value), "email")
                  }
                />
              </div>
              {isError.email && <span>{langData.amail[language]}</span>}
            </div>
            <div className={st.modal__block__item}>
              <label htmlFor="tel">{langData.phoneText[language]}</label>
              <div
                className={`${st.modal__block__item__input} ${
                  isError.phone ? st.modal__block__item__input__error : ""
                }`}
              >
                <input
                  id="tel"
                  name="phone"
                  type="tel"
                  placeholder="+998 90 1234567"
                  required
                  onChange={(e) => {
                    isError.phone &&
                      handleCheck(
                        document.querySelector("#tel").value.length === 15 &&
                          isFinite(+document.querySelector("#tel").value.slice(5, 7)) &&
                          isFinite(+document.querySelector("#tel").value.slice(8)),
                        "phone"
                      );
                  }}
                />
              </div>
              {isError.phone && <span>{langData.phoneN[language]}</span>}
            </div>
            <div className={st.modal__block__item}>
              <label htmlFor="message">{langData.masage[language]}</label>
              <div
                className={`${st.modal__block__item__input} ${
                  isError.message ? st.modal__block__item__input__error : ""
                }`}
              >
                {langData.join[language]}
              </div>
              {isError.message && <span>{langData.wMassage[language]}</span>}
            </div>
            {message ? (
              <button onClick={() => setShow(false)}>{langData.mF[language]}</button>
            ) : (
              <button type="submit" disabled={loading}>
                {langData.sendText[language]}{" "}
                {loading ? (
                  <div class="spinner-border spinner-border-sm text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : null}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
