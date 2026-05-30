import React from 'react';
import './SecurityNotice.css';

export function SecurityNotice() {
  return (
    <section className="py-28 bg-[#050505] relative overflow-hidden border-t border-white/5 security-section">
      
      {/* Background Textura Agro (Gado esfumaçado bem suave no fundo) */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544865108-9a40fb68e7ea?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] mix-blend-screen pointer-events-none"></div>

      {/* Background Shield Glow (Iluminação Dourada Premium) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d96b27]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Seção com Ícone Estilo Apple */}
        <div className="flex flex-col items-center text-center mb-20">
          
          {/* Favicon (App Icon iOS Style) */}
          <div className="app-icon-wrapper mb-8 cursor-default group">
            <img 
              src="/favicon.png" 
              alt="Novilha de Ouro App" 
              className="app-icon-img transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback de Luxo caso a imagem não seja encontrada */}
            <div className="hidden absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#050505] flex-col items-center justify-center text-amber-500 rounded-[22.5%] border border-amber-500/30 shadow-[inset_0_0_20px_rgba(245,158,11,0.2)]">
              <i className="fa-solid fa-shield-halved text-4xl drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]"></i>
            </div>
            {/* Reflexo de luz na "tela" do ícone */}
            <div className="app-icon-glare"></div>
          </div>

          <h4 className="text-amber-500 text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase mb-4 opacity-90 drop-shadow-md">
            AMBIENTE 100% BLINDADO
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Segurança de Banco, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#d96b27]">Direto no Curral.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            A <strong className="text-amber-500 font-semibold">Novilha de Ouro</strong> eleva a proteção do seu patrimônio ao mais alto padrão. Desenvolvemos um filtro de entrada rigoroso para garantir que <b>apenas pecuaristas reais e verificados</b> tenham acesso aos nossos lotes.
          </p>
        </div>

        {/* 3 Passos da Instalação e Verificação (Layout Premium Ouro) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Linha conectando os passos (Apenas Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] w-[70%] h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent z-0"></div>

          {/* Passo 1 - Foco no Atendimento Humano (X1) */}
          <div className="glass-step-card p-8 relative z-10 group cursor-default">
            <div className="w-14 h-14 bg-[#0a0a0a] rounded-full border-[2px] border-amber-400/80 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
              <i className="fa-brands fa-whatsapp text-amber-400 text-2xl group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">1. Setup com Gerente</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed group-hover:text-slate-300 transition-colors">
              O acesso é exclusivo. A instalação e a configuração inicial do aplicativo são conduzidas em <b>ligação direta com seu gerente de conta</b>, atrelando o sistema ao seu CPF ou CNPJ.
            </p>
          </div>

          {/* Passo 2 - Destaque NFC (Obrigatório e Brilhante) */}
          <div className="glass-step-card p-8 border-amber-500/40 relative z-10 transform md:-translate-y-4 shadow-[0_25px_50px_-12px_rgba(245,158,11,0.15)] group cursor-default active-step">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-[#d96b27] text-black text-[10px] font-extrabold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.6)]">
              Obrigatório
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-full border-[2px] border-amber-400 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-amber-400/20 animate-pulse"></div>
              <i className="fa-solid fa-wifi text-amber-400 rotate-90 text-xl relative z-10 drop-shadow-[0_0_5px_rgba(245,158,11,1)]"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">2. Validação Digital (NFC)</h3>
            <p className="text-slate-300 text-[15px] leading-relaxed group-hover:text-slate-200 transition-colors">
              Durante o atendimento, nosso sistema exigirá a aproximação (NFC) de um cartão direto no seu celular. Isso atesta sua identidade bancária em uma rede <b>100% criptografada de ponta a ponta</b>.
            </p>
          </div>

          {/* Passo 3 - Acesso e Agilidade */}
          <div className="glass-step-card p-8 relative z-10 group cursor-default">
            <div className="w-14 h-14 bg-[#0a0a0a] rounded-full border-[2px] border-[#d96b27]/80 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(217,107,39,0.2)] group-hover:scale-110 group-hover:border-[#d96b27] transition-all duration-300">
              <i className="fa-solid fa-vault text-[#d96b27] text-xl group-hover:drop-shadow-[0_0_8px_rgba(217,107,39,0.8)]"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d96b27] transition-colors">3. Cofre Premium Liberado</h3>
            <p className="text-slate-400 text-[15px] leading-relaxed group-hover:text-slate-300 transition-colors">
              Com a titularidade validada, sua conta é ativada instantaneamente. O ambiente de pagamentos fica salvo no cofre digital, garantindo liquidez rápida para futuras negociações.
            </p>
          </div>

        </div>

        {/* Disclaimer Importante sobre o Cartão (Alta Conversão e Redução de Atrito) */}
        <div className="mt-16 bg-gradient-to-r from-amber-900/30 via-amber-900/10 to-[#050505] border border-amber-500/30 rounded-[24px] p-8 flex flex-col sm:flex-row items-center gap-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden group/disclaimer">
          {/* Efeito de luz varrendo o aviso como um reflexo de ouro */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/10 to-transparent -translate-x-full animate-shimmer"></div>
          
          <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-amber-500/40 relative z-10 shadow-[inset_0_0_15px_rgba(245,158,11,0.2)] transition-transform duration-500 group-hover/disclaimer:scale-105">
            <i className="fa-solid fa-credit-card text-amber-400 text-3xl"></i>
          </div>
          <div className="relative z-10 text-center sm:text-left">
            <h4 className="text-white font-extrabold text-xl md:text-2xl mb-2 tracking-tight">
              Aviso: A validação NFC gera <span className="text-amber-400 border-b-2 border-amber-400">Zero Cobranças</span>
            </h4>
            <p className="text-amber-50 text-[15px] md:text-base leading-relaxed opacity-90 max-w-4xl">
              A verificação não debita um único centavo da sua conta. O processo utiliza tecnologia bancária <i>Tokenless</i> apenas para certificar a titularidade junto ao banco emissor. <b>Nossa equipe jamais solicitará senhas ou seu código de segurança (CVV).</b>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
