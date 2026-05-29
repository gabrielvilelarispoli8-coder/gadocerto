import React from 'react';
import './SecurityNotice.css';

export function SecurityNotice() {
  return (
    <section className="py-28 bg-[#050505] relative overflow-hidden border-t border-white/5 security-section">
      
      {/* Background Textura Agro (Gado esfumaçado bem suave no fundo) */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544865108-9a40fb68e7ea?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] mix-blend-screen pointer-events-none"></div>

      {/* Background Shield Glow (Iluminação Verde Bancária) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d96b27]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Seção com Ícone Estilo Apple */}
        <div className="flex flex-col items-center text-center mb-20">
          
          {/* Favicon (App Icon iOS Style) */}
          <div className="app-icon-wrapper mb-8 cursor-default">
            <img 
              src="/favicon.png" 
              alt="GadoCerto App" 
              className="app-icon-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback caso a imagem não seja encontrada */}
            <div className="hidden absolute inset-0 bg-[#111] flex-col items-center justify-center text-emerald-500 rounded-[22.5%] border border-emerald-500/30">
              <i className="fa-solid fa-shield-check text-3xl"></i>
            </div>
            {/* Reflexo de luz na "tela" do ícone */}
            <div className="app-icon-glare"></div>
          </div>

          <h4 className="text-emerald-500 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-90">
            AMBIENTE BLINDADO
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Segurança Bancária no Curral
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            A GadoCerto leva a proteção do seu patrimônio a sério. Desenvolvemos um processo de entrada restrito para garantir que <b>apenas pecuaristas reais e verificados</b> negociem na plataforma.
          </p>
        </div>

        {/* 3 Passos da Instalação e Verificação (Layout Premium) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Linha conectando os passos (Apenas Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] w-[70%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent z-0"></div>

          {/* Passo 1 - Foco no Atendimento Humano */}
          <div className="glass-step-card p-8 relative z-10 group cursor-default">
            <div className="w-14 h-14 bg-[#0a0a0a] rounded-full border-[2px] border-[#25D366] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,211,102,0.2)] group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-headset text-[#25D366] text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1. Setup com Especialista</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Sua entrada não é automática. Toda a instalação e liberação do aplicativo é feita em conjunto com um <b>gerente de conta via ligação</b>. A conta é atrelada exclusivamente ao seu CPF ou CNPJ.
            </p>
          </div>

          {/* Passo 2 - Destaque NFC (Obrigatório) */}
          <div className="glass-step-card p-8 border-emerald-500/40 relative z-10 transform md:-translate-y-4 shadow-[0_25px_50px_-12px_rgba(16,185,129,0.15)] group cursor-default active-step">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(52,211,153,0.5)]">
              Obrigatório
            </div>
            <div className="w-14 h-14 bg-[#0a0a0a] rounded-full border-[2px] border-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(52,211,153,0.4)] group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-wifi text-emerald-400 rotate-90 text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">2. Validação Digital (NFC)</h3>
            <p className="text-slate-300 text-[15px] leading-relaxed">
              Durante a ligação, o sistema exigirá uma leitura por aproximação (NFC) de um cartão de crédito ou débito direto no seu celular. Isso confirma sua identidade bancária de forma <b>100% criptografada</b>.
            </p>
          </div>

          {/* Passo 3 - Acesso e Agilidade */}
          <div className="glass-step-card p-8 relative z-10 group cursor-default">
            <div className="w-14 h-14 bg-[#0a0a0a] rounded-full border-[2px] border-[#d96b27] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(217,107,39,0.2)] group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-unlock-keyhole text-[#d96b27] text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">3. Cofre Blindado</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Com a identidade confirmada, o acesso é liberado. Seu cartão fica salvo em um ambiente inviolável, pronto para agilizar futuros pagamentos de fretes e taxas com apenas um clique.
            </p>
          </div>

        </div>

        {/* Disclaimer Importante sobre o Cartão (Alta Conversão) */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900/40 to-emerald-900/10 border border-emerald-500/30 rounded-[24px] p-8 flex flex-col sm:flex-row items-center gap-8 shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Efeito de luz varrendo o aviso */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
          
          <div className="w-20 h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald-500/40 relative z-10">
            <i className="fa-solid fa-credit-card text-emerald-400 text-3xl"></i>
          </div>
          <div className="relative z-10 text-center sm:text-left">
            <h4 className="text-white font-extrabold text-xl md:text-2xl mb-2 tracking-tight">
              Atenção: A validação gera <span className="text-emerald-400 border-b-2 border-emerald-400">Zero Cobranças</span>
            </h4>
            <p className="text-emerald-50 text-[15px] md:text-base leading-relaxed opacity-90 max-w-4xl">
              A verificação via NFC não debita nenhum valor do seu cartão. O processo usa tecnologia bancária <i>Tokenless</i> exclusivamente para checar a titularidade do documento junto ao banco emissor. <b>Nenhum dado sensível (CVV ou senha) é solicitado pela nossa equipe.</b>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
