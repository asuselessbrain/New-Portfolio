import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const sections = ['home', 'about', 'blog'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // track active section
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      if (location.pathname === '/') {
        let current = 'home'; // default

        for (const section of sections) {
          const elem = document.getElementById(section);
          if (elem) {
            const top = elem.getBoundingClientRect().top;
            if (top <= window.innerHeight / 2) {
              current = section;
            }
          }
        }

        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // When route changes to non-home, set active based on pathname
    if (location.pathname !== '/') {
      const path = location.pathname.slice(1); // remove leading '/'
      setActiveSection(path);
    }
  }, [location.pathname]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1znXQ_foJduuTLLD_KDG2LHYF6okAZUSS';
    link.download = 'Arfan_Ahmed_Resume.pdf';
    link.click();
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  // Helper to get classes for nav links/buttons
  const navClass = (name: string) =>
    `transition-colors ${activeSection === name ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-colors"
          >
            Arfan Ahmed
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={navClass('home')}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={navClass('about')}>
              About
            </button>
            <Link to="/skills" className={navClass('skills')}>
              Skills
            </Link>
            <Link to="/projects" className={navClass('projects')}>
              Projects
            </Link>
            <Link to="/blogs" className={navClass('blogs')}>
              Blogs
            </Link>
            <Link to="/contact" className={navClass('contact')}>
              Contact
            </Link>
            <button
              onClick={() => {
                handleDownloadResume();
                setIsMenuOpen(false);
              }}
              className="relative overflow-hidden block w-full text-left px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold transition-transform duration-300 hover:scale-105 shadow-lg group"
            >
              {/* Sliding gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0" />

              {/* Button text */}
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Resume
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className={navClass('home') + ' block'}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={navClass('about') + ' block'}
              >
                About
              </button>
              <Link
                to="/skills"
                className={navClass('skills') + ' block'}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className={navClass('projects') + ' block'}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/blogs"
                className={navClass('blogs') + ' block'}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                className={navClass('contact') + ' block'}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  handleDownloadResume();
                  setIsMenuOpen(false);
                }}
                className="relative overflow-hidden block w-full text-left px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold transition-transform duration-300 hover:scale-105 shadow-lg group"
              >
                {/* Sliding gradient overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0" />

                {/* Button text */}
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Resume
                </span>
              </button>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
