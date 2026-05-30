import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="bg-[#070707] pt-20 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna 1: Logo, Descrição e Lojas de App (Ocupa 5 colunas no desktop) */}
          <div className="md:col-span-5 flex flex-col">
            <img 
              src="/logado.png" 
              alt="GadoCerto" 
              className="h-10 object-contain self-start mb-6"
            />
            <p className="text-slate-300 text-[15px] leading-relaxed max-w-sm mb-8 font-medium">
              Compra e venda de gado com qualidade, facilidade e segurança.
            </p>
            
            {/* Botões App Store e Google Play */}
            <div className="flex flex-wrap gap-4">
              {/* Botão Apple */}
              <a href="#" className="relative group bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-3 flex items-center gap-4 w-[170px] hover:border-[#d96b27]/50 transition-all duration-300 shadow-lg shadow-black/50">
                <i className="fa-brands fa-apple text-[#d96b27] text-3xl ml-1"></i>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 font-bold tracking-wider">BAIXAR NA</span>
                  <span className="text-[14px] font-bold text-white leading-tight">App Store</span>
                </div>
                <i className="fa-solid fa-arrow-up-right text-[#d96b27] text-[10px] absolute top-3 right-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
              </a>

              {/* Botão Google Play */}
              <a href="#" className="relative group bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-3 flex items-center gap-4 w-[170px] hover:border-[#d96b27]/50 transition-all duration-300 shadow-lg shadow-black/50">
                <i className="fa-brands fa-google-play text-[#d96b27] text-2xl ml-1"></i>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 font-bold tracking-wider">DISPONÍVEL NO</span>
                  <span className="text-[14px] font-bold text-white leading-tight">Google Play</span>
                </div>
                <i className="fa-solid fa-arrow-up-right text-[#d96b27] text-[10px] absolute top-3 right-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
              </a>
            </div>
          </div>

          {/* Coluna 2: Contato (Ocupa 4 colunas no desktop) */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-[#d96b27] text-xs font-bold tracking-[0.15em] uppercase mb-8">
              CONTATO
            </h4>
            
            <div className="flex gap-3 mb-6">
              <i className="fa-solid fa-location-dot text-[#d96b27] mt-1 text-sm"></i>
              <div>
                <h5 className="text-white font-bold text-[15px] mb-2">Endereço</h5>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Cuiabá / MT<br/>
                  R. Eng. Edgar Prado Arze, S/N<br/>
                  Centro Político Administrativo<br/>
                  CEP: 78.049-908
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <i className="fa-solid fa-phone text-[#d96b27] mt-1 text-sm"></i>
              <div>
                <h5 className="text-white font-bold text-[15px] mb-2">Telefone</h5>
                <p className="text-slate-400 text-sm leading-relaxed">
                  (65) 3021-9499<br/>
                  contato@gadocerto.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 3: Institucional e Redes (Ocupa 3 colunas no desktop) */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-[#d96b27] text-xs font-bold tracking-[0.15em] uppercase mb-8">
              INSTITUCIONAL
            </h4>
            
            <ul className="flex flex-col gap-4 mb-10">
              <li><a href="#" className="text-slate-300 hover:text-white text-[15px] transition-colors">Canal de Ética</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white text-[15px] transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white text-[15px] transition-colors">Política de Privacidade</a></li>
            </ul>

            {/* Redes Sociais */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#d96b27] hover:border-[#d96b27] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#d96b27] hover:border-[#d96b27] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#d96b27] hover:border-[#d96b27] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#d96b27] hover:border-[#d96b27] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Barra Inferior (Copyright) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-[#d96b27]"></i>
            <span>Operação com foco em confiança, rastreabilidade e suporte.</span>
          </div>
          <div>
            &copy;2026 Novilha de Ouro. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}
