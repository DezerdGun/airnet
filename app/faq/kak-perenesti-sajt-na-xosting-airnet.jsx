import FaqInside from '@/components/faqInside'
import { LINKS } from '@/components/requirements'
import Link from 'next/link'

const data = {
	title: 'Как перенести сайт на хостинг AIRNET?',
	description: '',
	content: (
		<>
			<p>
				В рамках акции{' '}
				<Link href={LINKS.STOCK}>
					<a>Бесплатный перенос сайта</a>
				</Link>{' '}
				осуществляется перенос сайта на хостинг AIRNET нашими специалистами.
			</p>
			<p>
				Перенос может осуществляться с одного, уже размещенного на нашем
				хостинге аккаунта, на другой аккаунт, или с другого хостинга на наш.
			</p>
			<p>
				Перед выполнением переноса, необходимо определить, какие компоненты
				сайта будут переноситься.
			</p>
			<p>Каждый сайт условно состоит из нескольких частей:</p>
			<ul className='list'>
				<li>
					Контент (содержимое) сайта – файлы и папки, которые размещаются на
					нем;
				</li>
				<li>Базы данных – база данных содержащая материалы сайта;</li>
				<li>
					Доменные имена – имя сайта в символьной форме, например, domain.uz;
				</li>
			</ul>
			<p>
				Базы данных на сайте могут не использоваться, это зависит от его
				технической реализации.
			</p>
			<h2>1. ПЕРЕНОС ДОМЕНОВ САЙТА</h2>
			<p>
				При добавлении домена на наш хостинг, рекомендуем делегировать его на
				DNS-сервера компании Spaceweb:
			</p>
			<ul className='list'>
				<li>ns1.airnet.uz</li>
				<li>ns2.airnet.uz</li>
			</ul>
			<h2>2. ПЕРЕНОС СОДЕРЖИМОГО САЙТА</h2>
			<p>
				Для переноса содержимого сайта необходимо поместить содержимое папки с
				контентом сайта в аналогичную папку на новом аккаунте.
			</p>
			<p>
				Это можно сделать по протоколу FTP, скачав содержимое сайта на локальный
				компьютер, затем поместив его в папку web на новом аккаунте.
			</p>
			<h2>3. ПЕРЕНОС БАЗ ДАННЫХ</h2>
			<p>
				Для создания дампа можно воспользоваться функцией «Экспорт» программы
				phpMyAdmin. На нашем хостинге она доступна из панели управления, в
				разделе “Базы данных”, или по адресу
				https://hosting.airnet.uz/phpmyadmin/
			</p>
			<p>
				Для развертывания дампа также можно использовать приложение phpMyAdmin
				(функцию «Импорт»).
			</p>
			<h2>4. РЕДАКТИРОВАНИЕ КОНФИГУРАЦИОННЫХ ФАЙЛОВ</h2>
			<p>
				Если переносимый сайт использует базу данных, то после выполнения
				второго и третьего этапов, необходимо выполнить правку его
				конфигурационных файлов таким образом, чтобы корректно происходило
				подключение к перенесенной базе.
			</p>
			<p>В конфигурационном файле следует изменить следующие параметры:</p>
			<ul className='list'>
				<li>
					db_host – имя сервера баз данных, у нас используется значение
					localhost;
				</li>
				<li>db_name – имя базы данных;</li>
				<li>db_user – имя пользователя базы данных;</li>
				<li>db_password – пароль пользователя базы данных.</li>
			</ul>
			<p>
				Приводим имена конфигурационных файлов нескольких самых распространенных
				CMS:
			</p>
			<table
				align='center'
				border='1'
				cellPadding='1'
				cellSpacing='1'
				style={{ width: '500px;' }}
			>
				<tbody>
					<tr>
						<td>
							<span>
								<span>Приложение</span>
							</span>
						</td>
						<td>
							<span>
								<span>Имя конфигурационного файла</span>
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>
								<span>Joomla!</span>
							</span>
						</td>
						<td>
							<span>/configuration.php</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>
								<span>WordPress</span>
							</span>
						</td>
						<td>
							<span>/wp-config.php</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>Drupal</span>
						</td>
						<td>
							<span>/sites/default/settings.php</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>phpBB</span>
						</td>
						<td>
							<span>/config.php</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>Bitrix</span>
						</td>
						<td>
							<span>/bitrix/php_interface/dbconn.php</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>MOD.x</span>
						</td>
						<td>
							<span>/manager/includes/config.inc.php</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>RedMine</span>
						</td>
						<td>
							<span>/config/database.yml</span>
						</td>
					</tr>
				</tbody>
			</table>
			<p>
				В случае, если был заказан аккаунт без домена, то на аккаунте будет
				доступен технический домен вида [login].airnet.uz.
			</p>
		</>
	),
}

export default function FAQ() {
	return <FaqInside data={data} />
}
