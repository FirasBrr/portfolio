"use client";
import { useEffect, useState } from "react";
import { projects } from "./Projects"; 


export default function Stats() {
  const [counts, setCounts] = useState({ projects: 0, months: 0, certs: 0 });
  
  // Auto-calculate from actual data
  const projectCount = projects.length; 
  const internshipMonths = 3; 
  const certCount = 2; 

  useEffect(() => {
    const duration = 1000;
    const stepTime = 20;
    const steps = duration / stepTime;
    
    const targets = {
      projects: projectCount,
      months: internshipMonths,
      certs: certCount,
    };
    
    const increments = {
      projects: targets.projects / steps,
      months: targets.months / steps,
      certs: targets.certs / steps,
    };
    
    let current = { projects: 0, months: 0, certs: 0 };
    
    const timer = setInterval(() => {
      let allComplete = true;
      
      Object.keys(current).forEach(key => {
        const k = key as keyof typeof current;
        if (current[k] < targets[k as keyof typeof targets]) {
          allComplete = false;
          current[k] = Math.min(current[k] + increments[k as keyof typeof increments], targets[k as keyof typeof targets]);
        }
      });
      
      setCounts({
        projects: Math.floor(current.projects),
        months: Math.floor(current.months),
        certs: Math.floor(current.certs),
      });
      
      if (allComplete) clearInterval(timer);
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [projectCount, internshipMonths, certCount]);

  return (
    <div className="grid grid-cols-3 gap-4 max-w-sm">
      <div className="text-center">
        <p className="font-display text-2xl font-bold gradient-text">
          {counts.projects}+
        </p>
        <p className="font-mono text-xs text-muted mt-0.5">Projects</p>
      </div>
      <div className="text-center">
        <p className="font-display text-2xl font-bold gradient-text">
          {counts.months}mo
        </p>
        <p className="font-mono text-xs text-muted mt-0.5">Exp</p>
      </div>
      <div className="text-center">
        <p className="font-display text-2xl font-bold gradient-text">
          {counts.certs}+
        </p>
        <p className="font-mono text-xs text-muted mt-0.5">Certifications</p>
      </div>
    </div>
  );
}