import React from 'react';
import './Differentials.css';

export function Differentials() {
  const whatsappLink = "https://wa.me/5564992837665?text=Olá!%20Estou%20no%20site%20da%20Novilha%20de%20Ouro%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  // Cards refinados para o posicionamento de Alto Valor
  const cards = [
    { id: 1, icon: 'fa-shield-halved', iconColor: 'text-amber-500', bgColor: 'bg-amber-500/10', glowColor: 'group-hover/card:bg-amber-500/20', title: 'Segurança Financeira', desc: 'Risco zero de calote. Todas as transações são lastreadas e as identidades dos pecuaristas passam por auditoria bancária rigorosa.' },
    { id: 2, icon: 'fa-certificate', iconColor: 'text-[#d96b27]', bgColor: 'bg-[#d96b27]/10', glowColor: 'group-hover/card:bg-[#d96b27]/20', title: 'Padrão Ouro', desc: 'Acabe com as surpresas no curral. Avaliação criteriosa da sanidade, conformação e procedência de todos os lotes.' },
    { id: 3, icon: 'fa-network-wired', iconColor: 'text-amber-400', bgColor: 'bg-amber-400/10', glowColor: 'group-hover/card:bg-amber-400/20', title: 'Alta Liquidez', desc: 'Acesso instantâneo à elite da pecuária. Conectamos seu lote aos maiores compradores e invernistas do Brasil em minutos.' },
    { id: 4, icon: 'fa-file-signature', iconColor: 'text-[#d96b27]', bgColor: 'bg-[#d96b27]/10', glowColor: 'group-hover/card:bg-[#d96b27]/20', title: 'Esteira Documental', desc: 'A burocracia é invisível para você. Emitimos GTA, NF e gerimos a parte tributária da operação com agilidade.' },
    { id: 5, icon: 'fa-chart-line', iconColor: 'text-amber-500', bgColor: 'bg-amber-500/10', glowColor: 'group-hover/card:bg-amber-500/20', title: 'Inteligência de Preço', desc: 'Algoritmos preditivos garantem que você nunca venda abaixo do mercado. Calculamos o preço posto com margem exata.' },
    { id: 6, icon: 'fa-users-tie', iconColor: 'text-amber-400', bgColor: 'bg-amber-400/10', glowColor: 'group-hover/card:bg-amber-400/20', title: 'Assessoria X1', desc: 'Nada de robôs. Um gerente de conta dedicado no WhatsApp para conduzir seu fechamento e aprovar propostas de valor.' }
  ];

  return (
    <section className="differentials-section py-32 bg-[#050505] text-white relative overflow-hidden border-t border-amber-500/10">
      
      {/* Background Ouro Sutil */}
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-[#d96b27]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h4 className="text-amber-500 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 drop-shadow-md">
          A DIFERENÇA DO PADRÃO OURO
        </h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 leading-[1.1] max-w-4xl mx-auto tracking-tight drop-shadow-lg text-slate-200">
          Avaliamos, precificamos e <br className="hidden md:block" /> 
          <b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#d96b27]">
            garantimos o seu lucro.
          </b>
        </h2>

        {/* Grid de Cards Glassmorphism Dark */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="relative bg-[#0a0a0a] rounded-[24px] p-8 text-left shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] border border-white/5 cursor-default overflow-hidden group/card diff-card backdrop-blur-xl">
              
              {/* Luz interna que acende no hover */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] transition-all duration-700 opacity-0 group-hover/card:opacity-100 ${card.glowColor}`}></div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover/card:border-amber-500/30 transition-colors duration-500 ${card.bgColor} relative z-10`}>
                <i className={`fa-solid ${card.icon} text-[22px] ${card.iconColor} group-hover/card:drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] transition-all duration-300`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10 tracking-wide group-hover/card:text-amber-400 transition-colors">{card.title}</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed relative z-10 group-hover/card:text-slate-300 transition-colors">{card.desc}</p>
              
              {/* Linha brilhante na base do card */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Botões de Ação (Bottom CTA) */}
        <div className="mt-24 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-2xl mx-auto">
            
            {/* Botão Vip (Ouro) */}
            <div className="relative group/btn w-full sm:w-auto flex-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-[#d96b27] rounded-full blur opacity-30 group-hover/btn:opacity-60 transition duration-500 animate-pulse-gold"></div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#d96b27] to-amber-600 hover:from-amber-500 hover:to-[#d96b27] text-white font-extrabold text-xs md:text-sm px-8 py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(217,107,39,0.3)] hover:scale-105 active:scale-95 tracking-widest uppercase overflow-hidden btn-shine-gold">
                <i className="fa-brands fa-whatsapp text-[22px] drop-shadow-md"></i>
                <span>Agendar Assessoria (X1)</span>
              </a>
            </div>
            
            <span className="text-slate-600 text-[10px] font-bold tracking-[0.3em] uppercase hidden sm:block">OU</span>
            
            {/* Botão Secundário Transparente */}
            <div className="relative w-full sm:w-auto flex-1 group/wpp">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-20 group-hover/wpp:opacity-50 transition duration-500"></div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative w-full flex items-center justify-center gap-3 bg-[#0a0a0a] border-[2px] border-[#25D366]/40 text-slate-200 hover:bg-[#25D366]/10 hover:border-[#25D366] hover:text-white font-bold text-xs md:text-sm px-8 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#25D366]/20 hover:scale-105 active:scale-95 tracking-widest uppercase backdrop-blur-sm">
                <i className="fa-brands fa-whatsapp text-[20px] text-[#25D366]"></i>
                <span>Tirar Dúvidas</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-500 text-xs font-semibold tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-vault text-amber-500/80"></i>
              <span>Cofre 100% Seguro</span>
            </div>
            <span className="hidden sm:block text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-handshake-angle text-amber-500/80"></i>
              <span>Atendimento Privativo</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
