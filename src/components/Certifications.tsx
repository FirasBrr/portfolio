import Section from "./Section";

const certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    description:
      "Demonstrated foundational knowledge of machine learning, computer vision, natural language processing, and conversational AI workloads on Microsoft Azure.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Microsoft Certified: Dynamics 365 Fundamentals (CRM)",
    code: "MB-910",
    issuer: "Microsoft",
    description:
      "Mastery of customer engagement capabilities, cloud-native CRM operations, business analytics, and unified cross-platform workflow integrations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.93 4.93l2.12 2.12m9.9 9.9l2.12 2.12M4.93 19.07l2.12-2.12m9.9-9.9l2.12-2.12" />
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <Section id="certifications" label="// 05" title="Certifications">
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="glow-border rounded-xl p-6 bg-surface flex flex-col gap-4 group transition-all duration-300"
          >
            {/* Header row */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/15 transition-colors">
                {cert.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-display font-bold text-white text-sm leading-snug">
                    {cert.title}
                  </h3>
                  
                </div>
                <p className="font-mono text-xs text-accent">
                  {cert.issuer} · {cert.code}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed">
              {cert.description}
            </p>

            {/* Badge footer */}
            <div className="flex items-center gap-2 pt-2 mt-auto border-t border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">
                {cert.code} validated
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}