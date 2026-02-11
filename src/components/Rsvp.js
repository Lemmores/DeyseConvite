import React, { useState } from 'react';

const Rsvp = ({ isDarkMode }) => {
  const [nome, setNome] = useState('');

  const enviarWhats = (e) => {
    e.preventDefault();
    const texto = `Oie Deyse! Confirmo minha presença na sua festa de aniversário de 31 anos - Summer Edition! \n\n Eu, ${nome}, já estou ansioso(a) para comemorar com você!`;
    const numero = "5581991954881"; 
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className={`p-6 rounded-[2rem] shadow-xl border transition-colors duration-500 ${
      isDarkMode ? 'bg-[#1e293b] border-white/5' : 'bg-white border-blue-50'
    }`}>
      <h3 className={`text-2xl font-bold mb-4 text-center italic uppercase tracking-wider ${
        isDarkMode ? 'text-white' : 'text-slate-800'
      }`}>Tô dentro! ✅</h3>
      
      <form onSubmit={enviarWhats} className="space-y-6">
        <div>
          <label className={`block text-[10px] font-bold uppercase tracking-widest mb-2 ml-1 ${
            isDarkMode ? 'text-cyan-400' : 'text-[#a855f7]'
          }`}>
            Seu Nome Completo
          </label>
          <input 
            required
            type="text" 
            placeholder="Como quer ser chamado(a)?"
            className={`w-full p-4 rounded-xl outline-none transition-all border ${
              isDarkMode 
              ? 'bg-[#0f172a] border-white/10 text-white focus:ring-2 focus:ring-cyan-500 placeholder:text-gray-600' 
              : 'bg-blue-50/30 border-blue-100 text-slate-700 focus:ring-2 focus:ring-[#a855f7] placeholder:text-slate-400'
            }`}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        {/* Banner informativo */}
        <div className={`p-4 rounded-2xl border transition-colors ${
          isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-blue-50'
        }`}>
          <p className={`text-[10px] text-center uppercase font-bold tracking-widest leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-slate-500'
          }`}>
            📍 Convite Individual e Intransferível <br/>
            <span className={isDarkMode ? 'text-white' : 'text-[#3b82f6]'}>Sua presença é essencial!</span>
          </p>
        </div>

        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] text-white py-4 rounded-2xl font-black uppercase hover:opacity-90 transition-all shadow-lg shadow-purple-200 active:scale-95"
        >
          Confirmar no WhatsApp
        </button>

        <p className="text-[9px] text-center text-slate-400 uppercase tracking-[0.2em] font-medium leading-tight">
          Ao clicar, você será redirecionado <br/> para o WhatsApp da Deyse.
        </p>
      </form>
    </div>
  );
};

export default Rsvp;