import { useRef, useState } from 'react'
import Link from 'next/link'
import { checkLang } from '@/utils/checkLang'
import { heroContent } from './heroContent'
import st from './hero.module.scss'

const plans = {
  0: { name: 'VIP+', price: '300 000', annual: '270 000', cpu: 4, ram: 6, disk: 100, tariff: 16, badge: 'popular' },
  5: { name: 'Strong', price: '200 000', annual: '180 000', cpu: 2, ram: 4, disk: 50, tariff: 14, badge: 'start' },
  6: { name: 'Mega', price: '800 000', annual: '720 000', cpu: 6, ram: 12, disk: 200, tariff: 51, badge: 'crm' },
}
const orderUrl = (tariff) => `https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=${tariff}`

function Card({ index, text, prefix }) {
  const plan = plans[index]
  const support = `${prefix}/support`
  const action = (href, label) => <Link href={href}><a className={st.order}>{label}</a></Link>
  if (plan) return <div className={st.card}>
    <div className={st.cardHeader}><strong>{plan.name}</strong><span>{text[plan.badge]}</span></div>
    <div className={st.price}><strong>{plan.price}</strong><span>{text.currency}</span></div>
    <dl>{[['CPU', `${plan.cpu} ${text.cores}`], ['RAM', `${plan.ram} ${text.gb}`], ['SSD', `${plan.disk} ${text.gb}`], ['TAS-IX / UZ-IX', text.speed]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    <a className={st.order} href={orderUrl(plan.tariff)}>{text.order} {plan.name}</a>
    <p className={st.annual}>{text.annual} <strong>{plan.annual} {text.currency}</strong></p>
  </div>
  if (index === 1) return <div className={st.card}>
    <div className={st.cardHeader}><strong>{text.bandwidth}</strong><span>{text.included}</span></div>
    <p className={st.cardDescription}>{text.networkNote}</p>
    <div className={st.bars}>{[['TAS-IX / UZ-IX', text.speed, '100%'], [text.internet, text.internetSpeed, '25%']].map(([label, value, width]) => <div key={label}>
      <div className={st.barLabel}><span>{label}</span><b>{value}</b></div><div className={st.track}><div style={{ width }} /></div>
    </div>)}</div>
    <ul className={st.checks}>{text.networkFeatures.map((item) => <li key={item}>{item}</li>)}</ul>
    {action(`${prefix}/vds`, text.primary[2])}
  </div>
  if (index === 2) return <div className={st.card}>
    <div className={st.cardHeader}><strong>{text.business}</strong><span>Tashkent</span></div>
    <ul className={st.checks}>{text.businessFeatures.map((item) => <li key={item}>{item}</li>)}</ul>
    {action(support, text.request)}<p className={st.annual}>{text.reply}</p>
  </div>
  if (index === 3) return <div className={st.card}>
    <div className={st.cardHeader}><strong>{text.trial}</strong><span>{text.free}</span></div>
    <fieldset className={st.trialFields} disabled aria-label={text.trial}>
      <input type="text" placeholder={text.trialName} aria-label={text.trialName} disabled />
      <input type="tel" placeholder="+998 __ ___-__-__" aria-label={text.trialPhone} disabled />
      <select aria-label={text.trialPurpose} defaultValue="" disabled><option value="">{text.trialPurpose}</option></select>
      <button className={st.order} type="button" disabled>{text.trialAction}</button>
    </fieldset>
    <p className={st.annual}>{text.trialContact}</p>
  </div>
  if (index === 4) return <div className={st.card}>
    <div className={st.cardHeader}><strong>{text.migration}</strong><span>{text.migrationFree}</span></div>
    <ol className={st.steps}>{text.steps.map(([title, description]) => <li key={title}><b>{title}</b><span>{description}</span></li>)}</ol>
    <p className={st.gift}>{text.gift}</p>{action(support, text.migrate)}
  </div>
  return <div className={st.terminal} aria-label={text.terminal}>
    <div className={st.terminalBar} aria-hidden="true"><i /><i /><i /></div>
    <pre><span>$</span>{' ssh root@vds.airnet.uz\nWelcome to Ubuntu 24.04 LTS\nLocation: Tashkent, UZ · Tier III\n\n'}<span>root@vds:~#</span>{' nproc && free -h | grep Mem\n4\nMem:   6.0Gi\n'}<span>root@vds:~#</span>{` echo "${text.ready}"\n`}<b>{text.ready} ✓</b>{'\n'}<span>root@vds:~#</span> ▌</pre>
  </div>
}

export default function Hero({ language }) {
  const [active, setActive] = useState(0)
  const tabs = useRef([])
  const text = heroContent[language] || heroContent.ru
  const prefix = checkLang(language)
  const vds = `${prefix}/vds`
  const support = `${prefix}/support`
  const primary = [vds, vds, vds, support, support, orderUrl(14), `${prefix}/vds/arenda-servera-bitrix`, vds]
  const secondary = [support, support, `${prefix}/details`, vds, 'https://t.me/airnetuzb', vds, 'tel:+998712028700', support]
  const selectWithKeyboard = (event, index) => {
    let next
    if (event.key === 'ArrowRight') next = (index + 1) % text.tabs.length
    else if (event.key === 'ArrowLeft') next = (index - 1 + text.tabs.length) % text.tabs.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = text.tabs.length - 1
    else return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
    tabs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }
  return <section className={st.hero} aria-label={text.label}>
    {text.tabs.map((label, index) => <div key={index} id={`hero-panel-${index}`} role="tabpanel"
      aria-labelledby={`hero-tab-${index}`} hidden={active !== index} tabIndex={0}>
      {active === index && <div className={st.inner}>
        <div className={st.copy}>
          <div className={st.badges}>{text.pills[index].map((pill) => <span key={pill}>{pill}</span>)}</div>
          <h2>{text.titles[index]}</h2>
          <p className={st.description}>{text.descriptions[index]}</p>
          <div className={st.actions}>
            <Link href={primary[index]}><a className={st.primary}>{text.primary[index]} <span aria-hidden="true">→</span></a></Link>
            <Link href={secondary[index]}><a className={st.secondary}>{text.secondary[index]}</a></Link>
          </div>
          <div className={st.stats}>{text.stats.map(([value, caption]) => <div key={caption}><strong>{value}</strong><span>{caption}</span></div>)}</div>
        </div>
        <aside><Card index={index} text={text} prefix={prefix} /></aside>
      </div>}
    </div>)}
    <div className={st.tabs} role="tablist" aria-label={text.label}>
      {text.tabs.map((label, index) => <button key={index} ref={(node) => { tabs.current[index] = node }}
        id={`hero-tab-${index}`} role="tab" type="button" aria-selected={active === index}
        aria-controls={`hero-panel-${index}`} tabIndex={active === index ? 0 : -1}
        onClick={() => setActive(index)} onKeyDown={(event) => selectWithKeyboard(event, index)}>{label}</button>)}
    </div>
  </section>
}
