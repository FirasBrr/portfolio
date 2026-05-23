import Section from "./Section";

const achievements = [
  "Built an API request management platform for Tunisia's National Interoperability Project using Angular, Spring Boot, and PostgreSQL — handling 100+ API service requests across multiple government entities.",
  "Implemented JWT authentication, role-based access control for 3+ user roles, and multi-step validation workflows — cutting manual validation time by 40%.",
  "Built real-time API dashboards and automated request tracking features, reducing monitoring effort by 50% and improving workflow visibility for stakeholders.",
];

export default function Experience() {
  return (
    <Section id="experience" label="// 01" title="Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-3.5" />

        <div className="pl-12 relative">
          {/* Timeline dot */}
          <div className="absolute left-0 top-1">
            <div className="timeline-dot" />
          </div>

          <div className="glow-border rounded-xl p-6 bg-surface transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display font-bold text-white text-lg">
                  Software Engineering Intern
                </h3>
                <p className="font-mono text-xs text-accent mt-1">
                  CNI — National Center of Informatics
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <span className="font-mono text-xs text-muted bg-dim px-3 py-1 rounded-full">
                  Feb 2024 – May 2024
                </span>
                <span className="font-mono text-xs text-muted">
                  Tunis, Tunisia
                </span>
              </div>
            </div>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Angular", "Spring Boot", "PostgreSQL", "JWT", "RBAC"].map(
                (tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Achievements */}
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">▸</span>
                  <p className="text-muted text-sm leading-relaxed">{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
