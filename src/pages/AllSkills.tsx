import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTechIcon } from '../components/TechIcons';

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux', level: 75 }
    ],
    color: 'blue'
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 88 },
      { name: 'Mongoose', level: 82 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'SQL', level: 78 }
    ],
    color: 'emerald'
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'DBMS', level: 85 },
      { name: 'SQL', level: 78 }
    ],
    color: 'purple'
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 },
      { name: 'npm', level: 88 },
      { name: 'Webpack', level: 70 },
      { name: 'Vite', level: 85 }
    ],
    color: 'orange'
  }
];

const AllSkills = () => {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200',
      emerald: 'bg-emerald-50 border-emerald-200',
      purple: 'bg-purple-50 border-purple-200',
      orange: 'bg-orange-50 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600',
      emerald: 'bg-emerald-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      emerald: 'text-emerald-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Skills & Technologies</h1>
          <p className="text-xl text-gray-600">
            Comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-lg border-2 transition-transform hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`flex-shrink-0 mr-3 ${getIconColor(category.color)}`}>
                        {getTechIcon(skill.name)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                        <p className="text-sm text-gray-600">{skill.level}% Proficiency</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getProgressColor(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly learning new technologies and improving my skills 
            to stay current with industry trends and deliver the best solutions for my clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSkills;