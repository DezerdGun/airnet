import Container from '@/components/container'
import FAQ from '@/components/faq'
import Partners from '@/components/partners'
import { RegDomainBlock } from '@/components/regDomain'
import SEO from '@/components/seo'
import WhyBlock from '@/components/whyBlock'
import st from './domains.module.scss'

const content = [
		{
			title: { ru: 'Доверие', uz: 'Ishonch' },
			description: {
				ru: 'Наши опытные сотрудники помогут подобрать подходящий домен для вашего бизнеса или стартап проекта.',
				uz: "Bizning tajribali xodimlarimiz biznesingiz yoki startap loyihangiz uchun to'g'ri domenni tanlashingizga yordam beradi.",
			},

			img: '/',
		},
		{
			title: { ru: 'Автопродление', uz: 'Avtomatik yangilash' },
			description: {
				ru: 'Настройте автопродление или продлевайте домен вручную — мы заранее предупредим вас об окончании срока.',
				uz: "Domeningizni avtomatik yangilashni sozlang yoki qo'lda yangilang - muddat tugashi bilan biz sizni oldindan xabardor qilamiz.",
			},

			img: '/',
		},
		{
			title: { ru: 'Удобное управление', uz: 'Qulay boshqaruv' },
			description: {
				ru: 'Вы можете легко управлять доменами и другими нашими услугами в Личном кабинете.',
				uz: 'Boshqarish panelida domenlar va boshqa xizmatlarimizni osongina boshqarishingiz mumkin.',
			},

			img: '/',
		},
		{
			title: { ru: 'Конфиденциальность', uz: 'Maxfiylik' },
			description: {
				ru: 'Подключите функцию Privacy Protection, чтобы защитить ваши персональные данные от кражи.',
				uz: "Shaxsiy ma'lumotlaringizni o'g'irlikdan himoya qilish uchun Maxfiylikni himoya qilish funksiyasini yoqing.",
			},

			img: '/',
		},
	],
	faq = [
		{
			title: {
				ru: 'У меня уже есть домен, как разместить его на сервере?',
				uz: 'Menda allaqachon domen bor, uni serverda qanday joylashtirishim mumkin?',
			},
			description: {
				ru: (
					<>
						<p>
							Подписка позволяет автоматизировать процесс продления{' '}
							<span class='nobr'>SSL-сертификата</span>
							и&nbsp;сэкономить при единовременной оплате. Вы&nbsp;можете
							оформить подписку на&nbsp;2, 3, 4 года или 5 лет&nbsp;— чем больше
							срок, тем ниже цена сертификата.
						</p>
						<p>
							Каждый год, за&nbsp;2 недели до&nbsp;конца срока действия
							сертификата, система будет автоматически отправлять его
							на&nbsp;перевыпуск. Пройдя процедуру подтверждения,
							вы&nbsp;получите новый файл сертификата, который необходимо
							установить на&nbsp;сайте.
						</p>
						{/* <p>
					<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
				</p> */}
					</>
				),
				uz: (
					<>
						<p>
							Obuna yangilanish jarayonini avtomatlashtirish imkonini beradi{' '}
							<span class='nobr'>SSL sertifikati</span>
							va&nbsp;bir martalik toʻlov bilan tejang. Siz&nbsp;2-ga obuna
							boʻlishingiz mumkin,3, 4 yoki 5 yil - muddat qancha uzoq bo'lsa,
							sertifikatning narxi past bo'ladi.
						</p>
						<p>
							Tizim har yili sertifikatning amal qilish muddati
							tugashidan&nbsp;2 hafta oldin uni avtomatik ravishda&nbsp;qayta
							chiqarish uchun yuboring. Tasdiqlash jarayonidan o'tgandan so'ng,
							siz&nbsp;saytga o'rnatishingiz kerak bo'lgan yangi sertifikat
							faylini olasiz.
						</p>
						{/* <p>
					<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
				</p> */}
					</>
				),
			},
		},
		{
			title: {
				ru: 'Как продлить доменное имя?',
				uz: 'Domen nomini qanday yangilash kerak?',
			},
			description: <p></p>,
		},
		{
			title: {
				ru: 'Как перевести домен на обслуживание к нам от другого регистратора?',
				uz: "Bizga domenni boshqa registratordan qanday o'tkazish mumkin?",
			},
			description: <p></p>,
		},
		{
			title: {
				ru: 'Как заказать свидетельство на домен?',
				uz: 'Domen uchun sertifikatga qanday buyurtma berish mumkin?',
			},
			description: <p></p>,
		},
	]

