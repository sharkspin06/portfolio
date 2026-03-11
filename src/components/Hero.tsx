const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Background overlay for additional control */}
      <div className="absolute inset-0 bg-gray-50/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
        {/* Small label */}
        <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest mb-8 sm:mb-12">
          Hello, I'm
        </p>
        
        {/* Large name heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-navy-900 mb-6 sm:mb-8 leading-tight">
          PJ VALENCIA 
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-navy-900 font-normal mb-12">
          PROJECT PORTFOLIO
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-navy-900 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View My Work →
          </a>
          <a
            href="/resume.pdf"
            download="PJ_Valencia_Resume.pdf"
            className="inline-block px-8 py-4 bg-white border-2 border-navy-900 text-navy-900 font-medium rounded-lg hover:bg-navy-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Download Resume ↓
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
