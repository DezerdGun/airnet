import { useState } from 'react';
import Link from 'next/link';
import SEO from '@/components/seo';
import { checkLang } from '@/utils/checkLang';
import { content } from './content';
import st from './documents.module.scss';

function Icon({ download = false }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={download ? 'M12 4v11M7 10l5 5 5-5M5 20h14' : 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4'} /></svg>;
}
function Choice({ label, options, value, onChange }) {
  return <div className={st.choice} role="group" aria-label={label}>{['fiz', 'yur'].map((key, i) => <button key={key} type="button" aria-pressed={value === key} onClick={() => onChange(key)}>{options[i]}</button>)}</div>;
}
export default function Documents({ language = 'ru' }) {
  const t = content[language] || content.ru;
  const prefix = checkLang(language);
  const [who, setWho] = useState('fiz');
  const [to, setTo] = useState('fiz');
  const person = key => t.people[key === 'fiz' ? 0 : 1];
  return <>
    <SEO title={`${t.title} | AIRNET`} desc={t.intro} />
    <div className={st.breadcrumbBar}>
      <nav className={st.breadcrumb} aria-label={t.title}><Link href={prefix || '/'}><a>{t.home}</a></Link><span aria-hidden="true">/</span><span aria-current="page">{t.title}</span></nav>
    </div>
    <main className={st.page}><div className={st.inner}>
      <header className={st.heading}><h1>{t.title}</h1><p>{t.intro}</p></header>
      <section className={st.contract} aria-labelledby="contract-heading">
        <div className={st.contractBody}><div className={st.icon}><Icon /></div><div><span className={st.eyebrow}>{t.main}</span><h2 id="contract-heading">{t.contract}</h2><p>{t.terms}</p><div className={st.links}>{['/oferta', '/details', '/privacy-policy'].map((url, i) => <Link href={prefix + url} key={url}><a>{t.links[i]}</a></Link>)}</div></div></div>
        <div className={st.contractActions}><Link href={prefix + '/oferta'}><a className={st.primary}>{t.individualOffer}</a></Link><a className={st.primary} href="/documents/Agreement-№-XXXX.pdf" download><Icon download />{t.companyPdf}</a></div>
      </section>
      <h2 className={st.sectionTitle}>{t.forms}</h2><p className={st.sub}>{t.find}</p>
      <div className={st.filter}><strong>{t.who}</strong><Choice label={t.who} options={t.people} value={who} onChange={setWho} /><span>{t.current}</span></div>
      {t.groups.map((group, index) => <section className={st.group} key={group.title} aria-labelledby={`document-group-${index}`}>
        <header><h3 id={`document-group-${index}`}>{group.title}</h3><p>{group.hint}</p>{index === 0 && <div className={st.recipient}><strong>{t.to}</strong><Choice label={t.to} options={t.recipients} value={to} onChange={setTo} /></div>}</header>
        {group.docs.map(([key, name, hint]) => <div className={st.row} id={key} key={key}><Icon /><div className={st.description}><h4>{name}</h4><p>{hint}</p></div><span className={st.fileType}>DOCX · {person(who)}{index === 0 && ` → ${person(to)}`}</span><a className={st.download} href={`/downloads/applications/${key}-${who}${index === 0 ? '-' + to : ''}.docx`} download aria-label={`${t.download}: ${name} (${person(who)}${index === 0 ? ' → ' + person(to) : ''})`}><Icon download />{t.download}</a></div>)}
      </section>)}
      <section className={st.instructions} aria-labelledby="submit-heading"><h2 id="submit-heading">{t.submit}</h2><ol>{t.steps.map(([title, description], i) => <li key={title}><span className={st.number}>{i + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></section>
      <section className={st.support}><div><h2>{t.help}</h2><p>{t.helpText}</p></div><div className={st.supportLinks}><a href="https://t.me/airnetuzb" target="_blank" rel="noopener noreferrer">{t.telegram}</a><a href="https://billing.airnet.uz/billing.php?do=tickets" target="_blank" rel="noopener noreferrer">{t.ticket}</a><a href="tel:+998712028700">+998 71 202-87-00</a></div></section>
    </div></main>
  </>;
}
