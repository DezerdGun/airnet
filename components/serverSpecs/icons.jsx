const P = {
  ssd: (
    <>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 12v.01M7 16v.01" />
      <path d="M11 12h6M11 16h6" />
      <path d="M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" />
    </>
  ),
  ram: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="1" />
      <path d="M6 17v3M10 17v3M14 17v3M18 17v3" />
      <path d="M8 11h2v3H8zM14 11h2v3h-2z" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3" />
    </>
  ),
  raid: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5v.01M7 16.5v.01M11 7.5h6M11 16.5h6" />
    </>
  ),
  infinity: (
    <path d="M18.178 8c-2.9 0-4.6 3-6.178 4s-3.278 4-6.178 4a4 4 0 0 1 0-8c2.9 0 4.6 3 6.178 4s3.278 4 6.178 4a4 4 0 0 0 0-8" />
  ),
  bolt: <path d="M13 3v7h6l-8 11v-7H5l8-11" />,
  network: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M12 7.5v3.5M12 11H5v5.5M12 11h7v5.5" />
    </>
  ),
  folders: (
    <>
      <path d="M9 4h3l2 2h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1" />
      <path d="M16 16v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10c-4-2-7-5.5-7-10V6Z" />
      <path d="m9 12l2 2l4-4" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14-4L4 9" />
      <path d="M4 13a8 8 0 0 0 14 4l2-2" />
      <path d="M4 5v4h4M20 19v-4h-4" />
    </>
  ),
  arrowUpRight: <path d="M7 17L17 7M9 7h8v8" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
      <path d="M16 5.5a3 3 0 0 1 0 5M17 14a5 5 0 0 1 4 5v1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
      <path d="M4 14a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2zM20 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2z" />
      <path d="M17 19a3 3 0 0 1-3 2h-2" />
    </>
  ),
  certificate: (
    <>
      <circle cx="12" cy="10" r="5" />
      <path d="M9 14.5V21l3-1.5l3 1.5v-6.5" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6l-6 6" />,
};

export default function SpecIcon({ name, size = 22, className }) {
  const d = P[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {d}
    </svg>
  );
}
