import { useCallback, useEffect, useState } from "react";
// import InputRange from 'react-input-range';
import Container from "@/components/container";
import st from "./calculator.module.scss";
import cs from "./constructor.module.scss";
import CIcon from "./icons.jsx";
// import 'react-input-range/lib/css/index.css';
import { Range } from "react-range";

const calcSpeed = [
  // {
  //   id: "unlim-25",
  //   title: "Unlim 25M",
  //   price: 500000,
  // },
  // {
  //   id: "unlim-50",
  //   title: "Unlim 50M",
  //   price: 0,
  // },
  {
    id: "unlim-250",
    title: "Unlim 250",
    price: 0,
  },
  {
    id: "unlim-350",
    title: "Unlim 350",
    price: 4000000,
  },
  {
    id: "unlim-500",
    title: "Unlim 500",
    price: 10000000,
  },
];

export default function Calculator({ language }) {
  const [state, setState] = useState({
      core: 2,
      ram: 4,
      ssd: 50,
      os: "Ubuntu",
      osVersion: "18.04",
      speed: calcSpeed[0].title,
      administration: "Нет",
    }),
    [show, setShow] = useState(null),
    [calcOS, setCalcOS] = useState([
      { id: "ubuntu",    title: "Ubuntu",         letter: "U", color: "#e95420", versions: ["18.04", "22.04", "24.04"] },
      { id: "debian",    title: "Debian",         letter: "D", color: "#a80030", versions: ["10.0", "11", "12"] },
      { id: "centos",    title: "CentOS",         letter: "C", color: "#932279", versions: ["7.0", "9", "10"] },
      { id: "alma",      title: "AlmaLinux",      letter: "A", color: "#0d597f", versions: ["8.9", "9.5"] },
      { id: "windows",   title: "Windows Server", letter: "W", color: "#0078d4", versions: ["2016", "2019", "2022", "2025"] },
      { id: "freepbx",   title: "FreePBX",        letter: "P", color: "#34a853", versions: ["15", "16"] },
      { id: "pfsense",   title: "pfSense",        letter: "F", color: "#212121", versions: [""] },
      { id: "other",     title: "Other",          letter: "?", color: "#6b7280", versions: [""] },
    ]),
    [isFixed, setIsFixed] = useState(false);

  const langData = {
    gN: {
      ru: "Гибкая настройка",
      uz: "O'zgaruchan qurilma",
      en: "Flexible setup",
    },
    speed: {
      ru: "До 192 CPU",
      uz: "192 CPU gacha",
      en: "Up to 192 CPUs",
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
      ru: "Количество ядер процессора (от 2,6 до 3,5 ГГц)",
      uz: "Protsessor yadrolari soni (2,6 - 3,5 GGZ gacha)",
      en: "Number of processor cores (2,6 up to 3.5 GHz)",
    },
    yadro: {
      ru: "ядра",
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
      ru: "Ваш сервер",
      uz: "Sizning serveringiz",
      en: "Your server",
    },
    workstxt: {
      ru: "Конфигурация обновляется в реальном времени",
      uz: "Konfiguratsiya real vaqtda yangilanadi",
      en: "Configuration updates in real time",
    },
    perMonth: {
      ru: "сум / мес",
      uz: "so'm / oy",
      en: "sum / mo.",
    },
    order: {
      ru: "Заказать сервер",
      uz: "Serverga buyurtma berish",
      en: "Order a server",
    },
    incStart: {
      ru: "Запуск от 30 минут",
      uz: "30 daqiqada ishga tushirish",
      en: "Launch in 30 minutes",
    },
    incUptime: {
      ru: "Uptime 99.98% · DDoS защита",
      uz: "Uptime 99.98% · DDoS himoya",
      en: "Uptime 99.98% · DDoS protection",
    },
    incRefund: {
      ru: "Возврат средств 3 дня",
      uz: "3 kun ichida pulni qaytarish",
      en: "3-day money back",
    },
    incSupport: {
      ru: "Поддержка 24/7",
      uz: "24/7 qo'llab-quvvatlash",
      en: "Support 24/7",
    },
    onOrder: {
      ru: "Под заказ",
      uz: "Buyurtma asosida",
      en: "On request",
    },
    tasixFree: {
      ru: "{langData.tasixFree[language]}",
      uz: "TAS-IX / UZ-IX — 1 Gbit/s barcha tariflarga bepul kiritilgan",
      en: "TAS-IX / UZ-IX — 1 Gbps included in every plan for free",
    },
    gbit: {
      ru: "1 Гбит/с",
      uz: "1 Gbit/s",
      en: "1 Gbps",
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

  // useEffect(() => {
  //   if (document.body.clientWidth > 770) {
  //     const scroll = () => {
  //       const content = document.querySelector("#content"),
  //         result = document.querySelector("#result");

  //       if (window.pageYOffset >= 80) {
  //         setIsFixed(true);

  //         if (window.pageYOffset > content.clientHeight - result.clientHeight + 100) {
  //           setPosition({ top: "unset", bottom: 0 });
  //         } else {
  //           setPosition({ top: `${window.pageYOffset - 0}px` });
  //         }
  //       } else setIsFixed(false);
  //     };

  //     scroll();

  //     document.addEventListener("scroll", scroll);

  //     return () => {
  //       document.removeEventListener("scroll", scroll);
  //     };
  //   }
  // }, []);

  const cpuPrice = state.core * 30000;
  const ramPrice = state.ram * 35000;
  const ssdPrice = state.ssd * 1000;
  const netPrice = calcSpeed.find((i) => i.title === state.speed).price;
  const total = cpuPrice + ramPrice + ssdPrice + netPrice;

  const presetParams = new URLSearchParams({
    do: "order",
    vid: "vds",
    tarif: "27",
    preset_cpu: state.core,
    preset_ram: state.ram,
    preset_ssd: state.ssd,
    preset_channel: state.speed,
    preset_os: state.os,
    preset_os_ver: state.osVersion,
    preset_adm: state.administration,
    preset_price: total,
    preset_source: "constructor",
  });
  const billingLink = `https://billing.airnet.uz/billing.php?${presetParams.toString()}`;

  const plus = (v) => (v > 0 ? `+${BeautyNum(v)} ${langData.sum[language]}` : `+0 ${langData.sum[language]}`);

  const osTiles = [];
  calcOS.forEach((fam) => {
    fam.versions.forEach((ver) =>
      osTiles.push({ famId: fam.id, famTitle: fam.title, letter: fam.letter, color: fam.color, ver })
    );
  });

  return (
    <div className={st.calculator}>
      <Container className="position-relative">
        <div className={cs.wrap}>
          <div className={cs.builder} id="content">
            <section className={cs.card}>
              <div className={cs.card__head}>
                <div className={cs.card__title}>
                  <span className={cs.card__num}>1</span>
                  <CIcon name="cpu" size={16} />
                  {langData.hardProccer[language]}
                </div>
                <span className={cs.card__price}>{plus(cpuPrice + ramPrice)}</span>
              </div>
              <div className={cs.card__body}>
                <CalcSlider
                  name="core"
                  label={langData.title[language]}
                  unit={langData.yadro[language]}
                  min={2}
                  max={42}
                  step={2}
                  state={state}
                  setState={setState}
                />
                <CalcSlider
                  name="ram"
                  label={langData.ozu[language]}
                  unit={langData.GB[language]}
                  min={2}
                  max={256}
                  step={2}
                  state={state}
                  setState={setState}
                />
              </div>
            </section>

            <section className={cs.card}>
              <div className={cs.card__head}>
                <div className={cs.card__title}>
                  <span className={cs.card__num}>2</span>
                  <CIcon name="ssd" size={16} />
                  {langData.hard[language]}
                </div>
                <span className={cs.card__price}>{plus(ssdPrice)}</span>
              </div>
              <div className={cs.card__body}>
                <div>
                  <div className={cs.slider__name} style={{ marginBottom: 8 }}>
                    {langData.hardS[language]}
                  </div>
                  <div className={cs.chips}>
                    <button type="button" className={`${cs.chip} ${cs.chip_on}`}>
                      <CIcon name="ssd" size={14} />
                      SSD
                    </button>
                    <button type="button" className={`${cs.chip} ${cs.chip_off}`} title={langData.onOrder[language]} disabled>
                      <CIcon name="bolt" size={14} />
                      NVMe <small>{langData.onOrder[language]}</small>
                    </button>
                  </div>
                </div>
                <CalcSlider
                  name="ssd"
                  label={langData.wHard[language]}
                  unit={langData.GB[language]}
                  min={50}
                  max={10000}
                  step={10}
                  state={state}
                  setState={setState}
                />
              </div>
            </section>

            <section className={cs.card}>
              <div className={cs.card__head}>
                <div className={cs.card__title}>
                  <span className={cs.card__num}>3</span>
                  <CIcon name="os" size={16} />
                  {langData.sistem[language]}
                </div>
                <span className={`${cs.card__price} ${cs.card__price_zero}`}>+0 {langData.sum[language]}</span>
              </div>
              <div className={cs.card__body}>
                <div className={cs.os}>
                  {osTiles.map((t) => {
                    const active = state.os === t.famTitle && state.osVersion === t.ver;
                    const label = t.ver ? `${t.famTitle} ${t.ver}` : t.famTitle;
                    return (
                      <button
                        type="button"
                        key={`${t.famId}-${t.ver}`}
                        title={label}
                        className={`${cs.os__tile} ${active ? cs.os__tile_on : ""}`}
                        onClick={() => setState((prev) => ({ ...prev, os: t.famTitle, osVersion: t.ver }))}
                      >
                        <span className={cs.os__badge} style={{ background: t.color }}>
                          {t.letter}
                        </span>
                        <span className={cs.os__label}>{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className={cs.card}>
              <div className={cs.card__head}>
                <div className={cs.card__title}>
                  <span className={cs.card__num}>4</span>
                  <CIcon name="wifi" size={16} />
                  {langData.chanel[language]}
                </div>
                <span className={`${cs.card__price} ${netPrice ? "" : cs.card__price_zero}`}>{plus(netPrice)}</span>
              </div>
              <div className={cs.card__body}>
                <div className={cs.chips}>
                  {calcSpeed.map((item) => (
                    <button
                      type="button"
                      key={item.title}
                      className={`${cs.chip} ${item.title === state.speed ? cs.chip_on : ""}`}
                      onClick={() => setState((prev) => ({ ...prev, speed: item.title }))}
                    >
                      <CIcon name="network" size={14} />
                      {item.title}
                      {item.price > 0 && <small>+{BeautyNum(item.price)}</small>}
                    </button>
                  ))}
                </div>
                <div className={cs.note}>
                  <CIcon name="info" size={13} />
                  {langData.tasixFree[language]}
                </div>
              </div>
            </section>

            <section className={cs.card}>
              <div className={cs.card__head}>
                <div className={cs.card__title}>
                  <span className={cs.card__num}>5</span>
                  <CIcon name="settings" size={16} />
                  {langData.adm[language]}
                </div>
                <span className={`${cs.card__price} ${cs.card__price_zero}`}>+0 {langData.sum[language]}</span>
              </div>
              <div className={cs.card__body}>
                <div className={cs.optRow}>
                  <div className={cs.optRow__info}>
                    {langData.adm[language]}
                    <small>{langData.paket[language]}</small>
                  </div>
                  <div className={cs.seg}>
                    <span className={`${cs.seg__item} ${state.administration === "Нет" ? cs.seg__item_on : ""}`}>
                      {language === "uz" ? "Yo'q" : language === "en" ? "No" : "Нет"}
                    </span>
                    <span className={`${cs.seg__item} ${state.administration === "Да" ? cs.seg__item_on : ""}`}>
                      {language === "uz" ? "Ha" : language === "en" ? "Yes" : "Да"}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <div className={st.calculator__block__item__category__content__footer}>
              {langData.br[language]}
            </div>
          </div>

          <aside className={cs.summary} id="result">
            <div className={cs.summary__head}>
              <h3>{langData.VDS[language]}</h3>
              <p>{langData.workstxt[language]}</p>
            </div>

            <div className={cs.summary__body}>
              <div className={cs.summary__row}>
                <span className={cs.summary__label}>
                  <CIcon name="cpu" size={14} />
                  CPU
                </span>
                <span className={cs.summary__value}>
                  {state.core} {langData.yadro[language]}
                </span>
              </div>
              <div className={cs.summary__row}>
                <span className={cs.summary__label}>
                  <CIcon name="ram" size={14} />
                  RAM
                </span>
                <span className={cs.summary__value}>
                  {state.ram} {langData.GB[language]}
                </span>
              </div>
              <div className={cs.summary__row}>
                <span className={cs.summary__label}>
                  <CIcon name="ssd" size={14} />
                  SSD
                </span>
                <span className={cs.summary__value}>
                  {state.ssd} {langData.GB[language]}
                </span>
              </div>
              <div className={cs.summary__row}>
                <span className={cs.summary__label}>
                  <CIcon name="wifi" size={14} />
                  {langData.chanel[language]}
                </span>
                <span className={cs.summary__value}>{state.speed}</span>
              </div>
              <div className={cs.summary__row}>
                <span className={cs.summary__label}>
                  <CIcon name="network" size={14} />
                  TAS-IX / UZ-IX
                </span>
                <span className={cs.summary__value}>{langData.gbit[language]}</span>
              </div>
              <div className={cs.summary__row}>
                <span className={cs.summary__label}>
                  <CIcon name="os" size={14} />
                  {langData.operationSystem[language]}
                </span>
                <span className={cs.summary__value}>
                  {state.os} {state.osVersion}
                </span>
              </div>
              <div className={cs.summary__row}>
                <span className={cs.summary__label}>
                  <CIcon name="pin" size={14} />
                  IP
                </span>
                <span className={cs.summary__value}>1</span>
              </div>
            </div>

            <div className={cs.summary__footer}>
              <div className={cs.summary__price}>
                <b>{BeautyNum(total)}</b>
                <span>{langData.perMonth[language]}</span>
              </div>
              <a className={cs.summary__btn} href={billingLink} target="_blank" rel="noopener noreferrer">
                {langData.order[language]}
                <CIcon name="arrowRight" size={16} />
              </a>
              <div className={cs.summary__includes}>
                <span className={cs.summary__inc}>
                  <CIcon name="clock" size={13} />
                  {langData.incStart[language]}
                </span>
                <span className={cs.summary__inc}>
                  <CIcon name="shield" size={13} />
                  {langData.incUptime[language]}
                </span>
                <span className={cs.summary__inc}>
                  <CIcon name="refresh" size={13} />
                  {langData.incRefund[language]}
                </span>
                <span className={cs.summary__inc}>
                  <CIcon name="headset" size={13} />
                  {langData.incSupport[language]}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

const CalcSlider = ({ name, label, unit, min, max, step, state, setState }) => {
  const value = state[name];
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className={cs.slider}>
      <div className={cs.slider__label}>
        <span className={cs.slider__name}>{label}</span>
        <span className={cs.slider__val}>
          <b>{value}</b>
          <em>{unit}</em>
        </span>
      </div>
      <Range
        step={step}
        min={min}
        max={max}
        values={[Math.min(Math.max(value, min), max)]}
        onChange={(values) => setState((prev) => ({ ...prev, [name]: values[0] }))}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className={cs.slider__track}
            style={{
              ...props.style,
              background: `linear-gradient(to right, #176a4f 0%, #176a4f ${pct}%, #d0e8d9 ${pct}%, #d0e8d9 100%)`,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => <div {...props} className={cs.slider__thumb} style={{ ...props.style }} />}
      />
      <div className={cs.slider__marks}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export const CalcBlock = ({ number, title, children }) => {
  return (
    <div className={st.calculator__block__item__category}>
      {number && <span className={st.calculator__block__item__category__number}>{number}</span>}
      <div className={st.calculator__block__item__category__content}>
        <div className={st.calculator__block__item__category__content__title}>{title}</div>
        {children}
      </div>
    </div>
  );
};

export const CalcHeader = ({ title, price, sum }) => {
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

export const CalcInput = ({ text, step, min, max, name, state, setState }) => {
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
                border: "8px solid #0e6a4e",
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

export const CalcSelect = ({ title, isChecked, setChecked }) => {
  return (
    <div
      className={`${st.calculator__block__item__category__content__select} ${
        isChecked && st.calculator__block__item__category__content__select__checked
      }`}
      onClick={setChecked}
    >
      {title}
    </div>
  );
};

export function BeautyNum(Number) {
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
