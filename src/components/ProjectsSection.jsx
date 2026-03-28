import React from 'react';
import ScrollReveal from "./ScrollReveal";
import MilanAuraImg from "../assets/images/MilanAura.jpeg";
import PurvaDeepImg from "../assets/images/PurvaDeep.jpeg";
import PrestigeImg from "../assets/images/PrestigeBuilding.jpeg";
import QuantumImg from "../assets/images/Quantum.jpeg";

const ProjectsSection = () => {
    const projects = [
      {
        id: "01",
        title: "MILAN AURA",
        image: MilanAuraImg,
        status: "ONGOING (2025 – 2027)",
        value: "₹17.95 CRORE",
        highlights: [
          "High-rise G+10 execution using M35 & M40 grade concrete.",
          "M50 Grade Girder Beam system over a 75m deep-well.",
          "32m Automated Parking Tower."
        ],
        type: "Structural Engineering Feat"
      },
      {
        id: "02",
        title: "PURVA DEEP CHSL",
        image: PurvaDeepImg,
        status: "UPCOMING (BORIVALI WEST)",
        scale: "27,000 SQ.FT.",
        highlights: [
          "Complex Puzzle Parking system (4 Levels Up, 2 Levels Down) for 21 cars.",
          "Structural Glazing & Premium frontage for high-value commercial units."
        ],
        type: "Commercial Redevelopment"
      },
      {
        id: "03",
        title: "PRESTIGE BUILDING NO. 1",
        image: PrestigeImg,
        status: "FINISHING STAGE",
        scale: "35,800 SQ.FT.",
        highlights: [
          "Focus on ultra-high-quality materials and architectural refinement.",
          "Precision application of facade textures and high-end lobby aesthetics."
        ],
        type: "Premium Residential Finishing"
      },
      {
        id: "04",
        title: "LIANGZI QUANTUM",
        image: QuantumImg,
        status: "COMPLETED",
        value: "₹4.5 CRORE",
        highlights: [
          "Full PEB facility execution with precision-aligned foundation bolts.",
          "M25 Grade RCC roads and 200 RM of underground service corridors."
        ],
        type: "Industrial Infrastructure"
      }
    ];
  
    return (
      <section id="projects" className="bg-white dark:bg-charcoal py-24 px-4 border-t border-gold/20 dark:border-gold/30 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading text-gold tracking-widest uppercase mb-16 text-center">
            MAJOR PROJECTS
          </h2>
  
          <div className="space-y-32">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <div 
                  className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Visual Section */}
                  <div className="w-full lg:w-3/5 relative overflow-hidden group shadow-2xl border border-gold/30">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="aspect-video bg-gold/5 dark:bg-white/5 flex items-center justify-center">
                        <div className="text-gold font-heading text-xs uppercase tracking-[0.5em] opacity-40">
                          [ PROJECT ELEVATION / SITE VISUAL ]
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="absolute top-4 left-4 text-gold border border-gold/30 px-3 py-1 bg-charcoal/80 backdrop-blur-sm font-heading text-xs tracking-widest z-10 transition-colors duration-500">
                      #{project.id}
                    </div>
                  </div>
    
                  {/* Project Details */}
                  <div className="w-full lg:w-2/5 space-y-6">
                    <span className="text-gold-hover dark:text-gold-light font-heading text-sm tracking-[0.3em] uppercase opacity-70">
                      {project.type}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-heading text-gold tracking-widest leading-none">
                      {project.title}
                    </h3>
                    <div className="flex flex-col gap-2 font-body text-xs tracking-widest uppercase text-gray-700 dark:text-gray-400">
                      <p><span className="text-gold">STATUS:</span> {project.status}</p>
                      {project.value && <p><span className="text-gold">VALUE:</span> {project.value}</p>}
                      {project.scale && <p><span className="text-gold">SCALE:</span> {project.scale}</p>}
                    </div>
                    
                    <div className="h-px bg-gold opacity-30 w-16"></div>
    
                    <div className="space-y-6 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-gold/50"></div>
                        <h4 className="text-gold font-heading text-xs tracking-[0.3em] uppercase font-bold">Technical Chronicles</h4>
                      </div>
                      <ul className="space-y-5">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start group">
                            <span className="mt-2 w-1.5 h-1.5 bg-gold flex-shrink-0 rotate-45 group-hover:rotate-0 transition-transform duration-300"></span>
                            <span className="ml-5 text-gray-700 dark:text-gray-200 font-body text-base md:text-lg leading-relaxed font-light">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
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
export default ProjectsSection;
