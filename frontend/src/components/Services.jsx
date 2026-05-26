import React from 'react';
import { services } from '../mock';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-8 md:px-16 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">02</span>
          <div className="section-line" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">Services</span>
        </div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-wider uppercase text-white">
            What I<br />
            <span className="text-white/40">Do</span>
          </h2>
          <p className="font-mono text-xs text-white/30 tracking-[0.15em] uppercase max-w-xs leading-relaxed">
            Comprehensive web solutions to elevate your business in the digital world
          </p>
        </div>

        {/* Services list — eDesign accordion-style rows */}
        <div className="divide-y divide-white/8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group flex items-center justify-between py-8 hover:bg-white/[0.02] px-2 -mx-2 transition-all duration-300 cursor-none"
            >
              <div className="flex items-center gap-8 lg:gap-16">
                <span className="font-mono text-[10px] text-white/20 tracking-[0.3em] w-6">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3
                  className="font-display text-[clamp(1.5rem,4vw,3rem)] tracking-wider uppercase text-white group-hover:text-white/80 transition-colors"
                >
                  {service.title}
                </h3>
              </div>

              <div className="flex items-center gap-8">
                <p className="hidden lg:block font-mono text-xs text-white/30 max-w-xs leading-relaxed tracking-wide">
                  {service.description}
                </p>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
