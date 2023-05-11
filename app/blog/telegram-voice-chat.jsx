import BlogItem from "../../components/blogItem"

const data = {
	title: {
		ru: "В Telegram появились голосовые чаты и другие новые возможности",
		uz: "Telegram’da ovozli chatlar va boshqa yangi funksiyalar paydo bo‘ldi",
		en: "Voice chats and other new features appeared in Telegram",
	},
	desc: {
		ru: "В любой группе теперь можно запустить голосовой чат параллельно с обычной перепиской — текст и голос будут органично дополнять друг друга в едином пространстве.",
		uz: "Har qanday guruhda siz endi oddiy yozishmalar bilan parallel ravishda ovozli suhbatni amalga oshirishingiz mumkin - matn va ovoz bir fazoda bir-birini organik ravishda to'ldiradi.",
		en: "In any group, you can now run a voice chat in parallel with regular correspondence - text and voice will organically complement each other in a single space.",
	},
	date: "24.12.2020",
	img: "/blog/audio-call.jpg",
	content: {
		ru: (
			<>
				<h3>Голосовые чаты</h3>

				<p>
					В любой группе теперь можно запустить голосовой чат параллельно с обычной перепиской — текст и голос будут
					органично дополнять друг друга в едином пространстве.
				</p>
				<p>
					В отличие от обычных звонков, участникам не обязательно договариваться о времени: голосовой чат открыт для них
					всегда. Он может служить виртуальным офисом или площадкой для неформальных разговоров, которые не оставят
					следа в истории сообщений. В голосовых чатах крупных сообществ могут завязаться неожиданные знакомства.
				</p>
				<p>
					В группе сразу видно, кто из участников сейчас говорит в чате. Если люди интересны, можно присоединиться
					послушать — как к разговору коллег в соседнем кабинете.
				</p>
				<p>
					Пользователям Android доступен режим отображения поверх других приложений. В этом режиме можно управлять
					микрофоном и видеть, кто говорит в чате, даже если приложение Telegram свернуто.
				</p>

				<p>
					Запустить голосовой чат можно из профиля группы, если есть права администратора. Надо выбрать «Ещё» (… или ⋮){" "}
					{">"} «Голосовой чат».
				</p>
				<p>
					Ссылка на источник{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<h3>Ovozli yozuv</h3>

				<p>
					Har qanday guruhda siz endi parallel ravishda ovozli suhbatni boshlashingiz mumkin muntazam yozishmalar - matn
					va ovoz bir-birini organik ravishda to'ldiradi xuddi shu makonda do'st.
				</p>
				<p>
					Oddiy qo'ng'iroqlardan farqli o'laroq, ishtirokchilar rozi bo'lishlari shart emas vaqt haqida: ovozli chat
					ular uchun doimo ochiq. U xizmat qilishi mumkin virtual ofis yoki norasmiy suhbatlar uchun platforma xabarlar
					tarixida iz qoldirmaydi. Katta hajmdagi ovozli chatlarda jamoalar kutilmagan tanishlar qilishlari mumkin.
				</p>
				<p>
					Guruhda siz ishtirokchilardan qaysi biri hozir chatda gaplashayotganini darhol ko'rishingiz mumkin. Agar
					odamlar qiziq, siz tinglash uchun qo'shilishingiz mumkin - qanday gaplashish kerak keyingi ofisdagi
					hamkasblar. ​
				</p>
				<p>
					Android foydalanuvchilari boshqalarning ustiga displey rejimiga ega ilovalar. Ushbu rejimda siz mikrofonni
					boshqarishingiz va kimni ko'rishingiz mumkin Telegram ilovasi kichraytirilgan bo'lsa ham chatda gapiradi.
				</p>

				<p>
					Administrator ruxsatingiz bo'lsa, guruh profilidan ovozli suhbatni boshlashingiz mumkin . Tanlashingiz kerak
					«Ovozli xabar». (… yoki ⋮) {">"} «Yana»
				</p>
				<p>
					Manba'a uchun link{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		en: (
			<>
				<h3>Voice chats</h3>

				<p>
					In any group, you can now start a voice chat in parallel with regular correspondence - text and voice will
					organically complement each other friend in the same space.
				</p>
				<p>
					Unlike regular calls, participants do not have to agree about time: voice chat is always open for them. He can
					serve a virtual office or a platform for informal conversations that will not leave a trace in the message
					history. In voice chats of large communities may make unexpected acquaintances.
				</p>
				<p>
					In the group, you can immediately see which of the participants is currently speaking in the chat. If people
					are interesting, you can join to listen - how to talk colleagues in the next office.
				</p>
				<p>
					Android users have a display mode on top of others applications. In this mode, you can control the microphone
					and see who speaks in chat even if the Telegram app is minimized.
				</p>

				<p>
					You can start a voice chat from the group profile if you have permissions administrator. You must select
					"More" (... or ⋮) {">"} "Voice chat".
				</p>
				<p>
					Link to source{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/cyberpunk-2077",
	next: "/blog/2019-god-obyavlen-godom-aktivnyx-investicij-i-socialnogo-razvitiya",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
