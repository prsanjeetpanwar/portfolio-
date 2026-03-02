"use client";
const contactLinks = [
  {
    label: "Email",
    value: "prsanjeetpanwar729@gmail.com",
    href: "mailto:prsanjeetpanwar729@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9352768977",
    href: "tel:+919352768977",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/prsanjeetpanwar",
    href: "https://linkedin.com/in/prsanjeetpanwar",
  },
  {
    label: "GitHub",
    value: "github.com/prsanjeetpanwar",
    href: "https://github.com/prsanjeetpanwar",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "80vh",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          padding: "100px 64px 100px 48px",
          borderRight: "1px solid #cdc7bc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="reveal flex items-center gap-3 mb-8"
          style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#8a8279",
          }}
        >
          <span style={{ display: "block", width: "28px", height: "1px", background: "#8a8279" }} />
          Let&apos;s Connect
        </div>

        <h2
          className="reveal delay-100"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px,5vw,68px)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "28px",
          }}
        >
          Ready to build
          <br />
          something{" "}
          <em style={{ fontStyle: "italic" }}>great</em>
          <br />
          together?
        </h2>

        <p
          className="reveal delay-200"
          style={{
            color: "#8a8279",
            fontSize: "17px",
            maxWidth: "380px",
            lineHeight: 1.8,
            fontFamily: "var(--font-garamond)",
          }}
        >
          I&apos;m actively seeking software engineering roles where I can build
          scalable, impactful products and grow alongside talented teams.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "48px",
          }}
        >
          {contactLinks.map((link, i) => (
            <div
              key={link.label}
              className={`contact-link-row reveal delay-${(i + 1) * 100 as 100 | 200 | 300 | 400}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 0",
                borderBottom: "1px solid #cdc7bc",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector<HTMLElement>(".cl-label")!.style.color = "#0a0a0a";
                e.currentTarget.querySelector<HTMLElement>(".cl-arrow")!.style.transform = "translate(4px,-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector<HTMLElement>(".cl-label")!.style.color = "#8a8279";
                e.currentTarget.querySelector<HTMLElement>(".cl-arrow")!.style.transform = "translate(0,0)";
              }}
            >
              <div>
                <div
                  className="cl-label"
                  style={{
                    fontFamily: "var(--font-josefin)",
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#8a8279",
                    marginBottom: "4px",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </div>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontSize: "18px",
                    color: "#0a0a0a",
                    textDecoration: "none",
                  }}
                >
                  {link.value}
                </a>
              </div>
              <div
                className="cl-arrow"
                style={{ fontSize: "18px", color: "#8a8279", transition: "transform 0.2s" }}
              >
                ↗
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Animated rings */}
      <div
        style={{
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Big initials watermark */}
        <div
          style={{
            position: "absolute",
            fontFamily: "var(--font-playfair)",
            fontSize: "180px",
            fontWeight: 700,
            color: "rgba(244,241,236,0.03)",
            letterSpacing: "-0.08em",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          PP
        </div>

        {/* Pulse rings */}
        <div style={{ position: "relative", width: "280px", height: "280px" }}>
          {[80, 140, 200, 260].map((size, i) => (
            <div
              key={i}
              className="pulse-ring"
              style={{
                width: size + "px",
                height: size + "px",
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
          {/* Center dot */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "48px",
              height: "48px",
              background: "#f4f1ec",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#0a0a0a",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "48px",
            fontFamily: "var(--font-josefin)",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(244,241,236,0.25)",
          }}
        >
          Udaipur, Rajasthan, India
        </div>
      </div>
    </section>
  );
}
