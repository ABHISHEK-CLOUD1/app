import React, { useState } from 'react';
import { projects } from '../mock';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="relative py-32 px-8 md:px-16 lg:px-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">03</span>
          <div className="section-line" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">Selected Work</span>
        </div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-wider uppercase text-white">
            Featured<br />
            <span className="text-white/40">Projects</span>
          </h2>
        </div>

        {/* Projects grid — 2 column */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="relative bg-[#050505] overflow-hidden group cursor-none"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{
                    filter: hovered === idx ? 'grayscale(0%) brightness(0.75)' : 'grayscale(30%) brightness(0.55)',
                    transition: 'all 0.6s ease',
                  }}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=600&fit=crop`;
                  }}
                />
              </div>

              {/* Info overlay */}
              <div className="p-8 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl tracking-wider uppercase text-white">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-white/40 mt-2 max-w-xs">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="font-mono text-[10px] text-white/30 tracking-wider uppercase">
                        {tech}{i < project.technologies.length - 1 ? ' /' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`w-10 h-10 border border-white/10 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${hovered === idx ? 'bg-white text-black border-white' : 'text-white'}`}
                >
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee ticker */}
        <div className="mt-24 border-t border-b border-white/5 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array(6).fill(['Web Design', '—', 'Development', '—', 'Cloud Engineering', '—', 'DevOps', '—', 'Full Stack', '—']).flat().map((item, i) => (
              <span key={i} className="font-mono text-xs tracking-[0.3em] text-white/20 uppercase mx-4">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
