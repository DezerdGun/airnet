import st from './tarifCard.module.scss';

export default function TarifCard({ tarif }) {
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
					<td>CPU</td>
					<td>RAM</td>
					<td>SSD</td>
				</tr>
				<tr>
					<th>{tarif.cpu} ядра</th>
					<th>{tarif.ram} ГБ</th>
					<th>{tarif.ssd} ГБ</th>
				</tr>
			</table>
			<table>
				<tr>
					<td colSpan={2}>ОС</td>
				</tr>
				<tr>
					<th colSpan={2}>Windows или Linux</th>
				</tr>
			</table>
			<table>
				<tr>
					<td>IP адресов</td>
					<td>Виртуализация</td>
				</tr>
				<tr>
					<th>1 адрес</th>
					<th>VMware</th>
				</tr>
			</table>
			<table>
				<tr>
					<td>Канал</td>
					<td>TAS-IX</td>
				</tr>
				<tr>
					<th>{tarif.net} Мбит/сек</th>
					<th>1 Гбит/сек</th>
				</tr>
			</table>
			<hr />
			<button>
				<a href={tarif.link}>Заказать сервер</a>
			</button>
		</div>
	);
}
