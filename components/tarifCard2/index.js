import st from '../tarifCard/tarifCard.module.scss';

export default function TarifCard2({ tarif }) {
	return (
		<div className={st.tarifCard}>
			<div className={st.tarifCard__header}>
				<h4>{tarif.title}</h4>
				<div className={st.tarifCard__header__price}>
					<span>{tarif.price}</span>
					<span>
						сум
						<hr />
						мес
					</span>
				</div>
			</div>
			<table>
				<tr>
					<td>SSD</td>
					<td>Кол-во сайтов</td>
				</tr>
				<tr>
					<th>{tarif.ssd} МБ</th>
					<th>{tarif.sites} ядро</th>
				</tr>
			</table>
			<table>
				<tr>
					<td>SSL</td>
					<td>Домен .UZ</td>
				</tr>
				<tr>
					<th>Бесплатно</th>
					<th>В Подарок*</th>
				</tr>
			</table>
			<hr />
			<button>
				<a href={tarif.link}>Заказать сервер</a>
			</button>
		</div>
	);
}
