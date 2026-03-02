"use client";
export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        color: "#f4f1ec",
        padding: "48px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-josefin)",
            fontWeight: 200,
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Prsanjeet Panwar
        </div>

        <div style={{ display: "flex", gap: "28px" }}>
          {[
            { label: "GitHub", href: "https://github.com/prsanjeetpanwar" },
            { label: "LinkedIn", href: "https://linkedin.com/in/prsanjeetpanwar" },
            { label: "Email", href: "mailto:prsanjeetpanwar729@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(244,241,236,0.3)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f4f1ec")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(244,241,236,0.3)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        <div
          style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(244,241,236,0.25)",
          }}
        >
          © 2025
        </div>
      </div>
    </footer>
  );
}
