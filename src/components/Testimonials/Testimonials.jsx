import React from 'react';
import './Testimonials.css';

export function Testimonials() {
  // Depoimentos polidos e expandidos com foco em alta rentabilidade e segurança bancária
  const reviews = [
    {
      id: 1,
      text: "A Novilha de Ouro estabeleceu um novo patamar de integridade no mercado. Eles vendem exatamente o que pesa, com rastreabilidade total. Entregam o que foi combinado e respeitam o princípio de que negócio bom é quando todos ganham.",
      author: "Clodoveu Franciosi",
      role: "Invernista e Produtor"
    },
    {
      id: 2,
      text: "A certeza do peso real antes do embarque trouxe uma previsibilidade cirúrgica para a nossa operação. Ficou muito mais fácil realizar os cálculos de rentabilidade e rendimento de carcaça diretamente pelo sistema de pesagem.",
      author: "Florian Dietz",
      role: "Pecuarista de Recria/Engorda"
    },
    {
      id: 3,
      text: "Excelente ecossistema, transações líquidas e ambiente blindado contra calotes. Para nós pecuaristas que fazemos contas de alto valor e exigimos precisão milimétrica, o aplicativo se tornou indispensável.",
      author: "Hugo Lorenzetti",
      role: "Diretor Agropecuário"
    },
    {
      id: 4,
      text: "Uma experiência de mercado inovadora e fora da curva. A validação digital e a agilidade nas esteiras de pagamento removem toda a fricção e burocracia tradicional do campo. Padrão ouro absoluto.",
      author: "José Renato Lemos",
      role: "Investidor e Selecionador"
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#030303] overflow-hidden testimonials-section border-t border-amber-500/10">
      
      {/* Background Tech Ouro */}
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[200px] bg-amber-500/10 blur-[120px] rounded-[100%] pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#d96b27]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho de Autoridade da Seção */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-amber-500"></div>
            <h4 className="text-amber-500 text-xs md:text-sm font-bold tracking-[0.25em] uppercase drop-shadow-md">
              Chancela de Sucesso
            </h4>
            <div className="w-6 h-[2px] bg-amber-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight max-w-3xl">
            Quem dita o ritmo do mercado já opera no <br />
            <b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#d96b27]">
              Padrão Novilha de Ouro.
            </b>
          </h2>
        </div>
        
        {/* Grid de Depoimentos Luxo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-[#0a0a0a] rounded-[28px] p-8 flex flex-col justify-between shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)] border border-white/5 hover:border-amber-500/20 hover:-translate-y-2 transition-all duration-500 group cursor-default backdrop-blur-xl relative overflow-hidden testimonial-card"
            >
              {/* Brilho interno sutil no hover */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Ícone de Aspas Ouro e Estrelas de Avaliação */}
                <div className="flex justify-between items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-400 transition-colors duration-500">
                    <i className="fa-solid fa-quote-left text-[20px] text-amber-500 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-all duration-300"></i>
                  </div>
                  <div className="flex gap-1 text-amber-400 text-[10px] drop-shadow-[0_0_5px_rgba(245,158,11,0.4)]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                
                {/* Texto do Depoimento */}
                <p className="text-slate-400 text-[15px] leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300">
                  "{review.text}"
                </p>
              </div>

              {/* Assinatura de Luxo do Autor */}
              <div className="mt-12 pt-6 border-t border-white/5 flex flex-col items-end w-full group-hover:border-amber-500/10 transition-colors duration-500">
                <span className="text-white font-bold text-[16px] tracking-wide mb-1 transition-colors group-hover:text-amber-400">
                  {review.author}
                </span>
                <span className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider">
                  {review.role}
                </span>
              </div>
              
              {/* Moldura inferior animada */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
