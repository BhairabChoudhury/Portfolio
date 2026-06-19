import type { CSSProperties } from 'react';
import { ExternalLink, Brain, FileCheck, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './Icons';

export const Projects = () => {
  const projects = [
    {
      title: 'Brain Cache',
      subtitle: 'AI-Powered Second Brain System',
      icon: <Brain className="project-brand-icon brain-theme" />,
      tags: ['Python', 'LangChain', 'VectorDB', 'React.js', 'OCR', 'Node.js'],
      bullets: [
        'Developed an AI-powered Second Brain system to store and manage notes, PDFs, images, and web links using a unified content architecture.',
        'Implemented an intelligent data pipeline with OCR and PDF parsing, integrating Retrieval-Augmented Generation (RAG) for semantic search and document-based Q&A.',
        'Designed context-aware AI chat and a reminder system for tracking deadlines for internships, hackathons, and scholarship programs.',
      ],
      github: 'https://github.com/BhairabChoudhury/Brain-Cache-',
      live: 'https://brain-cache-mu.vercel.app',
      themeColor: 'rgba(99, 102, 241, 0.15)',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      glowColor: '0 0 25px rgba(99, 102, 241, 0.25)',
    },
    {
      title: 'AI Resume Analyzer',
      subtitle: 'Semantic Skill Matcher & Scoring System',
      icon: <FileCheck className="project-brand-icon resume-theme" />,
      tags: ['Python', 'Flask', 'NLP', 'LangChain', 'React.js', 'Node.js'],
      bullets: [
        'Built an AI-driven system to analyze resumes using semantic similarity, matching candidate profiles with job descriptions.',
        'Leveraged transformer embeddings for high-dimensional vector search and granular, accurate skill alignment analysis.',
        'Developed robust REST APIs and an interactive frontend dashboard for resume upload, automated scoring, and PDF report generation.',
      ],
      github: 'https://github.com/BhairabChoudhury/AI-Powered-Resume-Analyzer',
      live: 'https://ai-powered-resume-analyzer-d4y8.vercel.app',
      themeColor: 'rgba(168, 85, 247, 0.15)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      glowColor: '0 0 25px rgba(168, 85, 247, 0.25)',
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my systems engineering and AI integration projects, focusing on intelligence and usefulness.
          </p>
        </div>

        <div className="grid-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card project-card"
              style={{
                '--hover-border': project.borderColor,
                '--hover-glow': project.glowColor,
              } as CSSProperties}
            >
              <div className="project-header">
                <div className="project-title-area">
                  <div className="project-icon-box" style={{ background: project.themeColor }}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-subtitle">{project.subtitle}</span>
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="proj-link-btn" title="GitHub Repository">
                    <GitHubIcon size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="proj-link-btn" title="Live Application">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="flex-wrap project-tag-list">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="badge badge-tech">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="project-desc-bullets">
                {project.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="project-bullet">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="project-footer-link">
                <a href={project.live} target="_blank" rel="noreferrer" className="learn-more-link flex-center">
                  <span>Visit Live App</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
          text-align: left;
        }

        .project-card:hover {
          border-color: var(--hover-border) !important;
          box-shadow: var(--hover-glow) !important;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .project-title-area {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .project-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .project-brand-icon {
          width: 24px;
          height: 24px;
        }

        .brain-theme {
          color: #818cf8;
        }

        .resume-theme {
          color: #c084fc;
        }

        .project-title {
          font-size: 1.4rem;
          margin-bottom: 0.15rem;
        }

        .project-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 0.5rem;
        }

        .proj-link-btn {
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition-fast);
        }

        .proj-link-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .project-tag-list {
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding-bottom: 1.25rem;
        }

        .project-desc-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          list-style: none;
          flex-grow: 1;
        }

        .project-bullet {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          padding-left: 1.25rem;
        }

        .project-bullet::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-size: 1.2rem;
          line-height: 1.2;
        }

        .project-footer-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .learn-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .learn-more-link:hover {
          color: var(--accent-secondary);
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
};
