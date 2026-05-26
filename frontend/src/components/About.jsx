import React from 'react';
import { personalInfo, stats } from '../mock';

const About = () => {
  return (
    <section id="about" className="relative py-32 px-8 md:px-16 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">01</span>
          <div className="section-line" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <h2
              className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-wider uppercase text-white mb-10"
            >
              Crafting<br />
              <span className="text-white/40">Digital</span><br />
              Experiences
            </h2>

            <p className="text-white/60 leading-relaxed mb-6 text-base" style={{ fontFamily: 'Space Grotesk' }}>
              {personalInfo.about}
            </p>

            <p className="text-white/40 leading-relaxed mb-10 text-sm" style={{ fontFamily: 'Space Grotesk' }}>
              I specialize in creating custom web solutions tailored to your business needs. Whether you're a startup
              looking to establish your digital presence or an established business seeking to enhance your online
              reach, I'm here to help you succeed.
            </p>

            {/* Tech stack — mono tags */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/25 uppercase mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {['React', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                  <span key={tech} className="font-mono text-xs text-white/50 hover:text-white transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="bg-black p-10 group hover:bg-white/[0.02] transition-colors">
                <div
                  className="font-display text-[clamp(3rem,6vw,5rem)] leading-none tracking-wider text-white mb-3"
                >
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
