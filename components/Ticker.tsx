const items = [
  { label: "Full-Stack Engineer", value: "TypeScript · Next.js" },
  { label: "GPA", value: "8.74 / 10" },
  { label: "Internship", value: "14 Months" },
  { label: "AI Integration", value: "LangChain · Gemini" },
  { label: "SIH Hackathon", value: "3rd Place National" },
  { label: "Patent", value: "Co-Inventor" },
  { label: "Cloud", value: "AWS · Docker · Azure" },
  { label: "Database", value: "PostgreSQL · Redis" },
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden flex items-center"
      style={{
        background: "#0a0a0a",
        borderBottom: "1px solid rgba(244,241,236,0.08)",
        height: "36px",
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-10"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "9px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(244,241,236,0.35)",
            }}
          >
            <span>{item.label}</span>
            <span
              style={{
                color: "rgba(244,241,236,0.8)",
                marginLeft: "4px",
              }}
            >
              {item.value}
            </span>
            <span
              style={{ color: "rgba(244,241,236,0.15)", marginLeft: "20px" }}
            >
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
