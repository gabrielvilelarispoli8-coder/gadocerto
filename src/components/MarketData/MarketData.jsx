import React from 'react';
import './MarketData.css';

export function MarketData() {
  return (
    <section className="relative w-full py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Background Tech Agro */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(217,107,39,0.05)_0%,_rgba(10,10,10,1)_70%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho do Painel */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
          <div>
            <h4 className="text-slate-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              MERCADO EM TEMPO REAL
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Cotação e Rendimento
            </h2>
          </div>
          
          {/* Ticker da Arroba (@) */}
          <div className="mt-6 md:mt-0 bg-[#111] border border-white/5 rounded-2xl p-5 flex items-center gap-8 shadow-2xl">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Boi Gordo (@)</p>
              <p className="text-3xl font-bold text-emerald-400 tracking-tight">R$ 230,50</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1">
                <i className="fa-solid fa-arrow-trend-up"></i> +1.2%
              </span>
              <span className="text-slate-500 text-[9px] tracking-wider">Atualizado há 2 min</span>
            </div>
          </div>
        </div>

        {/* Layout do Boi e Cortes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
          {/* COLUNA ESQUERDA: Traseiro */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-4">Média de Cortes (Traseiro)</h3>
            
            <div className="glass-cut p-5 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-white font-bold text-[15px] group-hover:text-[#d96b27] transition-colors">Picanha</p>
                <p className="text-slate-500 text-[11px] mt-1">Corte Premium</p>
              </div>
              <p className="text-[#d96b27] font-bold text-lg">R$ 78,90 <span className="text-[11px] text-slate-500 font-normal">/kg</span></p>
            </div>
            
            <div className="glass-cut p-5 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-white font-bold text-[15px] group-hover:text-[#d96b27] transition-colors">Contrafilé</p>
                <p className="text-slate-500 text-[11px] mt-1">Alta demanda</p>
              </div>
              <p className="text-[#d96b27] font-bold text-lg">R$ 45,50 <span className="text-[11px] text-slate-500 font-normal">/kg</span></p>
            </div>
            
            <div className="glass-cut p-5 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-white font-bold text-[15px] group-hover:text-[#d96b27] transition-colors">Alcatra</p>
                <p className="text-slate-500 text-[11px] mt-1">Traseiro completo</p>
              </div>
              <p className="text-[#d96b27] font-bold text-lg">R$ 42,00 <span className="text-[11px] text-slate-500 font-normal">/kg</span></p>
            </div>
          </div>

          {/* CENTRO: Sua Imagem Personalizada booi.svg com tamanho ampliado */}
          <div className="flex justify-center relative py-10 lg:py-0">
            {/* Efeito Glow atrás da imagem - Ajustado para o novo tamanho */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 blur-[90px] rounded-full z-0 pointer-events-none"></div>
            
            {/* Contêiner da Imagem - Largura máxima aumentada de 280px para 450px */}
            <div className="relative z-10 w-full max-w-[450px]">
              <img 
                src="/booi.svg" 
                alt="Visualização do Boi GadoCerto" 
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-[1.05]"
              />
            </div>
          </div>

          {/* COLUNA DIREITA: Dianteiro */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-4 text-right">Média de Cortes (Dianteiro)</h3>
            
            <div className="glass-cut p-5 rounded-2xl flex justify-between items-center group cursor-default">
              <p className="text-[#d96b27] font-bold text-lg">R$ 28,90 <span className="text-[11px] text-slate-500 font-normal">/kg</span></p>
              <div className="text-right">
                <p className="text-white font-bold text-[15px] group-hover:text-[#d96b27] transition-colors">Acém</p>
                <p className="text-slate-500 text-[11px] mt-1">Dianteiro</p>
              </div>
            </div>
            
            <div className="glass-cut p-5 rounded-2xl flex justify-between items-center group cursor-default">
              <p className="text-[#d96b27] font-bold text-lg">R$ 25,00 <span className="text-[11px] text-slate-500 font-normal">/kg</span></p>
              <div className="text-right">
                <p className="text-white font-bold text-[15px] group-hover:text-[#d96b27] transition-colors">Paleta</p>
                <p className="text-slate-500 text-[11px] mt-1">Corte magro</p>
              </div>
            </div>
            
            <div className="glass-cut p-5 rounded-2xl flex justify-between items-center group cursor-default">
              <p className="text-[#d96b27] font-bold text-lg">R$ 35,50 <span className="text-[11px] text-slate-500 font-normal">/kg</span></p>
              <div className="text-right">
                <p className="text-white font-bold text-[15px] group-hover:text-[#d96b27] transition-colors">Costela</p>
                <p className="text-slate-500 text-[11px] mt-1">Alto rendimento</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
