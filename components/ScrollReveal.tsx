"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Reveal elements
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => revealObs.observe(el));

    // Skill bars
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".skill-bar").forEach((b) => {
              b.style.setProperty("--target-width", b.dataset.width || "0%");
              setTimeout(() => b.classList.add("animate"), 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".skill-cat").forEach((el) => barObs.observe(el));

    // GPA counter
    const gpaEl = document.getElementById("gpa-counter");
    if (gpaEl) {
      let started = false;
      const gpaObs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          let val = 0;
          const target = 8.74;
          const duration = 2000;
          const step = 16;
          const timer = setInterval(() => {
            val += (target / duration) * step;
            if (val >= target) { val = target; clearInterval(timer); }
            gpaEl.textContent = val.toFixed(2);
          }, step);
        }
      }, { threshold: 0.5 });
      gpaObs.observe(gpaEl);
    }

    // Progress bar
    const prog = document.getElementById("progress-bar");
    const onScroll = () => {
      if (!prog) return;
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      prog.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObs.disconnect();
      barObs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
