"use client";
import { useState } from "react";

const experiences = [
  {
    company: "ZEDDLABZ",
    period: "Nov 2023 — Dec 2024",
    role: "Software Development Intern",
    location: "Remote",
    bullets: [
      "Built a financial analytics dashboard with Next.js and React, delivering modular UI components that improved code reuse and team productivity across the project",
      "Developed and optimized RESTful APIs with Fastify and Node.js; implemented Redis caching to reduce API response latency under high concurrent load",
      "Engineered a secure document upload pipeline using AWS S3 pre-signed URLs with server-side access control, improving reliability and security",
      "Designed PostgreSQL database schemas using Prisma ORM, writing complex queries and schema migrations to support evolving production data needs",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "Fastify", "PostgreSQL", "Redis", "AWS S3", "Prisma"],
  },
  {
    company: "Hoicko Technology",
    period: "Apr 2023 — Jul 2023",
    role: "Web Development Intern",
    location: "Udaipur, Rajasthan",
    bullets: [
      "Delivered responsive React web applications with lazy loading and code splitting optimizations that measurably reduced page load times across devices",
      "Collaborated with backend teams to design and consume scalable REST APIs, contributing to clean service separation and consistent error handling",
      "Built reusable component libraries using Tailwind CSS and Ant Design, establishing consistent design patterns across the application",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Ant Design", "Tailwind CSS"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section
      id="experience"
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
          Work Experience
        </div>
        <h2
          className="reveal delay-100"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: "560px",
          }}
        >
          Where I&apos;ve built{" "}
          <em style={{ fontStyle: "italic" }}>real things</em>
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            marginTop: "60px",
          }}
        >
          {/* Tabs */}
          <div className="reveal-left">
            {experiences.map((e, i) => (
              <div
                key={i}
                className={`exp-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
                style={{
                  padding: "20px 0 20px 16px",
                  borderBottom: "1px solid #cdc7bc",
                  cursor: "none",
                  position: "relative",
                }}
              >
                <div className="exp-tab-active-line" />
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: active === i ? "#0a0a0a" : "#8a8279",
                    transition: "color 0.25s",
                  }}
                >
                  {e.company}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-josefin)",
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#8a8279",
                    marginTop: "4px",
                  }}
                >
                  {e.period}
                </div>
              </div>
            ))}
          </div>

          {/* Panel */}
          <div className="reveal-right" key={active} style={{ animation: "fadeUp 0.5s cubic-bezier(0.22,1,0.36,1)" }}>
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "28px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                marginBottom: "4px",
              }}
            >
              {exp.role}
            </div>
            <div
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a8279",
                marginBottom: "32px",
              }}
            >
              {exp.company} — {exp.location}
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    paddingLeft: "20px",
                    position: "relative",
                    color: "#8a8279",
                    fontSize: "16px",
                    lineHeight: 1.75,
                    fontFamily: "var(--font-garamond)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#cdc7bc",
                    }}
                  >
                    —
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "32px" }}>
              {exp.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-josefin)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    border: "1px solid #cdc7bc",
                    padding: "5px 12px",
                    cursor: "default",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0a0a0a";
                    e.currentTarget.style.color = "#f4f1ec";
                    e.currentTarget.style.borderColor = "#0a0a0a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#0a0a0a";
                    e.currentTarget.style.borderColor = "#cdc7bc";
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
