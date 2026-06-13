import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-container">
      {/* Dynamic glow blur blobs in background */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <footer className="footer glass-card">
        <div className="container flex-between footer-content">
          <p className="footer-copyright">
            &copy; {currentYear} <span style={{ color: '#fff', fontWeight: 600 }}>Bhairab Choudhury</span>. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          margin-top: 100px;
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-bottom: none;
          background: rgba(7, 10, 19, 0.9);
          padding: 2rem 0;
        }

        .footer-content {
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent-primary);
        }
      `}</style>
    </div>
  );
}

export default App;
