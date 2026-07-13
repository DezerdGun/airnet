import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import st from "./chatlive.module.scss";

const API_URL =
  process.env.NEXT_PUBLIC_CHATLIVE_URL ||
  "https://billing.airnet.uz/chatlive_guest_api.php";
const STORAGE_KEY = "airnet_chatlive_v1";
const POLL_MIN = 3000;
const POLL_MAX = 15000;

const L = {
  ru: {
    launcherTitle: "Написать нам",
    headerTitle: "Онлайн-чат",
    headerSub: "Онлайн · отвечаем за несколько минут",
    formTitle: "Здравствуйте! Давайте познакомимся",
    formName: "Ваше имя",
    formNamePh: "Иван",
    formPhone: "Телефон",
    formPhonePh: "+998 __ ___ __ __",
    formSubmit: "Начать чат",
    inputPh: "Напишите сообщение…",
    empty: "Здравствуйте! Задайте свой вопрос — мы онлайн.",
    sending: "Отправка…",
    errNet: "Ошибка сети — попробуйте ещё раз",
    errName: "Укажите имя (минимум 2 символа)",
    errPhone: "Укажите телефон (минимум 7 цифр)",
    errRate: "Слишком много обращений с вашего IP. Позвоните: 78 150 15 15",
    errBlocked: "Чат недоступен — обратитесь по телефону 78 150 15 15",
    you: "Вы",
    op: "AIRNET",
    poweredBy: "AIRNET Live Chat",
    back: "Сменить данные",
    close: "Свернуть",
    online: "онлайн",
  },
  uz: {
    launcherTitle: "Bizga yozing",
    headerTitle: "Onlayn chat",
    headerSub: "Onlayn · bir necha daqiqada javob beramiz",
    formTitle: "Salom! Tanishaylik",
    formName: "Ismingiz",
    formNamePh: "Aziz",
    formPhone: "Telefon",
    formPhonePh: "+998 __ ___ __ __",
    formSubmit: "Chatni boshlash",
    inputPh: "Xabaringizni yozing…",
    empty: "Salom! Savolingizni bering — biz onlaynmiz.",
    sending: "Yuborilmoqda…",
    errNet: "Tarmoq xatosi — qayta urinib ko'ring",
    errName: "Ismingizni kiriting (kamida 2 belgi)",
    errPhone: "Telefonni kiriting (kamida 7 raqam)",
    errRate: "Sizning IP dan juda ko'p urinishlar. Qo'ng'iroq qiling: 78 150 15 15",
    errBlocked: "Chat mavjud emas — 78 150 15 15 raqamiga qo'ng'iroq qiling",
    you: "Siz",
    op: "AIRNET",
    poweredBy: "AIRNET Live Chat",
    back: "Ma'lumotlarni o'zgartirish",
    close: "Yopish",
    online: "onlayn",
  },
  en: {
    launcherTitle: "Chat with us",
    headerTitle: "Live chat",
    headerSub: "Online · we reply in a few minutes",
    formTitle: "Hello! Let's introduce",
    formName: "Your name",
    formNamePh: "John",
    formPhone: "Phone",
    formPhonePh: "+998 __ ___ __ __",
    formSubmit: "Start chat",
    inputPh: "Type a message…",
    empty: "Hi! Ask your question — we are online.",
    sending: "Sending…",
    errNet: "Network error — try again",
    errName: "Enter your name (min 2 chars)",
    errPhone: "Enter your phone (min 7 digits)",
    errRate: "Too many chats from your IP. Call: 78 150 15 15",
    errBlocked: "Chat unavailable — please call 78 150 15 15",
    you: "You",
    op: "AIRNET",
    poweredBy: "AIRNET Live Chat",
    back: "Change info",
    close: "Close",
    online: "online",
  },
};

