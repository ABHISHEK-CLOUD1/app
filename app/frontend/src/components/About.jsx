import React from 'react';
import { personalInfo, stats } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: '#0d0d14' }}>
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-violet-500 to-transparent" />
          <span className="text-sm font-medium text-violet-400 tracking-widest uppercase">About</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left – Text */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Passionate about
              <span className="gradient-text"> great software</span>
            </h2>

            <p className="text-lg text-white/60 leading-relaxed mb-5">
              {personalInfo.about}
            </p>

            <p className="text-lg text-white/50 leading-relaxed">
              I specialize in creating custom web solutions tailored to your business needs. Whether you're a startup looking to establish your digital presence or an established business seeking to enhance your online reach, I'm here to help you succeed.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['React', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-purple-300 border border-purple-500/25 rounded-full bg-purple-500/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right – Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center group"
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-2 gradient-text"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
