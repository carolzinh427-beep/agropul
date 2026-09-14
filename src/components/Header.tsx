import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20CR%20Agro.';

  const navLinks = [
    { name: 'INÍCIO', href: '#inicio' },
    { name: 'EQUIPAMENTOS', href: '#equipamentos' },
    { name: 'SOLUÇÕES', href: '#solucoes' },
    { name: 'ASSISTÊNCIA TÉCNICA', href: '#assistencia' },
    { name: 'A CR AGRO', href: '#sobre' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-black border-b border-zinc-800 py-3 shadow-md'
          : 'bg-black/90 py-4 border-b border-zinc-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="bg-white px-2 py-1 rounded border border-gray-300 flex items-center justify-center">
              <div className="flex items-center font-bold tracking-tighter text-xs">
                <span className="bg-black text-white px-1.5 py-0.5 rounded-sm font-black text-sm">
                  C
                </span>
                <span className="text-black font-extrabold px-1.5 text-xs">
                  CR AGRO
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-wider text-[#FF6B00]">
                PULVERIZADORES
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">
                ALPINÓPOLIS — MG
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-zinc-300 hover:text-[#FF6B00] transition-colors uppercase py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded transition-all"
            >
              <span>SOLICITAR ORÇAMENTO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded bg-zinc-900 border border-zinc-800 text-white hover:text-[#FF6B00] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bg-black border-b border-zinc-800 p-5 shadow-2xl">
          <div className="flex flex-col gap-3">
            <div className="pb-2 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1 text-[#FF6B00]">
                <MapPin className="w-3.5 h-3.5" /> ALPINÓPOLIS - MG
              </span>
              <a href="tel:35998200364" className="text-zinc-300 flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#FF6B00]" /> (35) 99820-0364
              </a>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold text-zinc-200 hover:text-[#FF6B00] transition-colors uppercase py-2 border-b border-zinc-900"
              >
                {link.name}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold tracking-wider uppercase py-3 rounded text-center transition-all"
            >
              <span>SOLICITAR ORÇAMENTO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
