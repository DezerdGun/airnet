import { useEffect, useRef, useState } from 'react';
import SEO from '@/components/seo';
import PageBreadcrumb from '@/components/seo/pageBreadCrumbs';
import content from './documentContent.json';
import st from './document.module.scss';

const docs = ['oferta', 'dogovor'];
const labels = ['Публичная оферта', 'Типовой договор'];

export default function DocumentPage() {
  const root = useRef(null);
  const buttons = useRef([]);
  const [active, setActive] = useState('oferta');
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const sync = () => {
      let hash;
      try { hash = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const doc = hash === 'dogovor' || hash.startsWith('d-') ? 'dogovor' : 'oferta';
      setActive(doc);
      docs.forEach(name => { root.current.querySelector(`#p-${name}`).hidden = name !== doc; });
      if (hash && !docs.includes(hash)) document.getElementById(hash)?.scrollIntoView();
    };
    sync();
    window.addEventListener('hashchange', sync);
    document.body.classList.add('airnet-offer-page');
    return () => {
      window.removeEventListener('hashchange', sync);
      document.body.classList.remove('airnet-offer-page');
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    const panel = root.current.querySelector(`#p-${active}`);
    const sections = [...panel.querySelectorAll('.sec')];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.find(entry => entry.isIntersecting);
      if (!visible) return;
      panel.querySelectorAll('.toc a').forEach(link => {
        const selected = link.hash === `#${visible.target.id}`;
        link.classList.toggle('on', selected);
        if (selected) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-130px 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [active]);

  function select(doc) {
    setActive(doc);
    docs.forEach(name => { root.current.querySelector(`#p-${name}`).hidden = name !== doc; });
    window.history.replaceState(null, '', `#${doc}`);
    root.current.scrollIntoView({ block: 'start' });
  }

  function keyboard(event, index) {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = 1 - index;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = 1;
    else return;
    event.preventDefault();
    select(docs[next]);
    buttons.current[next].focus();
  }

  async function onContentClick(event) {
    const go = event.target.closest('[data-go]');
    if (go) { event.preventDefault(); select(go.dataset.go); return; }
    const clause = event.target.closest('.cn');
    if (!clause || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(window.location.href.split('#')[0] + clause.getAttribute('href'));
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch { }
  }

  return <>
    <style jsx global>{`@media print { body.airnet-offer-page header, body.airnet-offer-page footer { display: none !important; } }`}</style>
    <SEO title="Публичная оферта и типовой договор | AIRNET" desc="Публичная оферта ООО «AIRNET» на оказание услуг хостинга и виртуальных серверов, а также типовой договор для юридических лиц." />
    <PageBreadcrumb language="ru" links={[{ name: { ru: 'Публичная оферта' } }]} />
    <main className={st.page} ref={root}>
      <div className="document-tabs wrap">
        <div className="switch" role="tablist" aria-label="Документ">
          {docs.map((doc, i) => <button type="button" key={doc} ref={el => { buttons.current[i] = el; }} id={`tab-${doc}`} role="tab" aria-controls={`p-${doc}`} aria-selected={active === doc} tabIndex={active === doc ? 0 : -1} onClick={() => select(doc)} onKeyDown={event => keyboard(event, i)}>{labels[i]}</button>)}
        </div>
        <button className="tbtn" type="button" onClick={() => window.print()}>Печать</button>
      </div>
      <div onClick={onContentClick} dangerouslySetInnerHTML={{ __html: content }} />
      <div className="copied" role="status" hidden={!copied}>Ссылка на пункт скопирована</div>
    </main>
  </>;
}
