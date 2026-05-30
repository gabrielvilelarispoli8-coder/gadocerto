import React, { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappLink = "https://wa.me/5564992837665?text=Olá!%20Estou%20no%20site%20da%20Novilha%20de%20Ouro%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  // Efeito para detectar o scroll da página e mudar o fundo do Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#050505]/80 backdrop-blur-lg border-b border-white/10 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer group">
          <img 
            src="/logado.png" 
            alt="Novilha de Ouro" 
            className="h-[120px] md:h-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            onError={(e) => {
              e.target.style.display='none';
              e.target.nextSibling.style.display='flex';
            }} 
          />
          {/* Fallback caso a imagem não carregue */}
          <div className="hidden px-4 py-2 bg-[#111] items-center justify-center text-emerald-500 rounded border border-emerald-500/30 font-bold tracking-tight">
            Novilha de Ouro
          </div>
        </div>

        {/* Botão de WhatsApp do Header (Sempre visível) */}
        <div className="relative group/head">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-30 group-hover/head:opacity-60 transition duration-500"></div>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eab52] text-white font-bold text-[11px] md:text-sm px-5 py-2.5 md:px-7 md:py-3 rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 tracking-wide overflow-hidden"
          >
            {/* Efeito de luz passando no botão */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/head:animate-[shimmer_1.5s_infinite]"></div>
            
            <i className="fa-brands fa-whatsapp text-lg md:text-xl"></i>
            <span className="hidden sm:block">INSTALAR COM ATENDENTE</span>
            <span className="sm:hidden tracking-wider">AGENDAR</span>
          </a>
        </div>

      </div>
    </header>
  );
}
