
import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مدير تقني، شركة التعليم الذكي',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'جُويْ حوّل طريقة تدريسنا بالكامل. أدوات رائعة وسهلة الاستخدام!',
      rating: 5
    },
    {
      name: 'فاطمة السالم',
      role: 'معلمة، مدرسة النور الابتدائية',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      content: 'طلابي أصبحوا أكثر تفاعلاً مع الدروس. تطبيق مذهل!',
      rating: 5
    },
    {
      name: 'يوسف الأحمد',
      role: 'مؤسس، دار النشر العربية',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      content: 'حلول رقمية متقدمة ساعدتنا في الوصول لجمهور أوسع.',
      rating: 4.5
    }
  ];
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
            {t('testimonials.title')} <span className="text-gradient">{t('testimonials.titleHighlight')}</span> {t('testimonials.subtitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.testimonialSubtitle')}
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
                  className="w-12 h-12 rounded-full ml-4 ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
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
