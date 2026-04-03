import React from 'react';
import ScrollReveal from "./ScrollReveal";

const OurExpertise = () => {
  const expertiseAreas = [
    {
      icon: "🏠",
      title: "Residential",
      description: "From luxury villas and bungalows to apartment complexes. We handle structural planning, interior layouts, and complete construction of custom homes tailored to your lifestyle."
    },
    {
      icon: "🏢",
      title: "Commercial",
      description: "Building modern office complexes, retail spaces, and commercial hubs. We provide robust structural solutions designed for business functionality and aesthetic appeal."
    },
    {
      icon: "🏭",
      title: "Industrial ",
      description: "Specialized in Pre-Engineered Buildings (PEB), warehouses, and factories. We deliver durable industrial structures optimized for operational efficiency."
    }
  ];

  return (
    <section id="expertise" className="bg-white dark:bg-charcoal py-24 md:py-48 px-6 relative overflow-hidden transition-colors duration-500 border-t border-gold/10">

      {/* Structural Backdrop */}
      <div className="absolute top-0 right-0 w-full h-full flex justify-end opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none">
        <h2 className="text-[20vw] font-heading font-black text-gold leading-none uppercase tracking-tighter mt-20 text-right pr-12">EXPERTISE</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Editorial Header Similar to Residential Portfolio */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 border-b border-gold/10 pb-16 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold"></span>
              <span className="text-gold font-heading text-xs tracking-[0.6em] uppercase">Core Competencies</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-heading text-gold tracking-tighter uppercase leading-[0.85]">
              Our<br />
              <span className="italic font-light opacity-60">Expertise</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-700 dark:text-gray-400 font-body text-sm uppercase tracking-[0.3em] leading-relaxed max-w-xs ml-auto">
              Delivering specialized <br />
              <span className="text-gold font-bold">construction solutions.</span>
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {expertiseAreas.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="group relative bg-white/5 dark:bg-black/5 p-10 lg:p-12 border border-gold/20 hover:border-gold/60 transition-colors duration-500 h-full flex flex-col justify-start overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/30 transition-all duration-700 pointer-events-none"></div>
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-gold/20 via-gold to-gold/20 group-hover:w-full transition-all duration-1000 ease-in-out"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-6xl mb-8 group-hover:scale-110 group-hover:rotate-3 origin-bottom-left transition-transform duration-500 drop-shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-heading text-charcoal dark:text-gold tracking-widest uppercase mb-6 drop-shadow-sm font-bold border-b border-gold/20 pb-4 inline-block w-fit">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-body text-base leading-relaxed tracking-wider font-light mt-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