export default function Domains({ language }) {
	const langData = {
		seoTitle: {
			ru: 'Регистрация домен UZ, Купить домен UZ | Хостинг TAS-IX в Ташкенте, Узбекистане',
			uz: "UZ domenini ro'yxatdan o'tkazish, UZ domenini sotib olish | Tashkent, O'zbekistondagi TAS-IX xostingi",
		},
		descTitle: {
			ru: 'Быстрая регистрация доменов, по самым низким ценам, в зоне uz',
			uz: 'Uz zonasida domenlarni tez, arzon narxlarda roʻyxatdan oʻtkazish',
		},
		headTitle: {
			ru: 'Регистрация доменного имени',
			uz: "Domen nomini ro'yxatdan o'tkazish",
		},
		t1: {
			ru: 'Об услуге',
			uz: 'Hizmatlar haqida',
		},
		t2: {
			ru: 'Доменное имя — это уникальный адрес, по которому открывается сайт в интернете.',
			uz: 'Domen nomi - bu Internetda veb-sayt ochiladigan noyob manzil.',
		},
		t3: {
			ru: 'У нас вы сможете подобрать красивое доменное имя по самым низким ценам, а ещё мы не повышаем стоимость домена при продлении.',
			uz: "Biz bilan siz eng arzon narxlarda chiroyli domen nomini olishingiz mumkin, bizda esa yo'q biz yangilanganda domen narxini oshiramiz.",
		},
		headTitle: {
			ru: 'Регистрация домена в зоне UZ',
			uz: "UZ zonasida domenni ro'yxatdan o'tkazish",
		},
		description: {
			ru: (
				<>
					<p>
						<a href='https://cctld.uz/reg/'>регистратором домен в зоне UZ</a>
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Uz Domeni registratori <a href='https://cctld.uz/reg/'>da</a>
					</p>
				</>
			),
		},
		reg: {
			ru: (
				<>
					<p>
						Перед регистрацией просим вас ознакомиться с{' '}
						<a href='https://cctld.uz/info/polru/'>
							Положением о порядке регистрации и пользования доменными именами в
							домене «UZ»
						</a>
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Ro'yxatdan o'tishdan oldin{' '}
						<a href='https://cctld.uz/info/polru/'>
							“UZ” domenida domen nomlarini ro‘yxatdan o‘tkazish va ulardan
							foydalanish tartibi to‘g‘risidagi nizom bn tanishib chiqing.
						</a>
					</p>
				</>
			),
		},
	}
	return (
		<>
			<SEO
				title={langData.seoTitle[language]}
				desc={langData.descTitle[language]}
			/>
			<Container headTitle={langData.headTitle[language]}>
				<hr />
				<div className={st.domains__block}>
					<div className={st.domains__block__content}>
						<h2>{langData.t1[language]}</h2>
						<p>{langData.t2[language]}</p>
						<p>{langData.t3[language]}</p>
					</div>
					<div className={st.domains__block__img}>
						<img src='/domain/intro-img.png' />
					</div>
				</div>
			</Container>
			<div className={st.domains}>
				<div className={st.domains__head}>
					<Container
						headTitle={langData.headTitle[language]}
						clNTitle='mb-3'
						description={<p>{langData.description[language]}</p>}
					>
						<div className={st.domains__head__block}>
							{/* <h3>Введите название доменного имени и нажмите на кнопку &quot;Проверить&quot;.</h3> */}
							<div className={st.domains__head__block__item}>
								<RegDomainBlock />
							</div>

							{langData.reg[language]}
							{/* <div className={st.domains__head__block__table}>
								<table>
									<tr>
										<th>Доменная зона</th>
										<th>Регистрации c хостингом</th>
										<th>С хостингом</th>
										<th>Без хостинга</th>
										<th>Redemption period</th>
										<th>Купить</th>
									</tr>
									<tr>
										<td>.UZ</td>
										<th>17 000 сум*</th>
										<th>
											<Link href="/free-domains">
												<a>Бесплатно*</a>
											</Link>
										</th>
										<th>20 000 сум*</th>
										<th>40 000 сум**</th>
										<th>
											<a href="https://billing.airnet.uz/billing.php?do=zones">Купить</a>
										</th>
									</tr>
								</table>
							</div> */}
						</div>
						{/* <p>
							Заказав у нас услугу хостинга или VDS/VPS, Вы также можете купить или перенести свой домен
							на нашу площадку. В случае надобности, мы Вам поможем - обращайтесь.
						</p>
						<p>* При регистрации хостинг с доменом</p>
						<p>
							** Redemption period - Домен получает данный статус после того, как истекли 7 рабочих дней
							после окончания срока регистрации. Домен переходит к Администрации домена UZ, при этом в
							течение 30 календарных дней предыдущий владелец может вернуть себе домен.
						</p> */}
					</Container>
				</div>
				<WhyBlock content={content} language={language} />
				<FAQ faq={faq} title='FAQ' language={language} />
				<Partners />
			</div>
		</>
	)
}
