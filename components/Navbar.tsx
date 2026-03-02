"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Active section tracking
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 94; // nav + ticker height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "shadow-[0_1px_0_#cdc7bc]" : ""
      }`}
      style={{
        background: "rgba(244,241,236,0.93)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #cdc7bc",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-12 flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, "#hero")}
          className="nav-link-line"
          style={{
            fontFamily: "var(--font-josefin)",
            fontWeight: 300,
            fontSize: "12px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            textDecoration: "none",
          }}
        >
          Prsanjeet Panwar
        </a>

        {/* Links */}
        <ul className="flex gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="nav-link-line"
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontWeight: 200,
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: active === link.href ? "#0a0a0a" : "#8a8279",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="mailto:prsanjeetpanwar729@gmail.com">
          <button
            className="btn-sweep"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              background: "#0a0a0a",
              color: "#f4f1ec",
              border: "none",
              padding: "9px 20px",
              cursor: "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span style={{ position: "relative", zIndex: 1 }}>Open to Work</span>
          </button>
        </a>
      </div>

      {/* Progress bar */}
      <div
        id="progress-bar"
        style={{
          height: "1px",
          background: "#0a0a0a",
          width: "0%",
          transition: "width 0.08s linear",
        }}
      />
    </nav>
  );
}
