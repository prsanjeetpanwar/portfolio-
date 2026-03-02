"use client";
export default function Hero() {
  return (
    <section
      id="hero"
      className="grid"
      style={{
        minHeight: "100vh",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "1px solid #cdc7bc",
      }}
    >
      {/* LEFT */}
      <div
        className="flex flex-col justify-center"
        style={{
          padding: "90px 64px 90px 48px",
          borderRight: "1px solid #cdc7bc",
        }}
      >
        <div
          className="reveal flex items-center gap-3 mb-9"
          style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#8a8279",
          }}
        >
          <span style={{ display: "block", width: "24px", height: "1px", background: "#8a8279" }} />
          Software Engineer · Full Stack
        </div>

        <h1
          className="reveal delay-100"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(44px, 5.5vw, 78px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "10px",
          }}
        >
          Prsanjeet
          <br />
          <em style={{ fontStyle: "italic", color: "#8a8279" }}>Panwar</em>
        </h1>

        <div
          className="reveal delay-200"
          style={{
            fontFamily: "var(--font-josefin)",
            fontWeight: 200,
            fontSize: "12px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8a8279",
            marginBottom: "36px",
          }}
        >
          Building scalable, impactful products
        </div>

        <p
          className="reveal delay-300"
          style={{
            fontFamily: "var(--font-garamond)",
            fontSize: "17px",
            color: "#8a8279",
            maxWidth: "400px",
            lineHeight: 1.8,
            marginBottom: "52px",
          }}
        >
          Computer Science graduate with hands-on full-stack experience — cloud
          services, real-time systems, and AI-powered applications.
        </p>

        <div className="reveal delay-400 flex gap-3">
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}>
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
                padding: "14px 32px",
                cursor: "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>View Projects</span>
            </button>
          </a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}>
            <button
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                background: "none",
                color: "#0a0a0a",
                border: "1px solid #cdc7bc",
                padding: "14px 32px",
                cursor: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#0a0a0a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#cdc7bc")
              }
            >
              Get in Touch
            </button>
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="flex flex-col justify-center items-center gap-6"
        style={{ padding: "80px 48px" }}
      >
        {/* Stats grid */}
        <div
          className="reveal delay-100 w-full"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "#cdc7bc",
            maxWidth: "420px",
          }}
        >
          {[
            { num: "8.74", label: "GPA / 10.00" },
            { num: "14mo", label: "Industry Exp." },
            { num: "2+", label: "Live Projects" },
            { num: "3rd", label: "SIH National" },
          ].map((s) => (
            <div
              key={s.label}
              className="group"
              style={{
                background: "#f4f1ec",
                padding: "28px",
                transition: "background 0.3s, color 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#0a0a0a";
                el.style.color = "#f4f1ec";
                el.querySelectorAll<HTMLElement>("[data-muted]").forEach(
                  (c) => (c.style.color = "rgba(244,241,236,0.4)")
                );
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "#f4f1ec";
                el.style.color = "#0a0a0a";
                el.querySelectorAll<HTMLElement>("[data-muted]").forEach(
                  (c) => (c.style.color = "#8a8279")
                );
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "38px",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                data-muted
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#8a8279",
                  marginTop: "6px",
                  transition: "color 0.3s",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div
          className="reveal delay-200 w-full"
          style={{
            background: "#0a0a0a",
            color: "#f4f1ec",
            maxWidth: "420px",
            padding: "28px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "20px",
              paddingBottom: "14px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#e8655a" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f0be45" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#61c455" }} />
            <div
              style={{
                marginLeft: "auto",
                fontFamily: "var(--font-josefin)",
                fontSize: "9px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(244,241,236,0.25)",
              }}
            >
              panwar.dev
            </div>
          </div>
          {[
            { text: "// Current stack", type: "comment" },
            { text: "const engineer = {", type: "code" },
            { text: '  name: "Prsanjeet Panwar",', type: "string" },
            { text: '  role: "Full-Stack Engineer",', type: "string" },
            { text: '  stack: ["Next.js","TypeScript",', type: "string" },
            { text: '    "PostgreSQL","AWS"],', type: "string" },
            { text: '  status: "open_to_work",', type: "keyword" },
            { text: "};", type: "code", cursor: true },
          ].map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "11px",
                letterSpacing: "0.04em",
                marginBottom: "4px",
                lineHeight: 1.6,
                color:
                  line.type === "comment"
                    ? "rgba(244,241,236,0.22)"
                    : line.type === "string"
                    ? "#88c0a8"
                    : line.type === "keyword"
                    ? "#e8c07d"
                    : "rgba(244,241,236,0.65)",
                fontStyle: line.type === "comment" ? "italic" : "normal",
              }}
            >
              {line.text}
              {line.cursor && <span className="term-cursor" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
