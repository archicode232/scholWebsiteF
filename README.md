# BrightFuture Academy - School Website

A modern, responsive school website built with React, TypeScript, and Tailwind CSS. This comprehensive educational platform features smooth animations, interactive forms, student authentication, and a complete student dashboard.

![BrightFuture Academy](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🎯 Overview

BrightFuture Academy is a fully-featured educational website designed to provide an inspiring, trustworthy, and professional online presence for modern schools. The platform includes public-facing pages for prospective students and families, as well as a secure student portal for enrolled students.

**Tagline:** *Inspiring Minds, Shaping Futures*

## ✨ Features

### Public Pages
- **Homepage** - Hero section with compelling tagline, featured programs, testimonials, and school news
- **About Page** - School history, mission, values, and leadership team
- **Academics Page** - Curriculum overview, teaching approach, and academic programs
- **Admissions Page** - Admission process, requirements, tuition, and financial aid information
- **Contact Page** - Interactive contact form, department contacts, and campus location

### Interactive Features
- **Application Form** - Full validation using React Hook Form with multi-step data collection
- **Authentication System** - Secure login/signup with mock authentication
- **Student Dashboard** - Personalized student portal with:
  - Profile overview
  - Upcoming assignments tracker
  - Attendance records
  - Grade management
  - Message center
  - Academic performance charts

### User Experience
- **Smooth Page Transitions** - Motion animations for seamless navigation
- **Responsive Design** - Mobile-first approach works on all devices
- **Interactive Components** - Hover effects, scroll animations, and micro-interactions
- **Form Validation** - Real-time validation with helpful error messages
- **Toast Notifications** - User feedback for form submissions and actions

## 🛠 Tech Stack

### Core Technologies
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Motion (Framer Motion)** - Animation library

### UI Components
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful icon library
- **Recharts** - Data visualization for charts
- **React Hook Form** - Performant form validation
- **Sonner** - Toast notifications

## 📁 Project Structure

```
├── App.tsx                      # Main application with routing logic
├── components/
│   ├── AboutPage.tsx           # About us page
│   ├── AcademicsPage.tsx       # Academic programs page
│   ├── AdmissionsPage.tsx      # Admissions information page
│   ├── ApplicationForm.tsx     # Student application form with validation
│   ├── ContactPage.tsx         # Contact form and information
│   ├── FeaturedPrograms.tsx    # Program showcase section
│   ├── Footer.tsx              # Site footer with links
│   ├── Hero.tsx                # Homepage hero section
│   ├── HomePage.tsx            # Homepage layout
│   ├── LoginModal.tsx          # Authentication modal
│   ├── Navigation.tsx          # Main navigation bar
│   ├── NewsSection.tsx         # School news and events
│   ├── ProgramCard.tsx         # Reusable program card component
│   ├── StudentDashboard.tsx    # Student portal dashboard
│   ├── Testimonials.tsx        # Student/parent testimonials
│   ├── figma/
│   │   └── ImageWithFallback.tsx  # Image component with fallback
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── ... (additional UI components)
├── styles/
│   └── globals.css             # Global styles and CSS variables
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brightfuture-academy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🎨 Design System

### Color Palette
The website uses a professional color scheme:

- **Navy Blue** (`#1e3a8a`) - Primary brand color for trust and professionalism
- **Gold** (`#d4af37`) - Accent color for highlights and CTAs
- **White** (`#ffffff`) - Clean background
- **Gray Variants** - Supporting colors for text and backgrounds

### Typography
- Base font size: 16px
- Heading weights: 500-700
- Body text: 400 weight
- Custom responsive typography system

### Animations
- **Page Transitions**: Smooth fade and slide effects using Motion
- **Scroll Animations**: Elements fade in as they enter viewport
- **Hover Effects**: Interactive card lifts and button states
- **Stagger Effects**: Sequential animations for lists

## 🔐 Authentication

The current implementation uses **mock authentication** for demonstration purposes:

- Default credentials for testing:
  - Email: `student@brightfuture.edu`
  - Password: `password123`

**Note:** For production use, this should be replaced with a proper authentication system like:
- Supabase Auth
- Firebase Authentication
- Auth0
- Custom backend with JWT

## 📝 Forms

### Application Form
- Student information (name, DOB, grade)
- Parent/Guardian details
- Contact information
- Address details
- Previous school information
- Essay response

### Contact Form
- Personal information
- Inquiry type selection
- Subject and message
- Department routing

All forms include:
- Real-time validation
- Error messages
- Loading states
- Success confirmations
- Toast notifications

## 📊 Student Dashboard

The student portal includes:

- **Profile Card** - Student photo, name, grade, and ID
- **Assignments** - Due dates, subjects, and status
- **Attendance** - Present/absent tracking with percentage
- **Grades** - Subject-wise grade display
- **Messages** - Communication center
- **Performance Charts** - Visual grade tracking with Recharts

## 🎯 Key Components

### Navigation
- Sticky header with smooth scrolling
- Active page indicators
- Responsive mobile menu
- Quick access to application and student portal

### Hero Section
- Eye-catching background
- Animated tagline and CTA
- Responsive layout
- Clear call-to-action buttons

### Program Cards
- Image-based cards with icons
- Hover effects and animations
- Scroll-triggered entrance
- Responsive grid layout

### Testimonials
- Rotating testimonial cards
- Student and parent quotes
- Avatar display
- Credibility building

## 🔄 Page Transitions

All page navigation uses Motion's AnimatePresence for smooth transitions:
- Fade in/out effects
- Vertical slide animations
- Custom easing curves
- Scroll-to-top on navigation

## 📱 Responsive Design

The website is fully responsive across:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚧 Future Enhancements

Potential features for future development:
- [ ] Supabase integration for real data persistence
- [ ] Real-time notifications
- [ ] Parent portal
- [ ] Teacher dashboard
- [ ] Event calendar
- [ ] Online payment integration
- [ ] Live chat support
- [ ] Blog/News CMS integration
- [ ] Multi-language support
- [ ] Accessibility improvements (WCAG 2.1 AA)

## 🔒 Security Considerations

**Important:** This is a demonstration/prototype application. For production use:
- Implement proper authentication and authorization
- Use HTTPS for all communications
- Sanitize all user inputs
- Implement CSRF protection
- Add rate limiting for forms
- Comply with FERPA and data privacy regulations
- Never store PII without proper security measures

## 📄 License

This project was created for educational and demonstration purposes.

## 🙏 Credits

### Images
- Unsplash - Stock photography

### Icons
- Lucide React - Icon library

### UI Components
- shadcn/ui - Component library

### Fonts & Design
- Tailwind CSS - Styling framework
- Motion (Framer Motion) - Animation library

## 📞 Support

For questions or issues:
- Email: info@brightfuture.edu
- Phone: (555) 123-4567

---

**Built with ❤️ for BrightFuture Academy**

*Inspiring Minds, Shaping Futures*
# scholWebsiteF
