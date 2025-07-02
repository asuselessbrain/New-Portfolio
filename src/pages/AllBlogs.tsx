import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Search, Filter } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt:
      'Learn how to structure and build maintainable React applications using TypeScript for better developer experience and code quality. This comprehensive guide covers best practices, project structure, and advanced TypeScript patterns.',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Arfan Ahmed',
    category: 'React',
    tags: ['React', 'TypeScript', 'Best Practices'],
    image: 'https://www.curotec.com/wp-content/uploads/2024/10/top-uses-for-react-e1729004277386.jpg?w=1024',
  },
  {
    id: 2,
    title: 'Modern CSS Techniques for Responsive Design',
    excerpt:
      'Explore the latest CSS features and techniques to create responsive, accessible, and performant web designs. From CSS Grid to Container Queries, learn how to build layouts that work everywhere.',
    date: '2024-01-10',
    readTime: '7 min read',
    author: 'Arfan Ahmed',
    category: 'CSS',
    tags: ['CSS', 'Responsive Design', 'Web Design'],
    image: 'https://blog.openreplay.com/images/a-top-collection-of-css-code-generators/images/hero.png',
  },
  {
    id: 3,
    title: 'Node.js Best Practices for Production',
    excerpt:
      'Essential best practices and patterns for building robust Node.js applications ready for production deployment. Learn about security, performance optimization, and monitoring.',
    date: '2024-01-05',
    readTime: '8 min read',
    author: 'Arfan Ahmed',
    category: 'Node.js',
    tags: ['Node.js', 'Backend', 'Production'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Getting Started with Next.js 14',
    excerpt:
      'A comprehensive guide to Next.js 14 featuring the new App Router, Server Components, and improved performance. Build full-stack applications with the latest features.',
    date: '2023-12-28',
    readTime: '6 min read',
    author: 'Arfan Ahmed',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Full Stack'],
    image: 'https://strapi.dhiwise.com/uploads/nextjs_14_OG_Image_28a918c58b.webp',
  },
  {
    id: 5,
    title: 'MongoDB Performance Optimization Tips',
    excerpt:
      'Learn how to optimize your MongoDB database for better performance. Covering indexing strategies, query optimization, and schema design best practices.',
    date: '2023-12-20',
    readTime: '9 min read',
    author: 'Arfan Ahmed',
    category: 'Database',
    tags: ['MongoDB', 'Database', 'Performance'],
    image: 'https://mingo.io/wp-content/uploads/2023/05/MongoDB-Performance.png',
  },
  {
    id: 6,
    title: 'State Management in React: Redux vs Context API',
    excerpt:
      'Compare different state management solutions in React. When to use Redux, Context API, or other alternatives for your application architecture.',
    date: '2023-12-15',
    readTime: '10 min read',
    author: 'Arfan Ahmed',
    category: 'React',
    tags: ['React', 'Redux', 'State Management'],
    image: 'https://miro.medium.com/v2/resize:fit:943/1*sm8Fg19HL9y8zEzGVkTfNg.png',
  },
];

const categories = ['All', 'React', 'CSS', 'Node.js', 'Next.js', 'Database'];

const AllBlogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const search = searchTerm.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.tags.some((tag) => tag.toLowerCase().includes(search));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Blog Posts</h1>
          <p className="text-xl text-gray-600">Insights, tutorials, and thoughts on web development</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                aria-label="Search articles"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
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

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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
                    <ArrowLeft className="ml-1 rotate-180" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
