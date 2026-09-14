import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C0E]/95 backdrop-blur-md border-b border-[#2A2E38] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0C0E]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden bg-white p-1.5 rounded border border-gray-300 shadow-sm flex items-center justify-center">
              <div className="flex items-center font-bold tracking-tighter text-sm">
                <span className="bg-black text-white px-2 py-1 flex items-center justify-center rounded-sm font-extrabold text-base">
                  C
                </span>
                <span className="text-black font-extrabold px-2 text-sm tracking-tight">
                  CR AGRO
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF6B00] leading-none">
                PULVERIZADORES
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider flex items-center gap-1 mt-0.5">
                <MapPin className="w-2.5 h-2.5 text-[#FF6B00]" /> ALPINÓPOLIS — MG
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-wider text-gray-300 hover:text-[#FF6B00] transition-colors uppercase py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded shadow-lg orange-glow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>SOLICITAR ORÇAMENTO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded bg-[#1C1F26] border border-[#2A2E38] text-white hover:text-[#FF6B00] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0B0C0E]/98 backdrop-blur-xl border-b border-[#2A2E38] p-6 shadow-2xl transition-all animate-in fade-in duration-200">
          <div className="flex flex-col gap-4">
            <div className="pb-3 mb-2 border-b border-[#2A2E38] flex items-center justify-between">
              <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> ALPINÓPOLIS - MG (37940-000)
              </span>
              <a href="tel:35998200364" className="text-xs text-gray-300 font-mono flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#FF6B00]" /> (35) 99820-0364
              </a>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-wider text-gray-200 hover:text-[#FF6B00] transition-colors uppercase py-2 border-b border-[#1C1F26]"
              >
                {link.name}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-sm font-bold tracking-wider uppercase py-3.5 rounded text-center orange-glow transition-all"
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