function loadState() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !s.token || !s.thread_id) return null;
    return s;
  } catch (e) {
    return null;
  }
}
function saveState(s) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) {}
}
function clearState() {
  if (typeof window === "undefined") return;
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

function fmtTime(iso) {
  if (!iso) return "";
  const d = new Date(iso.replace(" ", "T"));
  if (isNaN(d.getTime())) return "";
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return hh + ":" + mm;
}

async function apiPost(action, params) {
  const body = new URLSearchParams();
  body.set("action", action);
  Object.keys(params || {}).forEach((k) => { if (params[k] != null) body.set(k, params[k]); });
  const res = await fetch(API_URL, { method: "POST", body, credentials: "omit" });
  return res.json();
}
async function apiGet(action, params) {
  const q = new URLSearchParams();
  q.set("action", action);
  Object.keys(params || {}).forEach((k) => { if (params[k] != null) q.set(k, params[k]); });
  const res = await fetch(API_URL + "?" + q.toString(), { method: "GET", credentials: "omit" });
  return res.json();
}

export default function ChatLiveWidget({ language = "ru" }) {
  const t = L[language] || L.ru;
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [blocked, setBlocked] = useState(false);
  const [unread, setUnread] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");
  const [ready, setReady] = useState(false);
  const boxRef = useRef(null);
  const pollTimerRef = useRef(null);
  const pollDelayRef = useRef(POLL_MIN);
  const lastMsgIdRef = useRef(0);

  useEffect(() => {
    const s = loadState();
    if (s) {
      setSession(s);
      apiPost("guest_init", { token: s.token })
        .then((r) => {
          if (r && r.thread_id) {
            const upd = { ...s, thread_id: r.thread_id, token: r.token };
            saveState(upd);
            setSession(upd);
            setMessages(r.messages || []);
            setBlocked(!!r.blocked);
            const arr = r.messages || [];
            lastMsgIdRef.current = arr.length ? arr[arr.length - 1].id : 0;
          } else {
            clearState();
            setSession(null);
          }
        })
        .catch(() => {})
        .finally(() => setReady(true));
    } else {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages.length, open]);

  const poll = useCallback(async () => {
    if (!session) return;
    try {
      const r = await apiGet("guest_poll", {
        token: session.token,
        thread_id: session.thread_id,
        since_id: lastMsgIdRef.current,
      });
      if (r && Array.isArray(r.messages) && r.messages.length) {
        let changed = false;
        setMessages((prev) => {
          const known = new Map(prev.map((m) => [m.id, m]));
          r.messages.forEach((m) => {
            if (!known.has(m.id) || known.get(m.id).edited !== m.edited || known.get(m.id).deleted !== m.deleted) {
              known.set(m.id, m);
              changed = true;
            }
          });
          const out = Array.from(known.values()).sort((a, b) => a.id - b.id);
          if (out.length) lastMsgIdRef.current = out[out.length - 1].id;
          return out;
        });
        if (changed && !open) setUnread((u) => u + r.messages.filter((m) => m.sender_type === "admin").length);
        pollDelayRef.current = POLL_MIN;
      } else {
        pollDelayRef.current = Math.min(POLL_MAX, Math.round(pollDelayRef.current * 1.3));
      }
      if (r && typeof r.blocked !== "undefined") setBlocked(!!r.blocked);
    } catch (e) {
      pollDelayRef.current = Math.min(POLL_MAX, Math.round(pollDelayRef.current * 1.5));
    }
  }, [session, open]);

  useEffect(() => {
    if (!session) return;
    if (typeof document !== "undefined" && document.hidden) return;
    const tick = () => {
      poll().finally(() => {
        pollTimerRef.current = setTimeout(tick, pollDelayRef.current);
      });
    };
    pollTimerRef.current = setTimeout(tick, pollDelayRef.current);
    return () => { if (pollTimerRef.current) clearTimeout(pollTimerRef.current); };
  }, [session, poll]);

  const startSession = async () => {
    setErr("");
    const nm = name.trim();
    const ph = phone.trim();
    if (nm.length < 2) { setErr(t.errName); return; }
    if (ph.replace(/\D/g, "").length < 7) { setErr(t.errPhone); return; }
    setSending(true);
    try {
      const page = typeof window !== "undefined" ? window.location.pathname : "";
      const r = await apiPost("guest_init", { name: nm, phone: ph, page });
      if (r && r.error === "rate_limit") { setErr(t.errRate); return; }
      if (r && r.error) { setErr(r.detail || t.errNet); return; }
      const s = { token: r.token, thread_id: r.thread_id, guest_name: r.guest_name, guest_phone: r.guest_phone };
      saveState(s);
      setSession(s);
      setMessages(r.messages || []);
      setBlocked(!!r.blocked);
      lastMsgIdRef.current = (r.messages || []).reduce((mx, m) => Math.max(mx, m.id), 0);
    } catch (e) {
      setErr(t.errNet);
    } finally {
      setSending(false);
    }
  };

  const sendMessage = async () => {
    if (!session || !text.trim() || sending) return;
    if (blocked) { setErr(t.errBlocked); return; }
    setSending(true);
    setErr("");
    const msg = text.trim();
    try {
      const r = await apiPost("guest_send", { token: session.token, thread_id: session.thread_id, message: msg });
      if (r && r.error === "thread_blocked") { setBlocked(true); setErr(t.errBlocked); return; }
      if (r && r.error) { setErr(r.detail || t.errNet); return; }
      if (r && r.message) {
        setMessages((prev) => [...prev, r.message]);
        lastMsgIdRef.current = r.message.id;
      }
      setText("");
    } catch (e) {
      setErr(t.errNet);
    } finally {
      setSending(false);
    }
  };

  const onLauncherClick = () => {
    setOpen((v) => !v);
    if (!open) setUnread(0);
  };
  const onReset = () => {
    clearState();
    setSession(null);
    setMessages([]);
    setName("");
    setPhone("");
    setText("");
    setErr("");
    lastMsgIdRef.current = 0;
  };

  const groups = useMemo(() => groupByDay(messages, language), [messages, language]);

  if (!ready) return null;

  return (
    <>
      <button
        type="button"
        aria-label={t.launcherTitle}
        className={`${st.launcher} ${open ? st.launcherOpen : ""}`}
        onClick={onLauncherClick}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff" stroke="none">
            <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.4L4.9 21.1a1 1 0 0 1-1.6-.8V6a2 2 0 0 1 .7-1.5A2 2 0 0 1 4 4Zm3.5 6.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm4.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm4.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"/>
          </svg>
        )}
        {unread > 0 && !open ? <span className={st.launcherBadge}>{unread > 99 ? "99+" : unread}</span> : null}
      </button>

      <div className={`${st.panel} ${open ? st.panelOpen : ""}`} role="dialog" aria-modal="false" aria-label={t.headerTitle}>
        <div className={st.header}>
          <div className={st.headerLeft}>
            <div className={st.headerAvatar}>A</div>
            <div>
              <div className={st.headerTitle}>{t.headerTitle}</div>
              <div className={st.headerSub}><span className={st.dot} />{t.headerSub}</div>
            </div>
          </div>
          <button type="button" className={st.headerClose} onClick={() => setOpen(false)} aria-label={t.close}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </button>
        </div>

        {!session ? (
          <div className={st.form}>
            <div className={st.formHello}>👋 {t.formTitle}</div>
            <label className={st.field}>
              <span className={st.fieldLabel}>{t.formName}</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.formNamePh} maxLength={120} autoComplete="name" />
            </label>
            <label className={st.field}>
              <span className={st.fieldLabel}>{t.formPhone}</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.formPhonePh} maxLength={40} autoComplete="tel" />
            </label>
            {err ? <div className={st.errBanner}>{err}</div> : null}
            <button type="button" className={st.submitBtn} onClick={startSession} disabled={sending}>
              {sending ? t.sending : t.formSubmit}
            </button>
            <div className={st.footerNote}>{t.poweredBy}</div>
          </div>
        ) : (
          <>
            <div className={st.messages} ref={boxRef}>
              {messages.length === 0 ? (
                <div className={st.emptyState}>{t.empty}</div>
              ) : null}
              {groups.map((g, gi) => (
                <div key={gi}>
                  <div className={st.dayLabel}><span>{g.label}</span></div>
                  {g.items.map((m) => {
                    const mine = m.sender_type === "user";
                    return (
                      <div key={m.id} className={`${st.msgRow} ${mine ? st.msgRowMine : st.msgRowThem}`}>
                        <div className={`${st.bubble} ${mine ? st.bubbleMine : st.bubbleThem}`}>
                          {!mine ? <div className={st.senderName}>{m.sender_name || t.op}</div> : null}
                          {m.deleted ? <span className={st.deleted}>—</span> : <span className={st.msgText}>{m.message}</span>}
                          <span className={st.time}>{fmtTime(m.created)}{m.edited ? " · ✎" : ""}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            {blocked ? <div className={st.blockedBanner}>🔒 {t.errBlocked}</div> : null}
            {err ? <div className={st.errInline}>{err}</div> : null}
            <div className={st.inputBar}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
                }}
                placeholder={t.inputPh}
                rows={1}
                maxLength={4000}
                disabled={blocked}
                spellCheck={false}
                data-gramm="false"
                data-gramm_editor="false"
                data-enable-grammarly="false"
              />
              <button type="button" onClick={sendMessage} disabled={sending || !text.trim() || blocked} aria-label={t.formSubmit}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2z"></path>
                </svg>
              </button>
            </div>
            <div className={st.footerBar}>
              <button type="button" className={st.resetBtn} onClick={onReset}>{t.back}</button>
              <span>{t.poweredBy}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function groupByDay(messages, language) {
  const monthNames = {
    ru: ["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"],
    uz: ["yan","fev","mar","apr","may","iyn","iyl","avg","sen","okt","noy","dek"],
    en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  };
  const mon = monthNames[language] || monthNames.ru;
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const fmt = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const todayKey = fmt(today);
  const yKey = fmt(yesterday);
  const groups = [];
  let lastKey = null;
  messages.forEach((m) => {
    const d = new Date((m.created || "").replace(" ", "T"));
    if (isNaN(d.getTime())) return;
    const k = fmt(d);
    let label;
    if (k === todayKey) label = { ru: "Сегодня", uz: "Bugun", en: "Today" }[language] || "Сегодня";
    else if (k === yKey) label = { ru: "Вчера", uz: "Kecha", en: "Yesterday" }[language] || "Вчера";
    else label = `${d.getDate()} ${mon[d.getMonth()]}`;
    if (k !== lastKey) { groups.push({ label, items: [] }); lastKey = k; }
    groups[groups.length - 1].items.push(m);
  });
  return groups;
}
