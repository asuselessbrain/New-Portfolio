import { ArrowRight, Download, Facebook, Github, Linkedin, Mail, Sparkles, Code2, Zap } from 'lucide-react';
import TextScramble from '@skits/react-text-scramble';

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="mr-2" size={16} />
              Available for new opportunities
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white block mb-2">
                <TextScramble
                  text="Hi, I'm"
                  autostart
                  characters="!<>-_\\/[]{}—=+*^?#"
                  revealText
                  revealSpeed={50}
                />
                </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">

                <TextScramble
                  text="Arfan Ahmed"
                  autostart
                  characters="!<>-_\\/[]{}—=+*^?#"
                  revealText
                  revealSpeed={50}
                />
              </span>
            </h1>

            {/* Subtitle with animated typing effect */}
            <div className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-4 font-medium">
              <span className="inline-flex items-center">
                <Code2 className="mr-3 text-blue-400" size={28} />
                <TextScramble
                  text="MERN Stack Developer"
                  autostart
                  characters="!<>-_\\/[]{}—=+*^?#"
                  revealText
                  revealSpeed={50}
                />
              </span>
            </div>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies.
              Currently pursuing BSc in CSE at Patuakhali Science and Technology University.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToContact}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transform transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Let's Connect
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </button>

              <button
                onClick={handleDownloadResume}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  Download Resume
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              {[
                { href: 'https://github.com/asuselessbrain', icon: <Github size={24} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/arfan-ahmed40', icon: <Linkedin size={24} />, label: 'LinkedIn' },
                { href: 'https://www.facebook.com/arfan.arfanahmed.73', icon: <Facebook size={24} />, label: 'Facebook' },
                { href: 'mailto:arfan18@cse.pstu.ac.bd', icon: <Mail size={24} />, label: 'Email' },
              ].map(({ href, icon, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? 'noreferrer' : 'noopener noreferrer'}
                  className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label={label}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>

            {/* Main image container */}
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                  <img
                    src="https://i.ibb.co/kDXzSk4/photo-2024-11-20-03-46-26.jpg"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    alt="Arfan Ahmed - Full Stack Developer"
                  />
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-500/30 animate-bounce">
                <Code2 className="text-blue-400" size={24} />
              </div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-500/30 animate-bounce delay-500">
                <Zap className="text-purple-400" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;