import React from 'react';
import './Hero.css';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-36 pb-20 flex flex-col items-center justify-center bg-[#050505] overflow-hidden group/hero">
      
      {/* CAMADA 1: Imagem de Fundo (back.png) Imersiva */}
      <div className="absolute inset-0 z-0 bg-[url('/back.png')] bg-cover bg-center bg-no-repeat opacity-[0.25] mix-blend-luminosity transition-transform duration-[20000ms] ease-out group-hover/hero:scale-[1.03]"></div>
      
      {/* CAMADA 2: Gradiente Escuro (Garante que os textos laterais fiquem legíveis) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]"></div>
      
      {/* CAMADA 3: Foco Radial no Centro (Onde o Celular fica) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_100%)] opacity-90"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Badge de Autoridade (Gatilho de Novidade) */}
        <div className="mb-8 flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md shadow-2xl transform transition hover:scale-105 cursor-default hover:border-white/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-slate-200 uppercase">
            Tecnologia Agro de Alta Performance
          </span>
        </div>

        {/* Título e Subtítulo Magnéticos */}
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-light text-white leading-[1.1] mb-6 max-w-4xl tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          O aplicativo do pecuarista que faz <br className="hidden md:block" /> 
          <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            bons negócios.
          </b>
        </h1>
        <p className="text-lg md:text-2xl font-medium text-[#d96b27] max-w-2xl mb-16 md:mb-20 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Compre e venda gado com segurança, preço <br className="hidden md:block"/> justo e praticidade.
        </p>

        {/* Grid de 3 Colunas: Recursos Esc, iPhone Centro, Recursos Dir */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-4 items-center mt-4">
          
          {/* LADO ESQUERDO */}
          <div className="flex flex-col gap-16 lg:gap-32 text-left order-2 lg:order-1 px-4 lg:pl-8">
            
            <div className="relative pl-6 border-l-[3px] border-[#d96b27]/30 hover:border-[#d96b27] transition-all duration-500 group cursor-default">
              <div className="absolute -left-[1.5px] top-0 w-[3px] h-0 bg-[#d96b27] transition-all duration-500 group-hover:h-full shadow-[0_0_10px_#d96b27]"></div>
              <i className="fa-solid fa-location-dot text-[26px] text-white/60 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"></i>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#d96b27] transition-colors drop-shadow-md">Preço posto</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed max-w-[220px] group-hover:text-white transition-colors drop-shadow-md">
                Calcule automaticamente o preço posto até sua fazenda.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-[3px] border-[#d96b27]/30 hover:border-[#d96b27] transition-all duration-500 group cursor-default">
              <div className="absolute -left-[1.5px] top-0 w-[3px] h-0 bg-[#d96b27] transition-all duration-500 group-hover:h-full shadow-[0_0_10px_#d96b27]"></div>
              <i className="fa-solid fa-truck text-[26px] text-white/60 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"></i>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#d96b27] transition-colors drop-shadow-md">Composição de <br/>carga</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed max-w-[220px] group-hover:text-white transition-colors drop-shadow-md">
                Sugestões automáticas de composição de carga.
              </p>
            </div>

          </div>

          {/* CENTRO: iPhone Mockup */}
          <div className="flex justify-center order-1 lg:order-2 relative z-20 mt-10 lg:mt-0">
            {/* Sombra brilhante no fundo pulsando */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[550px] bg-[#d96b27]/25 blur-[120px] rounded-full z-10 pointer-events-none animate-pulse-slow"></div>
            
            {/* Estrutura do Celular Premium */}
            <div className="relative w-[300px] h-[610px] bg-[#0a0a0a] rounded-[45px] p-[6px] shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] border-[3px] border-[#2a2a2a] transition-all duration-700 hover:scale-[1.03] hover:-translate-y-3 cursor-pointer animate-float z-20 group/phone">
              
              {/* Reflexo de Vidro (Efeito premium) */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-white/[0.08] via-transparent to-transparent pointer-events-none z-40"></div>
              
              {/* Câmera superior (Dynamic Island) */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-30 shadow-[inset_0_0_4px_rgba(255,255,255,0.15)] flex justify-end items-center pr-3">
                <div className="w-3 h-3 rounded-full bg-[#151515] shadow-[inset_0_0_3px_rgba(255,255,255,0.3)]"></div>
              </div>
              
              {/* Botões laterais do iPhone */}
              <div className="absolute -left-[5px] top-[120px] w-[3px] h-[25px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -left-[5px] top-[160px] w-[3px] h-[45px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -left-[5px] top-[215px] w-[3px] h-[45px] bg-[#333] rounded-l-md"></div>
              <div className="absolute -right-[5px] top-[180px] w-[3px] h-[70px] bg-[#333] rounded-r-md"></div>
              
              {/* Tela interna onde vai sua imagem */}
              <div className="w-full h-full bg-slate-900 rounded-[38px] overflow-hidden relative flex flex-col justify-center items-center ring-1 ring-white/10">
                <img 
                  src="/tela-app.png" 
                  alt="App GadoCerto" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/phone:scale-[1.04]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    document.getElementById('fallback-screen').style.display = 'flex';
                  }}
                />
                
                {/* Fallback caso a imagem não carregue */}
                <div id="fallback-screen" className="hidden w-full h-full bg-black/80 backdrop-blur-md flex-col items-center justify-center p-6 text-center">
                  <i className="fa-solid fa-mobile-screen text-5xl text-slate-600 mb-4"></i>
                  <p className="text-sm text-slate-400">Falta a imagem <br/><b className="text-white">tela-app.png</b></p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="flex flex-col gap-16 lg:gap-32 text-right order-3 lg:order-3 px-4 lg:pr-8 mt-10 lg:mt-0">
            
            <div className="relative pr-6 border-r-[3px] border-[#d96b27]/30 hover:border-[#d96b27] transition-all duration-500 flex flex-col items-end group cursor-default">
              <div className="absolute -right-[1.5px] top-0 w-[3px] h-0 bg-[#d96b27] transition-all duration-500 group-hover:h-full shadow-[0_0_10px_#d96b27]"></div>
              <i className="fa-solid fa-list-check text-[26px] text-white/60 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"></i>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#d96b27] transition-colors drop-shadow-md">Lotes detalhados</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed max-w-[240px] text-right group-hover:text-white transition-colors drop-shadow-md">
                Informações completas sobre categoria, quantidade, peso e idade.
              </p>
            </div>
            
            <div className="relative pr-6 border-r-[3px] border-[#d96b27]/30 hover:border-[#d96b27] transition-all duration-500 flex flex-col items-end group cursor-default">
              <div className="absolute -right-[1.5px] top-0 w-[3px] h-0 bg-[#d96b27] transition-all duration-500 group-hover:h-full shadow-[0_0_10px_#d96b27]"></div>
              <i className="fa-solid fa-circle-dollar-to-slot text-[26px] text-white/60 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"></i>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#d96b27] transition-colors drop-shadow-md">Proposta <br/>facilitada</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed max-w-[220px] text-right group-hover:text-white transition-colors drop-shadow-md">
                Envie propostas diretamente pelo aplicativo.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Indicador de Scroll Dinâmico */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer animate-bounce-slow">
        <span className="text-[9px] text-slate-300 font-bold tracking-[0.3em] uppercase drop-shadow-md">Descubra</span>
        <i className="fa-solid fa-chevron-down text-white/80 text-sm drop-shadow-md"></i>
      </div>

    </section>
  );
}
