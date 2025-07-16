import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AllSkills from './pages/AllSkills';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AllBlogs from './pages/AllBlogs';
import BlogDetail from './pages/BlogDetails';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<AllSkills />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;