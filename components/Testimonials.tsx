
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Olivia Chen',
      title: 'Fashion Blogger',
      avatar: 'https://i.pravatar.cc/150?img=38',
      rating: 5,
      quote: "Curated Chic has completely transformed my wardrobe! Every piece feels hand-picked for me, and the quality is exceptional. I always receive compliments when wearing their selections. Truly a game-changer for my personal style.",
    },
    {
      id: 2,
      name: 'Marcus Thorne',
      title: 'Creative Director',
      avatar: 'https://i.pravatar.cc/150?img=61',
      rating: 5,
      quote: "As a creative professional, I appreciate meticulous curation. Curated Chic delivers exactly that. Their eye for unique, high-quality fashion is unparalleled, making it effortless to find pieces that truly stand out.",
    },
    {
      id: 3,
      name: 'Sophia Rossi',
      title: 'Entrepreneur',
      avatar: 'https://i.pravatar.cc/150?img=22',
      rating: 5,
      quote: "I\'ve never felt more confident in my clothing choices until I discovered Curated Chic. The personalized service and incredible selection mean I always look and feel my best, whether it\'s for a business meeting or a casual weekend.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight mb-6">
          What Our Customers Say
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          Hear from the stylish individuals who trust Curated Chic for their impeccable fashion needs.
        </p>
      </div>

      <div className="mt-16 flex overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
        <div className="flex justify-start items-stretch space-x-8 px-4 sm:px-6 lg:px-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="snap-center flex-shrink-0 w-80 md:w-96 bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-100"
              style={{ minWidth: '320px', maxWidth: '384px' }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mr-4 ring-4 ring-purple-200 ring-offset-2"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-purple-600">{testimonial.title}</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-500 mb-3">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
