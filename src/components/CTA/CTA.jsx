import React from 'react';
import './CTA.css';

export function CTA() {
  const whatsappLink = "https://wa.me/5555991325777?text=Olá!%20Estou%20no%20site%20da%20GadoCerto%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  return (
    <section className="relative w-full py-32 flex items-center justify-center bg-[#050505] overflow-hidden border-t border-white/5 cta-section">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-25 mix-blend-luminosity transition-transform duration-[2000ms] cta-bg"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8 bg-white/5 border border-white/10 py-2 px-5 rounded-full backdrop-blur-md shadow-lg">
          <div className="flex text-[#d96b27] text-xs">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="text-slate-300 text-[11px] md:text-xs font-semibold tracking-wider uppercase">
            Mais de 3.000 pecuaristas já utilizam
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-normal text-white mb-6 leading-tight tracking-tight">
          A forma mais fácil, rápida e segura de <br className="hidden md:block"/> 
          <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            negociar gado.
          </b>
        </h2>

        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          Tenha o mercado pecuário na palma da sua mão. Simplifique sua logística e garanta o preço justo diretamente pelo celular.
        </p>
        
        <div className="flex flex-col items-center w-full sm:w-auto gap-5">
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#d96b27] hover:bg-[#c25c1f] text-white font-bold text-sm md:text-base px-10 py-4 md:px-12 md:py-5 rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 tracking-wide overflow-hidden btn-shine"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span>SOLICITAR INSTALAÇÃO DO APP</span>
            </a>
          </div>

          <div className="flex items-center gap-4 w-full max-w-[250px] opacity-60">
            <div className="h-[1px] flex-1 bg-slate-600"></div>
            <span className="text-slate-400 text-xs font-semibold tracking-widest uppercase">OU</span>
            <div className="h-[1px] flex-1 bg-slate-600"></div>
          </div>

          <div className="relative w-full sm:w-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm md:text-base px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 tracking-wide btn-pulse-green"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              <span>FALAR COM ATENDENTE</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs md:text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-[#d96b27]"></i>
            <span>Transação 100% Segura</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-[#d96b27]"></i>
            <span>Cadastro em 2 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
