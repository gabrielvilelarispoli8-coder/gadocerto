import React, { useState, useEffect } from 'react';
import './Features.css';

export function Features() {
  const [activeSlide, setActiveSlide] = useState(0);
  const whatsappLink = "https://wa.me/5555991325777?text=Olá!%20Estou%20no%20site%20da%20GadoCerto%20e%20quero%20agendar%20a%20ligação%20com%20meu%20gerente%20de%20conta%20para%20realizar%20a%20instalação%20e%20a%20verificação%20blindada%20do%20aplicativo.";

  const slides = [
    { id: 1, img: '/1p.png', overline: 'VIABILIDADE', title: 'Calculadora de Preços', desc: 'Entenda o potencial da operação antes de comprar. Projete margem, retorno e indicadores para você decidir com mais segurança.', bullets: ['Simule cenários de compra, diária e rendimento em poucos toques.', 'Descubra rapidamente se a margem faz sentido antes de fechar o negócio.'] },
    { id: 2, img: '/2p.png', overline: 'CONTROLE', title: 'Gestão de Rebanho', desc: 'Tenha todos os dados do seu gado na palma da mão. Acompanhe a evolução, histórico e pesagem de forma simples.', bullets: ['Cadastre lotes e acompanhe o ganho de peso diário.', 'Receba alertas de vacinação e manejo.'] },
    { id: 3, img: '/3p.png', overline: 'NEGOCIAÇÃO', title: 'Compra e Venda', desc: 'Acesse o maior mercado digital pecuário. Encontre compradores e vendedores verificados em todo o Brasil.', bullets: ['Filtre lotes por raça, era, peso e localização.', 'Negocie diretamente pelo aplicativo com segurança.'] },
    { id: 4, img: '/4p.png', overline: 'LOGÍSTICA', title: 'Frete Inteligente', desc: 'Otimize o transporte do seu gado. Encontre as melhores rotas e caminhões disponíveis na sua região.', bullets: ['Calcule o custo do frete instantaneamente.', 'Aproveite cargas de retorno para economizar.'] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#fdfbf9] to-[#f4ebe1]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center justify-center relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[500px] bg-[#d96b27]/10 blur-[80px] rounded-full z-0 pointer-events-none"></div>
          <div className="relative w-[280px] h-[580px] bg-[#111] rounded-[45px] p-[6px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[3px] border-[#333] z-10 transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30"></div>
            <div className="w-full h-full bg-white rounded-[38px] overflow-hidden relative">
              {slides.map((slide, index) => (
                <img key={slide.id} src={slide.img} alt={`Tela ${slide.title}`} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              ))}
            </div>
          </div>
          <div className="flex gap-2 mt-8 z-10">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setActiveSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-8 bg-[#d96b27]' : 'w-2 bg-[#d96b27]/30 hover:bg-[#d96b27]/60'}`}></button>
            ))}
          </div>
        </div>

        <div className="flex flex-col text-left relative min-h-[400px] justify-center">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`absolute top-1/2 -translate-y-1/2 left-0 w-full transition-all duration-700 ease-in-out ${index === activeSlide ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
              <h4 className="text-[#d96b27] text-sm font-bold tracking-widest uppercase mb-2">{slide.overline}</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6 leading-tight">{slide.title}</h2>
              <p className="text-[#5a5a5a] text-lg mb-8 max-w-lg leading-relaxed">{slide.desc}</p>
              <div className="flex flex-col gap-4 mb-10">
                {slide.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#d96b27]/10 flex items-center justify-center flex-shrink-0"><i className="fa-solid fa-check text-[#d96b27] text-[10px]"></i></div>
                    <p className="text-[#4a4a4a] text-[15px] font-medium leading-snug">{bullet}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="relative group/wpp w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-20 group-hover/wpp:opacity-40 transition duration-500"></div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eab52] text-white font-bold text-[14px] tracking-wide px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#25D366]/20 w-full sm:w-fit">
                    <i className="fa-brands fa-whatsapp text-[22px] animate-wiggle"></i>
                    <span>SOLICITAR AGENDAMENTO AGORA</span>
                  </a>
                </div>
                <span className="text-slate-500 text-xs font-medium flex items-center gap-2"><i className="fa-solid fa-headset text-[#d96b27]"></i> Atendimento rápido e humano.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
