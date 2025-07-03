
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Smith',
    role: 'CEO, Company XYZ',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    content: 'The team completely transformed our online presence. Exceptional professionalism and expertise!',
    rating: 5
  },
  {
    name: 'John Johnson',
    role: 'Founder, Startup ABC',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    content: 'Our app exceeded every expectation thanks to their work. Highly recommended!',
    rating: 4.5
  },
  {
    name: 'Sarah Wilson',
    role: 'Marketing Director',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'From idea to implementation, a clear and well-managed journey. Results beyond expectations.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : i < rating 
            ? 'text-yellow-400 fill-yellow-400/50' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-gradient">our clients</span> say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The experiences and opinions of those who have already worked with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-6 hover:glass-dark transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gradient">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex space-x-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
