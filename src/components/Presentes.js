import React, { useState } from 'react';

const Presentes = () => {
  const [copiado, setCopiado] = useState(false);
  const chavePix = "seu-email@exemplo.com"; // <-- COLOQUE SUA CHAVE AQUI

  const copiarChave = () => {
    navigator.clipboard.writeText(chavePix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-100">
      <h3 className="text-2xl font-bold text-purple-600 mb-4 text-center">Lista de Presentes 🎁</h3>
      <p className="text-gray-600 text-sm mb-6 text-center">
        Se desejar me presentear, preparei uma lista ou você pode contribuir com qualquer valor via PIX:
      </p>
      
      <div className="space-y-3 mb-6">
        <a href="#" className="block p-3 bg-gray-50 rounded-lg border hover:border-purple-400 transition">🛒 Ver Lista na Amazon</a>
        <a href="#" className="block p-3 bg-gray-50 rounded-lg border hover:border-purple-400 transition">🛒 Ver Lista na Magalu</a>
      </div>

      <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
        <p className="text-xs font-bold text-purple-400 uppercase mb-2">Chave PIX (E-mail)</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-mono truncate">{chavePix}</span>
          <button 
            onClick={copiarChave}
            className="bg-purple-600 text-white text-xs px-3 py-2 rounded-lg font-bold"
          >
            {copiado ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentes;