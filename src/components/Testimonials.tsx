import { Card } from './ui/card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Parent',
      quote: 'BrightFuture Academy has exceeded our expectations. The teachers are dedicated, and the curriculum is challenging yet supportive.',
      rating: 5,
    },
    {
      name: 'James Chen',
      role: 'Class of 2024 Graduate',
      quote: 'The leadership programs and STEM opportunities prepared me perfectly for college. I felt ready to tackle any challenge.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Current Student',
      quote: 'I love the creative arts program here. The teachers encourage us to express ourselves and push our boundaries.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
            <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            What Our Community Says
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Hear from students, parents, and alumni about their BrightFuture experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <Quote className="w-10 h-10 text-[var(--gold)] mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 600 }} className="text-[var(--navy)]">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
