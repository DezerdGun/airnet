import { useEffect, useState } from "react";

export function useSwiperLoop() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return { enabled: mounted, key: mounted ? "loop" : "ssr" };
}

export default useSwiperLoop;
