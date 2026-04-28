import { Button } from '@mui/material'
import { ArrowForward, Download } from '@mui/icons-material'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Image Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/me.jpg)' }}
      ></div>
      
      {/* Background overlay for additional control */}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
        {/* Small label */}
        <p className="text-sm sm:text-base text-white uppercase tracking-widest mb-2 sm:mb-3 mt-18">
          Hello, I'm
        </p>
        
        {/* Large name heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          PJ VALENCIA 
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white font-normal mb-12">
          WELCOME TO MY PORTFOLIO
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            href="#projects"
            sx={{
              backgroundColor: '#1e293b',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1rem',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#2563eb',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            View My Work
          </Button>
          <Button
            variant="contained"
            size="large"
            endIcon={<Download />}
            href="/resume.pdf"
            download="PJ_Valencia_Resume.pdf"
            sx={{
              backgroundColor: '#1e293b',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1rem',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#2563eb',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
