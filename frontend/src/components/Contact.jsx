import React, { useState } from 'react';
import { personalInfo } from '../mock';
import { Mail, Linkedin, Instagram, ArrowUpRight, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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
      toast({ title: 'Message Sent!', description: "Thank you! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast({ title: 'Error', description: 'Failed to send message. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `
    w-full bg-transparent border-0 border-b border-white/10 
    py-4 font-mono text-sm text-white placeholder-white/20
    focus:outline-none focus:border-white/40 transition-colors
    tracking-wide
  `;

  const channels = [
    { icon: <Mail size={14} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Linkedin size={14} />, label: 'LinkedIn', value: 'Connect with me', href: personalInfo.linkedin },
    { icon: <Instagram size={14} />, label: 'Instagram', value: 'Follow me', href: personalInfo.instagram },
  ];

  return (
    <section id="contact" className="relative py-32 px-8 md:px-16 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">04</span>
          <div className="section-line" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">Contact</span>
        </div>

        {/* Big heading */}
        <div className="mb-20">
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] leading-none tracking-wider uppercase text-white">
            Let's
          </h2>
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] leading-none tracking-wider uppercase text-white/30">
            Talk
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left — Channels */}
          <div>
            <p className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-10 leading-relaxed max-w-xs">
              Have a project in mind? Let's discuss how I can help your business grow online.
            </p>

            <div className="space-y-0 divide-y divide-white/5">
              {channels.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 hover:bg-white/[0.02] px-2 -mx-2 transition-colors"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-white/30 group-hover:text-white transition-colors">{icon}</span>
                    <div>
                      <p className="font-mono text-[10px] text-white/25 tracking-[0.2em] uppercase mb-0.5">{label}</p>
                      <p className="font-mono text-sm text-white/60 group-hover:text-white transition-colors">{value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-10 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase">
                Available for freelance &amp; full-time
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-[10px] text-white/25 tracking-[0.3em] uppercase block mb-1">Name</label>
                  <input name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-white/25 tracking-[0.3em] uppercase block mb-1">Email</label>
                  <input name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className={inputClass} />
                </div>
              </div>

              <div className="pt-8">
                <label className="font-mono text-[10px] text-white/25 tracking-[0.3em] uppercase block mb-1">Subject</label>
                <input name="subject" type="text" placeholder="Project inquiry" value={formData.subject} onChange={handleChange} required className={inputClass} />
              </div>

              <div className="pt-8">
                <label className="font-mono text-[10px] text-white/25 tracking-[0.3em] uppercase block mb-1">Message</label>
                <textarea name="message" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} />
              </div>

              <div className="pt-10">
                <button type="submit" disabled={isSubmitting} className="btn-white w-full justify-center">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={13} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
