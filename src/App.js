import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Rsvp from './components/Rsvp';
import Presentes from './components/Presentes';

function App() {
  // Estado para controlar o Modo Dark
  const [darkMode, setDarkMode] = useState(true);

  const criarAno = (inicio, fim, legenda, ext) => {
    return Array.from({ length: fim - inicio + 1 }, (_, i) => ({
      id: fim - i,
      url: `/images/${fim - i}.${ext}`,
      legenda: legenda
    }));
  };

  const fotos = [
    ...criarAno(1, 21, 'Moments', 'jpeg'),
  ];

  return (
    /* LÓGICA DE CORES: 
       Dark: bg-[#0f172a] | Text: gray-200
       Light: bg-[#f0f9ff] | Text: slate-800
    */
    <div className={`${darkMode ? 'bg-[#0f172a] text-gray-200' : 'bg-[#f0f9ff] text-slate-800'} min-h-screen font-sans transition-colors duration-500`}>
      
      {/* BOTÃO FLUTUANTE DE DARK MODE */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-xl transition-all active:scale-90"
        style={{ 
          backgroundColor: darkMode ? '#f8fafc' : '#1e293b',
          color: darkMode ? '#0f172a' : '#f8fafc'
        }}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

     

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
{/* SEÇÃO HERO: LARGURA MÁXIMA TOTAL */}
<section className="flex flex-col items-center justify-center py-6">
  
  {/* POLAROID - Agora usando max-w-6xl para alinhar com o restante da página */}
  <div className="relative group rotate-1 hover:rotate-0 transition-all duration-700 ease-out w-full max-w-6xl mx-auto px-2">
    
    <img 
      src="/images/convite.png" 
      alt="Destaque Lemos Party" 
      className="rounded-[2.5rem] shadow-2xl w-full h-auto border-[12px] md:border-[20px] border-white"
    />
    
    {/* Elemento decorativo de profundidade ajustado para a largura total */}
    <div className={`absolute -z-10 -bottom-6 -left-6 w-[100%] h-full border-2 rounded-[3rem] ${darkMode ? 'border-white/10' : 'border-black/5'}`}></div>
    
  </div>
  
</section>

        
        {/* SEÇÃO LOCAL/DATA */}
        <section className="relative">
          <div className={`${darkMode ? 'bg-[#1e293b] border-cyan-500/20' : 'bg-white border-blue-100'} rounded-[2.5rem] border p-2 md:p-4 shadow-xl transition-colors duration-500`}>
            <div className={`flex flex-col md:flex-row items-stretch justify-around divide-y md:divide-y-0 md:divide-x ${darkMode ? 'divide-white/10' : 'divide-blue-50'}`}>
              
              <div className="flex-1 py-6 md:py-4 px-6 flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${darkMode ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black' : 'bg-purple-50 text-[#a855f7] group-hover:bg-[#a855f7] group-hover:text-white'}`}>📅</div>
                <div>
                  <h4 className={`text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-cyan-400' : 'text-[#a855f7]'}`}>Data</h4>
                  <p className={`text-lg font-black ${darkMode ? 'text-white' : 'text-slate-700'}`}>21 de Junho</p>
                </div>
              </div>

              <div className="flex-1 py-6 md:py-4 px-6 flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${darkMode ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black' : 'bg-purple-50 text-[#a855f7] group-hover:bg-[#a855f7] group-hover:text-white'}`}>⏰</div>
                <div>
                  <h4 className={`text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-cyan-400' : 'text-[#a855f7]'}`}>Horário</h4>
                  <p className={`text-lg font-black ${darkMode ? 'text-white' : 'text-slate-700'}`}>11h00</p>
                </div>
              </div>

              <div className="flex-[1.5] py-6 md:py-4 px-6 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${darkMode ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black' : 'bg-purple-50 text-[#a855f7] group-hover:bg-[#a855f7] group-hover:text-white'}`}>📍</div>
                  <div>
                    <h4 className={`text-[10px] font-bold uppercase tracking-widest text-left ${darkMode ? 'text-cyan-400' : 'text-[#a855f7]'}`}>Local</h4>
                    <p className={`text-sm font-bold text-left uppercase ${darkMode ? 'text-white' : 'text-slate-600'}`}>Piscina do Restaurante Dom Ruan</p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/gCd8gn7RhDrLNqPEA" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`${darkMode ? 'bg-cyan-500 shadow-cyan-500/20' : 'bg-[#a855f7] shadow-purple-200'} text-white text-[10px] font-black py-2 px-6 rounded-full hover:opacity-80 transition-all uppercase shadow-lg`}
                >
                  Mapa
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIA DE FOTOS */}
        <section>
          <h2 className={`text-xl font-bold text-center mb-8 italic uppercase tracking-[0.3em] ${darkMode ? 'text-white' : 'text-slate-700'}`}>
            <span className={darkMode ? 'text-cyan-400' : 'text-[#a855f7]'}>📸</span> Nossa Jornada
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {fotos.map((foto, index) => (
              <SwiperSlide key={index}>
                <div className={`relative h-80 overflow-hidden rounded-2xl shadow-md border ${darkMode ? 'border-white/5 bg-[#1e293b]' : 'border-white bg-white'}`}>
                  <img src={foto.url} alt={foto.legenda} className="w-full h-full object-cover" loading="lazy" />
                  <div className={`absolute bottom-0 w-full p-4 pt-10 bg-gradient-to-t ${darkMode ? 'from-[#0f172a] to-transparent' : 'from-white/90 to-transparent'}`}>
                    <p className={`font-bold text-[10px] uppercase tracking-widest ${darkMode ? 'text-cyan-400' : 'text-[#a855f7]'}`}>{foto.legenda}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* INFO E PLAYLIST */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${darkMode ? 'bg-[#1e293b] border-white/5' : 'bg-white border-white'} p-4 rounded-3xl border shadow-xl transition-colors`}>
            <h3 className={`text-xl font-bold mb-4 px-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-700'}`}>
              <span className={darkMode ? 'text-cyan-400' : 'text-[#a855f7]'}>🎵</span> Playlist da Galera
            </h3>
            <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-black/40' : ''}`}>
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/playlist/1qNvW0x1LvDI6GmNYPXM8u?utm_source=generator&theme=0" 
                width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify Playlist"
              ></iframe>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-[#1e293b] border-white/5' : 'bg-white border-white'} p-8 rounded-3xl border shadow-xl transition-colors`}>
  <h3 className={`text-xl font-bold mb-6 uppercase tracking-widest text-[10px] border-b pb-2 ${darkMode ? 'text-cyan-400 border-white/10' : 'text-[#a855f7] border-purple-50'}`}>Informações Importantes</h3>
  <div className={`space-y-6 font-medium text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
    <p className="flex items-center gap-3">
      <span className="text-lg">👕</span> <span><b className={darkMode ? 'text-white' : 'text-slate-700'}>Traje:</b> Livre (Vá como se sentir melhor!)</span>
    </p>
    
    {/* NOVO ITEM: CRIANÇAS */}
    <p className="flex items-center gap-3">
      <span className="text-lg">🔞</span> <span><b className={darkMode ? 'text-white' : 'text-slate-700'}>Crianças:</b> Ambiente planejado para adultos.</span>
    </p>

    <p className="flex items-center gap-3">
      <span className="text-lg">👫</span> <span><b className={darkMode ? 'text-white' : 'text-slate-700'}>Acompanhantes:</b> Apenas convidados da lista!</span>
    </p>
    <p className="flex items-center gap-3">
      <span className="text-lg">🚗</span> <span><b className={darkMode ? 'text-white' : 'text-slate-700'}>Estacionamento:</b> Gratuito no local</span>
    </p>
    <p className="flex items-center gap-3">
      <span className="text-lg">🥤</span> <span><b className={darkMode ? 'text-white' : 'text-slate-700'}>Bebidas:</b> Leve o que for consumir!</span>
    </p>
    <p className="flex items-center gap-3">
      <span className="text-lg">🎁</span> <span><b className={darkMode ? 'text-white' : 'text-slate-700'}>Presentes:</b> Ações solidárias abaixo!</span>
    </p>
  </div>
</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Presentes isDarkMode={darkMode} />
          <Rsvp isDarkMode={darkMode} />
        </div>

      </main>

      <footer className="text-center py-12 mt-10">
        <p className={`font-bold text-sm ${darkMode ? 'text-cyan-500' : 'text-[#a855f7]'}`}>Mal posso esperar para te ver!</p>
        <p className="text-[10px] mt-2 uppercase tracking-[0.4em] opacity-50">#DEYSE31 #SUMMEREDITION</p>
      </footer>
    </div>
  );
}

export default App;