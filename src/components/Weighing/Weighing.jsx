import React from 'react';
import './Weighing.css';

export function Weighing() {
  return (
    <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden weighing-section">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO: Textos e Features */}
        <div className="flex flex-col text-left order-2 lg:order-1">
          <h4 className="text-[#d96b27] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-80">
            PESAGEM DIGITAL
          </h4>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-tight tracking-tight">
            Pesar seus animais <br />
            <b className="font-bold">nunca foi tão simples.</b>
          </h2>
          
          <p className="text-slate-400 text-lg mb-12 max-w-xl leading-relaxed">
            Organize a pesagem antes do embarque, registre os pesos e exporte a tabela final.
          </p>

          <ul className="flex flex-col gap-5">
            {[
              "Defina os dados da pesagem com antecedência.",
              "Configure a pesagem antes de chegar ao curral.",
              "Elimine os erros de anotação no caderno.",
              "Registre o peso dos animais em segundos.",
              "Exporte a tabela final em PDF ou Excel."
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 group cursor-default">
                <div className="w-6 h-6 rounded-full bg-[#d96b27]/20 border border-[#d96b27]/30 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#d96b27] group-hover:scale-110">
                  <i className="fa-solid fa-check text-[#d96b27] text-[10px] group-hover:text-white"></i>
                </div>
                <span className="text-slate-200 text-[15px] font-medium transition-colors group-hover:text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* LADO DIREITO: iPhones Sobrepostos (Mockups) */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[650px] order-1 lg:order-2">
          
          {/* Brilho de fundo decorativo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#d96b27]/10 blur-[100px] rounded-full"></div>

          {/* iPhone de trás (Inclinado) puxando a foto 2e.png */}
          <div className="absolute z-10 transform -translate-x-16 -translate-y-8 rotate-[-12deg] transition-transform duration-700 hover:rotate-0 hover:translate-x-0 hover:z-30 cursor-pointer group/backphone">
            <div className="w-[240px] h-[480px] md:w-[260px] md:h-[530px] bg-[#111] rounded-[35px] p-2 border-[4px] border-[#222] shadow-2xl overflow-hidden shadow-[#d96b27]/10 group-hover/backphone:border-[#d96b27]/30 transition-colors duration-500">
              <img 
                src="/2e.png" 
                alt="App Pesagem Fundo" 
                className="w-full h-full object-cover rounded-[28px]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-[#0a0a0a] flex-col items-center justify-center p-4 text-center rounded-[28px]">
                <i className="fa-solid fa-image text-3xl mb-2 text-slate-600"></i>
                <p className="text-[10px] text-slate-400">Falta a foto <b className="text-white">2e.png</b></p>
              </div>
            </div>
          </div>

          {/* iPhone da frente (Principal) puxando a foto 1e.png */}
          <div className="absolute z-20 transform translate-x-12 translate-y-8 transition-transform duration-700 hover:scale-105 active:scale-95 cursor-pointer">
            <div className="w-[240px] h-[480px] md:w-[260px] md:h-[530px] bg-[#0a0a0a] rounded-[35px] p-[6px] border-[3px] border-[#222] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 shadow-[inset_0_0_4px_rgba(255,255,255,0.1)]"></div>
              
              <div className="w-full h-full bg-slate-900 rounded-[28px] overflow-hidden relative ring-1 ring-white/10">
                <img 
                  src="/1e.png" 
                  alt="App Pesagem Frente" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-[#111] flex-col items-center justify-center p-4 text-center">
                  <i className="fa-solid fa-mobile-screen text-4xl mb-2 text-slate-600"></i>
                  <p className="text-[10px] text-slate-400">Falta a foto <b className="text-white">1e.png</b></p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
