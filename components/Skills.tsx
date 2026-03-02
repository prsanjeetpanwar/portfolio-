"use client";
const categories = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", pct: 92 },
      { name: "JavaScript", pct: 94 },
      { name: "Python", pct: 72 },
      { name: "SQL", pct: 84 },
      { name: "C++", pct: 65 },
    ],
  },
  {
    title: "Frontend & Backend",
    skills: [
      { name: "Next.js", pct: 90 },
      { name: "React.js", pct: 88 },
      { name: "Node.js", pct: 85 },
      { name: "Fastify", pct: 78 },
      { name: "Nest.js", pct: 70 },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", pct: 87 },
      { name: "Redis", pct: 80 },
      { name: "MongoDB", pct: 76 },
      { name: "Docker", pct: 75 },
      { name: "AWS", pct: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 0",
        borderBottom: "1px solid rgba(244,241,236,0.08)",
        background: "#0a0a0a",
        color: "#f4f1ec",
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
            color: "rgba(244,241,236,0.35)",
          }}
        >
          <span
            style={{
              display: "block",
              width: "28px",
              height: "1px",
              background: "rgba(244,241,236,0.35)",
            }}
          />
          Technical Arsenal
        </div>
        <h2
          className="reveal delay-100"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#f4f1ec",
          }}
        >
          Languages, tools &amp;{" "}
          <em style={{ fontStyle: "italic" }}>frameworks</em>
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            marginTop: "60px",
          }}
        >
          {categories.map((cat, ci) => (
            <div
              key={ci}
              className={`skill-cat reveal delay-${(ci + 1) * 100 as 100 | 200 | 300}`}
              style={{ background: "#0a0a0a", padding: "44px 36px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontSize: "9px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "rgba(244,241,236,0.3)",
                  marginBottom: "28px",
                }}
              >
                {cat.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{ display: "flex", alignItems: "center", gap: "16px" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-garamond)",
                        fontSize: "17px",
                        minWidth: "120px",
                        color: "#f4f1ec",
                      }}
                    >
                      {skill.name}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        background: "rgba(255,255,255,0.08)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="skill-bar"
                        data-width={`${skill.pct}%`}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-josefin)",
                        fontSize: "9px",
                        color: "rgba(244,241,236,0.3)",
                        minWidth: "30px",
                        textAlign: "right",
                      }}
                    >
                      {skill.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div className="reveal" style={{ marginTop: "1px" }}>
          <div
            style={{
              background: "#0a0a0a",
              padding: "36px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "9px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(244,241,236,0.3)",
                marginRight: "8px",
              }}
            >
              Also:
            </span>
            {["Git", "GitHub", "Prisma ORM", "Drizzle ORM", "Kafka", "Kubernetes", "Azure", "AWS Lambda", "LangChain", "pgvector", "Convex", "Clerk", "Stripe", "Monaco Editor", "Shadcn UI", "Ant Design"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "5px 12px",
                  color: "rgba(244,241,236,0.5)",
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(244,241,236,0.4)";
                  e.currentTarget.style.color = "#f4f1ec";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(244,241,236,0.5)";
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
