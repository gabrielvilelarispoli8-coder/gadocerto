import React, { useState, useEffect } from 'react';
import './Features.css';

export function Features() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Link atualizado com o nome Novilha de Ouro
  const whatsappLink = "https://wa.me/5555991325777?text=Olá!%20Estou%20no%20site%20da%20Novilha%20de%20Ouro%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  // Textos refinados para o público de alto padrão
  const slides = [
    { id: 1, img: '/1p.png', overline: 'INTELIGÊNCIA FINANCEIRA', title: 'Viabilidade de Ouro', desc: 'Projete margens de lucro e retorno financeiro com precisão de tesouraria antes de qualquer aquisição.', bullets: ['Simule cenários de compra, diária e rendimento de carcaça.', 'Tenha clareza absoluta da margem antes de acionar o gerente.'] },
    { id: 2, img: '/2p.png', overline: 'RAIO-X DO REBANHO', title: 'Gestão Premium', desc: 'Acesse o histórico genético, pesagem e evolução do rebanho em um dashboard digno de um banco de investimentos.', bullets: ['Acompanhamento de GMD (Ganho Médio Diário) em tempo real.', 'Notificações preditivas para manejo e vacinação.'] },
    { id: 3, img: '/3p.png', overline: 'AMBIENTE RESTRITO', title: 'Negociação Blindada', desc: 'Conecte-se exclusivamente a pecuaristas validados. O maior e mais seguro ecossistema de alta liquidez do Brasil.', bullets: ['Filtros avançados: era, raça, peso e padrão genético.', 'Fechamento rápido e direto no WhatsApp (X1) com assessoria.'] },
    { id: 4, img: '/4p.png', overline: 'LOGÍSTICA VIP', title: 'Malha de Transporte', desc: 'Embarque seu lote com as melhores transportadoras do país. Roteirização inteligente para preservar o bem-estar animal.', bullets: ['Cálculo instantâneo de frete com otimização de carga.', 'Aproveitamento de rotas de retorno para máxima eficiência.'] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 6000); // Aumentado para 6s para dar tempo de ler os textos premium
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-32 relative overflow-hidden bg-[#050505] border-t border-amber-500/10 features-section">
      
      {/* Background Dourado Suave */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.03)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* LADO ESQUERDO: Celular Premium */}
        <div className="flex flex-col items-center justify-center relative order-2 lg:order-1">
          {/* Brilho dourado pulsante atrás do celular */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[550px] bg-amber-500/10 blur-[100px] rounded-full z-0 pointer-events-none animate-pulse-gold-slow"></div>
          
          {/* Estrutura do iPhone de Luxo */}
          <div className="relative w-[290px] h-[600px] bg-[#0a0a0a] rounded-[45px] p-[6px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.15)] border-[3px] border-[#2a2a2a] z-10 animate-float-phone">
            
            {/* Dynamic Island (Câmera do iPhone) */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-40 shadow-[inset_0_0_4px_rgba(255,255,255,0.1)] flex justify-end items-center pr-3">
              <div className="w-3 h-3 rounded-full bg-[#151515] shadow-[inset_0_0_3px_rgba(255,255,255,0.2)]"></div>
            </div>

            {/* Botões laterais */}
            <div className="absolute -left-[5px] top-[120px] w-[3px] h-[25px] bg-[#333] rounded-l-md"></div>
            <div className="absolute -left-[5px] top-[160px] w-[3px] h-[45px] bg-[#333] rounded-l-md"></div>
            <div className="absolute -left-[5px] top-[215px] w-[3px] h-[45px] bg-[#333] rounded-l-md"></div>
            <div className="absolute -right-[5px] top-[180px] w-[3px] h-[70px] bg-[#333] rounded-r-md"></div>
            
            {/* Tela */}
            <div className="w-full h-full bg-[#111] rounded-[38px] overflow-hidden relative border border-white/5 group/screen">
              {/* Reflexo de vidro na tela */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent pointer-events-none z-30"></div>
              
              {slides.map((slide, index) => (
                <img 
                  key={slide.id} 
                  src={slide.img} 
                  alt={`Tela ${slide.title}`} 
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out z-20 ${index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} 
                  onError={(e) => { 
                    e.target.style.display = 'none'; 
                    e.target.nextSibling.style.display = 'flex'; 
                  }} 
                />
              ))}
              
              {/* Fallback caso as imagens 1p, 2p não carreguem */}
              <div className="hidden absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#050505] flex-col items-center justify-center p-6 text-center z-10">
                <i className="fa-solid fa-mobile-screen text-4xl text-amber-500/50 mb-3"></i>
                <p className="text-xs text-slate-500">Imagens do App em carregamento...</p>
              </div>
            </div>
          </div>

          {/* Indicadores de Slide (Dots) com Barra de Progresso Dourada */}
          <div className="flex gap-3 mt-10 z-10">
            {slides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveSlide(index)} 
                className={`relative h-2 rounded-full overflow-hidden transition-all duration-500 ${index === activeSlide ? 'w-12 bg-[#222]' : 'w-2 bg-[#222] hover:bg-[#333] cursor-pointer'}`}
              >
                {/* A barrinha dourada que enche quando está ativo */}
                {index === activeSlide && (
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-[#d96b27] animate-slide-progress"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: Textos e Botão de Ação */}
        <div className="flex flex-col text-left relative min-h-[450px] justify-center order-1 lg:order-2">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`absolute top-1/2 -translate-y-1/2 left-0 w-full transition-all duration-700 ease-in-out ${index === activeSlide ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-12 pointer-events-none'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-amber-500"></div>
                <h4 className="text-amber-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase drop-shadow-md">{slide.overline}</h4>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                {slide.title}
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                {slide.desc}
              </p>
              
              <div className="flex flex-col gap-5 mb-12">
                {slide.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4 glass-bullet p-4 rounded-2xl border border-white/5">
                    <div className="mt-1 w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                      <i className="fa-solid fa-check text-amber-400 text-[10px]"></i>
                    </div>
                    <p className="text-slate-300 text-[15px] font-medium leading-snug">{bullet}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col items-start gap-4">
                <div className="relative group/wpp w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-30 group-hover/wpp:opacity-60 transition duration-500"></div>
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#1eab52] hover:from-[#1eab52] hover:to-[#128C7E] text-white font-bold text-[14px] md:text-base tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300 shadow-xl hover:scale-[1.03] active:scale-95 w-full sm:w-fit overflow-hidden"
                  >
                    {/* Efeito de brilho varrendo o botão */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/wpp:animate-[shimmer_1.5s_infinite]"></div>
                    
                    <i className="fa-brands fa-whatsapp text-[24px] animate-wiggle"></i>
                    <span>SOLICITAR AGENDAMENTO AGORA</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase">Assessoria 100% Humana e Sigilosa</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}