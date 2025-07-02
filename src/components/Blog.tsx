import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import ViewAllButton from '../shared/ViewAllButton';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure and build maintainable React applications using TypeScript for better developer experience and code quality.',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Arfan Ahmed',
    category: 'React',
    image: 'https://www.curotec.com/wp-content/uploads/2024/10/top-uses-for-react-e1729004277386.jpg?w=1024'
  },
  {
    id: 2,
    title: 'Modern CSS Techniques for Responsive Design',
    excerpt: 'Explore the latest CSS features and techniques to create responsive, accessible, and performant web designs.',
    date: '2024-01-10',
    readTime: '7 min read',
    author: 'Arfan Ahmed',
    category: 'CSS',
    image: 'https://blog.openreplay.com/images/a-top-collection-of-css-code-generators/images/hero.png'
  },
  {
    id: 3,
    title: 'Node.js Best Practices for Production',
    excerpt: 'Essential best practices and patterns for building robust Node.js applications ready for production deployment.',
    date: '2024-01-05',
    readTime: '8 min read',
    author: 'Arfan Ahmed',
    category: 'Node.js',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sharing insights and knowledge about web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={16} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <ViewAllButton buttonText='View All Posts' link='blogs' />
      </div>
    </section>
  );
};

export default Blog;