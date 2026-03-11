const OutsideWork = () => {
  return (
    <section id="outside-work" className="py-16 sm:py-20 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-8 sm:mb-12 border-b border-gray-200 pb-4">
          OUTSIDE OF WORK
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
          Outside of work
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-12">
          Outside of work, I'm mostly busy curating playlists or discovering songs, watching movies and logging ratings/reviews on Letterboxd, sometimes building LEGOs, collecting TCG Pokémon, playing Stardew Valley, and spending time with my pet cats.
        </p>
        
        {/* Hobby images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
            <img 
              src="/hobby.png" 
              alt="Hobbies and interests"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
            <img 
              src="/cats.png" 
              alt="My pet cats"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OutsideWork
