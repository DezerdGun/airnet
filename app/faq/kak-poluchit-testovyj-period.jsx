import FaqInside from "@/components/faqInside"

const data = {
	title: {
		ru: "Как получить тестовый период?",
		uz: "Qanday qilib tajriba vaqtinni olish mumkin?",
		en: "How to get a trial period?",
	},
	description: { ru: "", uz: "", en: "" },
	content: {
		ru: <p>Мы предоставляем тестовый период автоматически, сразу после регистрации аккаунта у нас:</p>,
		uz: (
			<p>Biz darhol sinov muddatini avtomatik ravishda taqdim etamiz bizda hisob qaydnomasini ro'yxatdan o'tkazish:</p>
		),
		en: <p>We provide a trial period automatically, immediately after registering an account with us:</p>,
	},
}

export default function KakPoluchitTestovyjPeriod({ language }) {
	return <FaqInside data={data} language={language} />
}
