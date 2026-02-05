import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Rsvp from './components/Rsvp';
import Presentes from './components/Presentes';

function App() {
  const criarAno = (inicio, fim, legenda, ext) => {
    return Array.from({ length: fim - inicio + 1 }, (_, i) => ({
      id: fim - i,
      url: `/images/${fim - i}.${ext}`,
      legenda: legenda
    }));
  };

  const fotos = [
    ...criarAno(59, 78, 'Lemos Party 2025', 'jpg'),
    ...criarAno(30, 56, 'Lemos Party 2024', 'jpg'),
    ...criarAno(1, 28, 'Lemos Party 2023', 'png'),
    ...criarAno(57, 58, 'Lemos Party Online 2022', 'jpg'),
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* HEADER COMPACTO */}
      <header className="bg-[#292a2a] text-white py-10 px-4 text-center border-b-4 border-[#c7ab79]">
        <img 
          src="/images/logo.png" 
          alt="Lemos Party Logo" 
          className="w-24 md:w-32 mx-auto mb-4 drop-shadow-2xl"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tighter uppercase italic">
          Lemos Party 2026!
        </h1>
        <p className="text-lg md:text-xl opacity-90 font-light italic">Você está convidado(a)!</p>
        
        <div className="mt-6 bg-white/5 inline-block p-5 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
          <p className="font-bold text-base md:text-lg text-[#c7ab79]">📅 07 de Maio | ⏰ 18h00</p>
          <p className="mt-1 text-xs md:text-sm text-gray-300">
            📍 Passira Pizzaria e Restaurante <br/> 
            Estr. de Belém, 692 - Campo Grande, Recife
          </p>
          <a 
            href="https://maps.app.goo.gl/9yGZ3p5Z8X8X8X8X8" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block mt-3 bg-[#c7ab79] text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg hover:scale-105 transition transform"
          >
            Abrir no Maps 📍
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* GALERIA DE FOTOS */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 italic uppercase tracking-widest">📸 Nossa Jornada</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {fotos.map((foto, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[450px] md:h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-gray-200">
                  <img 
                    src={foto.url} 
                    alt={foto.legenda} 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    loading="lazy"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=Lemos+Party"; }}
                  />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent w-full p-4 pt-10">
                    <p className="text-[#c7ab79] font-bold text-sm uppercase tracking-wider">{foto.legenda}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* AFTER-PARTY */}
        <section className="bg-[#c7ab79] p-8 rounded-[2rem] shadow-2xl transform md:-rotate-1 flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-[#292a2a]">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-[#292a2a] uppercase tracking-tighter italic">The After Party! 🕺</h2>
            <p className="text-[#292a2a] font-bold mt-2 text-lg">A noite não acaba na pizzaria! Partiu Karokê no Chalé!</p>
          </div>
          <div className="bg-[#292a2a] text-white px-8 py-4 rounded-2xl font-black text-xl shadow-lg">
            PARTIU! 🚀
          </div>
        </section>

        {/* INFO E PLAYLIST (ATUALIZADA) */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-[#292a2a] px-2">🎵 Playlist da Festa</h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
               {/* SEU IFRAME DO SPOTIFY AQUI */}
               <iframe 
                data-testid="embed-iframe" 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1EQncLwOalG3K7?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Spotify Playlist"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-[#292a2a]">❓ Informações</h3>
            <div className="space-y-4 text-gray-700 font-medium text-sm md:text-base">
              <p className="flex items-center gap-2">👕 <strong className="text-[#c7ab79]">Traje:</strong> Esporte Fino</p>
              <p className="flex items-center gap-2">👶 <strong className="text-[#c7ab79]">Crianças:</strong> Super bem-vindas!</p>
              <p className="flex items-center gap-2">🚗 <strong className="text-[#c7ab79]">Estacionamento:</strong> Gratuito no local</p>
              <p className="flex items-center gap-2">🍕 <strong className="text-[#c7ab79]">Consumo:</strong> Rodízio Individual</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Presentes />
          <Rsvp />
        </div>

      </main>

      <footer className="text-center py-12 text-gray-400 border-t bg-white mt-10">
        <p className="font-bold text-gray-600">Espero você para comemorar comigo! ✨</p>
        <p className="text-xs mt-2 uppercase tracking-[0.3em]">#LemosParty2026</p>
      </footer>
    </div>
  );
}

export default App;