import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { GraduationCap, Award, Users, BookOpen, Target, Heart } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for academic excellence and continuous improvement in everything we do.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We foster honesty, respect, and ethical behavior in our students and staff.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build a supportive, inclusive community where everyone belongs.',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We embrace new ideas and cutting-edge teaching methodologies.',
    },
  ];

  const stats = [
    { value: '2,500+', label: 'Students Enrolled' },
    { value: '98%', label: 'College Acceptance Rate' },
    { value: '150+', label: 'Expert Faculty' },
    { value: '40+', label: 'Years of Excellence' },
  ];

  const timeline = [
    { year: '1985', event: 'BrightFuture Academy founded with 200 students' },
    { year: '1995', event: 'Expanded to include middle school program' },
    { year: '2005', event: 'Opened state-of-the-art STEM facility' },
    { year: '2015', event: 'Achieved National Blue Ribbon School status' },
    { year: '2020', event: 'Launched innovative online learning platform' },
    { year: '2025', event: 'Celebrating 40 years of educational excellence' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[var(--navy)] text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1719468881309-1a7de815c132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBjYW1wdXN8ZW58MXx8fHwxNzU5Njg1NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Campus building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)] rounded-full">
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              ABOUT US
            </span>
          </div>
          <h1 className="mb-6" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Our Story & Mission
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto" style={{ fontSize: '1.125rem' }}>
            For over four decades, BrightFuture Academy has been a beacon of educational excellence,
            nurturing young minds and preparing them for success in an ever-changing world.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[var(--gold)] mb-2" style={{ fontSize: '3rem', fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
                <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  OUR MISSION
                </span>
              </div>
              <h2 className="text-[var(--navy)] mb-6" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                Empowering Tomorrow's Leaders
              </h2>
              <p className="text-gray-600 mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                Our mission is to provide a transformative educational experience that empowers students
                to reach their full potential academically, socially, and emotionally.
              </p>
              <p className="text-gray-600 mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                We are committed to fostering critical thinking, creativity, and character development
                while preparing students to become responsible global citizens.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[var(--gold)]" />
                  <span className="text-gray-700">Academic Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-[var(--gold)]" />
                  <span className="text-gray-700">Character Building</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580699228119-7be487b3137f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzdHVkeXxlbnwxfHx8fDE3NTk2NDIzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Library"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
              <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                OUR VALUES
              </span>
            </div>
            <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              What We Stand For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Our core values guide everything we do and shape the culture of our school
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[var(--gold)]" />
                  </div>
                  <h3 className="text-[var(--navy)] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
              <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                OUR HISTORY
              </span>
            </div>
            <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              40 Years of Excellence
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[var(--navy)] rounded-full flex items-center justify-center">
                    <span className="text-white" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <Card className="p-6">
                    <p className="text-gray-700" style={{ fontSize: '1.125rem' }}>{item.event}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
