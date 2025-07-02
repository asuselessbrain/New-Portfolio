import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User } from 'lucide-react';

const projectData = {
  1: {
    title: 'AutoSphere Car Marketplace',
    description: 'A modern car dealership platform allowing users to explore car listings, view detailed specifications, place orders, submit reviews, and make payments with a user-friendly interface and admin controls.',
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'ShadCn', 'SurjoPay'],
    features: [
      'Car browsing with detailed specs and images',
      'User authentication and authorization',
      'Place and manage car orders',
      'Submit and view car reviews',
      'Admin dashboard for inventory control',
      'Payment integration using SurjoPay',
      'Responsive and accessible design'
    ],
    challenges: [
      'Integrating custom payment gateway (SurjoPay)',
      'Building a scalable admin dashboard',
      'Managing user roles and permissions securely',
      'Handling real-time order and review data'
    ],
    date: '2024-05-01',
    duration: '2.5 months',
    category: 'Full Stack',
    liveUrl: 'https://auto-sphere-ashy.vercel.app',
    gitHubUrl: 'https://github.com/asuselessbrain/car-store-client.git'
  },
  2: {
    title: 'MediCare Medical Camp Management System',
    description: 'A sophisticated platform for managing medical camps, including participant registration, organizer tools, payment requests, and admin dashboards for roles and resource control.',
    image: 'https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2024/11/22/20241122_rajibdhar_0498.jpg',
    technologies: ['React', 'Firebase', 'MongoDB', 'Express', 'Node.js', 'JWT', 'Tailwind CSS', 'Stripe'],
    features: [
      'Medical camp registration and management',
      'Organizer and admin dashboard',
      'Payment processing with Stripe',
      'Participant tracking and role assignment',
      'Real-time data visualization',
      'Secure login and access control'
    ],
    challenges: [
      'Building secure role-based dashboards',
      'Handling dynamic form data and validation',
      'Implementing reliable payment flow',
      'Ensuring accessibility for medical volunteers'
    ],
    date: '2024-04-15',
    duration: '2 months',
    category: 'Full Stack',
    liveUrl: 'https://medicare-kohl.vercel.app',
    gitHubUrl: 'https://github.com/asuselessbrain/medicare-client'
  },
  3: {
    title: 'CareerCove Job Hunt Portal',
    description: 'A professional job search application that allows users to explore job listings, filter by job type and location, and view detailed job descriptions with salary insights and responsibilities.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHmWpsKqCEUgQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1692110377639?e=2147483647&v=beta&t=8o8pbq1bZtrQjOZxyCis8GkK8FtHx38WqMoea3qjPB0',
    technologies: ['React', 'Firebase', 'MongoDB', 'Express', 'Node.js', 'JWT', 'Tailwind CSS'],
    features: [
      'Browse and filter jobs by category',
      'Detailed job information pages',
      'User login and saved job functionality',
      'Admin can post and manage jobs',
      'Mobile responsive and fast performance'
    ],
    challenges: [
      'Building flexible filtering logic',
      'Managing nested routing with React Router',
      'Handling job data consistency',
      'Balancing admin and user views in UI'
    ],
    date: '2024-03-10',
    duration: '2 months',
    category: 'Full Stack',
    liveUrl: 'https://career-cove.netlify.app',
    gitHubUrl: 'https://github.com/asuselessbrain/career-cove-job-seeking-website-client'
  },
  4: {
    title: 'Pastel Cityscapes Gallery',
    description: 'An elegant and visually rich gallery showcasing pastel-themed cityscape illustrations, offering a smooth and aesthetic browsing experience with filtering options and lightbox previews.',
    image: 'https://images.pexels.com/photos/3225521/pexels-photo-3225521.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'MongoDB', 'Express', 'Node.js', 'Tailwind CSS'],
    features: [
      'Grid layout gallery of illustrations',
      'Modal preview for full-size viewing',
      'Category filtering for illustrations',
      'Responsive and mobile-first design',
      'Fast loading with lazy loading support'
    ],
    challenges: [
      'Optimizing image load speed',
      'Maintaining smooth transitions in gallery',
      'Handling gallery categorization dynamically'
    ],
    date: '2024-02-01',
    duration: '1.5 months',
    category: 'Full Stack',
    liveUrl: 'https://pastel-cityscapes.netlify.app',
    gitHubUrl: ''
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);
  const project = projectData[numericId as 1 | 2 | 3];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <User className="mr-2" size={16} />
                <span>{project.duration}</span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <a href={project.liveUrl} target='_blank'>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <ExternalLink className="mr-2" size={20} />
                Live Demo
              </button>
              </a>
              <a href={project.gitHubUrl} target='_blank'>
                <button className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
                <Github className="mr-2" size={20} />
                View Code
              </button>
              </a>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{project.description}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges & Solutions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;