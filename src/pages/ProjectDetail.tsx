import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User } from 'lucide-react';

const projectData = {
  1: {
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built with the MERN stack, featuring complete user authentication, secure payment processing, and a robust admin dashboard for inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT', 'Bcrypt'],
    features: [
      'User registration and authentication',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Secure payment integration with Stripe',
      'Order tracking and history',
      'Admin dashboard for product management',
      'Responsive design for all devices'
    ],
    challenges: [
      'Implementing secure payment processing',
      'Creating an intuitive admin interface',
      'Optimizing database queries for performance',
      'Ensuring mobile responsiveness'
    ],
    date: '2024-01-15',
    duration: '3 months',
    category: 'Full Stack'
  },
  2: {
    title: 'Task Management App',
    description: 'A collaborative task management application designed to enhance team productivity with real-time updates, comprehensive project tracking, and seamless team collaboration features.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Context API', 'React Router'],
    features: [
      'Real-time task updates and notifications',
      'Team collaboration and assignment',
      'Project progress tracking',
      'Drag-and-drop interface',
      'Due date reminders',
      'File attachments and comments',
      'Mobile-responsive design'
    ],
    challenges: [
      'Implementing real-time synchronization',
      'Creating an intuitive drag-and-drop interface',
      'Managing complex state with Context API',
      'Optimizing for mobile devices'
    ],
    date: '2023-12-10',
    duration: '2 months',
    category: 'Frontend'
  },
  3: {
    title: 'Social Media Dashboard',
    description: 'A comprehensive analytics dashboard that provides deep insights into social media performance with interactive data visualizations and automated reporting features.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Prisma', 'NextAuth'],
    features: [
      'Multi-platform social media integration',
      'Interactive charts and graphs',
      'Custom date range analytics',
      'Automated report generation',
      'Performance comparisons',
      'Export data functionality',
      'Dark/light theme support'
    ],
    challenges: [
      'Integrating multiple social media APIs',
      'Creating responsive data visualizations',
      'Optimizing database queries for large datasets',
      'Implementing efficient caching strategies'
    ],
    date: '2023-11-20',
    duration: '4 months',
    category: 'Full Stack'
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
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <ExternalLink className="mr-2" size={20} />
                Live Demo
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
                <Github className="mr-2" size={20} />
                View Code
              </button>
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