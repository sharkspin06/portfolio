const Languages = () => {
  const languages = [
    { name: 'Python', percentage: 25, color: 'bg-blue-600', dotColor: '#3776AB' },
    { name: 'PHP', percentage: 20, color: 'bg-indigo-800', dotColor: '#777BB4' },
    { name: 'React', percentage: 18, color: 'bg-cyan-400', dotColor: '#61DAFB' },
    { name: 'TypeScript', percentage: 15, color: 'bg-blue-500', dotColor: '#3178C6' },
    { name: 'HTML', percentage: 10, color: 'bg-red-500', dotColor: '#E34F26' },
    { name: 'CSS', percentage: 7, color: 'bg-purple-600', dotColor: '#1572B6' },
    { name: 'JavaScript', percentage: 5, color: 'bg-yellow-400', dotColor: '#F7DF1E' }
  ]

  return (
    <section className="pb-8 sm:pb-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 animate-fade-in">
            Most Used Languages
          </h2>

          {/* Language list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md hover:scale-105 transform transition-all duration-300 ease-out animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-4 h-4 rounded-full animate-pulse" 
                  style={{ 
                    backgroundColor: lang.dotColor,
                    animationDuration: '2s'
                  }}
                />
                <span className="text-sm sm:text-base text-gray-800 font-medium">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages
