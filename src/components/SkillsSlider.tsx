import { useEffect, useRef } from 'react';
import { getTechIcon } from './TechIcons';
import ViewAllButton from '../shared/ViewAllButton';

const skills = [
  { name: 'HTML', color: 'bg-orange-100 text-orange-800 border-orange-200' },
  { name: 'CSS', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  { name: 'React', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  { name: 'MongoDB', color: 'bg-green-100 text-green-800 border-green-200' },
  { name: 'Firebase', color: 'bg-orange-100 text-orange-800 border-orange-200' },
  { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-800 border-teal-200' },
  { name: 'Node.js', color: 'bg-green-100 text-green-800 border-green-200' },
  { name: 'Next.js', color: 'bg-gray-100 text-gray-800 border-gray-200' },
  { name: 'TypeScript', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { name: 'Mongoose', color: 'bg-red-100 text-red-800 border-red-200' },
  { name: 'Redux', color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { name: 'DBMS', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  { name: 'SQL', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-800 border-blue-200' }
];

const SkillsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollSpeed = 1;

    const scroll = () => {
      if (!slider) return;

      slider.scrollLeft += scrollSpeed;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 mb-8">
            Expertise in modern web development technologies
          </p>
        </div>

        <div className="overflow-hidden mb-8">
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-hidden"
            style={{
              width: '100%',
              overflowX: 'scroll',
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${skill.color} px-6 py-4 rounded-xl shadow-md border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 `}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {getTechIcon(skill.name)}
                  </div>
                  <span className="font-semibold whitespace-nowrap">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ViewAllButton buttonText='View All Skills' link='skills' />
      </div>
    </section>
  );
};

export default SkillsSlider;