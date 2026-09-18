import Section from "./Section";
import Image from "next/image";

export const projects = [
  {
    title: "AI Interview Simulator",
    description:
      "An AI-powered interview simulation platform with real-time voice interaction. Features custom configurations for job role, difficulty, and interviewer style, plus dynamic follow-up questions and interview history tracking.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Vapi"],
    icon: "🎤",
    image: "/projects/interview-simulator.png",
    color: "from-accent/10 to-accent/5",
    border: "border-accent/20",
    accent: "text-accent",
    github: "https://github.com/FirasBrr/interview-simulator",
    demo: "https://ai-interview-simulator-xi-umber.vercel.app",
  },
  {
    title: "CNI Interoperability Platform",
    description:
      "An API request management platform built for Tunisia's National Center of Informatics. Handles 100+ API service requests across government entities with multi-level validation workflow, JWT authentication, role-based access control, and real-time dashboards.",
    stack: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "RBAC"],
    icon: "🏛️",
    image: "/projects/cni-platform.png",
    color: "from-accent-2/10 to-accent/5",
    border: "border-accent-2/20",
    accent: "text-accent-2",
    github: "https://github.com/FirasBrr/cni-pfe",
    demo: null,
  },
  {
    title: "AI Learning Platform",
    description:
      "A full-stack e-learning platform with role-based access for Students, Instructors, and Admins. Features course management, enrollment, progress tracking, an integrated AI chatbot, and AI-driven course recommendations.",
    stack: ["Next.js", "MongoDB", "TailwindCSS", "Gemini API"],
    icon: "🧠",
    image: null,
    color: "from-accent/10 to-accent/5",
    border: "border-accent/20",
    accent: "text-accent",
    github: "https://github.com/FirasBrr/lms-platform",
    demo: null,
  },
  {
    title: "Healthcare Appointment System",
    description:
      "A role-based healthcare platform for Admins, Doctors, and Patients. Includes appointment booking with availability validation, a doctor scheduling calendar, and prescription upload/download functionality.",
    stack: ["Symfony", "MySQL", "PHP"],
    icon: "🏥",
    image: "/projects/healthcare.png",
    color: "from-accent-2/10 to-accent/5",
    border: "border-accent-2/20",
    accent: "text-accent-2",
    github: "https://github.com/FirasBrr/HealthCareSystem",
    demo: "https://healthcaresystem-1-ndad.onrender.com",
  },
  {
    title: "EventHub — Event Management Platform",
    description:
      "A full-featured event management web application allowing users to discover, register for, and manage events. Features include interactive maps for event locations, role-based access (Admin/User), event registration with capacity tracking, advanced search/filters, admin dashboard with analytics, and user profile management.",
    stack: ["ASP.NET Core MVC", "MySQL", "Entity Framework", "Leaflet.js", "Bootstrap", "Chart.js"],
    icon: "🎯",
    image: "/projects/eventhub.png",
    color: "from-accent/10 to-accent/5",
    border: "border-accent/20",
    accent: "text-accent",
    github: "https://github.com/FirasBrr/EventHub",
    demo: null,
  },
  {
    title: "Employee Management System (EMS)",
    description:
      "A comprehensive HR platform with role-based access for Admin, HR, Manager, and Employee roles. Features employee/department CRUD operations, leave approval workflow, performance tracking, secure authentication, and report generation.",
    stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Spring Security"],
    icon: "👥",
    image: null,
    color: "from-accent-2/10 to-accent/5",
    border: "border-accent-2/20",
    accent: "text-accent-2",
    github: "https://github.com/FirasBrr/Employee-Management-System-EMS",
    demo: null,
  },
  {
    title: "Car Rental Platform (Java EE)",
    description:
      "A multi-role rental management system built with Jakarta EE (Servlets/JSP). Implements role-based access for Admin, Agents, and Visitors to manage properties, bookings, and user accounts. A foundational project showcasing MVC architecture, DAO patterns, and secure database interactions.",
    stack: ["Jakarta EE", "Servlets/JSP", "MySQL", "Tomcat", "MVC"],
    icon: "🚗",
    image: "/projects/car-rental.png",
    color: "from-accent/10 to-accent/5",
    border: "border-accent/20",
    accent: "text-accent",
    github: "https://github.com/FirasBrr/car-rental-jee",
    demo: null,
  },
];

export default function Projects() {
  return (
    <Section id="projects" label="// 02" title="Projects">
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`relative rounded-xl border ${p.border} bg-gradient-to-br ${p.color} overflow-hidden flex flex-col hover:scale-[1.01] transition-all duration-300 group`}
          >
            {/* ---- Screenshot ---- */}
            <div className="relative w-full aspect-video overflow-hidden bg-surface-lowest">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              ) : (
                // Fallback placeholder if image is missing
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent-2/5">
                  <span className="text-5xl opacity-60">{p.icon}</span>
                </div>
              )}

              {/* Bottom gradient fade so text on the card below reads well */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/95 via-surface/20 to-transparent pointer-events-none" />

              {/* Top-right action pills */}
              <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-surface-lowest/90 backdrop-blur-sm border border-border text-[10px] font-mono text-muted hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    code ↗
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-surface-lowest/90 backdrop-blur-sm border border-accent/40 text-[10px] font-mono text-accent hover:bg-accent/10 transition-colors"
                  >
                    live ↗
                  </a>
                )}
              </div>

              {/* Live badge if demo exists */}
              {p.demo && (
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-lowest/90 backdrop-blur-sm border border-emerald-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-success" />
                  <span className="font-mono text-[10px] text-emerald-400">live</span>
                </div>
              )}
            </div>

            {/* ---- Content ---- */}
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div>
                <h3 className="font-display font-bold text-base text-ink mb-2">
                  {p.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {p.stack.map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}