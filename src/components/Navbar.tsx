import { useState, useEffect } from 'react';
import { Bird, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#0e7488]/20 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center h-10 w-auto group-hover:scale-105 transition-transform">
            <img
              src="/logos/logo-white.png"
              alt="ITOWL Logo"
              className="h-10 w-auto object-contain transition-all duration-300"
              style={scrolled ? { filter: 'brightness(0) saturate(100%) invert(22%) sepia(20%) saturate(600%) hue-rotate(135deg) brightness(90%) contrast(95%)' } : undefined}
            />
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={cn(
                  "font-medium text-sm transition-colors relative group",
                  scrolled ? "text-slate-700 hover:text-[#0e7488]" : "text-white/90 hover:text-[#3ecbe3]"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1aaec9] rounded-full transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden p-2 rounded-lg",
            scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col gap-6 md:hidden">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
