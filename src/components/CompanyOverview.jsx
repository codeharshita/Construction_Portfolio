import React from 'react';
import ScrollReveal from "./ScrollReveal";
import MainLogo from "../assets/images/MainLogo.png";

const CompanyOverview = () => {
  return (
    <section id="overview" className="bg-white dark:bg-charcoal px-6 py-24 md:py-40 relative overflow-hidden transition-colors duration-500 border-t border-gold/10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header: Left Aligned for a Modern Corporate Look */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-gold/10 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gold opacity-60"></div>
              <span className="text-gold font-heading text-xs tracking-[0.5em] uppercase opacity-80">Heritage & Excellence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading text-gold tracking-tighter uppercase leading-[0.9]">
              Company<br /><span className="opacity-80">Overview</span>
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <img
              src={MainLogo}
              alt="Logo"
              className="w-20 h-20 object-contain" // Reverted: Removed grayscale/opacity, keeping the original logo color/gold
            />
          </div>
        </div>

        {/* Mission Focused Layout: Grid Based */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
          <div className="lg:col-span-4 border-l-2 border-gold/20 pl-8 py-4">
            <h3 className="text-sm font-heading text-gold mb-4 uppercase tracking-[0.3em] font-bold">The Mandate</h3>
            <p className="text-gray-700 dark:text-gray-400 font-body text-sm leading-relaxed uppercase tracking-widest font-medium">
              Structural integrity through disciplined sequencing and advanced material science.
            </p>
          </div>

          <div className="lg:col-span-8 relative group">
            {/* Architectural corner details - Refined */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-gold/30"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-gold/30"></div>

            <p className="text-3xl md:text-5xl font-body text-charcoal dark:text-white leading-[1.2] font-extralight tracking-tight">
              "At <span className="text-gold font-medium">Patel Construction</span>, we bridge the gap between complex <span className="italic">civil engineering theory</span> and high-value physical execution."
            </p>
          </div>
        </div>

        {/* Personnel Section: Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10 border border-gold/10 shadow-2xl">

          {/* Card 1 */}
          <ScrollReveal delay={0.1} yOffset={20} className="h-full">
            <div className="bg-white dark:bg-charcoal p-12 lg:p-16 flex flex-col justify-between h-full group hover:bg-gold/[0.02] transition-all duration-700 relative">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 border border-gold/30 text-[10px] text-gold tracking-[0.3em] uppercase">Principal</div>
                <h4 className="text-charcoal dark:text-gold font-bold text-3xl lg:text-4xl font-heading tracking-tight uppercase">Jayantibhai Patel</h4>
                <div className="h-px w-full bg-gradient-to-r from-gold/40 to-transparent"></div>
              </div>
              <div className="mt-12">
                <p className="text-gray-900 dark:text-gray-300 font-body text-sm tracking-[0.2em] uppercase font-bold">Chief Civil Engineer</p>
                <p className="text-xs text-gold font-heading mt-1 tracking-widest uppercase opacity-70">Structural Consultant • 45+ Years Exp.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={0.2} yOffset={20} className="h-full">
            <div className="bg-white dark:bg-charcoal p-12 lg:p-16 flex flex-col justify-between h-full group hover:bg-gold/[0.02] transition-all duration-700 relative">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 border border-gold/30 text-[10px] text-gold tracking-[0.3em] uppercase">Leadership</div>
                <h4 className="text-charcoal dark:text-gold font-bold text-3xl lg:text-4xl font-heading tracking-tight uppercase">Er. Amish Patel</h4>
                <div className="h-px w-full bg-gradient-to-r from-gold/40 to-transparent"></div>
              </div>
              <div className="mt-12">
                <p className="text-gray-900 dark:text-gray-300 font-body text-sm tracking-[0.2em] uppercase font-bold">Executive Civil Engineer</p>
                <p className="text-xs text-gold font-heading mt-1 tracking-widest uppercase opacity-70">Operations Director • B.E. Civil 4+ Years Exp.</p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Subtle Background Text for Architectural Depth */}

      </div>
    </section>
  );
};

export default CompanyOverview;