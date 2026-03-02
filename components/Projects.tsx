
"use client";
const projects = [
  {
    num: "01",
    title: "AI-Powered Code Analysis Tool",
    year: "Jan 2025",
    desc: "Full-stack GitHub repository analysis platform integrating Google Gemini AI to automatically generate structured, developer-friendly commit summaries. Semantic codebase Q&A using LangChain text embeddings in pgvector, with an interactive analytics dashboard visualizing commit frequency and code churn trends.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Gemini API", "LangChain", "Docker", "Prisma", "Shadcn UI"],
    highlight: "AI · LangChain · pgvector",
  },
  {
    num: "02",
    title: "Collaborative Code Editor Platform",
    year: "Dec 2023",
    desc: "Real-time collaborative coding platform supporting simultaneous multi-user editing with live cursor synchronization, powered by Convex backend and Monaco Editor as the IDE. Integrated Clerk OAuth, Stripe subscriptions with webhook handling, and role-based access control for tiered subscription plans.",
    tags: ["Next.js", "TypeScript", "Convex", "Clerk", "Stripe", "Monaco Editor", "Shadcn UI", "Vercel"],
    highlight: "Real-time · WebSocket · Stripe",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 0",
        borderBottom: "1px solid #cdc7bc",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div
          className="reveal flex items-center gap-3 mb-5"
          style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#8a8279",
          }}
        >
          <span style={{ display: "block", width: "28px", height: "1px", background: "#8a8279" }} />
          Personal Projects
        </div>
        <h2
          className="reveal delay-100"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Things I&apos;ve{" "}
          <em style={{ fontStyle: "italic" }}>built</em> from scratch
        </h2>

        {/* Project list */}
        <div style={{ marginTop: "60px" }}>
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`proj-sweep reveal delay-${(i + 1) * 100 as 100 | 200}`}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 120px",
                gap: "40px",
                alignItems: "start",
                padding: "44px 0",
                borderBottom: "1px solid #cdc7bc",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.querySelectorAll<HTMLElement>("[data-proj-text]").forEach(
                  (c) => {
                    c.style.color = c.dataset.projText === "muted"
                      ? "rgba(244,241,236,0.5)"
                      : "rgba(244,241,236,0.9)";
                  }
                );
                el.querySelectorAll<HTMLElement>("[data-chip]").forEach(
                  (c) => {
                    c.style.borderColor = "rgba(244,241,236,0.2)";
                    c.style.color = "rgba(244,241,236,0.55)";
                  }
                );
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.querySelectorAll<HTMLElement>("[data-proj-text]").forEach(
                  (c) => {
                    c.style.color = c.dataset.projText === "muted" ? "#8a8279" : "#0a0a0a";
                  }
                );
                el.querySelectorAll<HTMLElement>("[data-chip]").forEach(
                  (c) => {
                    c.style.borderColor = "#cdc7bc";
                    c.style.color = "#0a0a0a";
                  }
                );
              }}
            >
              {/* Number */}
              <div
                data-proj-text="num"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "44px",
                  fontWeight: 400,
                  color: "#cdc7bc",
                  lineHeight: 1,
                  transition: "color 0.35s",
                }}
              >
                {proj.num}
              </div>

              {/* Body */}
              <div>
                <div
                  data-proj-text
                  style={{
                    fontFamily: "var(--font-josefin)",
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#8a8279",
                    marginBottom: "12px",
                    transition: "color 0.35s",
                  }}
                >
                  {proj.highlight}
                </div>
                <div
                  data-proj-text
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "24px",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    marginBottom: "14px",
                    transition: "color 0.35s",
                  }}
                >
                  {proj.title}
                </div>
                <div
                  data-proj-text="muted"
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontSize: "15px",
                    color: "#8a8279",
                    lineHeight: 1.75,
                    maxWidth: "600px",
                    transition: "color 0.35s",
                  }}
                >
                  {proj.desc}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "20px" }}>
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      data-chip
                      style={{
                        fontFamily: "var(--font-josefin)",
                        fontSize: "8px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        border: "1px solid #cdc7bc",
                        padding: "4px 10px",
                        transition: "all 0.35s",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div
                data-proj-text="muted"
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8a8279",
                  paddingTop: "6px",
                  transition: "color 0.35s",
                  textAlign: "right",
                }}
              >
                {proj.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
