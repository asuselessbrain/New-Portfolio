import { ArrowRight, Download, Facebook, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1znXQ_foJduuTLLD_KDG2LHYF6okAZUSS';
    link.download = 'Arfan_Ahmed_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-[calc(95vh)] flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:w-full">
        <div className="w-32 lg:w-96 h-32 lg:h-96 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6 lg:mb-0">
          <img
            src="https://i.ibb.co/kDXzSk4/photo-2024-11-20-03-46-26.jpg"
            className="rounded-full transition-transform duration-500 rotate-3 ease-in-out hover:scale-105 hover:rotate-0"
            alt="Arfan Ahmed Image"
          />
        </div>
        <div className="text-center lg:text-left">


          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Arfan Ahmed
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            MERN Stack Developer | Frontend Developer | Full Stack Developer
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0">
            A professional web developer specializing in modern web technologies. Currently pursuing BSc in CSE at Patuakhali Science and Technology University.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToContact}
              className="relative overflow-hidden inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-100 via-blue-200 to-indigo-100 text-blue-800 font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg group border border-blue-300"
            >
              {/* Animated sliding overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0" />

              {/* Button content */}
              <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-500">
                Get In Touch
                <ArrowRight className="ml-2 transition-transform duration-500 group-hover:rotate-90" size={20} />
              </span>
            </button>


            <button
              onClick={handleDownloadResume}
              className="relative overflow-hidden inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 transform transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-200 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0" />

              <span className="relative z-10 flex items-center">
                <Download className="mr-2" size={20} />
                Download Resume
              </span>
            </button>
          </div>

          <div className="flex space-x-4 mt-8 justify-center lg:justify-start">
  {[
    {
      href: 'https://github.com/asuselessbrain',
      icon: <Github size={28} />,
    },
    {
      href: 'https://www.linkedin.com/in/arfan-ahmed40',
      icon: <Linkedin size={28} />,
    },
    {
      href: 'https://www.facebook.com/arfan.arfanahmed.73',
      icon: <Facebook size={28} />,
    },
    {
      href: 'mailto:arfan18@cse.pstu.ac.bd',
      icon: <Mail size={28} />,
    },
  ].map(({ href, icon }, index) => (
    <a
      key={index}
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? 'noreferrer' : 'noopener noreferrer'}
      className="relative w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 shadow-md group"
    >
      {/* Background gradient overlay */}
      <span className="absolute inset-0 bg-gradient-to-t from-blue-600 via-indigo-600 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      {/* Icon */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {icon}
      </span>
    </a>
  ))}
</div>



        </div>
      </div>
    </section>
  );
};

export default Hero;