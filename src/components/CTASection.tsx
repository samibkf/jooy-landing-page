
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Step into <span className="text-gradient">Education 4.0</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Join hundreds of creators who are transforming their static content into powerful interactive tools. Your first book is on us.
          </p>
          <button className="gradient-brand text-white hover:opacity-90 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group">
            Sign Up and Start Creating Now
            <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
