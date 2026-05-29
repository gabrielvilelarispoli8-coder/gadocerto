import React from 'react';
import './MarketData.css';

export function MarketData() {
  return (
    <section className="relative w-full py-32 bg-[#030303] overflow-hidden border-t border-amber-500/10 market-section">
      
      {/* CAMADA 1: Background Tech Agro (Malha Holográfica) */}
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08)_0%,_rgba(3,3,3,1)_70%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho do Painel (Estilo Mesa de Operações) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-amber-500/10 pb-8 relative">
          <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-amber-500 to-transparent"></div>
          
          <div>
            <h4 className="text-amber-500 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-3 drop-shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
              </span>
              Terminal de Mercado Live
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
              Cotação e <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-[#d96b27]">Rendimento</span>
            </h2>
          </div>
          
          {/* Ticker da Arroba (@) - Fintech Style */}
          <div className="mt-8 md:mt-0 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-[#0a0a0a] border border-emerald-500/20 rounded-2xl p-6 flex items-center gap-8 shadow-2xl backdrop-blur-xl">
              <div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  Boi Gordo (@) <i className="fa-solid fa-satellite-dish text-emerald-500/50 text-[10px] animate-pulse"></i>
                </p>
                <p className="text-4xl font-extrabold text-emerald-400 tracking-tight drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                  R$ 230,50
                </p>
              </div>
              <div className="flex flex-col items-end gap-3 border-l border-white/5 pl-6">
                <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-2 shadow-[inset_0_0_10px_rgba(52,211,153,0.1)]">
                  <i className="fa-solid fa-arrow-trend-up"></i> +1.2%
                </span>
                <span className="text-slate-500 text-[9px] font-medium tracking-widest uppercase">Atualizado agora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Principal: Cortes e Raio-X do Boi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* COLUNA ESQUERDA: Traseiro */}
          <div className="flex flex-col gap-5 relative z-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-amber-500"></div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Traseiro Ouro</h3>
            </div>
            
            <div className="glass-cut p-6 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-white font-bold text-[16px] group-hover:text-amber-400 transition-colors tracking-wide">Picanha</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold">Corte Premium</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-amber-500 font-extrabold text-xl drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">R$ 78,90</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">/ kg</p>
              </div>
            </div>
            
            <div className="glass-cut p-6 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-white font-bold text-[16px] group-hover:text-amber-400 transition-colors tracking-wide">Contrafilé</p>
                <p className="text-slate-500 text-[11px] mt-1 uppercase tracking-wider font-semibold">Alta demanda</p>
              </div>
              <div className="text-right">
                <p className="text-amber-500 font-extrabold text-xl">R$ 45,50</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">/ kg</p>
              </div>
            </div>
            
            <div className="glass-cut p-6 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-white font-bold text-[16px] group-hover:text-amber-400 transition-colors tracking-wide">Alcatra</p>
                <p className="text-slate-500 text-[11px] mt-1 uppercase tracking-wider font-semibold">Traseiro completo</p>
              </div>
              <div className="text-right">
                <p className="text-amber-500 font-extrabold text-xl">R$ 42,00</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">/ kg</p>
              </div>
            </div>
          </div>

          {/* CENTRO: Mapeamento Holográfico da Novilha de Ouro */}
          <div className="flex justify-center relative py-16 lg:py-0 group/bull cursor-crosshair">
            {/* Efeito Glow Pulsante */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full z-0 pointer-events-none group-hover/bull:bg-amber-500/20 transition-all duration-1000"></div>
            
            {/* Contêiner da Imagem com Efeito de Raio-X */}
            <div className="relative z-10 w-full max-w-[480px] bull-container">
              
              {/* O Scanner a Laser que sobe e desce */}
              <div className="hologram-scanner"></div>

              <img 
                src="/booi.svg" 
                alt="Mapeamento Bovino Novilha de Ouro" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,1)] transition-transform duration-700 group-hover/bull:scale-[1.03]"
              />
              
              {/* Pontos de Data (UI flutuante sobre a imagem) */}
              <div className="absolute top-[20%] left-[25%] flex items-center gap-2 pointer-events-none data-point delay-100">
                <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24] animate-ping"></div>
                <div className="w-12 h-[1px] bg-amber-400/50"></div>
                <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-amber-500/30">Cupim</span>
              </div>

              <div className="absolute top-[40%] right-[20%] flex items-center gap-2 pointer-events-none data-point delay-300">
                <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-amber-500/30">Picanha</span>
                <div className="w-16 h-[1px] bg-amber-400/50"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24] animate-ping"></div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Dianteiro */}
          <div className="flex flex-col gap-5 relative z-20">
            <div className="flex items-center justify-end gap-3 mb-2">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-400">Dianteiro Premium</h3>
              <div className="w-8 h-[2px] bg-[#d96b27]"></div>
            </div>
            
            <div className="glass-cut p-6 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-[#d96b27] group-hover:text-amber-500 transition-colors font-extrabold text-xl">R$ 28,90</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">/ kg</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-[16px] group-hover:text-amber-400 transition-colors tracking-wide">Acém</p>
                <p className="text-slate-500 text-[11px] mt-1 uppercase tracking-wider font-semibold">Corte Dianteiro</p>
              </div>
            </div>
            
            <div className="glass-cut p-6 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-[#d96b27] group-hover:text-amber-500 transition-colors font-extrabold text-xl">R$ 25,00</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">/ kg</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-[16px] group-hover:text-amber-400 transition-colors tracking-wide">Paleta</p>
                <p className="text-slate-500 text-[11px] mt-1 uppercase tracking-wider font-semibold">Corte Magro</p>
              </div>
            </div>
            
            <div className="glass-cut p-6 rounded-2xl flex justify-between items-center group cursor-default">
              <div>
                <p className="text-[#d96b27] group-hover:text-amber-500 transition-colors font-extrabold text-xl">R$ 35,50</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">/ kg</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-[16px] group-hover:text-amber-400 transition-colors tracking-wide">Costela</p>
                <p className="text-slate-500 text-[11px] mt-1 uppercase tracking-wider font-semibold">Alto Rendimento</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}