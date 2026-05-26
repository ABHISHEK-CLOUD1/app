import React, { useState } from 'react';
import { personalInfo } from '../mock';
import { Mail, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      toast({ title: "Message Sent!", description: "Thank you! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: 'from-violet-600 to-purple-500',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: 'Follow me',
      href: personalInfo.instagram,
      gradient: 'from-pink-600 to-rose-500',
    },
  ];

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-white/90 text-sm
    bg-white/5 border border-white/10 
    focus:outline-none focus:border-purple-500/60 focus:bg-white/8
    placeholder-white/25 transition-all duration-200
  `;

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background accents */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-transparent" />
          <span className="text-sm font-medium text-pink-400 tracking-widest uppercase">Contact</span>
        </div>

        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl">
            Have a project in mind? Let's discuss how I can help your business grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactCards.map(({ icon, label, value, href, gradient }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass-card rounded-2xl p-4 no-underline"
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{value}</p>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div className="glass-card rounded-2xl p-5 border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Available for work</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                Open to freelance projects and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wide">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wide">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wide">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 text-base font-semibold text-white rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: 'var(--gradient-primary)',
                    boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
