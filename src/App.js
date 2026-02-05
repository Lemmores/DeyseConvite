import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Rsvp from './components/Rsvp';
import Presentes from './components/Presentes';

function App() {
  // Lógica para gerar as 83 fotos dinamicamente
  const fotos = Array.from({ length: 83 }, (_, i) => {
    const numero = i + 1;
    let legenda = '';

    if (numero >= 1 && numero <= 29) {
      legenda = `Lemos Party 2023 - Momento ${numero}`;
    } else if (numero >= 30 && numero <= 61) {
      legenda = `Lemos Party 2024 - Momento ${numero}`;
    } else if (numero >= 62 && numero <= 63) {
      legenda = `Lemos Party Online 2022`;
    } else if (numero >= 64 && numero <= 83) {
      legenda = `Lemos Party 2025 - Momento ${numero}`;
    }

    return {
      url: `/images/${numero}.png`,
      legenda: legenda
    };
  });

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. HERO / CAPA COM #292a2a E DETALHE EM #c7ab79 */}
      <header className="bg-[#292a2a] text-white py-16 px-4 text-center border-b-4 border-[#c7ab79]">
        <img 
          src="/images/logo.png" 
          alt="Lemos Party Logo" 
          className="w-32 md:w-40 mx-auto mb-6 drop-shadow-2xl"
        />
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter uppercase italic">
          Lemos Party 2026!
        </h1>
        <p className="text-xl md:text-2xl opacity-80 font-light italic">Você está convidado(a)!</p>
        
        <div className="mt-8 bg-white/5 inline-block p-6 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
          <p className="font-bold text-lg md:text-xl text-[#c7ab79]">📅 07 de Maio | ⏰ 18h00</p>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            📍 Passira Pizzaria e Restaurante <br/> 
            Estr. de Belém, 692 - Campo Grande, Recife
          </p>
          <a 
            href="https://maps.app.goo.gl/YourActualLinkHere" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block mt-4 bg-[#c7ab79] text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg hover:brightness-110 transition"
          >
            Abrir no Maps 📍
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* 2. GALERIA DE FOTOS DINÂMICA (AUTOPLAY ATIVO) */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 italic uppercase tracking-widest">📸 Momentos Especiais</h2>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500, // Passa as fotos a cada 2.5 segundos
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true // Ajuda a não poluir com 83 pontinhos
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {fotos.map((foto, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-gray-200">
                  <img 
                    src={foto.url} 
                    alt={foto.legenda} 
                    className="w-full h-full object-cover"
                    loading="lazy" // Melhora a performance com muitas fotos
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=Carregando..."; }}
                  />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-4">
                    <p className="text-white text-xs md:text-sm italic">{foto.legenda}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* 3. SEÇÃO AFTER-PARTY */}
        <section className="bg-[#c7ab79] p-8 rounded-[2rem] shadow-2xl transform md:-rotate-1 flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-[#292a2a]">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-[#292a2a] uppercase tracking-tighter italic">The After Party! 🕺</h2>
            <p className="text-[#292a2a] font-bold mt-2 text-lg">A noite não acaba na pizzaria!</p>
            <p className="text-[#292a2a]/70 text-sm mt-1">Local surpresa (Revelado na hora!)</p>
          </div>
          <div className="bg-[#292a2a] text-white px-8 py-4 rounded-2xl font-black text-xl shadow-lg hover:scale-105 transition-transform">
            PARTIU! 🚀
          </div>
        </section>

        {/* 4. PLAYLIST E DÚVIDAS */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-[#292a2a]">🎵 Playlist da Festa</h3>
            <div className="rounded-xl overflow-hidden shadow-inner bg-gray-100">
               {/* Lembre-se de colocar o iframe real do Spotify aqui */}
               <div className="h-[152px] flex items-center justify-center border border-dashed border-[#c7ab79]">
                 <p className="text-gray-400 italic text-sm text-center px-4">Playlist Carregando...</p>
               </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-[#292a2a]">❓ Informações</h3>
            <div className="space-y-3 text-gray-700 font-medium">
              <p className="flex items-center gap-2">👕 <strong className="text-[#c7ab79]">Traje:</strong> Casual Chic</p>
              <p className="flex items-center gap-2">👶 <strong className="text-[#c7ab79]">Crianças:</strong> Super bem-vindas!</p>
              <p className="flex items-center gap-2">🚗 <strong className="text-[#c7ab79]">Estacionamento:</strong> Gratuito na frente</p>
              <p className="flex items-center gap-2">🍕 <strong className="text-[#c7ab79]">Consumo:</strong> Individual (Rodízio)</p>
            </div>
          </div>
        </div>

        {/* 5. PRESENTES E RSVP */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Presentes />
          <Rsvp />
        </div>

      </main>

      <footer className="text-center py-12 text-gray-500 border-t bg-white mt-10">
        <p className="font-bold">Espero você para comemorar comigo! ✨</p>
        <p className="text-xs mt-2 uppercase tracking-widest text-[#c7ab79]">#LemosParty2026</p>
      </footer>
    </div>
  );
}

export default App;