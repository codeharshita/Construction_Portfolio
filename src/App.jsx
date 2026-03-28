import  { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyOverview from "./components/CompanyOverview";
import ProjectsSection from "./components/ProjectsSection";
import ResidentialPortfolio from "./components/ResidentialPortfolio";
import ContactFooter from "./components/ContactFooter";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to 'dark' for premium branding
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen transition-colors duration-500 overflow-x-hidden">
        <Navbar />
        <Hero />
        <ScrollReveal>
          <CompanyOverview />
        </ScrollReveal>
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ResidentialPortfolio />
        </ScrollReveal>
        <ScrollReveal>
          <ContactFooter />
        </ScrollReveal>
        <ScrollToTop />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
