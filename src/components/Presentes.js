import React, { useState } from 'react';

const Presentes = () => {
  const [copiado, setCopiado] = useState(false);
  const chavePix = "marcelo.hslf@gmail.com"; // Corrigi o ponto no gmail.com

  const copiarChave = () => {
    navigator.clipboard.writeText(chavePix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-[#292a2a] mb-4 text-center italic uppercase tracking-wider">Presentes 🎁</h3>
      <p className="text-gray-600 text-sm mb-6 text-center">
        Sua presença é o meu maior presente! Caso deseje me presentear, preparei uma lista ou você pode contribuir via PIX:
      </p>
      
      <div className="space-y-3 mb-6">
        {/* LINK DA AMAZON ATUALIZADO */}
        <a 
          href="https://www.amazon.com.br/hz/wishlist/ls/2W432T92Z6D9Z?ref_=wl_share" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#c7ab79] transition-all group"
        >
          <span className="font-bold text-gray-700">🛒 Lista na Amazon</span>
          <span className="text-[#c7ab79] group-hover:translate-x-1 transition-transform">→</span>
        </a>

        {/* Se não for usar a Magalu agora, você pode remover ou comentar a linha abaixo */}
        <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 opacity-50 cursor-not-allowed">
          <span className="font-bold text-gray-400">🛒 Lista na Magalu (Em breve)</span>
        </a>
      </div>

      <div className="bg-[#292a2a] p-4 rounded-2xl border border-[#c7ab79]/30">
        <p className="text-[10px] font-bold text-[#c7ab79] uppercase mb-2 tracking-widest">Contribuir via PIX (E-mail)</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-white text-xs font-mono truncate">{chavePix}</span>
          <button 
            onClick={copiarChave}
            className="bg-[#c7ab79] text-white text-[10px] px-4 py-2 rounded-xl font-black uppercase hover:brightness-110 transition"
          >
            {copiado ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentes;