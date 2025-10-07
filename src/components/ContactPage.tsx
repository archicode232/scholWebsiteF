import { useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  inquiryType: string;
  message: string;
}

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Contact form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);

    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');

    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Education Lane', 'Springfield, ST 12345', 'United States'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main: (555) 123-4567', 'Admissions: (555) 123-4568', 'Fax: (555) 123-4569'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@brightfuture.edu', 'admissions@brightfuture.edu', 'support@brightfuture.edu'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
    },
  ];

  const departments = [
    { name: 'Admissions Office', phone: '(555) 123-4568', email: 'admissions@brightfuture.edu' },
    { name: 'Financial Aid', phone: '(555) 123-4570', email: 'financialaid@brightfuture.edu' },
    { name: 'Academic Affairs', phone: '(555) 123-4571', email: 'academics@brightfuture.edu' },
    { name: 'Student Services', phone: '(555) 123-4572', email: 'studentservices@brightfuture.edu' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[var(--navy)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)] rounded-full">
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              CONTACT US
            </span>
          </div>
          <h1 className="mb-6" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Get In Touch
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Have questions about admissions, academics, or campus life? We're here to help!
            Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[var(--gold)]" />
                  </div>
                  <h3 className="text-[var(--navy)] mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                      {detail}
                    </p>
                  ))}
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
                <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  SEND A MESSAGE
                </span>
              </div>
              <h2 className="text-[var(--navy)] mb-6" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                Contact Form
              </h2>

              {isSuccess ? (
                <Card className="p-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-green-600 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </Card>
              ) : (
                <Card className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          {...register('firstName', { required: 'First name is required' })}
                          className={errors.firstName ? 'border-red-500' : ''}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          {...register('lastName', { required: 'Last name is required' })}
                          className={errors.lastName ? 'border-red-500' : ''}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          {...register('phone')}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select onValueChange={(value) => setValue('inquiryType', value)}>
                        <SelectTrigger className={errors.inquiryType ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="academics">Academics</SelectItem>
                          <SelectItem value="financial">Financial Aid</SelectItem>
                          <SelectItem value="campus">Campus Visit</SelectItem>
                          <SelectItem value="support">Student Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        {...register('inquiryType', { required: 'Please select an inquiry type' })}
                      />
                      {errors.inquiryType && (
                        <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                          {errors.inquiryType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        {...register('subject', { required: 'Subject is required' })}
                        className={errors.subject ? 'border-red-500' : ''}
                      />
                      {errors.subject && (
                        <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        {...register('message', {
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters',
                          },
                        })}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              )}
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/10 rounded-full">
                <span className="text-[var(--gold)]" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  FIND US
                </span>
              </div>
              <h2 className="text-[var(--navy)] mb-6" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                Campus Location
              </h2>

              {/* Map Placeholder */}
              <Card className="mb-6 overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      123 Education Lane
                      <br />
                      Springfield, ST 12345
                    </p>
                    <Button
                      variant="link"
                      className="text-[var(--navy)] mt-2"
                      onClick={() => window.open('https://maps.google.com', '_blank')}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Department Contacts */}
              <Card className="p-6">
                <h3 className="text-[var(--navy)] mb-4">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                      <h4 className="text-[var(--navy)] mb-2">{dept.name}</h4>
                      <div className="flex items-center gap-2 text-gray-600 mb-1" style={{ fontSize: '0.875rem' }}>
                        <Phone className="w-4 h-4" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600" style={{ fontSize: '0.875rem' }}>
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${dept.email}`} className="hover:text-[var(--navy)] underline">
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Quick Links */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[var(--navy)] mb-6" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Connect With Us
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Follow us on social media for the latest news, events, and updates from BrightFuture Academy
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
              onClick={() => window.open('https://facebook.com', '_blank')}
            >
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
              onClick={() => window.open('https://twitter.com', '_blank')}
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
              onClick={() => window.open('https://instagram.com', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}