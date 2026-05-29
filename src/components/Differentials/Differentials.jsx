import React from 'react';
import './Differentials.css';

export function Differentials() {
  const whatsappLink = "https://wa.me/5555991325777?text=Olá!%20Estou%20no%20site%20da%20GadoCerto%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  const cards = [
    { id: 1, icon: 'fa-shield-halved', iconColor: 'text-emerald-500', bgColor: 'bg-emerald-500/10', glowColor: 'group-hover/card:bg-emerald-500/5', title: 'Segurança', desc: 'Transações financeiras 100% seguras, com zero risco de calote e análise de procedência e qualidade dos animais.' },
    { id: 2, icon: 'fa-certificate', iconColor: 'text-orange-500', bgColor: 'bg-orange-500/10', glowColor: 'group-hover/card:bg-orange-500/5', title: 'Garantias', desc: 'Negocie com tranquilidade, com suporte e garantias em caso de imprevistos durante o processo.' },
    { id: 3, icon: 'fa-binoculars', iconColor: 'text-blue-500', bgColor: 'bg-blue-500/10', glowColor: 'group-hover/card:bg-blue-500/5', title: 'Acesso ao mercado', desc: 'Conecte-se a mais de 3.000 pecuaristas. Levamos cada lote aos melhores compradores e ampliamos oportunidades de negócio.' },
    { id: 4, icon: 'fa-wand-magic-sparkles', iconColor: 'text-amber-500', bgColor: 'bg-amber-500/10', glowColor: 'group-hover/card:bg-amber-500/5', title: 'Facilidades', desc: 'Toda burocracia é por nossa conta. Nosso time estará com você do início ao fim da sua negociação.' },
    { id: 5, icon: 'fa-microchip', iconColor: 'text-indigo-500', bgColor: 'bg-indigo-500/10', glowColor: 'group-hover/card:bg-indigo-500/5', title: 'Tecnologia', desc: 'Usamos inteligência de mercado para que você encontre o melhor negócio de maneira fácil e eficiente.' },
    { id: 6, icon: 'fa-briefcase', iconColor: 'text-rose-500', bgColor: 'bg-rose-500/10', glowColor: 'group-hover/card:bg-rose-500/5', title: 'Consultoria', desc: 'Nossa equipe entende de pecuária. Conte conosco para traçar a melhor estratégia para sua fazenda.' }
  ];

  return (
    <section className="differentials-section py-28 bg-gradient-to-b from-[#fcfaf8] to-[#f4ebe1] text-[#2d2d2d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h4 className="text-[#d96b27] text-sm font-bold tracking-[0.2em] uppercase mb-4">DIFERENCIAIS</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-3xl mx-auto text-[#1a1a1a]">
          Cuidamos da sua negociação <br className="hidden md:block" /> de <b className="text-transparent bg-clip-text bg-gradient-to-r from-[#d96b27] to-[#f58f4c]">ponta a ponta!</b>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="relative bg-white rounded-[24px] p-8 text-left shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-slate-100/80 cursor-default overflow-hidden group/card diff-card">
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-500 ${card.glowColor}`}></div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.bgColor} relative z-10`}>
                <i className={`fa-solid ${card.icon} text-[24px] ${card.iconColor}`}></i>
              </div>
              <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-3 relative z-10">{card.title}</h3>
              <p className="text-[#555] text-[15px] leading-relaxed relative z-10">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
            <div className="relative group/btn w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-30 group-hover/btn:opacity-60 transition duration-500"></div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eab52] text-white font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 tracking-wide overflow-hidden btn-shine-green">
                <i className="fa-brands fa-whatsapp text-[22px]"></i>
                <span>SOLICITAR AGENDAMENTO</span>
              </a>
            </div>
            <span className="text-slate-400 text-xs font-bold tracking-widest uppercase hidden sm:block">OU</span>
            <div className="relative w-full sm:w-auto">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#25D366]/30 hover:scale-105 active:scale-95 tracking-wide">
                <i className="fa-brands fa-whatsapp text-[22px]"></i>
                <span>FALAR NO WHATSAPP</span>
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-2"><i className="fa-solid fa-lock text-[#25D366]"></i><span>App 100% seguro</span></div>
            <span className="hidden sm:block text-slate-300">•</span>
            <div className="flex items-center gap-2"><i className="fa-solid fa-headset text-[#d96b27]"></i><span>Atendimento humanizado</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
