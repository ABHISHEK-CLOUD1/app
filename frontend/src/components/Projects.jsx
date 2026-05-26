import React from 'react';
import { projects } from '../mock';
import { Badge } from './ui/badge';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden" style={{ background: '#0d0d14' }}>
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-violet-500 to-transparent" />
          <span className="text-sm font-medium text-violet-400 tracking-widest uppercase">Projects</span>
        </div>

        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl">
            A selection of recent projects showcasing web solutions across different industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x450/1a1a2e/7c3aed?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Category badge on image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm rounded-full border border-white/15">
                    {project.category}
                  </span>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-colors"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {project.title}
                </h3>

                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
