import React from 'react';
import './CTA.css';

export function CTA() {
  const whatsappLink = "https://wa.me/5555991325777?text=Olá!%20Estou%20no%20site%20da%20Novilha%20de%20Ouro%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  return (
    <section className="relative w-full py-36 flex items-center justify-center bg-[#030303] overflow-hidden border-t border-amber-500/10 cta-section">
      
      {/* CAMADA 1: Fundo Fotográfico Premium com Parallax */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15] mix-blend-luminosity transition-transform duration-[10000ms] cta-bg"></div>
      
      {/* CAMADA 2: Malha Tecnológica (Grid de Fundo) */}
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>

      {/* CAMADA 3: Iluminação Dourada Ambiente */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/20 blur-[150px] rounded-[100%] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d96b27]/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Sombreamento para garantir legibilidade absoluta */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
        
        {/* Container Glassmorphism Premium (O "Cofre") */}
        <div className="glass-cta-container relative w-full p-10 md:p-16 rounded-[40px] flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden group/box">
          
          {/* Efeito de Borda Mágica Dourada (Gira ao redor da caixa) */}
          <div className="magic-border"></div>
          <div className="absolute inset-[2px] bg-[#080808]/90 backdrop-blur-2xl rounded-[38px] z-0"></div>

          <div className="relative z-10 flex flex-col items-center w-full">
            
            {/* Avaliação Premium */}
            <div className="flex items-center gap-3 mb-10 bg-amber-500/5 border border-amber-500/20 py-2.5 px-6 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              <div className="flex text-amber-400 text-[10px] md:text-xs drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <span className="text-amber-100/80 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
                A rede restrita da alta pecuária
              </span>
            </div>

            {/* Título de Alto Impacto */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-[1.1] tracking-tight">
              Pronto para elevar o nível <br className="hidden md:block"/> das suas 
              <b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#d96b27] drop-shadow-lg ml-3">
                negociações?
              </b>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-medium">
              Acesso exclusivo mediante validação. Acione seu gerente de conta, garanta sua aprovação e tenha o <span className="text-amber-500/90">Padrão Ouro</span> na palma da mão.
            </p>
            
            {/* Botões de Ação (Foco Extremo em Conversão X1) */}
            <div className="flex flex-col items-center w-full sm:w-auto gap-6 z-20">
              
              {/* Botão Primário (Dourado/Âmbar) */}
              <div className="relative group/btn w-full sm:w-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-[#d96b27] rounded-full blur-lg opacity-40 group-hover/btn:opacity-80 transition duration-500 animate-pulse-gold"></div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-auto flex items-center justify-center gap-4 bg-gradient-to-r from-[#d96b27] to-amber-600 hover:from-amber-500 hover:to-[#d96b27] text-white font-extrabold text-sm md:text-base px-12 py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(217,107,39,0.4)] hover:scale-[1.03] active:scale-95 tracking-widest uppercase overflow-hidden btn-shine-gold"
                >
                  <i className="fa-brands fa-whatsapp text-[22px] drop-shadow-md"></i>
                  <span>Solicitar Acesso Vip (X1)</span>
                </a>
              </div>

              <div className="flex items-center gap-4 w-full max-w-[300px] opacity-40 my-1">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-500/50"></div>
                <span className="text-amber-500/80 text-[10px] font-bold tracking-[0.3em] uppercase">Acesso Direto</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-500/50"></div>
              </div>

              {/* Botão Secundário (WhatsApp Banking) */}
              <div className="relative w-full sm:w-auto group/wpp">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-20 group-hover/wpp:opacity-50 transition duration-500"></div>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-[2px] border-[#25D366]/50 hover:border-[#25D366] hover:bg-[#25D366]/10 text-white font-bold text-xs md:text-sm px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 tracking-wide backdrop-blur-sm"
                >
                  <i className="fa-brands fa-whatsapp text-xl text-[#25D366]"></i>
                  <span>FALAR COM ATENDENTE</span>
                </a>
              </div>
            </div>

            {/* Badges de Confiança do Rodapé do CTA */}
            <div className="mt-12 pt-8 border-t border-white/5 w-full flex flex-wrap justify-center gap-8 md:gap-12 text-xs font-semibold text-slate-500 uppercase tracking-widest">
              <div className="flex items-center gap-2 group/badge">
                <i className="fa-solid fa-lock text-amber-500/70 group-hover/badge:text-amber-400 transition-colors"></i>
                <span className="group-hover/badge:text-slate-300 transition-colors">Verificação Tokenless</span>
              </div>
              <div className="flex items-center gap-2 group/badge">
                <i className="fa-solid fa-microchip text-amber-500/70 group-hover/badge:text-amber-400 transition-colors"></i>
                <span className="group-hover/badge:text-slate-300 transition-colors">Tecnologia NFC</span>
              </div>
              <div className="flex items-center gap-2 group/badge">
                <i className="fa-solid fa-headset text-amber-500/70 group-hover/badge:text-amber-400 transition-colors"></i>
                <span className="group-hover/badge:text-slate-300 transition-colors">Suporte Humano</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}