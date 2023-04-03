import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: { ru: "Файл .htaccess", uz: "Fayl.htaccess" },
	content: {
		ru: (
			<>
				<p>
					<strong>Файл .htaccess</strong> предоставляет возможность
					дополнительно настроить веб-сервер и достичь такие цели, как:
				</p>
				<p>-Ограничение доступа к сайтам;</p>
				<p>-Переадресация на другой домен;</p>
				<p>-Показ собственных страниц ошибок;</p>
				<p>-Изменение значений в директивах PHP.</p>
				<p>
					<strong>Переадресация с одного сайта на другой</strong>
				</p>
				<p>
					Для переадресации с одного сайта на другой необходимо добавить в файл
					.htaccess следующие строки:
				</p>
				<p>RewriteEngine on</p>
				<p>RewriteCond %{`{HTTP_HOST}`} ^(www\.)?from\.com$</p>
				<p>RewriteRule ^(.*)$ http://to.com/$1 [L,R=301]</p>
				<p>
					где from\.com —доменное имя, с которого должна быть выполнена
					переадресация, а “to.com” – &nbsp;цель.
				</p>
				<p>
					Однако экранирование символа точки обратной косой чертой \ во второй
					строке необязательно.
				</p>
				<p>
					<strong>Переадресация с протокола HTTP на протокол HTTPS</strong>
				</p>
				<p>
					Переадресация с протокола HTTP на протокол HTTPS выполняется путём
					прибавления &nbsp;кода в .htaccess файл:
				</p>
				<p>RewriteEngine on</p>
				<p>RewriteCond %{`{HTTP:HTTPS}`} !=on [NC]</p>
				<p>RewriteRule ^(.*)$ https://www.example.ru/$1 [R=301,L]</p>
				<p>и наоборот, с HTTPS на HTTP:</p>
				<p>RewriteEngine on</p>
				<p>RewriteCond %{`{HTTP:HTTPS}`} =on [NC]</p>
				<p>RewriteRule ^(.*)$ http://www.example.ru/$1 [R=301,L]</p>
				<p>
					<strong>
						Ограничение и разрешение доступа к сайту с определённых{" "}
					</strong>
					<strong>ip</strong>
					<strong>-адресов</strong>
				</p>
				<p>
					Чтобы ограничить доступа к сайту с определённых IP-адресов в файл
					.htaccess нужно добавить следующее:
				</p>
				<p>Order Allow,Deny</p>
				<p>Allow from all</p>
				<p>Deny from IP</p>
				<p>
					где вместо подстроки IP нужно добавить IP-адрес, для которого вам
					нужно будет ограничить доступ, или список таких IP-адресов разделённых
					пробелом.
				</p>
				<p>
					Если вы хотите разрешить доступ к сайту только с определённых
					IP-адресов, для этого вы можете добавить следующие строки:
				</p>
				<p>Order Deny,Allow</p>
				<p>Deny from all</p>
				<p>Allow from IP</p>
				<p>
					где IP — IP-адрес, для которого будет разрешён доступ, или список
					таких IP-адресов разделённых пробелом.
				</p>
				<p>
					<strong>&nbsp;Ограничение доступа к определённым файлам</strong>
				</p>
				<p>
					Настройка ограничений &nbsp;доступа к некоторым файлам выполняется
					путём добавления в .htaccess файл:
				</p>
				<p>&lt;Files ПУТЬ_К_ФАЙЛУ&gt;</p>
				<p>Order Deny,Allow</p>
				<p>Deny from all</p>
				<p>Allow from IP</p>
				<p>
					&lt;/Files&gt; Где путь _к_ файлу – необходимо заменить на целевой
					файл, а IP — на IP-адрес, по которому &nbsp;будет разрешён к нему
					доступ.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					<strong>.htaccess fayli</strong> veb-serverni qo'shimcha sozlash va
					erishish imkoniyatini beradi kabi maqsadlar:
				</p>
				<p>-saytlarga kirishni cheklash;</p>
				<p>-Boshqa domenga yo'naltirish;</p>
				<p>-Maxsus xato sahifalarini ko'rsatish;</p>
				<p>-PHP direktivalarida qiymatlarni o'zgartirish.</p>
				<p>
					<strong>Bir saytdan boshqasiga yo'naltirish</strong>
				</p>
				<p>
					Bir saytdan boshqasiga yo'naltirish uchun .htaccess fayliga quyidagi
					qatorlarni qo'shishingiz kerak:
				</p>
				<p>RewriteEngine on</p>
				<p>RewriteCond %{`{HTTP_HOST}`} ^(www\.)?from\.com$</p>
				<p>RewriteRule ^(.*)$ http://to.com/$1 [L,R=301]</p>
				<p>
					bu erda from\.com - qayta yo'naltiriladigan domen nomi va "to.com" -
					&nbsp;maqsad.
				</p>
				<p>
					Biroq, ikkinchi qatordagi teskari chiziq \ bilan nuqta belgisidan
					qochish ixtiyoriydir.
				</p>
				<p>
					<strong>HTTP-dan HTTPS-ga yo'naltirish</strong>
				</p>
				<p>
					HTTP protokolidan HTTPS protokoliga qayta yo'naltirish .htaccess ga
					&nbsp;kod qo'shish orqali amalga oshiriladi. fayl:
				</p>
				<p>RewriteEngine on</p>
				<p>RewriteCond %{`{HTTP:HTTPS}`} !=on [NC]</p>
				<p>RewriteRule ^(.*)$ https://www.example.ru/$1 [R=301,L]</p>
				<p>и наоборот, с HTTPS на HTTP:</p>
				<p>RewriteEngine on</p>
				<p>RewriteCond %{`{HTTP:HTTPS}`} =on [NC]</p>
				<p>RewriteRule ^(.*)$ http://www.example.ru/$1 [R=301,L]</p>
				<p>
					<strong>Cheklash va saytga kirishga ruxsat berish </strong>
					<strong>ip</strong>
					<strong>-manzillar</strong>
				</p>
				<p>
					Muayyan IP manzillardan saytga kirishni cheklash uchun .htaccess
					fayliga quyidagilarni qo'shing:
				</p>
				<p>Order Allow,Deny</p>
				<p>Allow from all</p>
				<p>Deny from IP</p>
				<p>
					bu erda pastki qator IP o'rniga kirishni cheklashingiz kerak bo'lgan
					IP-manzilni qo'shishingiz kerak yoki bunday IP manzillarning bo'sh
					joydan ajratilgan ro'yxati.
				</p>
				<p>
					Agar siz saytga faqat ma'lum IP manzillardan kirishga ruxsat berishni
					istasangiz, buning uchun qo'shishingiz mumkin quyidagi qatorlar:
				</p>
				<p>Order Deny,Allow</p>
				<p>Deny from all</p>
				<p>Allow from IP</p>
				<p>
					bu erda IP - kirishga ruxsat beriladigan IP manzili yoki bunday IP
					manzillarning bo'sh joy bilan ajratilgan ro'yxati.
				</p>
				<p>
					<strong>&nbsp;Muayyan fayllarga kirishni cheklash</strong>
				</p>
				<p>
					Ba'zi fayllarga &nbsp;kirish cheklovlarini o'rnatish .htaccess fayliga
					qo'shish orqali amalga oshiriladi:
				</p>
				<p>&lt;Files fayl_uchun_yol&gt;</p>
				<p>Order Deny,Allow</p>
				<p>Deny from all</p>
				<p>Allow from IP</p>
				<p>
					&lt;/Fayllar&gt; Qayerda _to_ yo'li faylni maqsadli fayl bilan, IP esa
					IP manzil bilan almashtirilishi kerak &nbsp;ga unga kirishga ruxsat
					beriladi.
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
