import React from 'react';
import { services } from '../mock';
import { Code, Palette, Smartphone, TrendingUp } from 'lucide-react';

const iconMap = {
  Code: Code,
  Palette: Palette,
  Smartphone: Smartphone,
  TrendingUp: TrendingUp
};

const iconGradients = [
  'from-violet-600 to-purple-500',
  'from-pink-600 to-rose-500',
  'from-blue-600 to-cyan-500',
  'from-emerald-600 to-teal-500',
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background accents */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-transparent" />
          <span className="text-sm font-medium text-pink-400 tracking-widest uppercase">Services</span>
        </div>

        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What I <span className="gradient-text">offer</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl">
            Comprehensive web solutions to elevate your business in the digital world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-8 group cursor-default"
              >
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${iconGradients[idx]} shadow-lg`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {service.title}
                </h3>

                <p className="text-white/50 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Hover line accent */}
                <div className={`mt-5 w-0 h-0.5 rounded-full bg-gradient-to-r ${iconGradients[idx]} group-hover:w-full transition-all duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
