import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AutoSphere Car Marketplace',
    description: 'A modern car dealership platform allowing users to explore car listings, view detailed specifications, place orders, submit reviews, and make payments with a user-friendly interface and admin controls.',
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'ShadCn', 'SurjoPay'],
    liveUrl: 'https://auto-sphere-ashy.vercel.app',
    gitHubUrl: 'https://github.com/asuselessbrain/car-store-client.git',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'MediCare Medical Camp Management System',
    description: 'A sophisticated platform for managing medical camps, including participant registration, organizer tools, payment requests, and admin dashboards for roles and resource control.',
    image: 'https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2024/11/22/20241122_rajibdhar_0498.jpg',
    technologies: ['React', 'Firebase', 'MongoDB', 'Express', 'Node.js', 'JWT', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://medicare-kohl.vercel.app',
    gitHubUrl: 'https://github.com/asuselessbrain/medicare-client',
    category: 'Full Stack'
  },
  {
    id: 3,
    title: 'CareerCove Job Hunt Portal',
    description: 'A professional job search application that allows users to explore job listings, filter by job type and location, and view detailed job descriptions with salary insights and responsibilities.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHmWpsKqCEUgQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1692110377639?e=2147483647&v=beta&t=8o8pbq1bZtrQjOZxyCis8GkK8FtHx38WqMoea3qjPB0',
    technologies: ['React', 'Firebase', 'MongoDB', 'Express', 'Node.js', 'JWT', 'Tailwind CSS'],
    liveUrl: 'https://career-cove.netlify.app',
    gitHubUrl: 'https://github.com/asuselessbrain/career-cove-job-seeking-website-client',
    category: 'Full Stack'
  },
  {
    id: 4,
    title: 'Pastel Cityscapes Gallery',
    description: 'An elegant and visually rich gallery showcasing pastel-themed cityscape illustrations, offering a smooth and aesthetic browsing experience with filtering options and lightbox previews.',
    image: 'https://images.pexels.com/photos/3225521/pexels-photo-3225521.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'MongoDB', 'Express', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://pastel-cityscapes.netlify.app',
    category: 'Full Stack'
  }
];

const AllProjects = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h1>
          <p className="text-xl text-gray-600">
            A comprehensive showcase of my web development work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.liveUrl} target='_blank'>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <ExternalLink size={16} className="text-gray-700" />
                    </button>
                  </a>
                  <a href={project.gitHubUrl} target='_blank'>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Github size={16} className="text-gray-700" />
                    </button>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title.length > 28 ? project.title.slice(0, 25) + " " + "...." : project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View Details
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;