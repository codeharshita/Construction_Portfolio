import React from 'react';
import ScrollReveal from "./ScrollReveal";
import PerryImg from "../assets/images/PerryApartment.jpeg";
import QuantumImg from "../assets/images/Quantum.jpeg";

const RecentCompleted = () => {
  return (
    <section id="completed" className="bg-white dark:bg-charcoal py-24 px-4 border-t border-gold/20 dark:border-gold/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 group relative">
          <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 w-[50%] h-[50%] mx-auto top-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/70"></div>
            <span className="text-gold tracking-[0.4em] text-xs font-bold uppercase opacity-80">Proven Track Record</span>
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/70"></div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-widest uppercase text-center relative z-10 transition-all duration-700">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-600 drop-shadow-sm">
              Delivered{" "}
            </span>
            <span className="text-gray-800 dark:text-white">
              Milestones
            </span>
          </h2>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-8"></div>
        </div>

        <div className="space-y-32">
          {/* Perry Apartment - Premium Block */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              {/* Image Section */}
              <div className="w-full lg:w-3/5 group relative z-10">
                <div className="overflow-hidden border border-gold/20 shadow-2xl relative bg-charcoal/5 dark:bg-white/5">
                  <img
                    src={PerryImg}
                    alt="Perry Apartment"
                    className="w-full h-auto object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-6 right-4 md:-right-8 z-20 hover:scale-105 transition-transform duration-300">
                  <div className="inline-block bg-[#c5a059] px-6 py-2 md:px-8 md:py-3 rounded-[2rem] shadow-xl border-4 border-white dark:border-charcoal">
                    <span className="text-[#1a1a1a] font-heading text-lg md:text-xl font-black tracking-widest uppercase">2024 - 2025</span>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-2/5 space-y-8 relative">
                <div className="space-y-4">
                  <span className="text-gold font-heading text-sm tracking-[0.4em] uppercase font-medium">URBAN LOW-RISE</span>
                  <h3 className="text-4xl md:text-5xl font-heading text-charcoal dark:text-gold tracking-tight uppercase leading-none">
                    PERRY APARTMENT
                  </h3>
                  <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent"></div>
                </div>

                <p className="text-gray-800 dark:text-gray-300 font-body text-xl font-bold italic leading-relaxed">
                  "Maximizing Urban Potential: 18,000 Sq. Ft. of Seamless Civil Engineering and Premium Residential Finishing."
                </p>

                <div className="space-y-3 pt-2">
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📐 <span className="font-bold ml-2 text-charcoal dark:text-white">Area:</span> ~18,000 sq.ft.</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🏢 <span className="font-bold ml-2 text-charcoal dark:text-white">Floors:</span> Ground + 9 Storeys</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🛠 <span className="font-bold ml-2 text-charcoal dark:text-white">Scope:</span> Civil & Finishing</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📍 <span className="font-bold ml-2 text-charcoal dark:text-white">Location:</span> D'monte Lane, Orlem, Malad West, Mumbai – 400064</p>
                </div>

                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  The project maintained steady progress through planned manpower deployment and a well-supported site setup, including lift-assisted material movement, dual concrete mixing systems for continuity, and equipment ensuring efficient finishing output.
                </p>
                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  From RCC framework to final surfaces, the work reflects disciplined execution, controlled processes, and practical on-site decision-making aligned with urban construction demands.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Liangzi Quantum - Premium Block */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
              {/* Image Section */}
              <div className="w-full lg:w-3/5 group relative z-10">
                <div className="overflow-hidden border border-gold/20 shadow-2xl relative bg-charcoal/5 dark:bg-white/5">
                  <img
                    src={QuantumImg}
                    alt="Liangzi Quantum"
                    className="w-full h-auto object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                {/* Badges - Stacked bottom right */}
                <div className="absolute -bottom-8 right-4 md:-right-8 z-20 flex flex-col items-end gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex bg-[#c5a059] px-5 py-2 md:px-6 md:py-2 rounded-[2rem] shadow-xl border-2 border-white dark:border-charcoal">
                    <span className="text-[#1a1a1a] font-heading text-sm md:text-base font-black tracking-widest uppercase">PEB STRUCTURE</span>
                  </div>
                  <div className="inline-flex bg-[#c5a059] px-6 py-2 md:px-8 md:py-3 rounded-[2rem] shadow-xl border-4 border-white dark:border-charcoal">
                    <span className="text-[#1a1a1a] font-heading text-lg md:text-xl font-black tracking-widest uppercase">2023 - 2024</span>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-2/5 space-y-8 relative">
                <div className="space-y-4">
                  <span className="text-gold font-heading text-sm tracking-[0.4em] uppercase font-medium">INDUSTRIAL INFRASTRUCTURE</span>
                  <h3 className="text-4xl md:text-5xl font-heading text-charcoal dark:text-gold tracking-tight uppercase leading-none">
                    LIANGZI QUANTUM
                  </h3>
                  <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent"></div>
                </div>

                <p className="text-gray-800 dark:text-gray-300 font-body text-xl font-bold italic leading-relaxed">
                  "Comprehensive industrial execution with precision-engineered foundations and integrated infrastructure development."
                </p>

                <div className="space-y-3 pt-2">
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📐 <span className="font-bold ml-2 text-charcoal dark:text-white">Area:</span> ~25,000 sq.ft.</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🏢 <span className="font-bold ml-2 text-charcoal dark:text-white">Structure:</span> Industrial PEB Facility with Deck</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🏭 <span className="font-bold ml-2 text-charcoal dark:text-white">Built Units:</span> Two attached buildings (~1,200 sq.ft. each, G+1)</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🛠 <span className="font-bold ml-2 text-charcoal dark:text-white">Scope:</span> Civil & Structural + Infrastructure Works</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📍 <span className="font-bold ml-2 text-charcoal dark:text-white">Location:</span> Halol, Gujarat</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">💰 <span className="font-bold ml-2 text-charcoal dark:text-white">Project Value:</span> ~₹4.5 Crore</p>
                </div>

                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  A fully integrated industrial PEB project executed with end-to-end civil, structural, and infrastructure scope, ensuring accuracy, coordination, and performance-driven delivery.
                </p>
                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  The work included complete foundation systems comprising excavation, PCC, footings, columns, plinth beams, and pedestals with precisely aligned foundation bolts for steel structure installation, along with RCC works for attached buildings and deck levels.
                </p>
                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  The project further involved extensive infrastructure development, including RCC roads, 80 mm heavy-duty paver block roads, dedicated sewage lines, storm water drainage (SWD), culvert works, STP installation, and a 60,000-litre underground water tank. RCC Hume pipes (~200 RM) were executed separately for underground service corridors, accommodating electrical and fire line routing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RecentCompleted;
