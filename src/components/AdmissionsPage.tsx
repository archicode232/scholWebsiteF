import {
  Award,
  Calendar,
  CheckCircle2,
  ClipboardList,
  DollarSign,
  FileText,
  Mail,
  Users,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface AdmissionsPageProps {
  onOpenApplication: () => void;
}

export function AdmissionsPage({ onOpenApplication }: AdmissionsPageProps) {
  const admissionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete our online application form with student and family information',
      icon: ClipboardList,
    },
    {
      step: 2,
      title: 'Schedule Campus Tour',
      description: 'Visit our campus and meet with faculty and current students',
      icon: Calendar,
    },
    {
      step: 3,
      title: 'Submit Documents',
      description: 'Provide transcripts, test scores, and recommendation letters',
      icon: FileText,
    },
    {
      step: 4,
      title: 'Student Interview',
      description: 'Meet with our admissions team for a personal interview',
      icon: Users,
    },
    {
      step: 5,
      title: 'Receive Decision',
      description: 'Get your admission decision within 2-3 weeks',
      icon: CheckCircle2,
    },
  ];

  const requiredDocuments = [
    'Completed application form',
    'Official transcripts from current/previous school',
    'Standardized test scores (if applicable)',
    'Two letters of recommendation',
    'Personal essay or statement',
    'Proof of immunization records',
    'Birth certificate copy',
  ];

  const importantDates = [
    { date: 'November 15, 2025', event: 'Early Decision Deadline', type: 'deadline' },
    { date: 'December 1, 2025', event: 'Open House Event', type: 'event' },
    { date: 'January 15, 2026', event: 'Regular Decision Deadline', type: 'deadline' },
    { date: 'February 10, 2026', event: 'Financial Aid Workshop', type: 'event' },
    { date: 'March 15, 2026', event: 'Acceptance Notifications Sent', type: 'notification' },
    { date: 'April 1, 2026', event: 'Enrollment Deposit Due', type: 'deadline' },
  ];

  const tuitionInfo = [
    {
      grade: 'Grades K-5',
      tuition: '$18,500',
      description: 'Elementary program with small class sizes',
    },
    {
      grade: 'Grades 6-8',
      tuition: '$21,000',
      description: 'Middle school with specialized programs',
    },
    {
      grade: 'Grades 9-12',
      tuition: '$24,500',
      description: 'High school with AP and honors courses',
    },
  ];

  const financialAid = [
    'Merit-based scholarships available',
    'Need-based financial aid programs',
    'Payment plans to spread costs',
    'Sibling discounts offered',
    'Average aid package: $8,000',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[var(--navy)] text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1686213011698-8e70cb7ed011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTk2NTYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Graduation ceremony"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)] rounded-full">
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              ADMISSIONS
            </span>
          </div>
          <h1 className="mb-6" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Join Our Community
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8" style={{ fontSize: '1.125rem' }}>
            Begin your journey to excellence. We welcome students who are eager to learn, grow, and
            make a difference.
          </p>
          <Button
            size="lg"
            onClick={onOpenApplication}
            className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white px-8 py-6"
            style={{ fontSize: '1.125rem' }}
          >
            Start Your Application
          </Button>
        </div>
      </div>

      {/* Admission Process */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
              <span
                className="text-[var(--gold)]"
                style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}
              >
                THE PROCESS
              </span>
            </div>
            <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Admission Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Follow these simple steps to complete your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {admissionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      {step.step}
                    </span>
                  </div>
                  <Icon className="w-8 h-8 text-[var(--navy)] mx-auto mb-3" />
                  <h3 className="text-[var(--navy)] mb-2" style={{ fontSize: '1rem' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
                <span
                  className="text-[var(--gold)]"
                  style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}
                >
                  REQUIREMENTS
                </span>
              </div>
              <h2
                className="text-[var(--navy)] mb-6"
                style={{ fontSize: '2.5rem', fontWeight: 700 }}
              >
                Required Documents
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontSize: '1.125rem' }}>
                Please prepare the following documents for your application:
              </p>
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
                <span
                  className="text-[var(--gold)]"
                  style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}
                >
                  CALENDAR
                </span>
              </div>
              <h2
                className="text-[var(--navy)] mb-6"
                style={{ fontSize: '2.5rem', fontWeight: 700 }}
              >
                Important Dates
              </h2>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-[var(--gold)]" />
                          <span
                            className="text-[var(--navy)]"
                            style={{ fontSize: '0.875rem', fontWeight: 600 }}
                          >
                            {item.date}
                          </span>
                        </div>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                      <Badge
                        variant={item.type === 'deadline' ? 'default' : 'outline'}
                        className={item.type === 'deadline' ? 'bg-red-500' : ''}
                      >
                        {item.type}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tuition & Financial Aid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
              <span
                className="text-[var(--gold)]"
                style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}
              >
                INVESTMENT
              </span>
            </div>
            <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Tuition & Financial Aid
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              We offer competitive tuition rates and generous financial aid programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-[var(--navy)] mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-[var(--gold)]" />
                Annual Tuition (2025-2026)
              </h3>
              <div className="space-y-4">
                {tuitionInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[var(--navy)]">{info.grade}</h4>
                      <span
                        className="text-[var(--gold)]"
                        style={{ fontSize: '1.5rem', fontWeight: 700 }}
                      >
                        {info.tuition}
                      </span>
                    </div>
                    <p className="text-gray-600">{info.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[var(--navy)] mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[var(--gold)]" />
                Financial Aid Options
              </h3>
              <Card className="p-6 bg-[var(--navy)] text-white mb-6">
                <div className="text-center mb-4">
                  <div
                    className="text-[var(--gold)] mb-2"
                    style={{ fontSize: '3rem', fontWeight: 700 }}
                  >
                    45%
                  </div>
                  <p>of students receive financial aid</p>
                </div>
              </Card>
              <div className="space-y-3">
                {financialAid.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 text-[var(--gold)] mx-auto mb-4" />
          <h2 className="mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Have Questions?
          </h2>
          <p className="mb-8 text-gray-200" style={{ fontSize: '1.125rem' }}>
            Our admissions team is here to help you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white">
              Schedule a Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--navy)]"
            >
              Contact Admissions
            </Button>
          </div>
          <p className="mt-6 text-gray-300">
            Email: admissions@brightfuture.edu | Phone: (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}
