import React from 'react';
import MainLogo from "../assets/images/MainLogo.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center bg-white dark:bg-charcoal text-center px-6 overflow-hidden transition-colors duration-500">
      
      {/* Structural Background Pattern (Subtle UI Detail) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[grid-line] [background-size:40px_40px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white dark:via-charcoal to-white dark:to-charcoal"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Branding Logo - Using 'animate-pulse' very subtly for a "living" feel */}
        <div className="transition-all duration-1000 ease-out transform translate-y-0 opacity-100">
          <img 
            src={MainLogo} 
            alt="Patel Construction" 
            className="w-28 h-28 md:w-40 md:h-40 object-contain mx-auto mb-12 drop-shadow-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Main Title - Tightened tracking for authority */}
        <h1 className="text-5xl md:text-8xl font-bold font-heading text-gold mb-6 tracking-tighter uppercase leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          PATEL <br className="md:hidden" /> CONSTRUCTION
        </h1>
        
        {/* Subtitle with increased letter spacing */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="h-px w-8 bg-gold/30"></div>
            <h2 className="text-sm md:text-lg font-heading text-gold dark:text-gold-light/80 tracking-[0.5em] uppercase font-medium">
                Civil Engineers & Contractors
            </h2>
            <div className="h-px w-8 bg-gold/30"></div>
        </div>

        {/* Tagline: Balanced and Modern */}
        <div className="max-w-2xl mx-auto mb-16 animate-in fade-in duration-1000 delay-500">
            <p className="text-lg md:text-xl font-body text-gray-700 dark:text-gray-400 font-light tracking-wide leading-relaxed">
              Constructing structural landmarks through 
              <span className="flex items-center justify-center mt-4 text-charcoal dark:text-white font-semibold tracking-[0.2em] uppercase text-xs md:text-sm gap-3">
                Strength 
                <span className="w-1 h-1 bg-gold rounded-full"></span> 
                Integrity 
                <span className="w-1 h-1 bg-gold rounded-full"></span> 
                Vision
              </span>
            </p>
        </div>

        {/* Action Button: Refined "Ghost" Style with Hover Transition */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <a 
            href="#overview" 
            className="group relative inline-flex items-center space-x-4 border border-gold/40 px-10 py-5 transition-all duration-500 hover:border-gold hover:bg-gold/5"
          >
            <span className="text-gold font-heading text-sm tracking-[0.4em] uppercase font-bold">
              Explore Portfolio
            </span>
            <svg 
                className="w-4 h-4 text-gold transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Corner Accents - Pure CSS/Tailwind Architectural detail */}
            <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-gold transition-all duration-500 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-gold transition-all duration-500 group-hover:w-4 group-hover:h-4"></div>
          </a>
        </div>
      </div>

      {/* Side Status Detail (Architectural Touch) */}
      <div className="absolute bottom-10 right-10 hidden xl:flex items-center gap-4 opacity-40">
          <p className="text-[10px] text-gold font-heading tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
            Precision In Execution
          </p>
          <div className="h-12 w-px bg-gold/50"></div>
      </div>
    </section>
  );
};

export default Hero;