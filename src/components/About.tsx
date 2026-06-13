import { GraduationCap, BookOpen } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const About = () => {
  const education = [
    {
      institution: 'Jadavpur University',
      degree: 'B.E in Instrumentation and Electronics Engineering',
      duration: '2024 — 2028',
      score: 'CGPA: 8.5',
      desc: 'Top-tier public technical university in India. Developing core competencies in electronic circuits, control systems, and computational algorithms.',
    },
    {
      institution: 'Jalpesh L.K High School',
      degree: 'Class XII (WBCHSE)',
      duration: '2023',
      score: 'Percentage: 92%',
      desc: 'Specialized in Science stream (Physics, Chemistry, Mathematics, Computer Science).',
    },
    {
      institution: 'Jalpesh L.K High School',
      degree: 'Class X (WBBSE)',
      duration: '2021',
      score: 'Percentage: 91%',
      desc: 'Completed secondary education with honors in science and mathematics subjects.',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me & Education</h2>
          <p className="section-subtitle">
            Bridging hardware control engineering with cutting-edge software paradigms and artificial intelligence.
          </p>
        </div>

        <div className="grid-2 gap-lg" style={{ alignItems: 'start' }}>
          {/* Left Side: Bio Card */}
          <div className="about-bio glass-card">
            <div className="profile-container">
              <img src={profileImg} alt="Bhairab Choudhury" className="profile-img" />
            </div>
            <h3 className="bio-title">My Journey</h3>
            <p className="bio-text">
              I am an Instrumentation and Electronics Engineering undergraduate at <strong>Jadavpur University</strong>, driven by a deep curiosity for building systems that are both intelligent and highly performant. 
            </p>
            <p className="bio-text">
              My engineering discipline gives me a strong foundation in system thinking, electronics, and instrumentation, which I apply directly to software architectural patterns. I specialize in full-stack web development with React and Node.js, and I actively explore the intersection of artificial intelligence, vector databases, and Large Language Models (LLMs).
            </p>

            <div className="bio-features">
              <div className="feature-item">
                <GraduationCap className="feature-icon" />
                <div>
                  <h4>Academic Merit</h4>
                  <p>Consistently scoring in top brackets (8.5 CGPA, 92%, 91%)</p>
                </div>
              </div>
              <div className="feature-item">
                <BookOpen className="feature-icon" />
                <div>
                  <h4>Self-Taught & Curious</h4>
                  <p>Earned courses in DSA, web dev, and Python from Coding Ninjas & Coursera</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Timeline */}
          <div className="about-education glass-card">
            <h3 className="bio-title" style={{ marginBottom: '2rem' }}>Academic Timeline</h3>
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-title">{item.institution}</h4>
                      <span className="timeline-subtitle">{item.degree}</span>
                    </div>
                    <span className="timeline-date">{item.duration}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{item.desc}</p>
                  <span className="score-badge">{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .profile-container {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: flex-start;
        }

        .profile-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid var(--accent-primary);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .profile-img:hover {
          transform: scale(1.05);
          border-color: var(--accent-secondary);
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.4);
        }

        .about-section {
          position: relative;
        }

        .bio-title {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
          position: relative;
          color: var(--text-primary);
        }

        .bio-text {
          margin-bottom: 1.25rem;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .bio-features {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .feature-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-item h4 {
          font-size: 1.05rem;
          margin-bottom: 0.15rem;
        }

        .feature-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .score-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-tertiary);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          margin-top: 0.35rem;
        }
      `}</style>
    </section>
  );
};
