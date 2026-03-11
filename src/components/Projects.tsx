const Projects = () => {
  const projects = [
    {
      title: 'Books2Go',
      subtitle: 'Book Checkout System',
      description: 'Books2Go is a user-friendly system designed to streamline the process of borrowing and returning books. It allows users to search for available books, check them out, and manage their borrowing history, while administrators can easily track inventory and oversee user activity.',
      image: '/books2go.png',
      link: 'https://lightgoldenrodyellow-ram-782285.hostingersite.com/'
    },
    {
      title: 'Citizens Charter',
      subtitle: 'Service Management System',
      description: 'Citizens Charter is a digital service management system that helps streamline government or public service operations. It allows citizens to view available services, submit requests, and track their status. Administrators can manage service listings, handle incoming requests, and improve service delivery transparency and efficiency.',
      image: '/citizenscharter.png',
      link: 'https://citizens-charter-project.com'
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-8 sm:mb-12 border-b border-gray-200 pb-4">
          PROJECTS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-12">
          Selected Work
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Project image */}
              {project.image.startsWith('/') ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-lg">
                  {project.image}
                </div>
              )}

              {/* Project details */}
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg font-medium text-gray-600">
                  {project.subtitle}
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
