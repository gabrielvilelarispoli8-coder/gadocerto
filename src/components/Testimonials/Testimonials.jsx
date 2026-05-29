import React from 'react';
import './Testimonials.css';

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "A Novilha de Ouro é uma empresa que vende quanto pesa. Entrega o que foi combinado e respeita o princípio de que negócio bom é quando todos ganham.",
      author: "Clodoveu Franciosi"
    },
    {
      id: 2,
      text: "A certeza do peso antes da compra traz um diferencial grande na compra pelo Novilha de Ouro. Fica mais fácil de fazer os cálculos de rentabilidade.",
      author: "Florian Dietz"
    },
    {
      id: 3,
      text: "Ótimo serviço, compra segura e no peso. Para pecuaristas que fazem conta.",
      author: "Hugo Lorenzetti"
    },
    {
      id: 4,
      text: "Experiência de compra muito boa e inovadora!",
      author: "José Renato Lemos"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden testimonials-section">
      
      {/* Efeito de luz/glow no topo (idêntico ao fundo do seu print) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[150px] bg-[#d96b27]/10 blur-[100px] rounded-[100%] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-[#151515] rounded-[24px] p-8 flex flex-col justify-between shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/10 hover:-translate-y-2 transition-all duration-300 group cursor-default"
            >
              <div>
                {/* Ícone de Aspas Laranja */}
                <div className="mb-6">
                  <i className="fa-solid fa-quote-left text-[40px] text-[#d96b27] opacity-90 group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                
                {/* Texto do Depoimento */}
                <p className="text-slate-300 text-[15px] leading-relaxed font-medium">
                  {review.text}
                </p>
              </div>

              {/* Assinatura do Cliente com a Linha Laranja */}
              <div className="mt-10 flex items-center justify-end gap-3">
                <div className="w-12 h-[2px] bg-[#d96b27]"></div>
                <span className="text-white font-bold text-[14px] tracking-wide">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
