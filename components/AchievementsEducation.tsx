"use client";
const achievements = [
  {
    icon: "🏆",
    title: "Smart India Hackathon — 3rd Place",
    desc: "National Final Round — delivered a functional prototype addressing a real-world government problem within a 36-hour competitive sprint.",
    tag: "National Level",
  },
  {
    icon: "🎖",
    title: "Manthan Hackathon — National Finalist",
    desc: "Selected among 115 finalist teams from 2,200+ participants across India; presented solution to an industry panel of judges.",
    tag: "2,200+ Teams",
  },
  {
    icon: "📜",
    title: "Patent Co-Inventor",
    desc: "Fire Extinguishing Drone — contributed to system architecture, control logic design, sensor integration, and technical documentation.",
    tag: "Published Patent",
  },
];

const courses = [
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Object-Oriented Programming",
  "Software Engineering",
];

export default function AchievementsEducation() {
  return (
    <>
      {/* ACHIEVEMENTS */}
      <section
        style={{
          padding: "100px 0",
          borderBottom: "1px solid #cdc7bc",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
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
            Recognition
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
            Milestones &amp;{" "}
            <em style={{ fontStyle: "italic" }}>achievements</em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1px",
              background: "#cdc7bc",
              marginTop: "60px",
            }}
          >
            {achievements.map((a, i) => (
              <div
                key={i}
                className={`ach-card-line reveal delay-${(i + 1) * 100 as 100 | 200 | 300}`}
                style={{
                  background: "#f4f1ec",
                  padding: "44px 36px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e8e3da")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f4f1ec")}
              >
                <div
                  style={{
                    fontFamily: "var(--font-josefin)",
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#8a8279",
                    marginBottom: "16px",
                  }}
                >
                  {a.tag}
                </div>
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>{a.icon}</div>
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "20px",
                    fontWeight: 400,
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {a.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontSize: "15px",
                    color: "#8a8279",
                    lineHeight: 1.75,
                  }}
                >
                  {a.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        style={{
          borderBottom: "1px solid #cdc7bc",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div
          className="reveal-left"
          style={{
            padding: "100px 64px 100px 48px",
            borderRight: "1px solid #cdc7bc",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#8a8279",
              marginBottom: "36px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ display: "block", width: "24px", height: "1px", background: "#8a8279" }} />
            Education
          </div>

          <div
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(26px,3vw,42px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Bachelor of Technology
            <br />
            <em style={{ fontStyle: "italic", color: "#8a8279" }}>in Computer Science</em>
          </div>

          <div
            style={{
              fontFamily: "var(--font-josefin)",
              fontWeight: 200,
              fontSize: "11px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#8a8279",
              marginBottom: "6px",
            }}
          >
            Geetanjali Institute of Technology
          </div>
          <div
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "9px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8a8279",
              marginBottom: "40px",
            }}
          >
            July 2019 – June 2023 · Udaipur, Rajasthan
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
            }}
          >
            {courses.map((c) => (
              <div
                key={c}
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "15px",
                  color: "#8a8279",
                  padding: "12px 0",
                  borderBottom: "1px solid #cdc7bc",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        <div
          className="reveal-right"
          style={{
            padding: "100px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            id="gpa-counter"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "80px",
              fontWeight: 400,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            0.00
          </div>
          <div
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "9px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#8a8279",
            }}
          >
            GPA out of 10.00
          </div>
          <p
            style={{
              marginTop: "28px",
              color: "#8a8279",
              fontSize: "16px",
              maxWidth: "320px",
              lineHeight: 1.8,
              fontFamily: "var(--font-garamond)",
            }}
          >
            A consistent academic record reflecting strong fundamentals in
            computer science theory and practical engineering methodology.
          </p>

          {/* Grade bar */}
          <div style={{ marginTop: "40px", maxWidth: "300px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-josefin)",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#8a8279",
                marginBottom: "8px",
              }}
            >
              <span>0.0</span><span>8.74</span><span>10.0</span>
            </div>
            <div
              style={{
                height: "2px",
                background: "#cdc7bc",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  background: "#0a0a0a",
                  width: "87.4%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "87.4%",
                  top: "-3px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#0a0a0a",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
