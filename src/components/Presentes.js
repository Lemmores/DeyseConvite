import React, { useState } from 'react';

const Presentes = ({ isDarkMode }) => {
  const [copiado, setCopiado] = useState(false);
  const chavePix = "81991954881";

  const copiarChave = () => {
    navigator.clipboard.writeText(chavePix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className={`p-6 rounded-[2rem] shadow-xl border transition-colors duration-500 ${
      isDarkMode ? 'bg-[#1e293b] border-white/5' : 'bg-white border-blue-50'
    }`}>
      <h3 className={`text-2xl font-bold mb-4 text-center italic uppercase tracking-wider ${
        isDarkMode ? 'text-white' : 'text-slate-800'
      }`}>Ação Solidária 🎁</h3>
      
      <p className={`text-sm mb-6 text-center leading-relaxed ${
        isDarkMode ? 'text-gray-400' : 'text-slate-500'
      }`}>
        Meu maior presente é a sua presença! Este ano, decidi transformar meu parabéns em ajuda para quem precisa:
      </p>
      
      <div className="space-y-4 mb-6">
        {/* Doação de Fraldas */}
        <div className={`p-4 rounded-2xl border transition-colors ${
          isDarkMode ? 'bg-white/5 border-white/10' : 'bg-purple-50/50 border-purple-100'
        }`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👵</span>
            <span className={`font-bold ${isDarkMode ? 'text-gray-200' : 'text-slate-700'}`}>Casa do Idoso (Paudalho)</span>
          </div>
          <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            Estou arrecadando <span className={`${isDarkMode ? 'text-cyan-400' : 'text-[#a855f7]'} font-bold`}>Fraldas Geriátricas</span> (Tamanhos M e G). Você pode levar no dia da festa!
          </p>
        </div>

        {/* Doação PIX Abrigo */}
        <div className={`p-4 rounded-2xl border transition-colors ${
          isDarkMode ? 'bg-white/5 border-white/10' : 'bg-purple-50/50 border-purple-100'
        }`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🐾</span>
            <span className={`font-bold ${isDarkMode ? 'text-gray-200' : 'text-slate-700'}`}>Abrigo Seu Alberto</span>
          </div>
          <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            Se preferir presentear em dinheiro, <span className={`${isDarkMode ? 'text-cyan-400' : 'text-[#a855f7]'} font-bold`}>100% do valor</span> arrecadado via PIX será doado para este abrigo.
          </p>
        </div>
      </div>

      {/* Área do PIX */}
      <div className={`p-5 rounded-2xl border transition-colors ${
        isDarkMode ? 'bg-[#0f172a] border-cyan-500/20' : 'bg-slate-50 border-purple-100'
      }`}>
        <p className={`text-[10px] font-bold uppercase mb-2 tracking-widest text-center ${
          isDarkMode ? 'text-cyan-400' : 'text-[#a855f7]'
        }`}>Chave PIX Solidário</p>
        <div className="flex flex-col items-center gap-3">
          <span className={`text-lg font-mono font-bold tracking-wider ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{chavePix}</span>
          <button 
            onClick={copiarChave}
            className={`w-full text-white text-xs py-3 rounded-xl font-black uppercase transition shadow-lg active:scale-95 ${
              isDarkMode ? 'bg-cyan-500 shadow-cyan-500/20 hover:bg-cyan-400' : 'bg-[#a855f7] shadow-purple-200 hover:bg-[#9333ea]'
            }`}
          >
            {copiado ? "✨ Chave Copiada!" : "Copiar Chave PIX"}
          </button>
        </div>
      </div>

      <p className="mt-4 text-[9px] text-slate-400 text-center uppercase tracking-widest">
        Obrigada por me ajudar a fazer o bem! ❤️
      </p>
    </div>
  );
};

export default Presentes;