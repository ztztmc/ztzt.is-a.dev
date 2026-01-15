"use client";

import { useEffect, useState } from "react";

const CELL_SIZE = 24;
const LINE_COLOR = "rgba(255,255,255,0.009)";
const DEFAULT_FILL = "#1c1c1c";

export default function PixelArt() {
  const [cols, setCols] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [grid, setGrid] = useState<string[]>([]);

  useEffect(() => {
    function update() {
      const c = Math.ceil(window.innerWidth / CELL_SIZE);
      const r = Math.ceil(document.documentElement.scrollHeight / CELL_SIZE);
      setCols(c);
      setRows(r);
      setGrid((prev) => {
        const newLen = c * r;
        if (prev.length === newLen) return prev;
        if (prev.length < newLen)
          return [...prev, ...Array(newLen - prev.length).fill("transparent")];
        return prev.slice(0, newLen);
      });
    }

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

  useEffect(() => {
    function onGlobalClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest(
          "a,button,input,textarea,select,label,[data-cursor-link]"
        )
      )
        return;
      if (cols <= 0) return;
      const x = (e as MouseEvent).pageX;
      const y = (e as MouseEvent).pageY;
      const col = Math.floor(x / CELL_SIZE);
      const row = Math.floor(y / CELL_SIZE);
      if (col < 0 || col >= cols || row < 0 || row >= rows) return;
      const index = row * cols + col;
      setGrid((prev) => {
        const next = [...prev];
        next[index] = DEFAULT_FILL;
        return next;
      });
    }

    window.addEventListener("click", onGlobalClick);
    return () => window.removeEventListener("click", onGlobalClick);
  }, [cols, rows]);

  const isDrawingRef = { current: false } as { current: boolean };
  const lastIndexRef = { current: -1 } as { current: number };

  const paintAt = (x: number, y: number) => {
    if (cols <= 0) return;
    const col = Math.floor(x / CELL_SIZE);
    const row = Math.floor(y / CELL_SIZE);
    if (col < 0 || col >= cols || row < 0 || row >= rows) return;
    const index = row * cols + col;
    if (index === lastIndexRef.current) return;
    lastIndexRef.current = index;
    setGrid((prev) => {
      const next = [...prev];
      if (next[index] === DEFAULT_FILL) return prev;
      next[index] = DEFAULT_FILL;
      return next;
    });
  };

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest(
          "a,button,input,textarea,select,label,[data-cursor-link]"
        )
      )
        return;
      isDrawingRef.current = true;
      lastIndexRef.current = -1;
      paintAt(e.pageX, e.pageY);
    }

    function onPointerMove(e: PointerEvent) {
      if (!isDrawingRef.current) return;
      paintAt(e.pageX, e.pageY);
    }

    function onPointerUp() {
      isDrawingRef.current = false;
      lastIndexRef.current = -1;
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest(
          "a,button,input,textarea,select,label,[data-cursor-link]"
        )
      )
        return;
      isDrawingRef.current = true;
      lastIndexRef.current = -1;
      paintAt(t.pageX, t.pageY);
    }
    function onTouchMove(e: TouchEvent) {
      if (!isDrawingRef.current) return;
      const t = e.touches[0];
      if (!t) return;
      paintAt(t.pageX, t.pageY);
    }
    function onTouchEnd() {
      isDrawingRef.current = false;
      lastIndexRef.current = -1;
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [cols, rows]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{
        backgroundColor: "transparent",
        display: "grid",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
        gridAutoRows: `${CELL_SIZE}px`,
      }}
    >
      {grid.map((color, index) => (
        <div
          key={index}
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            backgroundColor: color,
            boxSizing: "border-box",
            border: `1px solid ${LINE_COLOR}`,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
