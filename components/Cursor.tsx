"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animate);
    };
    animate();
    document.addEventListener("mousemove", onMove);

    const interactive = document.querySelectorAll(
      "a, button, .proj-sweep, .exp-tab, .contact-link-row, [data-hover]"
    );
    const onEnter = () => {
      cur.style.width = "20px";
      cur.style.height = "20px";
      cur.style.background = "transparent";
      cur.style.border = "1px solid #0a0a0a";
      ring.style.width = "0px";
      ring.style.height = "0px";
    };
    const onLeave = () => {
      cur.style.width = "10px";
      cur.style.height = "10px";
      cur.style.background = "#0a0a0a";
      cur.style.border = "none";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
