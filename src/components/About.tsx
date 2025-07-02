import { GraduationCap, Code } from 'lucide-react';
import '../css/about.css';
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating exceptional web experiences with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hover-animated-card animate-left bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 cursor-pointer transition-colors duration-500">
  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
    <img
      src="https://i.ibb.co/kDXzSk4/photo-2024-11-20-03-46-26.jpg"
      className="rounded-full"
      alt="Arfan Ahmed Image"
    />
  </div>
  <p className="text-gray-600 leading-relaxed">
    I'm Arfan Ahmed, a dedicated and professional web developer with expertise in MERN stack development, 
    frontend development, and full stack solutions. I'm passionate about creating innovative web applications 
    that solve real-world problems and provide excellent user experiences.
  </p>
</div>

          <div className="space-y-6">
            {/* Education Card - Left to Right */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 hover-animated-card animate-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">BSc in Computer Science & Engineering</p>
                </div>
              </div>
              <p className="text-gray-600">
                Currently studying at Patuakhali Science and Technology University, 4th year. 
                Building a strong foundation in computer science principles and software development.
              </p>
            </div>

            {/* Specialization Card - Right to Left */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover-animated-card animate-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Specialization</h4>
                  <p className="text-gray-600">Full Stack Web Development</p>
                </div>
              </div>
              <p className="text-gray-600">
                Specialized in MERN stack development with extensive experience in modern JavaScript frameworks, 
                database management, and creating scalable web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
