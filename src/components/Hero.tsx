import { ArrowRight, Terminal, Brain, Cpu, Trophy } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="hero-section flex-center">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge badge-hero">
            <Terminal size={14} className="badge-icon" />
            <span>Welcome to my space</span>
          </div>
          
          <h1 className="hero-title">
            Crafting <span className="gradient-text">Intelligent</span> Web Solutions & <span className="gradient-text">AI Systems</span>
          </h1>
          
          <p className="hero-desc">
            Hi, I'm <strong style={{ color: '#fff' }}>Bhairab Choudhury</strong>. A 2nd-Year B.E. Student at Jadavpur University (Instrumentation and Electronics Engineering) specializing in full-stack web applications, AI orchestration, and Retrieval-Augmented Generation (RAG).
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="hero-stats">
          <div className="stat-card glass-card">
            <Brain className="stat-icon icon-indigo" />
            <div className="stat-info">
              <h3>RAG & LLM</h3>
              <p>AI Pipelines</p>
            </div>
          </div>
          
          <div className="stat-card glass-card">
            <Trophy className="stat-icon icon-violet" />
            <div className="stat-info">
              <h3>Top 12 Finalist</h3>
              <p>Zoho Hackathon</p>
            </div>
          </div>

          <div className="stat-card glass-card">
            <Cpu className="stat-icon icon-emerald" />
            <div className="stat-info">
              <h3>450+ Solved</h3>
              <p>LeetCode Problems</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding-top: 120px;
          padding-bottom: 60px;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 4rem;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 968px) {
          .hero-content {
            align-items: center;
          }
        }

        .badge-hero {
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.25);
          color: #a5b4fc;
          margin-bottom: 1.5rem;
          padding: 0.5rem 1rem;
          font-family: var(--font-heading);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.8rem;
          gap: 0.4rem;
        }

        .badge-hero .badge-icon {
          color: var(--accent-primary);
        }

        .hero-title {
          font-size: 3.8rem;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        .hero-desc {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 620px;
          line-height: 1.7;
        }

        @media (max-width: 640px) {
          .hero-desc {
            font-size: 1.05rem;
          }
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          width: 100%;
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            gap: 0.75rem;
          }
        }

        .hero-stats {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (max-width: 968px) {
          .hero-stats {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        @media (max-width: 968px) {
          .stat-card {
            flex: 1;
            min-width: 200px;
          }
        }

        .stat-icon {
          width: 42px;
          height: 42px;
          padding: 8px;
          border-radius: var(--radius-sm);
        }

        .icon-indigo {
          background: rgba(99, 102, 241, 0.1);
          color: #818cf8;
        }

        .icon-violet {
          background: rgba(168, 85, 247, 0.1);
          color: #c084fc;
        }

        .icon-emerald {
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
        }

        .stat-info h3 {
          font-size: 1.15rem;
          margin-bottom: 0.2rem;
          font-family: var(--font-heading);
        }

        .stat-info p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};
