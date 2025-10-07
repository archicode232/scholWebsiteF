import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  BookOpen,
  Microscope,
  Calculator,
  Globe,
  Palette,
  Music,
  Dumbbell,
  Languages,
  Laptop,
  FlaskConical,
  Award,
} from 'lucide-react';

export function AcademicsPage() {
  const departments = [
    {
      name: 'Mathematics',
      icon: Calculator,
      courses: ['Algebra I & II', 'Geometry', 'Pre-Calculus', 'Calculus AP', 'Statistics'],
      description: 'Comprehensive math curriculum from foundational concepts to advanced calculus',
    },
    {
      name: 'Science',
      icon: Microscope,
      courses: ['Biology', 'Chemistry', 'Physics', 'Environmental Science', 'AP Sciences'],
      description: 'Hands-on laboratory experiences and cutting-edge scientific exploration',
    },
    {
      name: 'English',
      icon: BookOpen,
      courses: ['Literature', 'Creative Writing', 'Composition', 'World Literature', 'AP English'],
      description: 'Develop critical reading, analytical writing, and communication skills',
    },
    {
      name: 'Social Studies',
      icon: Globe,
      courses: ['World History', 'US History', 'Government', 'Economics', 'Psychology'],
      description: 'Understanding cultures, societies, and global perspectives',
    },
    {
      name: 'Arts',
      icon: Palette,
      courses: ['Visual Arts', 'Digital Media', 'Photography', 'Sculpture', 'Art History'],
      description: 'Express creativity through various artistic mediums and techniques',
    },
    {
      name: 'Music',
      icon: Music,
      courses: ['Band', 'Orchestra', 'Choir', 'Music Theory', 'Digital Music Production'],
      description: 'Comprehensive music education from performance to composition',
    },
    {
      name: 'Physical Education',
      icon: Dumbbell,
      courses: ['PE', 'Health', 'Sports Science', 'Yoga', 'Nutrition'],
      description: 'Promoting physical fitness, health, and lifelong wellness',
    },
    {
      name: 'World Languages',
      icon: Languages,
      courses: ['Spanish', 'French', 'Mandarin', 'Latin', 'ESL'],
      description: 'Build fluency and cultural understanding in multiple languages',
    },
    {
      name: 'Technology',
      icon: Laptop,
      courses: ['Computer Science', 'Robotics', 'Web Development', 'Data Science', 'AI & ML'],
      description: 'Prepare for the digital future with cutting-edge tech education',
    },
  ];

  const programs = {
    ap: [
      'AP Calculus AB/BC',
      'AP Physics',
      'AP Chemistry',
      'AP Biology',
      'AP English Literature',
      'AP US History',
      'AP Computer Science',
      'AP Statistics',
    ],
    honors: [
      'Honors English',
      'Honors Mathematics',
      'Honors Science',
      'Honors Social Studies',
      'Advanced Research Seminar',
    ],
    electives: [
      'Robotics & Engineering',
      'Creative Writing Workshop',
      'Film & Media Studies',
      'Debate & Public Speaking',
      'Entrepreneurship',
      'Environmental Science',
    ],
  };

  const academicSupport = [
    {
      title: 'Tutoring Center',
      description: 'Free peer and faculty tutoring available in all subjects',
      hours: 'Mon-Fri, 3:00-5:00 PM',
    },
    {
      title: 'College Counseling',
      description: 'Personalized guidance for college applications and career planning',
      hours: 'By Appointment',
    },
    {
      title: 'Library & Media Center',
      description: 'Extensive resources, study spaces, and research assistance',
      hours: 'Mon-Fri, 7:00 AM-6:00 PM',
    },
    {
      title: 'Learning Center',
      description: 'Specialized support for students with different learning needs',
      hours: 'Mon-Fri, 8:00 AM-4:00 PM',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[var(--navy)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)] rounded-full">
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              ACADEMICS
            </span>
          </div>
          <h1 className="mb-6" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Academic Excellence
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Our rigorous academic programs challenge students to think critically, solve problems creatively,
            and develop a lifelong love of learning.
          </p>
        </div>
      </div>

      {/* Academic Departments */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
              <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                DEPARTMENTS
              </span>
            </div>
            <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Academic Departments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Explore our comprehensive curriculum across all major subject areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[var(--gold)]" />
                    </div>
                    <h3 className="text-[var(--navy)]">{dept.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="text-gray-700" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      Courses Offered:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dept.courses.slice(0, 3).map((course, i) => (
                        <Badge key={i} variant="outline" className="text-[var(--navy)] border-[var(--navy)]">
                          {course}
                        </Badge>
                      ))}
                      {dept.courses.length > 3 && (
                        <Badge variant="outline">+{dept.courses.length - 3} more</Badge>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
              <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                PROGRAMS
              </span>
            </div>
            <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Advanced Programs & Courses
            </h2>
          </div>

          <Tabs defaultValue="ap" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ap">AP Courses</TabsTrigger>
              <TabsTrigger value="honors">Honors Courses</TabsTrigger>
              <TabsTrigger value="electives">Electives</TabsTrigger>
            </TabsList>

            <TabsContent value="ap" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FlaskConical className="w-8 h-8 text-[var(--gold)]" />
                  <div>
                    <h3 className="text-[var(--navy)]">Advanced Placement Courses</h3>
                    <p className="text-gray-600">College-level courses that can earn college credit</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {programs.ap.map((course, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
                      <span className="text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="honors" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-[var(--gold)]" />
                  <div>
                    <h3 className="text-[var(--navy)]">Honors Courses</h3>
                    <p className="text-gray-600">Accelerated curriculum for high-achieving students</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {programs.honors.map((course, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
                      <span className="text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="electives" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-[var(--gold)]" />
                  <div>
                    <h3 className="text-[var(--navy)]">Elective Courses</h3>
                    <p className="text-gray-600">Explore your interests and discover new passions</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {programs.electives.map((course, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
                      <span className="text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Academic Support */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
              <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                SUPPORT SERVICES
              </span>
            </div>
            <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Academic Support & Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              We provide comprehensive support to help every student succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicSupport.map((support, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-[var(--navy)] mb-2">{support.title}</h3>
                <p className="text-gray-600 mb-3">{support.description}</p>
                <div className="flex items-center gap-2 text-[var(--gold)]">
                  <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{support.hours}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
