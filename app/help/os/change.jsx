import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Как сменить операционную систему",
    uz: "Operatsion tizimni qanday o'zgartirish mumkin",
    en: "How to change operating system",
  },
  related: [],
  content: {
    ru: (
      <>
        <p>
          От операционной системы сервера зависит базовый набор инструментов, доступный для работы, а также версии
          программного обеспечения, которые можно установить. И возможность использования сторонних программ тоже — так
          как часто такие продукты поддерживают ограниченный список операционных систем.
        </p>

        <p>
          Из этого часто вытекает необходимость смены операционной системы — если при заказе сервера вы выбрали
          неправильную версию ОС, либо она не подошла по системным требованиям нужного для работы софта, либо просто
          потребовалось обновиться для доступа к более свежему ПО.
        </p>

        <p>
          Сменить операционную систему можно двумя основными способами — выбор зависит от того, нужно ли вам сохранить
          данные на сервере или нет.
        </p>

        <h2>Если на сервере нет данных, которые нужно сохранить</h2>

        <p>
          Этот вариант подходит, если вы установили не ту версию операционной системы при заказе либо хотите вернуть
          сервер в начальное состояние — полностью сбросить настройки и удалить с сервера все данные.&nbsp;
        </p>

        <p>
          Способ заключается в переустановке операционной системы — выполнить её можно через обращение тикетной системы.
        </p>

        <div className="article">
          <p>
            Будьте осторожны! При переустановке операционной системы все данные на сервере&nbsp;
            <span style={{ color: "#e74c3c" }}>
              <strong>безвозвратно удаляются</strong>
            </span>
            .
          </p>

          <p>Если для сервера создавались снимки системы, они также будут удалены.</p>
        </div>

        <p>
          Попасть в VMmanager можно из{" "}
          <a href="#" target="_blank">
            Личного кабинета
          </a>{" "}
          — раздел <code>Товары</code> — <code>Виртуальные серверы</code> — выберите ваш сервер, сверху{" "}
          <code>«Перейти»</code>:&nbsp;
        </p>

        <p>Также данные для входа можно найти в письме, которое вы получили на почту после активации сервера.</p>

        <p>
          В панели VMmanager перейдите в раздел <code>Управление</code> — <code>Виртуальные машины</code>. В списке
          выберите ваш сервер и сверху нажмите <code>«Переустановить»</code>. Если серверов в списке несколько, найти
          нужный можно по ID, доменному имени или IP-адресу.
        </p>

        <p>
          Откроется окно выбора операционной системы. В списке <code>«Шаблон ОС»</code> выберите нужный вариант. Если
          оставить текущую — будет выполнена простая переустановка без смены ОС.&nbsp;
        </p>

        <p>
          На этом же шаге можно выбрать рецепт — набор программ, который будет автоматически загружен после установки
          системы, или сменить пароль (для Linux-систем).
        </p>

        <p>
          После этого нажмите <code>«Ok»</code> — запустится форматирование сервера и установка новой системы.&nbsp;
        </p>

        <p>
          Отслеживать прогресс установки можно по иконке диска — она будет отображаться в колонке{" "}
          <code>«Состояние»</code>. Либо можно перейти в консоль VNC — там будет виден процесс установки. С её помощью
          вы можете управлять загрузкой новой системы.
        </p>

        <div className="article">
          <p>
            Серверы с ОС семейств Linux и Windows размещены в разных кластерах, поэтому установить Windows Server на
            VDS, где установлена ОС семейства Linux, или наоборот, не получится.
          </p>

          <p>
            Если вам нужно сменить Windows на Linux или обратно, потребуется заказать новый сервер с необходимой
            операционной системой.
          </p>
        </div>

        <p>
          Если вы хотите переустановить операционную систему на версию, которая отсутствует у нас, можно подключить свой
          ISO-образ и установить систему с него. Как это сделать, описано в нашей инструкции.
        </p>

        <p>
          Если на вашем сервере используется VMmanager 6, то запуск переустановки также прост и производится&nbsp;точно
          также в два-три клика. На главной странице кликните на&nbsp;вкладку&nbsp;<code>Меню</code> и выберите пункт{" "}
          <code>Переустановить</code>.
        </p>

        <p>
          Откроется окно с выбором ОС. Выберите нужный для вас вариант и нажмите <code>Переустановить</code>. Готово,
          статус переустановки можно проследить на главной странице панели.
        </p>

        <h2>Если на сервере есть данные, которые нужно сохранить</h2>

        <p>
          Есть несколько разных способов смены операционной системы в зависимости от того, какой цели вы пытаетесь этим
          достигнуть.&nbsp;
        </p>

        <p>
          Если вы просто хотите обновить версию системы, например, с Ubuntu 18.04 на Ubuntu 20.04 — это можно сделать и
          на текущем сервере, просто следуя стандартной инструкции разработчика по обновлению. Однако такой подход несёт
          за собой много рисков:
        </p>

        <ul>
          <li>
            новая версия системы может содержать баги или недоработки, которые после обновления проявят себя
            непредсказуемым образом;
          </li>
          <li>программное обеспечение, используемое с текущей версией системы, может быть несовместимо с новой;</li>
          <li>в процессе обновления что-то может пойти не так, и в итоге будут потеряны все данные на сервере.</li>
        </ul>

        <p>
          Поэтому обновлять систему на текущем сервере, где работают боевые проекты и хранятся рабочие данные,
          категорически не рекомендуется. &nbsp;Для этого лучше использовать подход, описанный ниже.
        </p>

        <p>
          Второй вариант — когда вы решили не просто обновить версию системы, а полностью сменить дистрибутив: например,
          с CentOS 7 на Debian 10. В таком случае в рамках текущего сервера сменить систему не выйдет — если
          использовать простую переустановку, вы потеряете все данные на сервере. И даже если перед этим сделать бэкап,
          всё равно могут возникнуть сложности — во-первых, на время работ ваш проект не будет доступен, во-вторых, нет
          гарантий, что бэкап на новой версии системы развернётся без ошибок.&nbsp;
        </p>

        <p>
          Поэтому самым простым и безопасным способом переустановки системы с сохранением данных будет{" "}
          <strong>
            заказ нового сервера с нужной версией операционной системы и перенос данных со старого сервера
          </strong>
          . Таким образом:&nbsp;
        </p>

        <ul>
          <li>работа проекта не прервётся: пока вы настраиваете новый сервер, проект доступен со старого;</li>
          <li>
            минимизирован риск ошибок: после переноса вам будет доступна копия проекта, которую можно протестировать
            перед переключением всей работы на новый сервер;
          </li>
          <li>
            минимизирован риск потери или повреждения данных: формально данные текущего сервера никак не меняются —
            только копируются на новый сервер. В случае неудачного переноса или настройки нового сервера можно будет
            вернуться на старый и повторить процесс. Опять же, это никак не влияет на работу проекта — он всё это время
            спокойно функционирует со старого сервера.
          </li>
        </ul>

        <p>
          Перенос данных можно выполнить самостоятельно или с нашей помощью. Посмотреть условия и доступные способы
          переноса силами наших системных администраторов можно в Базе знаний.
        </p>
      </>
    ),
    uz: (
      <>
        <p>
          Serverning operatsion tizimi ishlash uchun mavjud bo'lgan asosiy vositalar to'plamini, shuningdek,
          o'rnatilishi mumkin bo'lgan dasturiy ta'minot versiyalarini aniqlaydi. Shuningdek, uchinchi tomon
          dasturlaridan foydalanish imkoniyati ham mavjud - chunki bunday mahsulotlar ko'pincha operatsion tizimlarning
          cheklangan ro'yxatini qo'llab-quvvatlaydi.
        </p>

        <p>
          Bu ko'pincha operatsion tizimni o'zgartirish zaruratiga olib keladi - agar siz serverga buyurtma berishda
          operatsion tizimning noto'g'ri versiyasini tanlagan bo'lsangiz yoki u ishlashingiz kerak bo'lgan dasturiy
          ta'minotning tizim talablariga mos kelmasa yoki shunchaki o'zgartirishingiz kerak bo'lsa. eng yangi
          dasturlarga kirish uchun yangilang.
        </p>

        <p>
          Operatsion tizimni o'zgartirishning ikkita asosiy usuli mavjud - tanlov serverda ma'lumotlarni saqlash kerakmi
          yoki yo'qligiga bog'liq.
        </p>

        <h2>Agar serverda saqlash uchun ma'lumot bo'lmasa</h2>

        <p>
          Agar siz buyurtma berish paytida operatsion tizimning notoʻgʻri versiyasini oʻrnatgan boʻlsangiz yoki serverni
          dastlabki holatiga qaytarmoqchi boʻlsangiz – sozlamalarni toʻliq tiklang va serverdan barcha maʼlumotlarni
          oʻchirib tashlasangiz, ushbu parametr mos keladi.&nbsp;
        </p>

        <p>Usul operatsion tizimni qayta o'rnatishdan iborat - siz buni chipta tizimi orqali qilishingiz mumkin.</p>

        <div className="article">
          <p>
            Ehtiyot bo'ling! Operatsion tizimni qayta o'rnatishda serverdagi barcha ma'lumotlar&nbsp;
            <span style={{ color: "#e74c3c" }}>
              <strong>butunlay o'chirildi</strong>
            </span>
            .
          </p>

          <p>Agar tizim snapshotlari server uchun yaratilgan boʻlsa, ular ham oʻchirib tashlanadi.</p>
        </div>

        <p>
          VMmanager’ga orqali kirishingiz mumkin{" "}
          <a href="#" target="_blank">
            Shaxsiy hisob
          </a>{" "}
          - <code>Mahsulotlar</code> bo'limi - <code>Virtual serverlar</code> - yuqoridagi <code>“Go”</code>dan
          serveringizni tanlang:&nbsp;
        </p>

        <p>
          Shuningdek, login ma'lumotlarini server faollashtirilgandan so'ng pochta orqali kelgan xatda ham topish
          mumkin.
        </p>

        <p>
          VMmanager panelida <code>Menejment</code> — <code>Virtual mashinalar</code> bo'limiga o'ting. Roʻyxatdan
          serveringizni tanlang va yuqoridagi <code>"Qayta oʻrnatish"</code> tugmasini bosing. Agar ro'yxatda bir nechta
          serverlar bo'lsa, siz ID, domen nomi yoki IP manzili bo'yicha kerakli serverni topishingiz mumkin.
        </p>

        <p>
          Operatsion tizimni tanlash oynasi ochiladi. <code>OS andozasi</code> roʻyxatida kerakli variantni tanlang.
          Agar joriysini tark etsangiz, OTni o'zgartirmasdan oddiy qayta o'rnatish amalga oshiriladi.&nbsp;
        </p>

        <p>
          Shu bosqichda siz retseptni tanlashingiz mumkin - tizim o'rnatilgandan so'ng avtomatik ravishda yuklanadigan
          dasturlar to'plami yoki parolni o'zgartirish (Linux tizimlari uchun).
        </p>

        <p>
          Shundan so'ng, <code>"Ok"</code> tugmasini bosing - serverni formatlash va yangi tizimni o'rnatish
          boshlanadi.&nbsp;
        </p>

        <p>
          O'rnatish jarayonini disk belgisi orqali kuzatishingiz mumkin - u <code>"Status"</code> ustunida ko'rsatiladi.
          Yoki VNC konsoliga o'tishingiz mumkin - o'rnatish jarayoni u erda ko'rinadi. Uning yordamida siz yangi
          tizimning yuklanishini boshqarishingiz mumkin.
        </p>

        <div className="article">
          <p>
            Linux va Windows oilalari bilan ishlaydigan serverlar turli klasterlarda joylashtirilgan, shuning uchun siz
            Linux oilasi OT oʻrnatilgan VDS ga Windows Serverni oʻrnata olmaysiz yoki aksincha.
          </p>

          <p>
            Agar siz Windows-dan Linux-ga yoki aksincha o'tmoqchi bo'lsangiz, kerakli operatsion tizimga ega yangi
            serverga buyurtma berishingiz kerak bo'ladi.
          </p>
        </div>

        <p>
          Agar siz operatsion tizimni bizda mavjud boʻlmagan versiyaga qayta oʻrnatmoqchi boʻlsangiz, ISO tasviringizni
          oʻrnatishingiz va undan tizimni oʻrnatishingiz mumkin. Buni qanday qilish bizning ko'rsatmalarimizda
          tasvirlangan.
        </p>

        <p>
          Agar serveringizda VMmanager 6 ishlatilsa, qayta o'rnatishni boshlash ham oddiy va ikki yoki uch marta bosish
          bilan xuddi shu tarzda amalga oshiriladi. Asosiy sahifada&nbsp;<code>Menyu</code>&nbsp;yorlig'ini bosing va{" "}
          <code>Qayta o'rnatish</code>-ni tanlang.
        </p>

        <p>
          OS tanlash oynasi ochiladi. Kerakli variantni tanlang va <code>Qayta o'rnatish</code> tugmasini bosing.
          Bajarildi, qayta o'rnatish holatini panelning asosiy sahifasida kuzatish mumkin.
        </p>

        <h2>Agar serverda saqlanishi kerak bo'lgan ma'lumotlar mavjud bo'lsa</h2>

        <p>
          Siz erishmoqchi bo'lgan maqsadga qarab, operatsion tizimni o'zgartirishning bir necha xil usullari
          mavjud.&nbsp;
        </p>

        <p>
          Agar siz shunchaki tizim versiyasini yangilamoqchi bo'lsangiz, masalan, Ubuntu 18.04 dan Ubuntu 20.04 ga, uni
          joriy serverda ham qilishingiz mumkin, ishlab chiqaruvchining standart yangilash ko'rsatmalariga amal qiling.
          Biroq, bu yondashuv ko'plab xavflarni o'z ichiga oladi:
        </p>

        <ul>
          <li>
            tizimning yangi versiyasi xato yoki kamchiliklarni o'z ichiga olishi mumkin, ular yangilanishdan keyin
            oldindan aytib bo'lmaydigan tarzda namoyon bo'ladi;
          </li>
          <li>tizimning joriy versiyasida foydalanilgan dasturiy ta'minot yangisi bilan mos kelmasligi mumkin;</li>
          <li>Yangilanish jarayonida nimadir notoʻgʻri boʻlishi mumkin va serverdagi barcha maʼlumotlar yoʻqoladi.</li>
        </ul>

        <p>
          Shuning uchun jangovar loyihalar ishlayotgan va ishchi ma'lumotlar saqlanadigan joriy serverda tizimni
          yangilash qat'iyan tavsiya etilmaydi. &nbsp;Buning uchun quyida tavsiflangan yondashuvdan foydalanish
          yaxshidir.
        </p>

        <p>
          Ikkinchi variant, siz nafaqat tizim versiyasini yangilashga, balki tarqatishni butunlay o'zgartirishga qaror
          qilganingizda bo'ladi: masalan, CentOS 7 dan Debian 10 ga. Bunday holda, joriy server ichidagi tizimni
          o'zgartirish ishlamaydi - oddiy qayta o'rnatishdan foydalansangiz, serverdagi barcha ma'lumotlarni yo'qotasiz.
          Agar siz undan oldin zaxira nusxasini yaratgan bo'lsangiz ham, qiyinchiliklar hali ham paydo bo'lishi mumkin -
          birinchidan, sizning loyihangiz ish davomida mavjud bo'lmaydi, ikkinchidan, zaxira tizimning yangi versiyasida
          joylashtirilishiga kafolat yo'q. xatosiz.&nbsp;
        </p>

        <p>
          Shuning uchun, ma'lumotlarni saqlab qolgan holda tizimni qayta o'rnatishning eng oson va xavfsiz usuli{" "}
          <strong>
            operatsion tizimning to'g'ri versiyasiga ega yangi serverga buyurtma berish va eski serverdan ma'lumotlarni
            uzatish
          </strong>
          dir. Shu tarzda:&nbsp;
        </p>

        <ul>
          <li>loyiha to'xtatilmaydi: yangi serverni o'rnatayotganingizda, loyiha eskisidan foydalanish mumkin;</li>
          <li>
            xatolar xavfi minimallashtiriladi: uzatishdan so'ng loyihaning nusxasi sizga taqdim etiladi, uni barcha
            ishlarni yangi serverga o'tkazishdan oldin sinab ko'rishingiz mumkin;
          </li>
          <li>
            ma'lumotlarning yo'qolishi yoki buzilishi xavfi minimallashtiriladi: rasmiy ravishda joriy serverning
            ma'lumotlari hech qanday tarzda o'zgarmaydi - u faqat yangi serverga ko'chiriladi. Muvaffaqiyatsiz uzatish
            yoki yangi serverni o'rnatishda siz eskisiga qaytishingiz va jarayonni takrorlashingiz mumkin. Shunga
            qaramay, bu loyihaning ishlashiga hech qanday ta'sir qilmaydi - bu vaqt davomida u eski serverdan jimgina
            ishlagan.
          </li>
        </ul>

        <p>
          Ma'lumotlarni o'zingiz yoki bizning yordamimiz bilan uzatishingiz mumkin. Maʼlumotlar bazasida tizim
          maʼmurlarimiz tomonidan oʻtkazish shartlari va mavjud usullarini koʻrishingiz mumkin.
        </p>
      </>
    ),
    en: (
      <>
        <p>
          The operating system of the server determines the basic set of tools available for operation, as well as the
          versions of software that can be installed. And the ability to use third-party programs too - since such
          products often support a limited list of operating systems.
        </p>

        <p>
          This often results in the need to change the operating system - if you chose the wrong version of the OS when
          ordering the server, or it did not fit the system requirements of the software you need to work, or you just
          needed to upgrade to access more recent software.
        </p>

        <p>
          There are two main ways to change the operating system - the choice depends on whether you need to save data
          on the server or not.
        </p>

        <h2>If there is no data on the server to save</h2>

        <p>
          This option is suitable if you installed the wrong version of the operating system when ordering, or if you
          want to return the server to its initial state - completely reset the settings and delete all data from the
          server.&nbsp;
        </p>

        <p>The method consists in reinstalling the operating system - you can do it through the ticket system.</p>

        <div className="article">
          <p>
            Be careful! When reinstalling the operating system, all data on the server&nbsp;
            <span style={{ color: "#e74c3c" }}>
              <strong>permanently deleted</strong>
            </span>
            .
          </p>

          <p>If system snapshots were created for the server, they will also be deleted.</p>
        </div>

        <p>
          You can access VMmanager from{" "}
          <a href="#" target="_blank">
            Personal account
          </a>{" "}
          - section <code>Products</code> - <code>Virtual servers</code> - select your server, above <code>“Go”</code>
          :&nbsp;
        </p>

        <p>
          Also, the login information can be found in the letter that you received in the mail after activating the
          server.
        </p>

        <p>
          In the VMmanager panel, go to the <code>Management</code> — <code>Virtual Machines</code> section. Select your
          server from the list and click <code>"Reinstall"</code> at the top. If there are several servers in the list,
          you can find the one you need by ID, domain name or IP address.
        </p>

        <p>
          The operating system selection window will open. In the <code>OS Template</code> list, select the desired
          option. If you leave the current one, a simple reinstallation will be performed without changing the OS.&nbsp;
        </p>

        <p>
          At the same step, you can select a recipe - a set of programs that will be automatically loaded after
          installing the system, or change the password (for Linux systems).
        </p>

        <p>
          After that, click <code>"Ok"</code> - the formatting of the server and installation of the new system will
          start.&nbsp;
        </p>

        <p>
          You can track the installation progress by the disk icon - it will be displayed in the <code>"Status"</code>{" "}
          column. Or you can go to the VNC console - the installation process will be visible there. With it, you can
          manage the boot of a new system.
        </p>

        <div className="article">
          <p>
            Servers running Linux and Windows families are hosted in different clusters, so you won't be able to install
            Windows Server on a VDS where a Linux family OS is installed, or vice versa.
          </p>

          <p>
            If you need to change from Windows to Linux or vice versa, you will need to order a new server with the
            required operating system.
          </p>
        </div>

        <p>
          If you want to reinstall your operating system to a version we don't have, you can mount your ISO and install
          from it. How to do this is described in our instructions.
        </p>

        <p>
          If VMmanager 6 is used on your server, then starting the reinstallation is also simple and is done in exactly
          the same way in two or three clicks. On the main page, click on&nbsp;<code>Menu</code>&nbsp;tab and select{" "}
          <code>Reinstall</code>.
        </p>

        <p>
          An OS selection window will open. Select the option you need and click <code>Reinstall</code>. Done, the
          reinstallation status can be tracked on the main page of the panel.
        </p>
        <h2>If there is data on the server that needs to be saved</h2>

        <p>
          There are several different ways to change the operating system, depending on what goal you are trying to
          achieve.&nbsp;
        </p>

        <p>
          If you just want to upgrade your system version, for example from Ubuntu 18.04 to Ubuntu 20.04, you can do it
          on the current server as well, just follow the developer's standard upgrade instructions. However, this
          approach carries many risks:
        </p>

        <ul>
          <li>
            the new version of the system may contain bugs or shortcomings, which after the update will manifest
            themselves in an unpredictable way;
          </li>
          <li>software used with the current version of the system may not be compatible with the new one;</li>
          <li>Something might go wrong during the upgrade process and all data on the server will be lost.</li>
        </ul>

        <p>
          Therefore, updating the system on the current server, where combat projects are running and working data is
          stored, is strongly discouraged. &nbsp;For this, it is better to use the approach described below.
        </p>

        <p>
          The second option is when you decide not just to update the system version, but to completely change the
          distribution: for example, from CentOS 7 to Debian 10. In this case, changing the system within the current
          server will not work - if you use a simple reinstall, you will lose all data on server. And even if you make a
          backup before that, difficulties may still arise - firstly, your project will not be available for the
          duration of the work, and secondly, there are no guarantees that the backup will be deployed on the new
          version of the system without errors.&nbsp;
        </p>

        <p>
          Therefore, the easiest and safest way to reinstall the system with the preservation of data is to{" "}
          <strong>
            order a new server with the correct version of the operating system and transfer data from the old server
          </strong>
          . This way:&nbsp;
        </p>

        <ul>
          <li>
            the project will not be interrupted: while you are setting up a new server, the project is available from
            the old one;
          </li>
          <li>
            the risk of errors is minimized: after the transfer, a copy of the project will be available to you, which
            you can test before switching all work to the new server;
          </li>
          <li>
            the risk of data loss or corruption is minimized: formally, the data of the current server does not change
            in any way - it is only copied to the new server. In case of unsuccessful transfer or setting up a new
            server, you can return to the old one and repeat the process. Again, this does not affect the operation of
            the project in any way - it has been quietly functioning from the old server all this time.
          </li>
        </ul>

        <p>
          You can transfer data yourself or with our help. You can view the conditions and available methods of transfer
          by our system administrators in the Knowledge Base.
        </p>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
