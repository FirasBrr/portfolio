import Section from "./Section";

export const experiences = [
  {
    role: "Software Development Intern",
    company: "Elco Solution",
    location: "Tunis, Tunisia",
    period: "Jun 2026 – Aug 2026",
    icon: "🏭",
    current: false,
    months: 2,
    stack: [
      ".NET 8",
      "ASP.NET Core MVC",
      "C#",
      "JavaScript",
      "Bootstrap 5",
      "NModbus",
      "MQTTnet",
      "REST APIs",
      "Git",
    ],
    achievements: [
      "Developed a diagnostic module for Modbus (TCP/RTU) and MQTT protocols, letting users test device configurations before deployment and cutting industrial gateway troubleshooting time.",
      "Built a Full Test Dashboard enabling one-click testing of all configured devices with real-time visual feedback, isolating failures per device without blocking the full run.",
      "Designed a 5-tier architecture (Presentation → Business → Core → Infrastructure → External) for clean separation of concerns and reusable code across the existing gateway.",
      "Implemented error classification with user-friendly messages and actionable suggestions, translating low-level protocol errors into readable diagnostics for non-developers.",
      "Handled SSL/TLS certificate authentication for secure MQTT connections, including temporary PFX conversion and automatic cleanup of sensitive files.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "CNI — National Center of Informatics",
    location: "Tunis, Tunisia",
    period: "Feb 2024 – May 2024",
    icon: "🏛️",
    current: false,
    months: 4,
    stack: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "RBAC"],
    achievements: [
      "Built an API request management platform for Tunisia's National Interoperability Project using Angular, Spring Boot, and PostgreSQL — handling 100+ API service requests across multiple government entities.",
      "Implemented JWT authentication, role-based access control for 3+ user roles, and multi-step validation workflows — cutting manual validation time by 40%.",
      "Built real-time API dashboards and automated request tracking features, reducing monitoring effort by 50% and improving workflow visibility for stakeholders.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" label="// 01" title="Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border ml-3.5" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="pl-12 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2">
                <div
                  className={`timeline-dot ${
                    exp.current ? "timeline-dot-active" : ""
                  }`}
                />
              </div>

              <div className="glow-border rounded-xl p-6 bg-surface transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0 mt-0.5">{exp.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-white text-lg">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-success" />
                            current
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-xs text-accent mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="font-mono text-xs text-muted bg-dim px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="space-y-3">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      <p className="text-muted text-sm leading-relaxed">{a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}