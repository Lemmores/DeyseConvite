import React, { useState } from 'react';

const Rsvp = () => {
  const [nome, setNome] = useState('');
  const [convidados, setConvidados] = useState('0');

  const enviarWhats = (e) => {
    e.preventDefault();
    
    // Calcula o valor total (Convidado + Acompanhantes) * 25
    const totalPessoas = parseInt(convidados) + 1;
    const valorReserva = totalPessoas * 25;

    // Mensagem estruturada para o seu WhatsApp
    const texto = `Oi! Confirmo minha presença na Lemos Party 2026! 🥂

👤 Nome: ${nome}
👥 Acompanhantes: ${convidados}
🎟️ Reserva Total: R$ ${valorReserva},00

Vou te enviar o comprovante do PIX agora! ✅`;

    // Seu número configurado corretamente
    const numero = "5581981779732"; 
    
    // Abre o WhatsApp com a mensagem pronta
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-[#1e1e1f] mb-4 text-center italic uppercase tracking-wider">Confirmar Presença ✅</h3>
      
      <form onSubmit={enviarWhats} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Seu Nome Completo</label>
          <input 
            required
            type="text" 
            placeholder="Digite seu nome completo"
            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 outline-none text-gray-800"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Acompanhantes 👥</label>
          <select 
            className="w-full p-3 border border-gray-200 rounded-xl outline-none text-gray-800 bg-white cursor-pointer"
            value={convidados}
            onChange={(e) => setConvidados(e.target.value)}
          >
            <option value="0">Vou sozinho(a)</option>
            <option value="1">Levo +1 acompanhante</option>
        
          </select>
        </div>

        {/* Alerta da Taxa de Reserva */}
        <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-300">
          <p className="text-[10px] text-gray-600 text-center uppercase font-bold tracking-tight">
            Taxa de reserva: R$ 25,00 por pessoa. <br/>
            Sua vaga será garantida após o envio do PIX.
          </p>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#1e1e1f] text-white py-4 rounded-2xl font-black uppercase hover:bg-black transition-all shadow-lg active:scale-95"
        >
          Confirmar pelo WhatsApp
        </button>

        <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-medium">
          Isso abrirá uma conversa com Marcelo
        </p>
      </form>
    </div>
  );
};

export default Rsvp;