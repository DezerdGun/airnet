const P = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  telegram: <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  cloud: <path d="M6.657 18c-2.572 0-4.657-2.007-4.657-4.483c0-2.475 2.085-4.482 4.657-4.482c.393-1.762 1.766-3.2 3.602-3.773c1.836-.572 3.863-.193 5.318.996c1.456 1.19 2.126 3.017 1.759 4.795h.964c1.906 0 3.45 1.554 3.45 3.472S20.206 18 18.3 18Z" />,
  server: <><rect x="3" y="4" width="18" height="8" rx="3" /><rect x="3" y="12" width="18" height="8" rx="3" /><path d="M7 8v.01M7 16v.01" /></>,
  database: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" /><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" /></>,
  world: <><circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 1 1 8 0v4" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7l9 6l9-6" /></>,
  chevron: <path d="m6 9l6 6l6-6" />,
  search: <><circle cx="10" cy="10" r="7" /><path d="m21 21l-6-6" /></>,
  server2: <><rect x="3" y="4" width="18" height="8" rx="3" /><rect x="3" y="12" width="18" height="8" rx="3" /><path d="M7 8v.01M7 16v.01M11 8h6M11 16h6" /></>,
  sliders: <path d="M4 6h8m4 0h4M4 12h4m4 0h8M4 18h10m4 0h2M12 4v4M8 10v4M14 16v4" />,
  gamepad: <><rect x="2" y="6" width="20" height="12" rx="4" /><path d="M6 12h4M8 10v4M15 11v.01M18 13v.01" /></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3" /></>,
  linux: <path d="M12 3c2.5 0 3.5 2 3.5 4.5c0 1.5 1 2.5 1.8 4c1.2 2.3 1.7 4.2.9 5.6c-.8 1.4-2.6 1.9-6.2 1.9s-5.4-.5-6.2-1.9c-.8-1.4-.3-3.3.9-5.6c.8-1.5 1.8-2.5 1.8-4C8.5 5 9.5 3 12 3Z" />,
  windows: <path d="M4 6.5L10.5 5.5v6H4zM12.5 5.2L20 4v7.5h-7.5zM4 12.5h6.5v6L4 17.5zM12.5 12.5H20V20l-7.5-1.2z" />,
  bitrix: <><path d="M3 9l2-4h14l2 4" /><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" /><path d="M9 20v-6h6v6" /></>,
  bolt: <><rect x="3" y="4" width="18" height="8" rx="3" /><path d="M7 8v.01" /><path d="M12 20H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h11" /><path d="m18 14l-2 4h4l-2 4" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10c-4-2-7-5.5-7-10V6Z" /><path d="m9 12l2 2l4-4" /></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14-4L4 9" /><path d="M4 13a8 8 0 0 0 14 4l2-2" /><path d="M4 5v4h4M20 19v-4h-4" /></>,
  network: <><circle cx="12" cy="6" r="3" /><circle cx="5" cy="18" r="3" /><circle cx="19" cy="18" r="3" /><path d="M12 9v3M12 12H5v3M12 12h7v3" /></>,
  point: <circle cx="12" cy="12" r="3" />,
  pin: <><path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11" /><circle cx="12" cy="10" r="2.5" /></>,
  store: <><path d="M3 9l2-4h14l2 4" /><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" /><path d="M9 20v-6h6v6" /></>,
  gift: <><rect x="3" y="9" width="18" height="12" rx="1" /><path d="M3 13h18M12 9v12" /><path d="M12 9C10 9 8 8 8 6a2 2 0 0 1 4 0c0 2-2 3-4 3M12 9c2 0 4-1 4-3a2 2 0 0 0-4 0c0 2 2 3 4 3" /></>,
  dns: <><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7v.01M7 17v.01" /></>,
  list: <path d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />,
  help: <><circle cx="12" cy="12" r="9" /><path d="M12 16v.01" /><path d="M12 13a2 2 0 1 0-2-2" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 10h18M7 15h3" /></>,
  headset: <><path d="M4 14v-3a8 8 0 1 1 16 0v3" /><path d="M4 14a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2zM20 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2z" /><path d="M17 19a3 3 0 0 1-3 2h-2" /></>,
  star: <path d="m12 4l2.5 5.2l5.5.8l-4 3.9l1 5.6l-5-2.7l-5 2.7l1-5.6l-4-3.9l5.5-.8z" />,
  certificate: <><circle cx="12" cy="10" r="5" /><path d="M9 14.5V21l3-1.5l3 1.5v-6.5" /></>,
  building: <><path d="M4 21V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15" /><path d="M15 10h4a1 1 0 0 1 1 1v10M3 21h18M8 9h3M8 13h3M8 17h3" /></>,
};
export default function Icon({ name, size = 16, className, color = "#ffffff" }) {
  const d = P[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {d}
    </svg>
  );
}
