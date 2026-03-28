import React from 'react';
import ScrollReveal from "./ScrollReveal";
import PerryImg from "../assets/images/PerryApartment.jpeg";
import PanvelImg from "../assets/images/FarmhousePanvel.png";

const ResidentialPortfolio = () => {
  const residencies = [
    {
      title: "PERRY APARTMENT",
      location: "MALAD",
      image: PerryImg,
      details: "Full G+9 tower execution (₹2.88 Cr). Focused on precision urban logistics and rapid structural sequencing.",
      category: "URBAN HIGH-RISE",
      year: "2024",
      specs: ["₹2.88 Cr Value", "G+9 Tower", "Rapid Sequencing"]
    },
    {
      title: "LUXURY FARMHOUSE",
      location: "PANVEL",
      image: PanvelImg,
      details: "G+2 Luxury Estate (₹1.50 Cr). Advanced RCC frame with high-capacity specialized environmental tanks.",
      category: "ELITE ESTATE",
      year: "2025",
      specs: ["₹1.50 Cr Value", "RCC G+2", "Environmental Tech"]
    }
  ];

  return (
    <section id="residential" className="bg-white dark:bg-charcoal py-24 md:py-48 px-6 relative overflow-hidden transition-colors duration-500">
      
      {/* Structural Backdrop */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none">
        <h2 className="text-[20vw] font-heading font-black text-gold leading-none uppercase tracking-tighter mt-20">RESIDENTIAL</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Modern Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 border-b border-gold/10 pb-16 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold"></span>
              <span className="text-gold font-heading text-xs tracking-[0.6em] uppercase">Strategic Assets</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-heading text-gold tracking-tighter uppercase leading-[0.85]">
              Residential<br />
              <span className="italic font-light opacity-60">Portfolio</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-700 dark:text-gray-400 font-body text-sm uppercase tracking-[0.3em] leading-relaxed max-w-xs ml-auto">
              Merging luxury aesthetics with <br />
              <span className="text-gold font-bold">Civil Engineering Precision.</span>
            </p>
          </div>
        </div>

        {/* Project Display: Alternating Wide Layout */}
        <div className="space-y-48">
          {residencies.map((residency, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className={`flex flex-col gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                
                {/* Image Section: Takes 60% of Width */}
                <div className="w-full lg:w-3/5 group relative">
                  <div className="overflow-hidden border border-gold/20 shadow-2xl relative bg-charcoal/5 dark:bg-white/5">
                    <img 
                      src={residency.image} 
                      alt={residency.title} 
                      className="w-full h-auto object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    />
                    
                    {/* Technical Overlay Graphics */}
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700"></div>
                    <div className="absolute top-6 right-6 border border-white/40 px-4 py-2 text-white font-heading text-[10px] tracking-[0.3em] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                      CORE: {residency.year}
                    </div>
                  </div>
  
                  {/* Floating Image Label (Architectural) */}
                  <div className={`absolute -bottom-8 ${index % 2 !== 0 ? '-left-8' : '-right-8'} bg-gold p-8 hidden lg:block shadow-xl`}>
                     <p className="text-charcoal font-heading text-xs tracking-[0.4em] uppercase font-black">Ref No. 0{index + 1}</p>
                  </div>
                </div>
  
                {/* Info Section: Takes 40% of Width */}
                <div className="w-full lg:w-2/5 space-y-10">
                  <div className="space-y-4">
                    <span className="text-gold font-heading text-sm tracking-[0.4em] uppercase font-medium">{residency.category}</span>
                    <h3 className="text-4xl md:text-5xl font-heading text-charcoal dark:text-gold tracking-tight uppercase leading-none">
                      {residency.title}
                    </h3>
                    <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent"></div>
                  </div>
  
                  <p className="text-gray-800 dark:text-gray-300 font-body text-xl leading-relaxed font-light italic">
                    "{residency.details}"
                  </p>
  
                  {/* The "Data Ribbon" - Highly Professional Detail */}
                  <div className="grid grid-cols-1 gap-4 border-t border-gold/10 pt-8">
                    <div className="flex flex-wrap gap-6">
                      {residency.specs.map((spec, sI) => (
                        <div key={sI} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_#c5a059]"></div>
                          <span className="text-[13px] md:text-sm text-gray-800 dark:text-gray-300 font-heading uppercase tracking-[0.2em] font-bold">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
  
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-4 text-gold font-heading text-xs tracking-[0.3em] uppercase group cursor-pointer">
                      Location: {residency.location}
                      <span className="w-8 h-px bg-gold group-hover:w-16 transition-all duration-500"></span>
                    </span>
                  </div>
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResidentialPortfolio;