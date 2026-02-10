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
    ...criarAno(59, 76, 'Lemos Party 2025', 'jpg'),
    ...criarAno(30, 56, 'Lemos Party 2024', 'jpg'),
    ...criarAno(1, 28, 'Lemos Party 2023', 'png'),
    ...criarAno(57, 58, 'Lemos Party Online 2022', 'jpg'),
  ];

  return (
    <div className="bg-[#131314] min-h-screen font-sans text-gray-200">
      
      {/* HEADER ULTRA COMPACTO */}
      <header className="bg-[#f0f4f9] py-8 px-4 text-center border-b border-gray-300">
        <img 
          src="/images/logo.png" 
          alt="Lemos Party Logo" 
          className="w-28 md:w-36 mx-auto mb-4" 
        />
        <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-[#1e1e1f]">
          Lemos Party 2026!
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-[0.2em]">Você está convidado(a)!</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        
        {/* SEÇÃO HERO: MAXIMIZADA */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
          
          {/* TEXTO / POEMA - Ajustado para ocupar menos espaço lateral e focar na imagem */}
          <div className="w-full lg:w-[45%] text-center lg:text-left order-2 lg:order-1">
            
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none mt-2 mb-8 uppercase italic">
              NÍVEL 24 <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ALCANÇADO</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed italic border-l-4 border-white/10 pl-8 mx-auto lg:mx-0">
              <p>
                Quando criança era só, vivia na solidão,<br/>
                Guardava no seu peito um imenso coração.<br/>
                A vida veio dura, sem tutorial pra guiar,<br/>
                Com quedas, feridas, lições pra ensinar.
              </p>
              <p>
                Perdeu algumas amizades no meio da missão,<br/>
                No amor conheceu a alegria e também a decepção.<br/>
                Teve fases difíceis, chefões pra enfrentar,<br/>
                Momentos em que pensou em parar de jogar.
              </p>
              <p>
                Mas nunca foi game over, decidiu continuar,<br/>
                Juntou XP suficiente pra se refazer, e se curar.<br/>
                Upou coragem, fé e a própria visão,<br/>
                E desbloqueou em si mesmo uma nova versão.
              </p>
              <p>
                O jogo da vida é difícil de ganhar,<br/>
                Mas com um sorriso no rosto ele há de enfrentar.<br/>
                Sorte daqueles que andam ao seu lado,<br/>
                Pois hoje todos comemoram, Nível 24 alcançado.
              </p>
            </div>
          </div>

          {/* POLAROID - Aumentada substancialmente */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group rotate-1 hover:rotate-0 transition-all duration-700 ease-out">
              <div className="bg-white p-4 pb-12 md:p-6 md:pb-20 shadow-[40px_40px_80px_-15px_rgba(0,0,0,0.8)] transform transition-transform group-hover:scale-[1.02]">
                <img 
                  src="/images/Lemos Party 2026.png" 
                  alt="Destaque Lemos Party" 
                  className="w-full max-w-[500px] h-auto grayscale-[5%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Elemento decorativo de profundidade maior */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-white/10 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* SEÇÃO LOCAL/DATA */}
        <section className="relative overflow-hidden">
          <div className="bg-[#1e1e1f] rounded-[2.5rem] border border-white/5 p-2 md:p-4 shadow-2xl">
            <div className="flex flex-col md:flex-row items-stretch justify-around divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <div className="flex-1 py-6 md:py-4 px-6 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl group-hover:bg-white group-hover:text-black transition-all">📅</div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Data</h4>
                  <p className="text-lg font-black text-white">09 de Maio</p>
                </div>
              </div>

              <div className="flex-1 py-6 md:py-4 px-6 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl group-hover:bg-white group-hover:text-black transition-all">⏰</div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Horário</h4>
                  <p className="text-lg font-black text-white">17h00</p>
                </div>
              </div>

              <div className="flex-[1.5] py-6 md:py-4 px-6 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl group-hover:bg-white group-hover:text-black transition-all">📍</div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-left">Local</h4>
                    <p className="text-sm font-bold text-white text-left">NALA LAND</p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/fxx4SwbuMGM7rdjy7" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-black text-[10px] font-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors uppercase"
                >
                  Mapa
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIA DE FOTOS */}
        <section>
          <h2 className="text-xl font-bold text-center mb-8 text-white italic uppercase tracking-[0.3em]">📸 Nossa Jornada</h2>
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
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl border border-white/5 bg-gray-800">
                  <img 
                    src={foto.url} 
                    alt={foto.legenda} 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    loading="lazy"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=Lemos+Party"; }}
                  />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent w-full p-4 pt-10">
                    <p className="text-white font-bold text-[10px] uppercase tracking-widest">{foto.legenda}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* AFTER-PARTY */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-[#1e1e1f] uppercase tracking-tighter italic">The After Party! 🕺</h2>
            <p className="text-gray-500 font-bold mt-1 text-sm">A noite não acaba tão cedo! Partiu Karokê no Chalé!</p>
          </div>
          <a 
            href="https://maps.app.goo.gl/TVmztwfnp4J3tK9XA" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#1e1e1f] text-white px-8 py-3 rounded-2xl font-black text-lg shadow-lg hover:bg-black hover:scale-105 transition transform text-center"
          >
            PARTIU! 🚀
          </a>
        </section>

        {/* INFO E PLAYLIST */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1e1e1f] p-4 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-white px-2">🎵 Playlist</h3>
            <div className="rounded-xl overflow-hidden shadow-lg bg-black/20">
               <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM3M" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Spotify Playlist"
              ></iframe>
            </div>
          </div>

          <div className="bg-[#1e1e1f] p-6 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-widest text-xs">❓ Detalhes</h3>
            <div className="space-y-4 text-gray-400 font-medium text-xs md:text-sm">
              <p className="flex items-center gap-3">
                🎟️ <span className="text-white font-bold">Reserva:</span> R$ 25,00 por pessoa 
              </p>
              <p className="flex items-center gap-3">
                👕 <span className="text-white font-bold">Traje:</span> Livre (Vá como se sentir melhor!)
              </p>
              <p className="flex items-center gap-3">
                👫 <span className="text-white font-bold">Acompanhantes:</span> Permitidos (Favor informar antes)
              </p>
              <p className="flex items-center gap-3">
                🍕 <span className="text-white font-bold">Consumo:</span> Comanda Individual 
              </p>
              <p className="flex items-center gap-3">
                🚗 <span className="text-white font-bold">Estacionamento:</span> Gratuito no local
              </p>
              <p className="flex items-center gap-3">
                🎤 <span className="text-white font-bold">After:</span> Karaokê no Chalé a partir das 22:30
              </p>
              <p className="flex items-center gap-3">
                🎁 <span className="text-white font-bold">Presentes:</span> Se quiser me mimar, veja a seção abaixo!</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start text-[#1e1e1f]">
          <Presentes />
          <Rsvp />
        </div>

      </main>

      <footer className="text-center py-12 text-gray-600 border-t border-white/5 bg-[#1e1e1f] mt-10">
        <p className="font-bold text-sm">Espero você para comemorar comigo!</p>
        <p className="text-[10px] mt-2 uppercase tracking-[0.4em]">#LemosParty2026</p>
      </footer>
    </div>
  );
}

export default App;