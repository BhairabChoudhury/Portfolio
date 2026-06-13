import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
                       
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container flex-between">
          {/* <a href="#home" className="logo flex-center">
            <Code2 className="logo-icon" />
            <span className="logo-text">Bhairab<span className="accent">.dev</span></span>
          </a> */}

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="nav-actions flex-center">
            <a href="https://github.com/bhairabchoudhury" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GitHubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/bhairabchoudhury" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
            <a href="#contact" className="btn-chat flex-center">
              <MessageSquare size={16} />
              <span>Let's Talk</span>
            </a>

            {/* Hamburger Button */}
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header flex-between">
          <span className="logo-text">Bhairab<span className="accent">.dev</span></span>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-socials flex-center">
            <a href="https://github.com/bhairabchoudhury" target="_blank" rel="noreferrer" className="social-icon-btn">
              <GitHubIcon size={22} />
            </a>
            <a href="https://linkedin.com/in/bhairabchoudhury" target="_blank" rel="noreferrer" className="social-icon-btn">
              <LinkedInIcon size={22} />
            </a>
          </div>
        </nav>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition-smooth);
          border-bottom: 1px solid transparent;
        }
        
        .navbar-header .container {
          width: 100%;
        }
        
        .navbar-header.scrolled {
          background: rgba(7, 10, 19, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          height: 70px;
        }

        .logo {
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-primary);
        }

        .logo-icon {
          color: var(--accent-primary);
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.01em;
        }

        .logo-text .accent {
          color: var(--accent-secondary);
        }

        .desktop-nav {
          display: flex;
          gap: 1.5rem;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition-fast);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          transition: var(--transition-fast);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: #a5b4fc;
        }

        .nav-actions {
          gap: 1rem;
          flex-shrink: 0;
        }

        .social-icon-btn {
          color: var(--text-secondary);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .social-icon-btn:hover {
          color: var(--text-primary);
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.3);
        }

        @media (max-width: 1024px) {
          .nav-actions .social-icon-btn {
            display: none;
          }
        }

        .btn-chat {
          gap: 0.5rem;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.5rem 1.2rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          font-family: var(--font-heading);
          transition: var(--transition-fast);
        }

        .btn-chat:hover {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .btn-chat {
            display: none;
          }
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .menu-toggle {
            display: block;
          }
        }

        /* Mobile Drawer styling */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 1999;
          opacity: 0;
          pointer-events: none;
          transition: var(--transition-fast);
        }

        .mobile-nav-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -300px;
          width: 280px;
          height: 100vh;
          background: #0b0f19;
          border-left: 1px solid rgba(255,255,255,0.06);
          z-index: 2000;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          transition: var(--transition-smooth);
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .mobile-nav-header {
          margin-bottom: 3rem;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 1.15rem;
          font-weight: 500;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.02);
          transition: var(--transition-fast);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }

        .mobile-socials {
          margin-top: 3rem;
          gap: 1.5rem;
        }
      `}</style>
    </>
  );
};
