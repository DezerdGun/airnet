import st from "../blog.module.scss";
import Image from "next/image";
import Link from "next/link";
import Container from "../../../components/container";
import { BlogBlock } from "..";

export const blog = [
  {
    img: "/blog/yandex-money.jpg",
    link: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
    date: "12.12.2018",
    title: {
      ru: "UZINFOCOM прекратил работу в качестве регистратора доменов",
      uz: "UZINFOCOM domen registratori sifatida ishlashni to'xtatdi",
    },
    description: {
      ru: (
        <p>
          ООО «Единый интегратор по созданию и поддержке государственных
          информационных систем UZINFOCOM» прекратил свою деятельность по
          Регистрации и продлению доменных имен в…
        </p>
      ),
      uz: (
        <p>
          Davlatni yaratish va qo'llab-quvvatlash bo'yicha yagona integrator
          MChJ “UZINFOCOM” axborot tizimlari oʻz faoliyatini toʻxtatdi Domen
          nomlarini roʻyxatdan oʻtkazish va yangilash…
        </p>
      ),
    },
  },
];

export default function Blog({ language }) {
  const pagination = {
    ru: (
      <>
        <Link href="/blog/page/2">
          <a>&laquo; Предыдущий пост</a>
        </Link>
        <Link href="/blog">
          <a>1</a>
        </Link>
        <Link href="/blog/page/2">
          <a>2</a>
        </Link>
        <a className={st.blog__links__active}>3</a>
        <a className={st.blog__links__active}>Следующий пост &raquo;</a>
      </>
    ),
    uz: (
      <>
        <Link href="/blog/page/2">
          <a>&laquo; Oldingi post</a>
        </Link>
        <Link href="/blog">
          <a>1</a>
        </Link>
        <Link href="/blog/page/2">
          <a>2</a>
        </Link>
        <a className={st.blog__links__active}>3</a>
        <a className={st.blog__links__active}>Keyingi post &raquo;</a>
      </>
    ),
  };

  return <BlogBlock pagination={pagination} blog={blog} language={language} />;
}
