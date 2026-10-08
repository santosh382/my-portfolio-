 import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const SectionWrapper = ({ children, className = "" }) => (
  <div className={`w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 ${className}`}>
    {children}
  </div>
);

function App() {
  return (
    <div className="relative bg-[#0a0a0a] text-zinc-100 min-h-screen flex flex-col antialiased selection:bg-zinc-800 selection:text-white scroll-smooth">
      
      {/* Background Micro-Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />

      {/* Sticky Glassmorphic Navbar */}
      <header className="sticky top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-900">
        <Navbar />
      </header>

      {/* Main Content Sections */}
      <main className="relative flex-grow z-10 w-full">
        
        <section className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <SectionWrapper>
            <Hero />
          </SectionWrapper>
        </section>

        <section className="w-full border-t border-zinc-900/50">
          <SectionWrapper className="py-20 md:py-28">
            <About />
          </SectionWrapper>
        </section>

        <section className="w-full bg-[#0c0c0c] border-y border-zinc-900/80">
          <SectionWrapper className="py-20 md:py-28">
            <Skills />
          </SectionWrapper>
        </section>

        <section className="w-full">
          <SectionWrapper className="py-20 md:py-28">
            <Projects />
          </SectionWrapper>
        </section>

        <section className="w-full bg-[#0c0c0c] border-t border-zinc-900">
          <SectionWrapper className="py-20 md:py-28">
            <Contact />
          </SectionWrapper>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-900 py-8 bg-[#0a0a0a] z-10">
        <SectionWrapper className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Santosh. All rights reserved.</p>
          <p className="hover:text-zinc-400 transition-colors cursor-default">Built with React & Tailwind</p>
        </SectionWrapper>
      </footer>

    </div>
  );
}

export default App;