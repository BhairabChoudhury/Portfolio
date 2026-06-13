import { Trophy, Code, Cpu, Award, BookOpen, Compass, ExternalLink } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: 'Zoho Hackathon Finalist',
      desc: 'Finished in the Top 12 out of over 5,000 teams nationwide in Zoho\'s flagship engineering hackathon.',
      icon: <Trophy className="ach-icon icon-yellow" />,
    },
    {
      title: 'DoubleSlash Hackathon Finalist',
      desc: 'Selected as a finalist in the DoubleSlash Hackathon hosted by the IEEE Jadavpur University Student Branch.',
      icon: <Award className="ach-icon icon-violet" />,
    },
    {
      title: '450+ LeetCode Solved',
      desc: 'Demonstrated strong problem-solving skills in data structures, algorithms, and mathematical logic.',
      icon: <Code className="ach-icon icon-blue" />,
    },
    {
      title: 'ES & Robotics Club Core Member',
      desc: 'Actively participating in robotics design, electronics modeling, and microcontroller programming.',
      icon: <Cpu className="ach-icon icon-green" />,
    },
  ];

  const courses = [
    { name: 'Data Structures and Algorithms', source: 'Coding Ninjas', link: 'https://drive.google.com/file/d/1QtwBgxnbcwgJy9CxOJFPrGg7ec24ip6T/view' },
    { name: 'Web Development Bootcamp', source: 'Udemy', link: 'https://www.canva.com/design/DAHGvwNZQNE/oirWWxzSPFUeYlUHcHZ6_g/edit' },
    { name: 'Python Programming', source: 'Coursera', link: '' },
  ];

  const hobbies = [
    'Competitive Programming & Algorithmic Problem Solving',
    'Exploring System Design & Microservice Architectures',
    'Reading Technology Publications & Self-Growth Books',
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Activities</h2>
          <p className="section-subtitle">
            Beyond academics: hackathon highlights, algorithmic accomplishments, and self-paced professional training.
          </p>
        </div>

        <div className="grid-2 gap-lg" style={{ alignItems: 'start' }}>
          {/* Achievements Grid */}
          <div className="ach-grid">
            {achievements.map((ach, index) => (
              <div key={index} className="glass-card ach-card">
                <div className="ach-header">
                  {ach.icon}
                  <h3 className="ach-card-title">{ach.title}</h3>
                </div>
                <p className="ach-desc">{ach.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Panel: Courses & Hobbies */}
          <div className="right-panel flex-col gap-md" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Courses Card */}
            <div className="glass-card panel-card">
              <div className="panel-header">
                <BookOpen className="panel-icon" />
                <h3 className="panel-title">Completed Courses</h3>
              </div>
              <div className="course-list">
                {courses.map((course, index) => (
                  <div key={index} className="course-item">
                    <div>
                      <h4 className="course-name">{course.name}</h4>
                      <span className="course-source">{course.source}</span>
                    </div>
                    {course.link && (
                      <a href={course.link} className="course-link flex-center" target="_blank" rel="noreferrer" title="Verify Certificate">
                        <span>Verify</span>
                        <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies Card */}
            <div className="glass-card panel-card">
              <div className="panel-header">
                <Compass className="panel-icon" />
                <h3 className="panel-title">Interests & Hobbies</h3>
              </div>
              <ul className="hobby-list">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="hobby-item">
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .achievements-section {
          position: relative;
        }

        .ach-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .ach-grid {
            grid-template-columns: 1fr;
          }
        }

        .ach-card {
          text-align: left;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
        }

        .ach-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .ach-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }

        .icon-yellow { color: #fbbf24; }
        .icon-violet { color: #c084fc; }
        .icon-blue { color: #60a5fa; }
        .icon-green { color: #34d399; }

        .ach-card-title {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .ach-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .panel-card {
          text-align: left;
          padding: 2rem;
        }

        .panel-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .panel-icon {
          color: var(--accent-primary);
        }

        .panel-title {
          font-size: 1.25rem;
        }

        .course-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .course-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          padding-bottom: 0.75rem;
        }

        .course-item:last-child {
          border: none;
          padding-bottom: 0;
        }

        .course-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }

        .course-source {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .course-link {
          font-size: 0.8rem;
          color: var(--accent-primary);
          text-decoration: none;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          border: 1px solid rgba(99, 102, 241, 0.15);
          background: rgba(99, 102, 241, 0.03);
          transition: var(--transition-fast);
        }

        .course-link:hover {
          color: #fff;
          border-color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.15);
        }

        .hobby-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hobby-item {
          font-size: 0.95rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.25rem;
          line-height: 1.5;
        }

        .hobby-item::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--accent-secondary);
          font-size: 0.85rem;
        }
      `}</style>
    </section>
  );
};
