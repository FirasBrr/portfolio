"use client";
import { useEffect, useState } from "react";
import Stats from "./Stats";

const roles = [
  "Full-Stack Developer"
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const role = roles[roleIdx];
    let i = typing ? 0 : role.length;
    const interval = setInterval(() => {
      if (typing) {
        i++;
        setDisplayed(role.slice(0, i));
        if (i >= role.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        i--;
        setDisplayed(role.slice(0, i));
        if (i <= 0) {
          clearInterval(interval);
          setRoleIdx((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }
    }, typing ? 70 : 40);
    return () => clearInterval(interval);
  }, [roleIdx, typing]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-muted">
              Open To Internships & Part-Time Jobs 
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-7xl font-extrabold text-white leading-[1.05] mb-4">
            Firas
            <br />
            <span className="gradient-text">Bouraoui</span>
          </h1>

          {/* Typewriter role */}
          <div className="h-10 flex items-center mb-6">
            <span className="font-mono text-xl text-accent-2">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className="max-w-xl text-muted text-lg leading-relaxed mb-10">
            Software engineering student building full-stack web apps and
            AI-powered platforms. Experienced with React, Next.js, Spring Boot,
            and Node.js — focused on scalable, impactful solutions.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-display font-semibold text-sm rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-white font-display font-semibold text-sm rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/FirasBrr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-muted font-mono text-xs rounded-lg hover:border-accent/40 hover:text-accent-2 transition-all duration-200 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="/Firas%20Bouraoui%20Resume.pdf"
              download="Firas_Bouraoui_Resume.pdf"
              className="px-6 py-3 border border-border text-muted font-mono text-xs rounded-lg hover:border-accent/40 hover:text-accent-2 transition-all duration-200 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0-3-3m3 3 3-3M5 17h14" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Resume
            </a>
          </div>

          {/* Stats row  dynamic! */}
          <Stats />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-muted">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}