"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");

  const lastPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    function updateAtPoint(x: number, y: number) {
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      const target = el?.closest?.("[data-cursor-link]") as HTMLElement | null;
      if (target) {
        setVisible(true);
        setLabel(target.dataset.cursorLink || "");
        setHref(target.dataset.cursorUrl || "");
      } else {
        setVisible(false);
        setLabel("");
        setHref("");
      }
    }

    function onMove(e: MouseEvent) {
      lastPos.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      updateAtPoint(e.clientX, e.clientY);
    }

    function onScroll() {
      const { x, y } = lastPos.current;
      updateAtPoint(x, y);
    }

    function onClick(e: MouseEvent) {
      const el = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement | null;
      const target = el?.closest?.("[data-cursor-link]") as HTMLElement | null;
      if (!target) return;
      const url = target.dataset.cursorUrl;
      if (!url) return;
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (anchor) return;
      window.open(url, "_blank");
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{ left: pos.x, top: pos.y, transform: "translate(-50%,-50%)" }}
      className={`fixed z-50 ${
        visible ? "opacity-100" : "opacity-0"
      } pointer-events-none select-none transition-opacity duration-150`}
    >
      <div className="bg-white text-black text-[16px] px-2 py-1 rounded-full flex items-center gap-1">
        <span>{label}</span>
        <ExternalLink width={16} />
      </div>
    </div>
  );
}
