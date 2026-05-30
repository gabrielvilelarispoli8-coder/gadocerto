import React from 'react';
import './Dashboard.css';

export function Dashboard() {
  return (
    <main className="p-6 md:p-10 max-w-7xl mx-auto w-full min-h-screen">
      
      {/* CabeÃ§alho da Dashboard */}
      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6 mt-20 md:mt-24">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            VisÃ£o Geral da Fazenda
          </h2>
          <p className="text-slate-400 mt-1 text-sm">
            Acompanhe os indicadores do seu rebanho em tempo real.
          </p>
        </div>
        
        {/* BotÃ£o de AÃ§Ã£o RÃ¡pida */}
        <button className="hidden md:flex items-center gap-2 bg-[#d96b27]/10 text-[#d96b27] hover:bg-[#d96b27] hover:text-white px-5 py-2.5 rounded-lg transition-all font-semibold text-sm border border-[#d96b27]/20 shadow-lg">
          <i className="fa-solid fa-plus"></i> Novo Lote
        </button>
      </div>
      
      {/* Cards de Indicadores Principais (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Card 1: Total de CabeÃ§as */}
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-emerald-500 card-hover relative overflow-hidden group">
          {/* Ãcone de fundo com efeito parallax */}
          <div className="absolute -right-4 -top-4 text-emerald-500/10 text-8xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
            <i className="fa-solid fa-cow"></i>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total de CabeÃ§as</h3>
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md font-bold">+12%</span>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">1.250</p>
            <p className="text-emerald-400 text-sm mt-3 flex items-center gap-1 font-medium">
              <i className="fa-solid fa-arrow-trend-up"></i> Em crescimento
            </p>
          </div>
        </div>
        
        {/* Card 2: Nascimentos */}
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-blue-500 card-hover relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 text-blue-500/10 text-8xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <i className="fa-solid fa-star-of-life"></i>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest">Nascimentos (MÃªs)</h3>
              <i className="fa-solid fa-calendar-days text-slate-500"></i>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">45</p>
            <p className="text-blue-400 text-sm mt-3 flex items-center gap-1 font-medium">
              <i className="fa-solid fa-check-circle"></i> Registros atualizados
            </p>
          </div>
        </div>

        {/* Card 3: Vacinas Pendentes */}
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-[#d96b27] card-hover relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 text-[#d96b27]/10 text-8xl group-hover:scale-110 transition-all duration-500">
            <i className="fa-solid fa-syringe"></i>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest">Vacinas Pendentes</h3>
              <span className="bg-[#d96b27]/20 text-[#d96b27] text-xs px-2 py-1 rounded-md font-bold animate-pulse">AtenÃ§Ã£o</span>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">12</p>
            <p className="text-[#d96b27] text-sm mt-3 flex items-center gap-1 font-medium">
              <i className="fa-solid fa-clock"></i> Vencimento prÃ³ximo
            </p>
          </div>
        </div>
      </div>

      {/* SeÃ§Ã£o Extra: Para enriquecer o layout */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-white/5">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
          <h3 className="text-lg font-bold text-white">MovimentaÃ§Ãµes Recentes</h3>
          <button className="text-sm font-semibold text-[#d96b27] hover:text-[#c25c1f] transition-colors">Ver histÃ³rico</button>
        </div>
        
        <div className="p-0">
          {/* Linha 1 */}
          <div className="flex items-center justify-between p-4 md:px-6 hover:bg-white/[0.03] transition-colors border-b border-white/5 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Compra de Bezerros</p>
                <p className="text-slate-500 text-xs">Lote #4713 â€¢ Nelore</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-emerald-400 font-bold text-sm">+ 55 cabeÃ§as</p>
              <p className="text-slate-500 text-xs">Hoje, 14:30</p>
            </div>
          </div>
          
          {/* Linha 2 */}
          <div className="flex items-center justify-between p-4 md:px-6 hover:bg-white/[0.03] transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d96b27]/20 text-[#d96b27] flex items-center justify-center">
                <i className="fa-solid fa-syringe"></i>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Aviso de VacinaÃ§Ã£o: Aftosa</p>
                <p className="text-slate-500 text-xs">Lote #4705 â€¢ Garrotes</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#d96b27] font-bold text-sm">12 pendentes</p>
              <p className="text-slate-500 text-xs">Ontem, 09:15</p>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
