import React from 'react';
import './Hero.css';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-36 pb-20 flex flex-col items-center justify-center bg-[#050505] overflow-hidden group/hero">
      
      {/* CAMADA 1: Imagem de Fundo (back.png) Imersiva */}
      <div className="absolute inset-0 z-0 bg-[url('/back.png')] bg-cover bg-center bg-no-repeat opacity-[0.25] mix-blend-luminosity transition-transform duration-[20000ms] ease-out group-hover/hero:scale-[1.03]"></div>
      
      {/* CAMADA 2: Gradiente Escuro */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]"></div>
      
      {/* CAMADA 3: Foco Radial no Centro */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_100%)] opacity-90"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Badge de Autoridade (Gatilho de Novidade Premium) */}
        <div className="mb-8 flex items-center gap-3 px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.1)] transform transition hover:scale-105 cursor-default hover:border-amber-400/40">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase drop-shadow-md">
            O Padrão Ouro da Pecuária Digital
          </span>
        </div>

        {/* Título e Subtítulo Magnéticos */}
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-light text-white leading-[1.1] mb-6 max-w-4xl tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          A plataforma exclusiva para quem exige <br className="hidden md:block" /> 
          <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d96b27] via-amber-400 to-yellow-200 animate-shimmer-gold">
            lotes de excelência.
          </b>
        </h1>
        <p className="text-lg md:text-2xl font-medium text-slate-300 max-w-2xl mb-16 md:mb-20 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Descubra a <strong className="text-amber-500 font-semibold">Novilha de Ouro</strong>. Compre e venda com procedência garantida, liquidez imediata e assessoria X1 blindada.
        </p>

        {/* Grid de 3 Colunas: Recursos Esc, iPhone Centro, Recursos Dir */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-4 items-center mt-4">
          
          {/* LADO ESQUERDO */}
          <div className="flex flex-col gap-16 lg:gap-32 text-left order-2 lg:order-1 px-4 lg:pl-8">
            
            <div className="relative pl-6 border-l-[3px] border-amber-500/20 hover:border-amber-500 transition-all duration-500 group cursor-default">
              <div className="absolute -left-[1.5px] top-0 w-[3px] h-0 bg-amber-500 transition-all duration-500 group-hover:h-full shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors border border-amber-500/20">
                <i className="fa-solid fa-scale-balanced text-[20px] text-amber-500/70 group-hover:text-amber-400 group-hover:-translate-y-1 transition-all duration-300"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors drop-shadow-md">Preço Justo e Posto</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed max-w-[220px] group-hover:text-slate-200 transition-colors drop-shadow-md">
                Calcule a viabilidade exata e o preço posto na sua fazenda antes de fechar qualquer negócio.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-[3px] border-amber-500/20 hover:border-amber-500 transition-all duration-500 group cursor-default">
              <div className="absolute -left-[1.5px] top-0 w-[3px] h-0 bg-amber-500 transition-all duration-500 group-hover:h-full shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors border border-amber-500/20">
                <i className="fa-solid fa-truck-fast text-[20px] text-amber-500/70 group-hover:text-amber-400 group-hover:-translate-y-1 transition-all duration-300"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors drop-shadow-md">Logística de Ouro</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed max-w-[220px] group-hover:text-slate-200 transition-colors drop-shadow-md">
                Algoritmo inteligente com sugestões automáticas para otimizar o espaço e a composição da sua carga.
              </p>
            </div>

          </div>

          {/* CENTRO: iPhone Mockup */}
          <div className="flex justify-center order-1 lg:order-2 relative z-20 mt-10 lg:mt-0">
            {/* Sombra brilhante de Ouro no fundo pulsando */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[550px] bg-amber-500/20 blur-[130px] rounded-full z-10 pointer-events-none animate-pulse-slow"></div>
            
            {/* Estrutura do Celular Premium */}
            <div className="relative w-[300px] h-[610px] bg-[#0a0a0a] rounded-[45px] p-[6px] shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] border-[3px] border-[#2a2a2a] transition-all duration-700 hover:scale-[1.03] hover:-translate-y-3 cursor-pointer animate-float z-20 group/phone">
              
              {/* Reflexo de Vidro */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-white/[0.08] via-transparent to-transparent pointer-events-none z-40"></div>
              
              {/* Câmera superior (Dynamic Island) */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-30 shadow-[inset_0_0_4px_rgba(255,255,255,0.15)] flex justify-end items-center pr-3">
                <div className="w-3 h-3 rounded-full bg-[#151515] shadow-[inset_0_0_3px_rgba(255,255,255,0.3)]"></div>
              </div>
              
              {/* Botões laterais */}
              <div className="absolute -left-[5px] top-[120px] w-[3px] h-[25px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -left-[5px] top-[160px] w-[3px] h-[45px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -left-[5px] top-[215px] w-[3px] h-[45px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -right-[5px] top-[180px] w-[3px] h-[70px] bg-[#333] rounded-r-md"></div>
              
              {/* Tela interna */}
              <div className="w-full h-full bg-[#050505] rounded-[38px] overflow-hidden relative flex flex-col justify-center items-center ring-1 ring-white/10 group/screen">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover/screen:opacity-100 transition-opacity duration-700 z-10"></div>
                <img 
                  src="/tela-app.png" 
                  alt="App Novilha de Ouro" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/phone:scale-[1.04] relative z-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    document.getElementById('fallback-screen').style.display = 'flex';
                  }}
                />
                
                {/* Fallback de Luxo Novilha de Ouro */}
                <div id="fallback-screen" className="hidden absolute inset-0 w-full h-full bg-gradient-to-b from-[#111] to-[#050505] flex-col items-center justify-center p-6 text-center z-20">
                  <div className="w-20 h-20 mb-6 bg-gradient-to-br from-amber-400 to-[#d96b27] rounded-full p-[2px] animate-pulse">
                    <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-gem text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500"></i>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Novilha de Ouro</h4>
                  <p className="text-xs text-slate-500 border border-white/10 px-3 py-1 rounded-full">Carregando interface...</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="flex flex-col gap-16 lg:gap-32 text-right order-3 lg:order-3 px-4 lg:pr-8 mt-10 lg:mt-0">
            
            <div className="relative pr-6 border-r-[3px] border-amber-500/20 hover:border-amber-500 transition-all duration-500 flex flex-col items-end group cursor-default">
              <div className="absolute -right-[1.5px] top-0 w-[3px] h-0 bg-amber-500 transition-all duration-500 group-hover:h-full shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors border border-amber-500/20">
                <i className="fa-solid fa-list-check text-[20px] text-amber-500/70 group-hover:text-amber-400 group-hover:-translate-y-1 transition-all duration-300"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors drop-shadow-md">Lotes de Padrão Ouro</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed max-w-[240px] text-right group-hover:text-slate-200 transition-colors drop-shadow-md">
                Acesse o raio-x completo do rebanho: procedência, idade, genética, peso atual e vídeos em alta resolução.
              </p>
            </div>
            
            <div className="relative pr-6 border-r-[3px] border-amber-500/20 hover:border-amber-500 transition-all duration-500 flex flex-col items-end group cursor-default">
              <div className="absolute -right-[1.5px] top-0 w-[3px] h-0 bg-amber-500 transition-all duration-500 group-hover:h-full shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors border border-amber-500/20">
                <i className="fa-solid fa-comments-dollar text-[20px] text-amber-500/70 group-hover:text-amber-400 group-hover:-translate-y-1 transition-all duration-300"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors drop-shadow-md">Fechamento em X1</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed max-w-[220px] text-right group-hover:text-slate-200 transition-colors drop-shadow-md">
                Esqueça a burocracia. Acione nossos gerentes de conta e negocie as propostas diretamente no WhatsApp.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Indicador de Scroll Dinâmico */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer animate-bounce-slow">
        <span className="text-[9px] text-amber-500/80 font-bold tracking-[0.3em] uppercase drop-shadow-md">Conheça o Aplicativo</span>
        <i className="fa-solid fa-chevron-down text-white/80 text-sm drop-shadow-md"></i>
      </div>

    </section>
  );
}
