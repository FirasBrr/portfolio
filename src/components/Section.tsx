"use client";
import { useScrollReveal } from "./useScrollReveal";

export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-xs text-accent">{label}</span>
            <div className="flex-1 h-px bg-border" />
            <h2 className="font-display text-3xl font-bold text-white">
              {title}
            </h2>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
