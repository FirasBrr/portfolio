import Section from "./Section";

const education = [
  {
    degree: "Engineering Degree in Software Engineering",
    school: "Tekup University",
    location: "Tunis, Tunisia",
    period: "2025 – Present",
    active: true,
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Higher Institute of Computer Science and Multimedia of Gabes (ISIMG)",
    location: "Gabes, Tunisia",
    period: "2021 – 2024",
    active: false,
  },
];

export default function Education() {
  return (
    <Section id="education" label="// 04" title="Education">
      <div className="space-y-4">
        {education.map((e, i) => (
          <div
            key={i}
            className={`glow-border rounded-xl p-6 bg-surface flex flex-col sm:flex-row sm:items-center gap-4 ${
              e.active ? "border-accent/30" : ""
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-white text-base">
                  {e.degree}
                </h3>
                {e.active && (
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    current
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-accent">{e.school}</p>
              <p className="font-mono text-xs text-muted mt-0.5">{e.location}</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-muted bg-dim px-3 py-1 rounded-full">
                {e.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
