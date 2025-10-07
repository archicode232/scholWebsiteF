import { ProgramCard } from './ProgramCard';
import { Microscope, Palette, Trophy, Users } from 'lucide-react';

export function FeaturedPrograms() {
  const programs = [
    {
      title: 'STEM Excellence',
      description: 'Cutting-edge science, technology, engineering, and mathematics programs that prepare students for future careers.',
      imageUrl: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc1OTY1MjI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Microscope,
    },
    {
      title: 'Creative Arts',
      description: 'Comprehensive arts program including visual arts, music, theater, and digital media to nurture creative expression.',
      imageUrl: 'https://images.unsplash.com/photo-1758522274945-7f000385a3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzU5NjgxMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Palette,
    },
    {
      title: 'Athletics & Sports',
      description: 'Championship-level sports programs building teamwork, discipline, and physical excellence across various disciplines.',
      imageUrl: 'https://images.unsplash.com/photo-1748715651897-4d2bed3ef6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMHNvY2NlcnxlbnwxfHx8fDE3NTk2ODEyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Trophy,
    },
    {
      title: 'Leadership Development',
      description: 'Empowering students with leadership skills, community service opportunities, and character development programs.',
      imageUrl: 'https://images.unsplash.com/photo-1584365098838-50ccef838f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdGVhbXdvcmslMjBzdHVkZW50c3xlbnwxfHx8fDE3NTk2ODEyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
            <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              OUR PROGRAMS
            </span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Featured Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Discover our comprehensive programs designed to develop well-rounded, accomplished students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
