import { Briefcase, GraduationCap, Award } from 'lucide-react'

const About = () => {
  const roles = [
    {
      title: 'INTERN @ DEPARTMENT OF EDUCATION SDO SAN JOSE CITY',
      description: 'Assisted in developing and maintaining official websites for the SDO. Worked with a team to troubleshoot and improve site functionality. Gained practical experience in HTML, CSS, JavaScript, and PHP.',
      image: '/role1.png'
    },
    {
      title: 'UX DESIGNER @ COMPANY NAME',
      description: 'About 4 sentences or so describing things you worked on and what you were able to achieve in this role.',
      placeholder: 'Role 2',
      image: undefined
    },
    {
      title: 'UX DESIGNER @ COMPANY NAME',
      description: 'About 4 sentences or so describing things you worked on and what you were able to achieve in this role.',
      placeholder: 'Role 3',
      image: undefined
    },
  ]

  const timeline: { role: string; company: string }[] = []

  return (
    <section id="about" className="min-h-screen py-16 sm:py-20 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-8 sm:mb-12 border-b border-gray-200 pb-4">
          ABOUT ME
        </p>

        {/* Expertise Option 2 - Three column grid */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-12">
            Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {roles.map((role, index) => (
              <div key={index} className="space-y-4">
                {/* Image or placeholder */}
                {role.image ? (
                  <img 
                    src={role.image} 
                    alt={role.title}
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-6"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center text-gray-500 text-sm mb-6">
                    {role.placeholder}
                  </div>
                )}
                
                {/* Role title */}
                <h3 className="text-xs sm:text-sm font-bold text-navy-900 uppercase tracking-wide">
                  {role.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Option 1 - Split layout with timeline */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-12 hover:text-blue-600 transition-colors duration-300 cursor-default">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column - Description */}
            <div className="space-y-8">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Information Technology graduate with practical experience in web development and systems development. Completed a Bachelor's degree in Information Technology Major in Systems Development.
              </p>
              
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-900 uppercase tracking-wide mb-3 flex items-center gap-2 group">
                  <Briefcase size={16} className="text-navy-900 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                  EXPERIENCE
                </h4>
                
                <div className="mb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                    <strong>Freelancer - Programmer</strong><br />
                    2023 - Present
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Offer programming services for developing software applications, and websites. Ranging from small-scale tasks like bug fixes or feature enhancements to large-scale projects such as building custom software from scratch.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                    <strong>Department of Education Schools Division Office of San Jose City - Intern</strong>
                  </p>
                  <ul className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
                    <li>Assisted in developing and maintaining official websites for the SDO</li>
                    <li>Worked with a team to troubleshoot and improve site functionality</li>
                    <li>Gained practical experience in HTML, CSS, JavaScript, and PHP</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-900 uppercase tracking-wide mb-3 flex items-center gap-2 group">
                  <GraduationCap size={16} className="text-navy-900 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                  EDUCATION
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Central Luzon State University</strong><br />
                  Bachelor of Science in Information Technology<br />
                  Major in Systems Development<br />
                  GPA: 1.78 | Graduated 2025
                </p>
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-900 uppercase tracking-wide mb-3 flex items-center gap-2 group">
                  <Award size={16} className="text-navy-900 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                  CERTIFICATIONS
                </h4>
                <div className="space-y-4">
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    <strong>Computer Systems Servicing NC II</strong><br />
                    TESDA | 2019
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    <strong>AWS Cloud Skills with AWS Training and Certification</strong><br />
                    AWS Cloud Academy | 2023
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-900 uppercase tracking-wide mb-3 flex items-center gap-2 group">
                  <Award size={16} className="text-navy-900 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                  LEADERSHIP & ACTIVITIES
                </h4>
                <div className="space-y-4">
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    <strong>Whitecloak LaunchPad Program - Participant</strong><br />
                    Whitecloak Technologies | 2025<br />
                    <span className="text-xs sm:text-sm">The Whitecloak LaunchPad is a competitive program for fresh graduates to fast-track their careers in software development.</span>
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    <strong>Layout Artist / Graphic Artist in Mass Media Committee</strong><br />
                    University Supreme Student Council | 2023
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Timeline */}
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="text-right">
                  <h4 className="text-base sm:text-lg font-medium text-navy-900 mb-1">
                    {item.role}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
