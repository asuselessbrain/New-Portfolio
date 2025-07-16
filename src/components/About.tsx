import { GraduationCap, User, Target, Lightbulb, Heart } from 'lucide-react';

const About = () => {

  const highlights = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions that make a real difference.',
      color: 'from-blue-50 to-cyan-50 border-blue-100'
    },
    {
      icon: <Lightbulb className="text-purple-600" size={32} />,
      title: 'Innovation Focused',
      description: 'Always exploring cutting-edge technologies to deliver modern, scalable solutions.',
      color: 'from-purple-50 to-pink-50 border-purple-100'
    },
    {
      icon: <Heart className="text-emerald-600" size={32} />,
      title: 'User-Centric',
      description: 'Creating intuitive experiences that users love and businesses can rely on.',
      color: 'from-emerald-50 to-teal-50 border-emerald-100'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <User className="mr-2" size={16} />
            Get to know me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences that bridge the gap between design and functionality
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Personal Story */}
          <div className="space-y-8 lg:mt-20">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <User className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
                  <p className="text-blue-600 font-medium">Full Stack Developer</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Hello! I'm <span className="font-semibold text-gray-900">Arfan Ahmed</span>, a passionate full-stack developer 
                who believes in the power of technology to transform ideas into reality. My journey in web development 
                started with curiosity and has evolved into a deep commitment to creating meaningful digital experiences.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                I specialize in the MERN stack and modern web technologies, always staying updated with the latest 
                industry trends to deliver cutting-edge solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                  <p className="text-emerald-600 font-medium">Academic Excellence</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">BSc in Computer Science & Engineering</h4>
                  <p className="text-gray-600">Patuakhali Science and Technology University</p>
                  <p className="text-sm text-gray-500">4th Year • Expected Graduation: 2025</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Building a strong foundation in computer science principles, algorithms, and software engineering 
                  while actively applying theoretical knowledge to real-world projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">What Drives Me</h3>
            
            {highlights.map((highlight, index) => (
              <div key={index} className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${highlight.color}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Ready to collaborate?</h4>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Let's work together to bring your ideas to life with modern, scalable solutions.
                </p>
          <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="relative overflow-hidden inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 transform transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-200 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0" />

          <span className="relative z-10 flex items-center">
            Start a Project
          </span>
        </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;