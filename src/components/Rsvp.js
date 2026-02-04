import React, { useState } from 'react';

const Rsvp = () => {
  const [nome, setNome] = useState('');
  const [convidados, setConvidados] = useState('1');

  const enviarWhats = (e) => {
    e.preventDefault();
    const texto = `Oi! Confirmo minha presença! Nome: ${nome} (+${convidados} acompanhantes).`;
    const numero = "5511999999999"; // <-- COLOQUE SEU NÚMERO AQUI (DDI + DDD + NUMERO)
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-100">
      <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">Confirmar Presença ✅</h3>
      <form onSubmit={enviarWhats} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Seu Nome</label>
          <input 
            required
            type="text" 
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Acompanhantes</label>
          <select 
            className="w-full p-2 border rounded-lg"
            value={convidados}
            onChange={(e) => setConvidados(e.target.value)}
          >
            <option value="0">Vou sozinho</option>
            <option value="1">Levo +1</option>
            <option value="2">Levo +2</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">
          Confirmar pelo WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Rsvp;