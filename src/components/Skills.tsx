import Section from "./Section";

const skillGroups = [
  {
    label: "Languages",
    icon: "{ }",
    skills: ["Java", "Python", "JavaScript", "C"],
  },
  {
    label: "Frontend",
    icon: "</>",
    skills: ["React", "Next.js", "Angular", "TailwindCSS", "Bootstrap", "HTML/CSS"],
  },
  {
    label: "Backend",
    icon: "⚙",
    skills: ["Node.js", "Express.js", "Spring Boot", "Symfony", "ASP.NET Core"],
  },
  {
    label: "Databases",
    icon: "◈",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    icon: "⊡",
    skills: ["Git", "GitHub", "Postman", "JWT Auth", "Render"],
  },
  {
    label: "Certifications",
    icon: "✦",
    skills: ["MS Dynamics 365 (CRM)", "Azure AI Fundamentals"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" label="// 03" title="Skills">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="glow-border rounded-xl p-5 bg-surface flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-accent text-sm">{group.icon}</span>
              <h3 className="font-display font-semibold text-white text-sm">
                {group.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
