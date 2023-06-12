import { useCallback, useEffect, useState } from "react";
// import InputRange from 'react-input-range';
import Container from "@/components/container";
import st from "./calculator.module.scss";
// import 'react-input-range/lib/css/index.css';
import { Range } from "react-range";

const calcSpeed = [
  // {
  //   id: "unlim-25",
  //   title: "Unlim 25M",
  //   price: 500000,
  // },
  {
    id: "unlim-50",
    title: "Unlim 50M",
    price: 0,
  },
  {
    id: "unlim-100",
    title: "Unlim 100M",
    price: 2000000,
  },
  {
    id: "unlim-200",
    title: "Unlim 200M",
    price: 5000000,
  },
  {
    id: "unlim-350",
    title: "Unlim 350M",
    price: 10000000,
  },
];

export default function Calculator({ language }) {
  const [state, setState] = useState({
      core: 2,
      ram: 2,
      ssd: 100,
      os: "Ubuntu",
      osVersion: "18.04",
      speed: calcSpeed[0].title,
      administration: "Нет",
    }),
    [position, setPosition] = useState({ top: 0 }),
    [calcOS, setCalcOS] = useState([
      {
        id: "ubuntu",
        selected: true,
        title: "Ubuntu",
        img: "/",
        versions: [
          {
            selected: true,
            title: "18.04",
            po: ["not", "lamp", "lemp", "django", "isp6lite", "isp6pro", "isp6host", "openvpn", "team", "tomcat"],
          },
          {
            title: "20.04",
            po: ["not", "lamp", "lemp", "isp6lite", "isp6pro", "isp6host", "openvpn"],
          },
          {
            title: "22.04",
            po: ["not", "isp6lite", "isp6pro", "isp6host"],
          },
        ],
      },
      {
        id: "centos",
        selected: false,
        title: "CentOS",
        img: "/",
        versions: [
          {
            selected: true,
            title: "7",
            po: [
              "not",
              "lamp",
              "1c",
              "django",
              "isp6lite",
              "isp6pro",
              "isp6host",
              "openvpn",
              "team",
              "tomcat",
              "bitrix24",
            ],
          },
        ],
      },
      {
        id: "alma",
        selected: false,
        title: "Alma",
        img: "/",
        versions: [
          {
            selected: true,
            title: "8",
            po: [
              "not",
              "lamp",
              "lemp",
              "django",
              "isp6lite",
              "isp6pro",
              "isp6host",
              "openvpn",
              "redmine",
              "team",
              "tomcat",
            ],
          },
          {
            title: "9",
            po: ["not"],
          },
        ],
      },
      {
        id: "rocky",
        selected: false,
        title: "Rocky",
        img: "/",
        versions: [
          {
            selected: true,
            title: "8",
            po: ["not", "lamp", "lemp", "django", "openvpn", "redmine", "team", "tomcat"],
          },
          {
            title: "9",
            po: ["not"],
          },
        ],
      },
      {
        id: "oracle",
        selected: false,
        title: "Oracle",
        img: "/",
        versions: [
          {
            selected: true,
            title: "8",
            po: ["not", "lamp", "lemp", "django", "openvpn", "redmine", "team", "tomcat"],
          },
        ],
      },
      {
        id: "debian",
        selected: false,
        title: "Debian",
        img: "/",
        versions: [
          {
            selected: true,
            title: "10",
            po: ["not", "lamp", "lemp", "isp6lite", "isp6pro", "isp6host", "openvpn", "redmine", "team", "tomcat"],
          },
          {
            title: "11",
            po: ["not", "lamp", "lemp", "isp6lite", "isp6pro", "isp6host", "openvpn", "team", "tomcat"],
          },
        ],
      },
      {
        id: "free",
        selected: false,
        title: "FreeBSD",
        img: "/",
        versions: [
          {
            selected: true,
            title: "12",
            po: ["not"],
          },
          {
            title: "13",
            po: ["not"],
          },
        ],
      },
      {
        id: "windows",
        selected: false,
        title: "Windows",
        img: "/",
        versions: [
          {
            selected: true,
            title: "2019",
            po: ["not"],
          },
          {
            title: "2022",
            po: ["not"],
          },
        ],
      },
    ]),
    [isFixed, setIsFixed] = useState(false);

  const langData = {
    gN: {
      ru: "Гибкая настройка",
      uz: "O'zgaruchan qurilma",
      en: "Flexible setup",
    },
    speed: {
      ru: "До 128 CPU",
      uz: "128 CPU gacha",
      en: "Up to 128 CPUs",
    },
    hard: {
      ru: "До 4000Гб SSD",
      uz: "4000GB SSD gacha",
      en: "Up to 4000GB SSD",
    },
    hardProccer: {
      ru: "Процессор и память",
      uz: "Protsessor va hotira",
      en: "Processor and Memory",
    },
    title: {
      ru: "Количество ядер процессора (до 3,4 ГГц)",
      uz: "Protsessor yadrolari soni (3,4 GGZ gacha)",
      en: "Number of processor cores (up to 3.4 GHz)",
    },
    yadro: {
      ru: "ядер",
      uz: "yadro",
      en: "cores",
    },
    GB: {
      ru: "Гб",
      uz: "Gb",
      en: "Gb",
    },
    sistem: {
      ru: "Система",
      uz: "Tizim",
      en: "System",
    },
    ozu: {
      ru: "Объём оперативной памяти",
      uz: "Tezkor hotira hajmi",
      en: "RAM",
    },
    hard: {
      ru: "Хранилище",
      uz: "Qattiq disk",
      en: "Storage",
    },
    chanel: {
      ru: "Канал",
      uz: "Kanal",
      en: "Channel",
    },
    oS: {
      ru: "Выбор операционной системы",
      uz: "Operatsion tizim",
      en: "Operating system selection",
    },
    hardS: {
      ru: "Дисковая система",
      uz: "Disk tizimi",
      en: "Disk system",
    },
    wHard: {
      ru: "Объём диска",
      uz: "Disk hajmi",
      en: "Disk capacity",
    },
    operationSystem: {
      ru: "Операционная система",
      uz: "Operatsion tizim",
      en: "Operating system",
    },
    wChanel: {
      ru: "Выбор канала",
      uz: "Kanalni tanlash",
      en: "Channel selection",
    },
    adm: {
      ru: "Администрирование",
      uz: "Adminstratsiya qilish",
      en: "Administration",
    },
    paket: {
      ru: "Пакет включает 5 обращений в месяц",
      uz: "Paket oz ichiga, oyiga 5 ta ulanishni oladi.",
      en: "Package includes 5 hits per month",
    },
    br: {
      ru: (
        <>
          <h4>
            При покупке <span className="text-green">VDS Форсаж</span> вы получаете:
          </h4>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
              </svg>
              1 выделенный IP-адрес
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z" />
              </svg>
              Полный доступ по SSH
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
              </svg>
              ОС на ваш выбор
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
              </svg>
              Помощь в переезде с другого хостинга
            </li>
          </ul>
        </>
      ),
      uz: (
        <>
          <h4>
            <span className="text-green">VDS farsajni</span> harid qilsangiz ushbu narsalarga ega bo'lasiz:
          </h4>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
              </svg>
              1 ta ajratilgan IP-adres
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z" />
              </svg>
              SHH bo'yicha to'liq kirish
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
              </svg>
              Sizning tanlovingiz bo'yicha OC
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
              </svg>
              Boshqa hostingdan o'tishga yordam
            </li>
          </ul>
        </>
      ),
      en: (
        <>
          <h4>
            When you purchase <span className="text-green">VDS Forsage</span> you get:
          </h4>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
              </svg>
              1 dedicated IP address
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z" />
              </svg>
              Full SSH access
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
              </svg>
              OS of your choice
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
              </svg>
              Assistance in moving from another hosting
            </li>
          </ul>
        </>
      ),
    },
    VDS: {
      ru: "VDS Форсаж",
      uz: "VDS Forsaj",
      en: "VDS Fast and Furious",
    },
    send: {
      ru: "Поделиться",
      uz: "Tarqatish",
      en: "Share",
    },
    limits: {
      ru: "Лимит IP-Адресов",
      uz: "IP-manzil chegarasi",
      en: "IP Address Limit",
    },
    addresses: {
      ru: "адреса",
      uz: "manzillar",
      en: "addresses",
    },
    MnS: {
      ru: (
        <>
          <span>
            сум
            <hr />
            мес
          </span>
        </>
      ),
      uz: (
        <>
          <span>
            so'm
            <hr />
            oy
          </span>
        </>
      ),
      en: (
        <>
          <span>
            sum
            <hr />
            mo.
          </span>
        </>
      ),
    },
    sum: {
      ru: "сум",
      uz: "so'm",
      en: "sum",
    },
    kor: {
      ru: "В корзину",
      uz: "Korzinkaga qo'shish",
      en: "Add to cart",
    },
  };

  useEffect(() => {
    if (document.body.clientWidth > 770) {
      const scroll = () => {
        const content = document.querySelector("#content"),
          result = document.querySelector("#result");

        if (window.pageYOffset >= 80) {
          setIsFixed(true);

          if (window.pageYOffset > content.clientHeight - result.clientHeight + 100) {
            setPosition({ top: "unset", bottom: 0 });
          } else {
            setPosition({ top: `${window.pageYOffset - 120}px` });
          }
        } else setIsFixed(false);
      };

      scroll();

      document.addEventListener("scroll", scroll);

      return () => {
        document.removeEventListener("scroll", scroll);
      };
    }
  }, []);

  return (
    <div className={st.calculator}>
      <Container className="position-relative py-0">
        <div className={st.calculator__block}>
          <div id="content" className={st.calculator__block__item}>
            <div className={st.calculator__block__item__info}>
              <div className={st.calculator__block__item__info__item}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" />
                </svg>
                {langData.gN[language]}
              </div>
              <div className={st.calculator__block__item__info__item}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z" />
                </svg>
                {langData.speed[language]}
              </div>
              <div className={st.calculator__block__item__info__item}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z" />
                </svg>
                {langData.hard[language]}
              </div>
            </div>
            <CalcBlock number={1} title={langData.hardProccer[language]}>
              <CalcHeader
                title={langData.title[language]}
                price={BeautyNum(state.core * 30000)}
                sum={langData.sum[language]}
              />
              <CalcInput
                text={langData.yadro[language]}
                step={2}
                min={2}
                max={42}
                name="core"
                state={state}
                setState={setState}
              />
              <CalcHeader
                title={langData.ozu[language]}
                price={BeautyNum(state.ram * 35000)}
                sum={langData.sum[language]}
              />
              <CalcInput
                text={langData.GB[language]}
                step={2}
                min={2}
                max={256}
                name="ram"
                state={state}
                setState={setState}
              />
            </CalcBlock>
            <CalcBlock number={2} title={langData.hard[language]}>
              <CalcHeader title={langData.hardS[language]} sum={langData.sum[language]} />
              <div className="d-flex">
                <CalcSelect title="SSD" isChecked={true} />
                <CalcSelect title="NVME" isChecked={false} />
              </div>
              <CalcHeader
                title={langData.wHard[language]}
                price={BeautyNum(state.ssd * 1000)}
                sum={langData.sum[language]}
              />
              <CalcInput
                text={langData.GB[language]}
                step={20}
                min={100}
                max={10000}
                name="ssd"
                state={state}
                setState={setState}
              />
            </CalcBlock>
            {/* <CalcBlock number={3} title={langData.sistem[language]}>
              <CalcHeader title={langData.oS[language]} price={0} sum={langData.sum[language]} />
              <CalcSystem data={calcOS} setData={setCalcOS} state={state} setState={setState} language={language} />
            </CalcBlock> */}
            <CalcBlock number={3} title={langData.chanel[language]}>
              <CalcHeader
                title={langData.wChanel[language]}
                price={BeautyNum(calcSpeed.find((item) => item.title === state.speed).price)}
                sum={langData.sum[language]}
              />
              <CalcSpeed data={calcSpeed} state={state} setState={setState} />
            </CalcBlock>
            <CalcBlock number={4} title={langData.adm[language]}>
              <CalcHeader title={langData.paket[language]} price={0} sum={langData.sum[language]} />
              <CalcSwitcher state={state} setState={setState} language={language} />
            </CalcBlock>
            <div className={st.calculator__block__item__category__content__footer}>{langData.br[language]}</div>
          </div>
          <div
            id="result"
            className={`${st.calculator__block__result} ${isFixed ? st.calculator__block__result__absolute : ""}`}
            style={position}
          >
            <div className={st.calculator__block__result__header}>
              <div>{langData.VDS[language]}</div>
            </div>
            <div className={st.calculator__block__result__content}>
              <CalcInfo title="CPU" value={`${state.core} ${langData.yadro[language]}`} />
              <div className="d-flex">
                <div className="me-4">
                  <CalcInfo title="RAM" value={`${state.ram} ${langData.GB[language]}`} />
                </div>
                <CalcInfo title="SSD" value={`${state.ssd} ${langData.GB[language]}`} />
              </div>
              <CalcInfo title={langData.operationSystem[language]} value={`${state.os} ${state.osVersion}`} />
              <CalcInfo title={langData.chanel[language]} value={`${state.speed}`} />
              <CalcInfo title={langData.limits[language]} value={`32 ${langData.addresses[language]}`} />
              <CalcInfo title={langData.adm[language]} value={state.administration} />

              <div className={st.calculator__block__result__content__footer}>
                <div className="def-price">
                  {BeautyNum(
                    state.core * 30000 +
                      state.ram * 35000 +
                      state.ssd * 1000 +
                      calcSpeed.find((item) => item.title === state.speed).price
                  )}{" "}
                  {langData.MnS[language]}
                </div>
                {/* <a href="#">{langData.kor[language]}</a> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const CalcBlock = ({ number, title, children }) => {
  return (
    <div className={st.calculator__block__item__category}>
      <span className={st.calculator__block__item__category__number}>{number}</span>
      <div className={st.calculator__block__item__category__content}>
        <div className={st.calculator__block__item__category__content__title}>{title}</div>
        {children}
      </div>
    </div>
  );
};

const CalcHeader = ({ title, price, sum }) => {
  return (
    <div className={st.calculator__block__item__category__content__header}>
      <span>{title}</span>
      {price !== undefined && (
        <div>
          +{price} {sum}
        </div>
      )}
    </div>
  );
};

const CalcInput = ({ text, step, min, max, name, state, setState }) => {
  return (
    <div className={st.calculator__block__item__category__content__input}>
      <div className={st.calculator__block__item__category__content__input__item}>
        <Range
          step={step}
          min={min}
          max={max}
          values={[state[name]]}
          onChange={(values) => setState((prev) => ({ ...prev, [name]: values[0] }))}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#c2c2c2",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "24px",
                width: "24px",
                border: "8px solid #006a4d",
                borderRadius: "50%",
                backgroundColor: "#fff",
              }}
            />
          )}
        />
      </div>
      <div className={st.calculator__block__item__category__content__input__block}>
        <input
          type="tel"
          value={state[name]}
          onChange={(e) => setState((prev) => ({ ...prev, [name]: +e.target.value }))}
        />
        <span>{text}</span>
      </div>
    </div>
  );
};

const CalcSystem = ({ data, setData, state, setState, language }) => {
  const [show, setShow] = useState({ index: 0, show: false, ver: 0 }),
    [ver, setVer] = useState(Array(data.length));

  return (
    <div className={st.calculator__block__item__category__content__system}>
      {data.map((item, i) => (
        <div
          key={item.id}
          className={`${st.calculator__block__item__category__content__system__item} ${
            state.os === item.title ? st.calculator__block__item__category__content__system__item__active : ""
          }`}
        >
          <div
            className={st.calculator__block__item__category__content__system__item__title}
            onClick={() => {
              if (!show.show || show.index !== i) {
                setShow((prev) => ({ ...prev, index: i, show: false }));
                setState((prev) => ({
                  ...prev,
                  os: item.title,
                  osVersion: item.versions[show.ver].title,
                }));
              }
            }}
          >
            {item.title}
          </div>
          <div
            className={st.calculator__block__item__category__content__system__item__content}
            onClick={() => {
              (!show.show || show.index !== i) &&
                setShow((prev) => (prev.index === i ? { ...prev, show: !prev.show } : { index: i, show: true }));
            }}
          >
            <CalcSystemVersions
              index={i}
              show={show}
              setShow={setShow}
              state={state}
              setState={setState}
              data={item}
              setData={setData}
              language={language}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const CalcSystemVersions = ({ index, show, setShow, state, setState, data, setData, language }) => {
  const langData = {
    noChecked: {
      ru: "Не выбрано",
      uz: "Tanlanmagan",
      en: "Not chosen",
    },
  };
  return (
    <>
      {data.versions.find((item) => item?.selected).title}
      {show.index === index && show.show && (
        <ul>
          {data.versions.map((el, i) => (
            <li
              onClick={() => {
                setData((prev) => {
                  const temp = data.versions.map((key, index) => {
                    key.selected = index == i;
                    return key;
                  });
                  prev[index] = { ...prev[index], versions: temp };
                  return [...prev];
                });
                setState((prev) => ({
                  ...prev,
                  os: data.title,
                  osVersion: data.versions[i].title,
                  ver: i,
                  po: langData.noChecked[language],
                }));
                setShow((prev) => ({ ...prev, show: false, ver: i }));
              }}
            >
              {el.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const CalcSpeed = ({ data, state, setState }) => {
  return (
    <div className={st.calculator__block__item__category__content__po}>
      {data.map((item) => (
        <div
          className={`${st.calculator__block__item__category__content__po__item} ${
            item.title === state.speed ? st.calculator__block__item__category__content__po__item__active : ""
          }`}
          key={item.title}
          onClick={() => setState((prev) => ({ ...prev, speed: item.title }))}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

const CalcSwitcher = ({ state, setState, language }) => {
  const langData = {
    yes: {
      ru: "Да",
      uz: "Ha",
      en: "Yes",
    },
    no: {
      ru: "Нет",
      uz: "Yoq",
      en: "No",
    },
  };

  return (
    <div className={st.calculator__block__item__category__content__switcher}>
      <div
        className={`${st.calculator__block__item__category__content__switcher__item} ${
          state.administration == "Нет" ? st.calculator__block__item__category__content__switcher__item__active : ""
        }`}
        // onClick={() => setState((prev) => ({ ...prev, administration: 'Нет' }))}>
      >
        {langData.no[language]}
      </div>
      <div
        className={`${st.calculator__block__item__category__content__switcher__item} ${
          state.administration == "Да" ? st.calculator__block__item__category__content__switcher__item__active : ""
        }`}
        // onClick={() => setState((prev) => ({ ...prev, administration: 'Да' }))}>
      >
        {langData.yes[language]}
      </div>
    </div>
  );
};

const CalcSelect = ({ title, isChecked }) => {
  return (
    <div
      className={`${st.calculator__block__item__category__content__select} ${
        isChecked && st.calculator__block__item__category__content__select__checked
      }`}
    >
      {title}
    </div>
  );
};

const CalcInfo = ({ title, value }) => {
  return (
    <div className={st.calculator__block__result__content__info}>
      <div className={st.calculator__block__result__content__info__title}>{title}</div>
      <div className={st.calculator__block__result__content__info__value}>{value}</div>
    </div>
  );
};

function BeautyNum(Number) {
  if (!isNaN(Number) && isFinite(Number)) {
    let string = Number.toString();
    const arr = string.split(".");
    let str = "";
    let count = 0;
    let temp = "";
    if (arr[0].length <= 3) return Number;
    for (let j = arr[0].length - 1; j >= 0; j--) {
      count++;
      temp = arr[0][j] + temp;
      if (count === 3) {
        if (str.length > 0) {
          str = temp + " " + str;
        } else {
          str = temp;
        }
        temp = "";
        count = 0;
      }
    }
    if (temp.length > 0) str = temp + " " + str;
    if (arr.length > 1) str = str + "." + arr[1].slice(0, 2);
    return str;
  } else {
    return 0;
  }
}
