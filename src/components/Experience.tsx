import { Calendar, Briefcase, FileBadge, ArrowUpRight } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: 'Kodbud',
      role: 'Web Development Intern',
      duration: '4 Weeks Internship',
      link: 'https://drive.google.com/file/d/1yJn3GFw0VZMvvrMxncf8-tDRe164kcRp/view?usp=sharing', // Placeholder or real link
      details: [
        'Built responsive, pixel-perfect web pages using modern HTML, CSS, JavaScript, TypeScript, and Bootstrap.',
        'Developed tailored portfolio websites, responsive landing pages, and highly interactive UI components using React.js.',
        'Implemented validation schemas, responsive fluid layouts, and smooth micro-interactions/animations.',
        'Applied modern layouts (Flexbox, CSS Grid, and mobile-first responsive design principles) to optimize viewport scalability.',
        'Developed, tested, and integrated RESTful APIs using Node.js and Express.js to power dynamic web application features.',
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Industry exposure and practical application of web development skills in a professional setting.
          </p>
        </div>

        <div className="experience-wrapper glass-card">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item">
              <div className="exp-sidebar">
                <div className="exp-icon-box">
                  <Briefcase className="exp-icon" />
                </div>
                <div className="exp-connector"></div>
              </div>

              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-date flex-center">
                      <Calendar size={14} style={{ marginRight: '4px' }} />
                      <span>{exp.duration}</span>
                    </span>
                    <a href={exp.link} className="btn-certificate flex-center" target="_blank" rel="noreferrer">
                      <FileBadge size={14} style={{ marginRight: '4px' }} />
                      <span>Certificate Link</span>
                      <ArrowUpRight size={12} style={{ marginLeft: '2px' }} />
                    </a>
                  </div>
                </div>

                <ul className="exp-bullet-list">
                  {exp.details.map((detail, dIndex) => (
                    <li key={dIndex} className="exp-bullet">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        .experience-wrapper {
          max-width: 900px;
          margin: 0 auto;
          text-align: left;
        }

        .exp-item {
          display: flex;
          gap: 1.5rem;
        }

        .exp-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .exp-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exp-icon {
          color: var(--accent-primary);
          width: 20px;
          height: 20px;
        }

        .exp-connector {
          width: 2px;
          flex-grow: 1;
          background: linear-gradient(to bottom, rgba(99, 102, 241, 0.2), transparent);
          margin-top: 0.5rem;
          min-height: 100px;
        }

        .exp-content {
          flex-grow: 1;
          padding-bottom: 2rem;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .exp-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }

        .exp-role {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .exp-company {
          font-size: 1.1rem;
          color: var(--accent-secondary);
          font-weight: 600;
        }

        .exp-meta {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .exp-date {
          font-size: 0.85rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
        }

        .btn-certificate {
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.15);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-certificate:hover {
          color: #fff;
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .exp-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .exp-bullet {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          padding-left: 1.25rem;
        }

        .exp-bullet::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};
