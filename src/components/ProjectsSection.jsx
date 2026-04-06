import React from 'react';
import ScrollReveal from "./ScrollReveal";
import MilanAuraImg from "../assets/images/MilanAura.jpeg";
import PurvaDeepImg from "../assets/images/PurvaDeep.jpeg";
import PrestigeImg from "../assets/images/PrestigeBuilding.jpeg";
import PanvelImg from "../assets/images/FarmhousePanvel.png";
import PerryImg from "../assets/images/PerryApartment.jpeg";
import QuantumImg from "../assets/images/Quantum.jpeg";
import PrestigeImg2 from "../assets/images/PRESTIGE.jpeg";
import BharatImg from "../assets/images/Bharat Apartment.jpeg";
import PrestigeIndImg from "../assets/images/Prestige Industrial.jpeg";
import VikasImg from "../assets/images/Vikas Park.jpeg";
import LeelaImg from "../assets/images/Leela Nagar.webp";
import SaiImg from "../assets/images/Sai darshan.jpg";
import PleasantImg from "../assets/images/Pleasant Park.webp";
import ValiramImg from "../assets/images/Valiram Mention.jpg";


const ProjectsSection = () => {
  const pastProjectsData = [
    {
      id: "BHARAT",
      title: "BHARAT APARTMENT",
      image: BharatImg,
      year: "2005, 2013 & 2014",
      category: "",
      area: "~1,50,000 sq.ft.",
      floors: "Ground + 16 Storeys (4 Wing)",
      scope: "Civil Work.",
      location: "Malad, Mumbai – 400064",
      desc: "Massive residential development spanning multiple construction phases.",
    },
    {
      id: "PEARL",
      title: "PEARL APARTMENT",
      year: "2005",
      category: "",
      area: "~15,000 sq.ft.",
      floors: "Ground + 7 Storeys",
      scope: "Civil Work.",
      location: "Malad, Mumbai – 400064",
      desc: "Comprehensive civil construction for mid-rise residential living.",
    },
    {
      id: "PRESTIGE",
      title: "PRESTIGE INDUSTRIES",
      image: PrestigeIndImg,
      imgStyle: { transform: "rotate(-90deg) scale(0.65)" },
      year: "2005",
      category: "",
      area: "~60,000 sq.ft.",
      floors: "-1 + Ground + 6 Storeys",
      scope: "Civil + Finishing Work.",
      location: "Malad, Mumbai – 400064",
      desc: "Robust industrial structure with comprehensive finishing works.",
    },
    {
      id: "SAI",
      title: "SAI DARSHAN",
      image: SaiImg,
      imgClass: "!w-[75%] mx-auto p-4 md:p-8",
      year: "1993",
      category: "",
      area: "~40,000 sq.ft.",
      floors: null,
      scope: "Civil work.",
      location: "Chembur",
      desc: "Dedicated structural and civil works for residential housing.",
    },
    {
      id: "VIKAS",
      title: "VIKAS PARK",
      image: VikasImg,
      year: "1991",
      category: "",
      area: "~90,890 sq.ft.",
      floors: "Ground + 14 Storeys (4 Wing)",
      scope: "Civil + Finishing Work.",
      location: "Malad, Mumbai – 400064",
      desc: "High-rise multi-wing residential project with extensive structural detailing.",
    },
    {
      id: "LEELA",
      title: "LEELA NAGAR",
      image: LeelaImg,
      cropBottom: true,
      year: "1990",
      category: "",
      area: "~50,000 sq.ft.",
      floors: null,
      scope: "Civil + Finishing Work.",
      location: "Andheri, Mumbai – 400064",
      desc: "End-to-end civil and finishing execution for premium housing.",
    },
    {
      id: "PLEASANT",
      title: "PLEASANT PARK",
      image: PleasantImg,
      cropBottom: true,
      year: "1989",
      category: "",
      area: "~84,480 sq.ft.",
      floors: "Ground + 6 Storeys (4 Wing)",
      scope: "Civil + Finishing Work.",
      location: "Malad, Mumbai – 400064",
      desc: "Large scale multi-wing residential complex execution.",
    },
    {
      id: "VALIRAM",
      title: "VALIRAM MENTION",
      image: ValiramImg,
      year: "1985",
      category: "",
      area: "~30,000 sq.ft.",
      floors: "Ground + 9 Storeys",
      scope: "Civil Work.",
      location: "Malad Mumbai – 400064",
      desc: "Delivered structural excellence and civil works.",
    }
  ];

  const projects = [

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
      status: "UPCOMING (MALAD WEST)",
      scale: "35,800 SQ.FT.",
      highlights: [
        "Focus on ultra-high-quality materials and architectural refinement.",
        "Precision application of facade textures and high-end lobby aesthetics."
      ],
      type: "Premium Residential Finishing"
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-charcoal py-24 px-4 border-t border-gold/20 dark:border-gold/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 group relative">
          <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 w-[50%] h-[50%] mx-auto top-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/70"></div>
            <span className="text-gold tracking-[0.4em] text-xs font-bold uppercase opacity-80">Our Legacy</span>
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/70"></div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-widest uppercase text-center relative z-10 transition-all duration-700">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-600 drop-shadow-sm">
              Ongoing{" "}
            </span>
            <span className="text-gray-800 dark:text-white">
              Projects
            </span>
          </h2>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-8"></div>
        </div>

        <div className="space-y-32">
          {/* Luxury Farmhouse - Custom Premium Block */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              {/* Image Section */}
              <div className="w-full lg:w-3/5 group relative z-10">
                <div className="overflow-hidden border border-gold/20 shadow-2xl relative bg-charcoal/5 dark:bg-white/5">
                  <img
                    src={PanvelImg}
                    alt="Luxury Farmhouse"
                    className="w-full h-auto object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                {/* 2026 - PRESENT Image Badge */}
                <div className="absolute -bottom-6 right-4 md:-right-8 z-20 hover:scale-105 transition-transform duration-300">
                  <div className="inline-block bg-[#c5a059] px-6 py-2 md:px-8 md:py-3 rounded-[2rem] shadow-xl border-4 border-white dark:border-charcoal">
                    <span className="text-[#1a1a1a] font-heading text-lg md:text-xl font-black tracking-widest uppercase">2026 - PRESENT</span>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-2/5 space-y-8 relative">
                <div className="space-y-4">
                  <span className="text-gold font-heading text-sm tracking-[0.4em] uppercase font-medium">ELITE ESTATE</span>
                  <h3 className="text-4xl md:text-5xl font-heading text-charcoal dark:text-gold tracking-tight uppercase leading-none">
                    LUXURY FARMHOUSE
                  </h3>
                  <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent"></div>
                </div>

                <p className="text-gray-800 dark:text-gray-300 font-body text-xl font-bold italic leading-relaxed">
                  "Redefining Rural Luxury: A 15,000 Sq. Ft. Masterpiece of Cantilevered Elegance and Structural Fluidity."
                </p>

                <div className="space-y-3 pt-2">
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📐 <span className="font-bold ml-2 text-charcoal dark:text-white">Area:</span> ~15,000 sq.ft. (Main Residence) + ~1,300 sq.ft. (Caretaker Unit)</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🏢 <span className="font-bold ml-2 text-charcoal dark:text-white">Configuration:</span> Ground + 2 Floors</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🛠 <span className="font-bold ml-2 text-charcoal dark:text-white">Scope:</span> Civil & Structural</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📍 <span className="font-bold ml-2 text-charcoal dark:text-white">Location:</span> Panvel</p>
                </div>

                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  "Beyond the primary G+2 residence, this development features a fully integrated sub-surface utility network, including high-capacity Underground (UG) and Septic tanks, and a specialized filtration system for private leisure facilities."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Milan Aura - Custom Premium Block */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
              {/* Image Section */}
              <div className="w-full lg:w-3/5 group relative z-10">
                <div className="overflow-hidden border border-gold/20 shadow-2xl relative bg-charcoal/5 dark:bg-white/5">
                  <img
                    src={MilanAuraImg}
                    alt="Milan Aura"
                    className="w-full h-auto object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                {/* 2025 - PRESENT Image Badge */}
                <div className="absolute -bottom-6 right-4 md:-right-8 z-20 hover:scale-105 transition-transform duration-300">
                  <div className="inline-block bg-[#c5a059] px-6 py-2 md:px-8 md:py-3 rounded-[2rem] shadow-xl border-4 border-white dark:border-charcoal">
                    <span className="text-[#1a1a1a] font-heading text-lg md:text-xl font-black tracking-widest uppercase">2025 - PRESENT</span>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-2/5 space-y-8 relative">
                <div className="space-y-4">
                  <span className="text-gold font-heading text-sm tracking-[0.4em] uppercase font-medium">STRUCTURAL ENGINEERING FEAT</span>
                  <h3 className="text-4xl md:text-5xl font-heading text-charcoal dark:text-gold tracking-tight uppercase leading-none">
                    MILAN AURA
                  </h3>
                  <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent"></div>
                </div>

                <p className="text-gray-800 dark:text-gray-300 font-body text-xl font-bold italic leading-relaxed">
                  "Mid-rise residential development integrating vertical parking and specialized structural interventions within a compact urban footprint."
                </p>

                <div className="space-y-3 pt-2">
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📐 <span className="font-bold ml-2 text-charcoal dark:text-white">Area:</span> ~67,000 sq.ft.</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🏢 <span className="font-bold ml-2 text-charcoal dark:text-white">Floors:</span> Ground + Stilt + 10 Storeys</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🚗 <span className="font-bold ml-2 text-charcoal dark:text-white">Car Parking Tower:</span> 32 m Height 🛠 <span className="font-bold ml-2 text-charcoal dark:text-white">Scope:</span> Civil & Structural</p>
                  <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📍 <span className="font-bold ml-2 text-charcoal dark:text-white">Location:</span> Juhu Galli, Andheri West, Mumbai</p>
                </div>

                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  A mid-rise residential project incorporating a 32-meter car parking tower within the overall development.
                </p>
                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  The execution includes reconstruction of an existing well up to a depth of approximately 75 meters, followed by structural integration through a girder beam system over the well slab.
                </p>
                <p className="text-gray-700 dark:text-gray-400 font-body text-sm md:text-base leading-relaxed font-medium">
                  Ongoing works are being carried out with coordinated sequencing between the residential structure and vertical parking system, ensuring stability, functionality, and efficient use of a constrained urban site.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Delivered Milestones Section Title */}
          <div className="flex flex-col items-center group relative pt-12">
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

          {/* Upcoming Projects Section Title */}
          <div className="flex flex-col items-center group relative">
            <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 w-[50%] h-[50%] mx-auto top-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/70"></div>
              <span className="text-gold tracking-[0.4em] text-xs font-bold uppercase opacity-80">Our Vision</span>
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/70"></div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-widest uppercase text-center relative z-10 transition-all duration-700">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-600 drop-shadow-sm">
                Upcoming{" "}
              </span>
              <span className="text-gray-800 dark:text-white">
                Projects
              </span>
            </h2>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-8"></div>
          </div>

          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={(index + 2) * 0.1}>
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

          {/* Past Projects Section Title */}
          <div className="flex flex-col items-center group relative pt-12">
            <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 w-[50%] h-[50%] mx-auto top-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/70"></div>
              <span className="text-gold tracking-[0.4em] text-xs font-bold uppercase opacity-80">Our Heritage</span>
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/70"></div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-widest uppercase text-center relative z-10 transition-all duration-700">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-600 drop-shadow-sm">
                Past{" "}
              </span>
              <span className="text-gray-800 dark:text-white">
                Projects
              </span>
            </h2>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-8"></div>
          </div>

          <div className="space-y-32">
            {pastProjectsData.map((project, index) => (
              <ScrollReveal key={project.id} delay={0.1}>
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 xl:w-5/12 group relative z-10">
                    <div className="overflow-hidden border border-gold/20 shadow-2xl relative bg-charcoal/5 dark:bg-white/5">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            ...(project.cropBottom ? { clipPath: "inset(0 0 12% 0)", marginBottom: "-12%" } : {}),
                            ...(project.imgStyle || {})
                          }}
                          className={`w-full h-auto object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105 contrast-[1.15] saturate-[1.1] brightness-[1.05] filter ${project.imgClass || ""}`}
                        />
                      ) : (
                        <div className="aspect-[4/3] bg-gold/5 dark:bg-white/5 flex items-center justify-center">
                          <div className="text-gold font-heading text-xs uppercase tracking-[0.5em] opacity-40">
                            [ PROJECT IMAGE PENDING ]
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                    </div>

                    {/* Badge */}
                    <div className={`absolute -bottom-6 ${index % 2 !== 0 ? 'left-4 md:-left-8' : 'right-4 md:-right-8'} z-20 hover:scale-105 transition-transform duration-300`}>
                      <div className="inline-block bg-[#c5a059] px-6 py-2 md:px-8 md:py-3 rounded-[2rem] shadow-xl border-4 border-white dark:border-charcoal">
                        <span className="text-[#1a1a1a] font-heading text-lg md:text-xl font-black tracking-widest uppercase">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="w-full lg:w-1/2 xl:w-7/12 space-y-8 lg:px-6 relative">
                    <div className="space-y-4">
                      {project.category && <span className="text-gold font-heading text-sm tracking-[0.4em] uppercase font-medium">{project.category}</span>}
                      <h3 className="text-4xl md:text-5xl font-heading text-charcoal dark:text-gold tracking-tight uppercase leading-none">
                        {project.title}
                      </h3>
                      <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent"></div>
                    </div>

                    {project.desc && (
                      <p className="text-gray-800 dark:text-gray-300 font-body text-xl font-bold italic leading-relaxed">
                        "{project.desc}"
                      </p>
                    )}

                    <div className="space-y-3 pt-2">
                      <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📐 <span className="font-bold ml-2 text-charcoal dark:text-white">Area:</span> {project.area}</p>
                      {project.floors && (
                        <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🏢 <span className="font-bold ml-2 text-charcoal dark:text-white">Floors:</span> {project.floors}</p>
                      )}
                      <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">🛠 <span className="font-bold ml-2 text-charcoal dark:text-white">Scope:</span> {project.scope}</p>
                      <p className="text-gray-800 dark:text-gray-200 font-body text-sm md:text-base font-medium">📍 <span className="font-bold ml-2 text-charcoal dark:text-white">Location:</span> {project.location}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
