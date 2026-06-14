import Section from "./Section";

export const projects = [

  {
    title: "AI Interview Simulator",
    description:
      "An AI-powered interview simulation platform with real-time voice interaction. Features custom configurations for job role, difficulty, and interviewer style, plus dynamic follow-up questions and interview history tracking.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Vapi"],
    icon: "🎤",
    color: "from-violet-500/10 to-indigo-500/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
    github: "https://github.com/FirasBrr/interview-simulator", 

  },
  {
    title: "CNI Interoperability Platform",
    description:
      "An API request management platform built for Tunisia's National Center of Informatics. Handles 100+ API service requests across government entities with multi-level validation workflow, JWT authentication, role-based access control, and real-time dashboards.",
    stack: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "RBAC"],
    icon: "🏛️",
    color: "from-indigo-500/10 to-purple-500/10",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
    github: "https://github.com/FirasBrr/cni-pfe",
  },
  {
    title: "AI Learning Platform",
    description:
      "A full-stack e-learning platform with role-based access for Students, Instructors, and Admins. Features course management, enrollment, progress tracking, an integrated AI chatbot, and AI-driven course recommendations.",
    stack: ["Next.js", "MongoDB", "TailwindCSS", "Gemini API"],
    icon: "🧠",
    color: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    github: "https://github.com/FirasBrr/lms-platform", 

  },
  {
    title: "Healthcare Appointment System",
    description:
      "A role-based healthcare platform for Admins, Doctors, and Patients. Includes appointment booking with availability validation, a doctor scheduling calendar, and prescription upload/download functionality.",
    stack: ["Symfony", "MySQL", "PHP"],
    icon: "🏥",
    color: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    github: "https://github.com/FirasBrr/HealthCareSystem",
    demo: "https://healthcaresystem-1-ndad.onrender.com",
  },
  {
  title: "EventHub - Event Management Platform",
  description:
    "A full-featured event management web application allowing users to discover, register for, and manage events. Features include interactive maps for event locations, role-based access (Admin/User), event registration with capacity tracking, advanced search/filters, admin dashboard with analytics, and user profile management.",
  stack: ["ASP.NET Core MVC", "MySQL", "Entity Framework", "Leaflet.js", "Bootstrap", "Chart.js"],
  icon: "🎯",
  color: "from-red-500/10 to-blue-500/10",
  border: "border-red-500/20",
  accent: "text-red-400",
  github: "https://github.com/FirasBrr/EventHub",
},
   {
    title: "Employee Management System (EMS)",
    description:
      "A comprehensive HR platform with role-based access for Admin, HR, Manager, and Employee roles. Features employee/department CRUD operations, leave approval workflow, performance tracking, secure authentication, and report generation.",
    stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Spring Security"],
    icon: "👥",
    color: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-500/20",
    accent: "text-amber-400",
    github: "https://github.com/FirasBrr/Employee-Management-System-EMS", 
  },
  {
    title: "Car Rental Platform (Java EE)",
    description:
      "A multi-role rental management system built with Jakarta EE (Servlets/JSP). Implements role-based access for Admin, Agents, and Visitors to manage properties, bookings, and user accounts. A foundational project showcasing MVC architecture, DAO patterns, and secure database interactions.",
    stack: ["Jakarta EE", "Servlets/JSP", "MySQL", "Tomcat", "MVC"],
    icon: "🚗",
    color: "from-rose-500/10 to-pink-500/10",
    border: "border-rose-500/20",
    accent: "text-rose-400",
    github: "https://github.com/FirasBrr/car-rental-jee",
    // demo: 
  },
];

export default function Projects() {
  return (
    <Section id="projects" label="// 02" title="Projects">
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`relative rounded-xl border ${p.border} bg-gradient-to-br ${p.color} p-6 flex flex-col gap-4 hover:scale-[1.01] transition-all duration-300 group`}
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl">{p.icon}</span>
              <div className="flex gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-white transition-colors text-xs font-mono"
                  >
                    github ↗
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-white transition-colors text-xs font-mono"
                  >
                    demo ↗
                  </a>
                )}
              </div>
            </div>

            <div>
              <h3
                className={`font-display font-bold text-base text-white mb-2 group-hover:${p.accent} transition-colors`}
              >
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
        ))}
      </div>
    </Section>
  );
}
