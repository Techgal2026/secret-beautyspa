import React from 'react';

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white text-[#2b2320] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* --- COLONNE DROITE / IMAGE D'AMBIANCE --- */}
        {/* order-first sur mobile pour s'afficher en premier, order-last sur lg (desktop) pour repasser à droite */}
        <div className="relative min-h-[350px] lg:min-h-full order-first lg:order-last">
          <img
            src="/t2.jpeg"
            alt="Ambiance Spa et Soins"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* --- COLONNE GAUCHE / TÉMOIGNAGE --- */}
        {/* order-last sur mobile pour passer sous l'image, order-first sur lg (desktop) pour être à gauche */}
        <div className="flex flex-col items-center justify-center text-center px-8 py-16 lg:px-16 lg:py-24 order-last lg:order-first">
          
          {/* Sur-titre */}
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b58055] mb-3">
            TÉMOIGNAGES
          </span>

          {/* Titre Principal (Font Serif Élégante) */}
          <h2 className="text-3xl md:text-5xl font-serif text-[#2b2320] mb-6">
            Ce que disent nos clients
          </h2>

          {/* Icône / Guillemets de citation */}
          <div className="text-[#b58055] mb-4">
            <svg 
              className="w-6 h-6 mx-auto fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Citation en français */}
          <p className="max-w-md text-sm md:text-base text-gray-600 font-light leading-relaxed mb-8">
            Une expérience d'un raffinement rare. Le soin apporté aux détails et la sérénité des lieux dépassent toutes les attentes. Un véritable havre de paix que je recommande vivement.
          </p>

          {/* Photo du client */}
          <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border border-[#b58055]/30">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250"
              alt="Bernard Dubois"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nom & Poste */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-[#2b2320] tracking-wide">
              Bernard Dubois
            </h4>
            <p className="text-xs text-gray-500 mt-0.5">
              Client
            </p>
          </div>

          {/* Pagination / Dots du carrousel */}
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-[#b58055]"></span>
          </div>

        </div>

      </div>
    </section>
  );
}