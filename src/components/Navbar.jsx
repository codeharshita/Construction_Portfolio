import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Sun, Moon } from 'lucide-react';
import MainLogo from "../assets/images/MainLogo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const menuItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border-b border-gold/20 dark:border-gold/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Image */}
            <img 
              src={MainLogo} 
              alt="Patel Construction Logo" 
              className="w-12 h-12 object-contain mr-3"
            />
            <span className="text-gold font-heading font-bold text-xl tracking-tighter">
              PATEL CONSTRUCTION
            </span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden md:flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gold dark:hover:text-gold px-3 py-2 text-lg font-medium transition-colors duration-300 font-heading tracking-widest"
                >
                  {item.name.toUpperCase()}
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gold/10 hover:bg-gold/20 text-gold transition-all duration-300 transform hover:rotate-12"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="#contact"
              className="hidden sm:block bg-gold hover:bg-gold-hover text-charcoal px-6 py-2 rounded-sm text-sm font-bold transition-all duration-300 transform hover:scale-105"
            >
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
