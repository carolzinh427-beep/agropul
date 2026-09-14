import React from 'react';
import { MapPin, Phone, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

export const Footer: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364';

  const footerNav = [
    { name: 'Início', href: '#inicio' },
    { name: 'Equipamentos', href: '#equipamentos' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Assistência Técnica', href: '#assistencia' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090B] text-gray-400 py-16 border-t border-[#2A2E38] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1C1F26]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded border border-gray-300">
                <div className="flex items-center font-bold tracking-tighter text-xs">
                  <span className="bg-black text-white px-2 py-0.5 rounded-sm font-black text-sm">
                    C
                  </span>
                  <span className="text-black font-black px-1.5 text-xs">
                    CR AGRO
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold tracking-widest text-[#FF6B00]">
                  PULVERIZADORES
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Equipamentos e soluções agrícolas projetados para levar alta precisão, força e produtividade à sua lavoura.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                <span>Alpinópolis — MG (CEP 37940-000)</span>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-[#FF6B00] transition-colors">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span>(35) 99820-0364</span>
              </a>
              <a href="https://instagram.com/cragropulverizadores" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-[#FF6B00] transition-colors">
                <InstagramIcon className="w-4 h-4 text-[#FF6B00]" />
                <span>@cragropulverizadores</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              NAVEGAÇÃO RÁPIDA
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium">
              {footerNav.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF6B00] transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span className="text-[#FF6B00]">›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog & Assistance Summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              CATÁLOGO PRINCIPAL
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="text-gray-300 font-mono">CR-TURBO 400 (400L)</li>
              <li className="text-gray-300 font-mono">CR-PH 400 (Barras Hidráulicas)</li>
              <li className="text-gray-300 font-mono">CR-TURBO 2000 (2000L Fibra)</li>
              <li className="text-gray-300 font-mono">Assistência Técnica em Campo</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {new Date().getFullYear()} CR Agro Pulverizadores. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#14161B] hover:bg-[#1C1F26] border border-[#2A2E38] text-gray-300 hover:text-[#FF6B00] px-3.5 py-2 rounded text-xs transition-colors"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
