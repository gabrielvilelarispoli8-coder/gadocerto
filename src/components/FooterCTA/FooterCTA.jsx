import React from 'react';
import './FooterCTA.css';

export function FooterCTA() {
  const whatsappLink = "https://wa.me/5555991325777?text=Olá!%20Estou%20no%20site%20da%20GadoCerto%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden flex items-center justify-center border-t border-white/5 group/cta">
      <div className="absolute top-0 left-0 w-full md:w-[50%] h-full bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-left-top opacity-30 image-fade-right transition-transform duration-[10000ms] group-hover/cta:scale-105"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/95 to-[#050505]"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          <h4 className="text-[#d96b27] text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase m-0 mt-[2px]">ATENDIMENTO ONLINE</h4>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight tracking-tight drop-shadow-2xl">
          Tenha o mercado na palma da mão e <br className="hidden md:block"/> 
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">negocie com mais confiança.</b>
        </h2>
        
        <div className="relative group/wpp mt-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-40 group-hover/wpp:opacity-75 transition duration-500"></div>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eab52] text-white font-bold text-[14px] md:text-base tracking-wide px-12 py-5 rounded-full transition-all duration-300 shadow-2xl overflow-hidden btn-shine-green"
          >
            <i className="fa-brands fa-whatsapp text-[26px] animate-wiggle"></i>
            <span>FALAR COM UM ESPECIALISTA</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs md:text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2"><i className="fa-solid fa-bolt text-[#25D366]"></i><span className="text-slate-300">Resposta imediata</span></div>
          <span className="hidden sm:block text-slate-700">•</span>
          <div className="flex items-center gap-2"><i className="fa-solid fa-headset text-[#d96b27]"></i><span>Equipe especializada</span></div>
        </div>
      </div>
    </section>
  );
}
