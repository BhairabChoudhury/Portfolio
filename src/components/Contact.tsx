import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide success modal
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have an internship opening, a freelance project, or just want to say hi? Shoot me a message!
          </p>
        </div>
        <div className="grid-2 gap-lg" style={{ alignItems: 'start' }}>
          {/* Left Panel: Contact info */}
          <div className="contact-info-panel flex-col gap-md" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="glass-card info-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-desc">Feel free to reach out via phone, email, or social profiles.</p>

              <div className="info-details-list">
                <div className="info-detail-item">
                  <div className="info-icon-box">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span>Email Me</span>
                    <a href="mailto:bhairabchoudhury02@gmail.com" className="info-link">bhairabchoudhury02@gmail.com</a>
                  </div>
                </div>

                <div className="info-detail-item">
                  <div className="info-icon-box">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span>Call Me</span>
                    <a href="tel:+918101866244" className="info-link">+91 8101866244</a>
                  </div>
                </div>

                <div className="info-detail-item">
                  <div className="info-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span>Location</span>
                    <p className="info-text">Kolkata, West Bengal, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Card */}
            <div className="glass-card info-card">
              <h3 className="info-title" style={{ fontSize: '1.25rem' }}>Social Networks</h3>
              <div className="social-grid">
                <a href="https://github.com/bhairabchoudhury" target="_blank" rel="noreferrer" className="social-card-link">
                  <GitHubIcon size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/bhairabchoudhury" target="_blank" rel="noreferrer" className="social-card-link">
                  <LinkedInIcon size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://leetcode.com/u/BhairabChoudhury123/" target="_blank" rel="noreferrer" className="social-card-link">
                  <LeetCodeIcon size={20} />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-form-panel glass-card">
            {isSuccess ? (
              <div className="success-message flex-center flex-col">
                <CheckCircle2 size={50} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Bhairab will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="grid-2 gap-sm" style={{ marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Internship opportunity"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or request..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-submit flex-center">
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .info-card {
          text-align: left;
          padding: 2rem;
        }

        .info-title {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .info-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .info-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .info-detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .info-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-detail-item span {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .info-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition-fast);
        }

        .info-link:hover {
          color: var(--accent-primary);
        }

        .info-text {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .social-grid {
            grid-template-columns: 1fr;
          }
        }

        .social-card-link {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-fast);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .social-card-link:hover {
          color: #fff;
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.25);
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.1);
        }

        .contact-form-panel {
          padding: 3rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .contact-form-panel {
            padding: 1.5rem;
          }
        }

        .contact-form {
          width: 100%;
        }

        .btn-submit {
          width: 100%;
          padding: 0.9rem;
        }

        .success-message {
          text-align: center;
          gap: 1rem;
          animation: fade-in 0.3s ease-out;
        }

        .success-icon {
          color: var(--accent-tertiary);
          margin-bottom: 0.5rem;
        }

        .success-message h3 {
          font-size: 1.4rem;
        }

        .success-message p {
          font-size: 0.95rem;
          max-width: 320px;
          margin: 0 auto;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
