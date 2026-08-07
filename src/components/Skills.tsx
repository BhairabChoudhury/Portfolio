import { Code, Layers, Database, BrainCircuit, Wrench, HeartHandshake } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="category-icon" />,
      skills: ['C/C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'PHP', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks & Frontend',
      icon: <Layers className="category-icon" />,
      skills: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Angular', 'Django', 'Figma', 'jQuery','REST API','Software Design'],
    },
    {
      title: 'Databases',
      icon: <Database className="category-icon" />,
      skills: ['MongoDB', 'PostgreSQL', 'Oracle', 'NoSQL', 'Vector DB', 'MySQL'],
    },
    {
      title: 'AI/ML & Libraries',
      icon: <BrainCircuit className="category-icon" />,
      skills: ['NLP', 'LangChain', 'RAG', 'NumPy', 'Pandas', 'Matplotlib'],
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="category-icon" />,
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'AWS', 'WordPress'],
    },
    {
      title: 'Core Concepts & Softskills',
      icon: <HeartHandshake className="category-icon" />,
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'OS', 'Communication', 'Problem-solving'],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Toolbox</h2>
          <p className="section-subtitle">
            A comprehensive list of technologies, databases, frameworks, and tools I use to build robust software.
          </p>
        </div>

        <div className="grid-3 gap-md">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="flex-wrap">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="badge badge-tech skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.75rem;
        }

        .category-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .category-title {
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .skill-badge {
          font-size: 0.85rem;
          padding: 0.4rem 0.85rem;
          transition: var(--transition-fast);
        }

        .skill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </section>
  );
};
