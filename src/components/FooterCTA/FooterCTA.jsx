import React from 'react';
import './FooterCTA.css';

export function FooterCTA() {
  const whatsappLink = "https://wa.me/5555991325777?text=Olá!%20Estou%20no%20site%20da%20Novilha%20de%20Ouro%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  return (
    <section className="relative w-full py-40 bg-[#030303] overflow-hidden flex items-center justify-center border-t border-amber-500/20 group/cta">
      
      {/* CAMADA 1: Malha Holográfica e Luzes de Ouro */}
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(245,158,11,0.15)_0%,_transparent_70%)] pointer-events-none"></div>

      {/* CAMADA 2: Partículas de Ouro Flutuantes (Cinematic Embers) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="ember ember-1"></div>
        <div className="ember ember-2"></div>
        <div className="ember ember-3"></div>
        <div className="ember ember-4"></div>
        <div className="ember ember-5"></div>
      </div>

      {/* CAMADA 3: Imagem do Agro com banho de Ouro e Máscara de Desvanecimento */}
      <div className="absolute top-0 left-0 w-full md:w-[65%] h-full bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-left-top opacity-20 image-fade-right transition-transform duration-[20000ms] group-hover/cta:scale-[1.03] mix-blend-luminosity"></div>
      
      {/* CAMADA 4: Gradientes de Sombreamento para leitura perfeita */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#030303]/95 via-[#030303]/95 md:via-[#030303]/80 to-[#030303] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
        
        {/* Indicador de Status VIP (Com efeito Scanner de Radar) */}
        <div className="mb-10 flex items-center gap-3 px-6 py-2.5 rounded-full border border-amber-500/30 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(245,158,11,0.15)] cursor-default transition-all hover:border-amber-500/50 hover:bg-amber-500/10 relative overflow-hidden group/status">
          {/* Efeito de radar varrendo o badge */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent -translate-x-full group-hover/status:animate-radar-sweep pointer-events-none"></div>
          
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,1)]"></span>
          </span>
          <h4 className="text-amber-500 text-[11px] md:text-xs font-extrabold tracking-[0.25em] uppercase m-0 mt-[2px] drop-shadow-md">
            SISTEMA ONLINE • GERENTES PRONTOS PARA O X1
          </h4>
        </div>
        
        {/* Headline de Alto Impacto */}
        <h2 className="text-4xl md:text-5xl lg:text-[68px] font-light text-white mb-8 leading-[1.05] tracking-tight drop-shadow-2xl">
          A elite da pecuária exige <br className="hidden md:block"/>
          <b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#d96b27] animate-gradient-x">
            segurança e liquidez.
          </b>
        </h2>

        <p className="text-slate-300 text-lg md:text-xl mb-14 max-w-2xl leading-relaxed font-medium drop-shadow-md">
          Pare de perder margem com negociações amadoras. Solicite seu acesso, valide sua identidade bancária e opere no ambiente de negócios mais rentável do Brasil.
        </p>
        
        {/* Botão Principal de Ação (Com Anel de Energia Ouro) */}
        <div className="relative group/wpp mt-2 z-20">
          {/* Anel de energia giratório */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-[#d96b27] to-amber-600 rounded-full blur-xl opacity-40 group-hover/wpp:opacity-80 transition duration-700 animate-spin-slow pointer-events-none"></div>
          
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-4 bg-gradient-to-r from-[#111] to-[#1a1a1a] hover:from-[#d96b27] hover:to-amber-600 border border-amber-500/50 hover:border-transparent text-white font-extrabold text-[15px] md:text-lg tracking-widest uppercase px-12 py-5 md:py-6 rounded-full transition-all duration-500 shadow-[0_15px_40px_rgba(217,107,39,0.3)] hover:shadow-[0_20px_50px_rgba(217,107,39,0.6)] hover:scale-[1.03] active:scale-95 overflow-hidden btn-shine-gold"
          >
            {/* Efeito de Vidro no botão */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
            
            <i className="fa-brands fa-whatsapp text-[28px] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-wiggle"></i>
            <span className="drop-shadow-md">SOLICITAR ACESSO VIP</span>
          </a>
        </div>

        {/* Badges de Autoridade e Confiança (Fintech Style) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
          <div className="flex items-center gap-2.5 group/trust cursor-default bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-amber-500/30 transition-all">
            <i className="fa-brands fa-nfc-symbol text-amber-500/70 group-hover/trust:text-amber-400 transition-colors"></i>
            <span className="text-slate-400 group-hover/trust:text-slate-200 transition-colors">Validação NFC</span>
          </div>
          
          <div className="flex items-center gap-2.5 group/trust cursor-default bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-amber-500/30 transition-all">
            <i className="fa-solid fa-shield-halved text-amber-500/70 group-hover/trust:text-amber-400 transition-colors"></i>
            <span className="text-slate-400 group-hover/trust:text-slate-200 transition-colors">Cofre Tokenless</span>
          </div>
          
          <div className="flex items-center gap-2.5 group/trust cursor-default bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-amber-500/30 transition-all">
            <i className="fa-solid fa-headset text-amber-500/70 group-hover/trust:text-amber-400 transition-colors"></i>
            <span className="text-slate-400 group-hover/trust:text-slate-200 transition-colors">Gerente Dedicado</span>
          </div>
        </div>

      </div>
    </section>
  );
}