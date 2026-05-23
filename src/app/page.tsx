import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <div className="noise-bg fixed inset-0 pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
