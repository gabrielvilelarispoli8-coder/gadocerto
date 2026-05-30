import React from 'react';
import './Weighing.css';

export function Weighing() {
  return (
    <section className="relative w-full py-32 bg-[#030303] overflow-hidden weighing-section border-t border-amber-500/10">
      
      {/* Background Holográfico Agro */}
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO ESQUERDO: Copywriting Premium & Features */}
        <div className="flex flex-col text-left order-2 lg:order-1 relative z-20">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <i className="fa-solid fa-weight-scale text-amber-500 text-xs"></i>
            </div>
            <h4 className="text-amber-500 text-xs md:text-sm font-bold tracking-[0.25em] uppercase drop-shadow-md">
              Módulo de Alta Precisão
            </h4>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
            A prancheta morreu. <br />
            <b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#d96b27]">
              O lucro é medido em gramas.
            </b>
          </h2>
          
          <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed font-medium">
            Transforme o curral em um centro de inteligência de dados. Capture o peso, anule a margem de erro humano e exporte os relatórios da <span className="text-amber-500/90">Novilha de Ouro</span> direto para a sua gestão.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: "fa-satellite-dish", text: "Configuração remota de lotes e parâmetros pré-lida." },
              { icon: "fa-bluetooth-b", text: "Integração instantânea com balanças digitais (Bluetooth)." },
              { icon: "fa-shield-halved", text: "Eliminação de rasuras e perdas financeiras por anotação." },
              { icon: "fa-bolt", text: "Captura de peso e GMD (Ganho Médio Diário) em milissegundos." },
              { icon: "fa-file-pdf", text: "Auditoria final exportável em PDF e tabelas criptografadas." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group cursor-default bg-white/[0.02] hover:bg-amber-500/[0.05] border border-white/5 hover:border-amber-500/20 p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-[#0a0a0a] border border-amber-500/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  <i className={`fa-solid ${item.icon} text-amber-500/70 text-[12px] group-hover:text-amber-400 transition-colors`}></i>
                </div>
                <span className="text-slate-300 text-[15px] font-medium leading-relaxed group-hover:text-amber-50 transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: Experiência Visual Surreal (3D Holográfico) */}
        <div className="relative flex justify-center items-center h-[600px] lg:h-[750px] order-1 lg:order-2 perspective-1000 mt-10 lg:mt-0">
          
          {/* Base da "Balança Digital" (Efeito Sci-Fi no chão) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-amber-500/5 rounded-[100%] border-t-2 border-amber-500/40 blur-[2px] shadow-[0_-20px_50px_rgba(245,158,11,0.15)] transform rotate-X-60 pointer-events-none"></div>

          {/* Brilho Central Dourado */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/15 blur-[120px] rounded-full z-0 pointer-events-none animate-pulse-slow"></div>

          {/* Painel Flutuante Esquerdo (Dado Fake 3D) */}
          <div className="absolute top-[20%] left-[0%] lg:-left-[10%] z-40 glass-badge p-3 rounded-xl flex items-center gap-3 animate-float-delayed border border-amber-500/30">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
              <i className="fa-solid fa-arrow-up text-emerald-400 text-xs"></i>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">GMD Lote A</p>
              <p className="text-white font-extrabold text-lg">+1.15 <span className="text-xs text-slate-500 font-normal">kg/dia</span></p>
            </div>
          </div>

          {/* Painel Flutuante Direito (Dado Fake 3D) */}
          <div className="absolute bottom-[25%] right-[0%] lg:-right-[5%] z-40 glass-badge p-3 rounded-xl flex items-center gap-3 animate-float border border-[#d96b27]/30">
            <div className="w-8 h-8 rounded-full bg-[#d96b27]/20 flex items-center justify-center border border-[#d96b27]/50">
              <i className="fa-solid fa-check-double text-[#d96b27] text-xs"></i>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Lote Fechado</p>
              <p className="text-white font-extrabold text-lg">45 <span className="text-xs text-slate-500 font-normal">cabeças</span></p>
            </div>
          </div>

          {/* iPhone de Fundo (Perspectiva e Profundidade) */}
          <div className="absolute z-10 transform -translate-x-16 -translate-y-12 rotate-[-15deg] scale-[0.85] transition-all duration-700 hover:rotate-[-5deg] hover:translate-x-[-20px] hover:scale-[0.9] hover:z-30 cursor-pointer group/backphone">
            <div className="relative w-[280px] h-[580px] bg-[#050505] rounded-[45px] p-[6px] border-[3px] border-[#222] shadow-[20px_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group-hover/backphone:border-amber-500/40 transition-colors duration-500">
              <div className="absolute inset-0 bg-black/40 z-20 group-hover/backphone:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
              
              {/* Dynamic Island Fundo */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30"></div>

              <div className="w-full h-full bg-[#111] rounded-[38px] overflow-hidden relative">
                <img 
                  src="/2e.png" 
                  alt="App Pesagem Analytics" 
                  className="w-full h-full object-cover opacity-80 group-hover/backphone:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-b from-[#111] to-[#050505] flex-col items-center justify-center p-4 text-center">
                  <i className="fa-solid fa-chart-line text-3xl mb-2 text-amber-500/50"></i>
                  <p className="text-[10px] text-slate-400">Analytics (2e.png)</p>
                </div>
              </div>
            </div>
          </div>

          {/* iPhone da Frente (Foco Principal em 3D) */}
          <div className="absolute z-20 transform translate-x-10 translate-y-6 rotate-[5deg] transition-all duration-700 hover:rotate-0 hover:scale-105 active:scale-95 cursor-pointer group/frontphone">
            
            {/* Efeito Scanner Holográfico passando no celular principal */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-400 shadow-[0_0_20px_2px_rgba(245,158,11,0.8)] z-50 opacity-0 group-hover/frontphone:animate-scan-phone pointer-events-none"></div>

            <div className="w-[290px] h-[600px] bg-[#0a0a0a] rounded-[45px] p-[6px] border-[3px] border-[#2a2a2a] shadow-[-20px_30px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(245,158,11,0.2)] overflow-hidden">
              
              {/* Dynamic Island Frente */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-30 shadow-[inset_0_0_4px_rgba(255,255,255,0.15)] flex justify-end items-center pr-3">
                <div className="w-3 h-3 rounded-full bg-[#151515] shadow-[inset_0_0_3px_rgba(255,255,255,0.2)]"></div>
              </div>
              
              <div className="w-full h-full bg-[#050505] rounded-[38px] overflow-hidden relative ring-1 ring-white/10">
                {/* Reflexo de Vidro Premium */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent z-20 pointer-events-none"></div>
                
                <img 
                  src="/1e.png" 
                  alt="App Pesagem Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/frontphone:scale-105 relative z-10"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-t from-[#111] to-[#0a0a0a] flex-col items-center justify-center p-4 text-center z-0">
                  <i className="fa-solid fa-weight-hanging text-4xl mb-3 text-amber-500/80"></i>
                  <p className="text-xs text-slate-400">Interface Principal (1e.png)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
