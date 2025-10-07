import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function NewsSection() {
  const news = [
    {
      title: 'National Science Fair Winners Announced',
      date: 'October 1, 2025',
      category: 'Achievements',
      excerpt: 'Our STEM students took home top honors at the National Science Fair, showcasing innovative research projects.',
      image: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc1OTY1MjI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Fall Arts Festival: A Celebration of Creativity',
      date: 'September 28, 2025',
      category: 'Events',
      excerpt: 'Join us for our annual Fall Arts Festival featuring student performances, exhibitions, and interactive workshops.',
      image: 'https://images.unsplash.com/photo-1758522274945-7f000385a3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzU5NjgxMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'New Scholarship Program Announced',
      date: 'September 15, 2025',
      category: 'Announcements',
      excerpt: 'BrightFuture Academy launches new merit-based scholarships for incoming students, supporting academic excellence.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1OTY0MjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Championship Soccer Team Advances to State Finals',
      date: 'September 10, 2025',
      category: 'Sports',
      excerpt: 'Our varsity soccer team secures their spot in the state finals after an undefeated season.',
      image: 'https://images.unsplash.com/photo-1748715651897-4d2bed3ef6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMHNvY2NlcnxlbnwxfHx8fDE3NTk2ODEyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
            <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              LATEST NEWS
            </span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            School News & Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Stay updated with the latest happenings at BrightFuture Academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow h-full">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[var(--gold)] text-white rounded-full" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span style={{ fontSize: '0.875rem' }}>{item.date}</span>
                  </div>
                  <h3 className="mb-2 text-[var(--navy)] line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3" style={{ fontSize: '0.875rem' }}>
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-[var(--navy)] hover:text-[var(--gold)]">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
