import { useEffect, useRef, useState } from "react";
import st from "./blogItem.module.scss";

const labels = {
  ru: { copy: "Нажмите, чтобы скопировать", copied: "Скопировано", error: "Не удалось скопировать. Выделите и скопируйте текст вручную." },
  uz: { copy: "Nusxalash uchun bosing", copied: "Nusxalandi", error: "Nusxalab bo‘lmadi. Matnni belgilang va qo‘lda nusxalang." },
  en: { copy: "Click to copy", copied: "Copied", error: "Could not copy. Select and copy the text manually." },
};

export default function CopyableContent({ children, language }) {
  const contentRef = useRef(null);
  const [message, setMessage] = useState("");
  const text = labels[language] || labels.ru;

  useEffect(() => {
    const container = contentRef.current;
    const blocks = Array.from(container.querySelectorAll("pre"));
    let active = true;
    let timer;
    setMessage("");

    blocks.forEach((block) => {
      block.tabIndex = 0;
      block.setAttribute("role", "button");
      block.setAttribute("aria-label", text.copy);
      block.setAttribute("data-copy-label", text.copy);
    });

    const copy = async (event) => {
      const block = event.target.closest("pre");
      if (!block || !blocks.includes(block)) return;
      if (event.type === "keydown") {
        if (event.target !== block || !["Enter", " "].includes(event.key)) return;
        event.preventDefault();
        if (event.repeat) return;
      } else if (window.getSelection()?.toString()) {
        return;
      }

      try {
        await navigator.clipboard.writeText(block.textContent || "");
        if (!active) return;
        clearTimeout(timer);
        blocks.forEach((item) => item.setAttribute("data-copy-label", text.copy));
        block.setAttribute("data-copy-label", text.copied);
        setMessage(text.copied);
        timer = setTimeout(() => {
          block.setAttribute("data-copy-label", text.copy);
          setMessage("");
        }, 2000);
      } catch {
        if (active) setMessage(text.error);
      }
    };

    container.addEventListener("click", copy);
    container.addEventListener("keydown", copy);
    return () => {
      active = false;
      clearTimeout(timer);
      container.removeEventListener("click", copy);
      container.removeEventListener("keydown", copy);
      blocks.forEach((block) => {
        block.removeAttribute("tabindex");
        block.removeAttribute("role");
        block.removeAttribute("aria-label");
        block.removeAttribute("data-copy-label");
      });
    };
  }, [children, text]);

  return <>
    <div ref={contentRef}>{children}</div>
    <div className={st.copyStatus} role="status" aria-live="polite">{message}</div>
  </>;
}
