import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import {
  Home,
  BookOpen,
  ClipboardList,
  BarChart3,
  Settings,
  Bell,
  Calendar,
  CheckCircle2,
  Clock,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';

interface StudentDashboardProps {
  onNavigate: (page: 'home' | 'dashboard') => void;
}

export function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  const [activeNav, setActiveNav] = useState('home');

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'courses', icon: BookOpen, label: 'Courses' },
    { id: 'assignments', icon: ClipboardList, label: 'Assignments' },
    { id: 'grades', icon: BarChart3, label: 'Grades' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const upcomingAssignments = [
    { title: 'Math Chapter 5 Quiz', course: 'Mathematics', dueDate: 'Oct 7', status: 'pending' },
    { title: 'History Essay', course: 'World History', dueDate: 'Oct 9', status: 'pending' },
    { title: 'Science Lab Report', course: 'Physics', dueDate: 'Oct 10', status: 'in-progress' },
    { title: 'Literature Analysis', course: 'English', dueDate: 'Oct 12', status: 'pending' },
  ];

  const recentMessages = [
    { from: 'Ms. Johnson', subject: 'Great work on your presentation!', time: '2h ago' },
    { from: 'Mr. Davis', subject: 'Reminder: Field trip permission', time: '5h ago' },
    { from: 'Dr. Smith', subject: 'Extra credit opportunity', time: '1d ago' },
  ];

  const courseProgress = [
    { name: 'Mathematics', progress: 78, grade: 'A-' },
    { name: 'English', progress: 85, grade: 'A' },
    { name: 'Physics', progress: 72, grade: 'B+' },
    { name: 'World History', progress: 88, grade: 'A' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--navy)] text-white fixed h-full">
        <div className="p-6">
          <div 
            className="flex items-center gap-2 mb-8 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center">
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>BF</span>
            </div>
            <span style={{ fontSize: '1.125rem', fontWeight: 700 }}>BrightFuture</span>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeNav === item.id
                      ? 'bg-[var(--gold)] text-white'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-[var(--navy)]">Student Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-[var(--gold)] text-white">AS</AvatarFallback>
              </Avatar>
              <div>
                <div style={{ fontWeight: 600 }}>Alex Smith</div>
                <div className="text-gray-500" style={{ fontSize: '0.875rem' }}>Grade 11, Class A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-8 h-8 opacity-80" />
                <Badge className="bg-white/20 text-white">This Week</Badge>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>8</div>
              <p className="opacity-90">Upcoming Assignments</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle2 className="w-8 h-8 opacity-80" />
                <Badge className="bg-white/20 text-white">This Month</Badge>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>94%</div>
              <p className="opacity-90">Attendance Rate</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-8 h-8 opacity-80" />
                <Badge className="bg-white/20 text-white">Current</Badge>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>3.7</div>
              <p className="opacity-90">GPA Average</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <MessageSquare className="w-8 h-8 opacity-80" />
                <Badge className="bg-white/20 text-white">New</Badge>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>3</div>
              <p className="opacity-90">Unread Messages</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upcoming Assignments */}
            <Card className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[var(--navy)]">Upcoming Assignments</h2>
                <Badge variant="outline">4 Pending</Badge>
              </div>
              <div className="space-y-4">
                {upcomingAssignments.map((assignment, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      assignment.status === 'in-progress' ? 'bg-orange-100' : 'bg-blue-100'
                    }`}>
                      <Clock className={`w-5 h-5 ${
                        assignment.status === 'in-progress' ? 'text-orange-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div style={{ fontWeight: 600 }}>{assignment.title}</div>
                      <div className="text-gray-500" style={{ fontSize: '0.875rem' }}>{assignment.course}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500" style={{ fontSize: '0.875rem' }}>Due Date</div>
                      <div style={{ fontWeight: 600 }}>{assignment.dueDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Messages */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[var(--navy)]">Messages</h2>
                <MessageSquare className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentMessages.map((message, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div style={{ fontWeight: 600 }} className="mb-1">{message.from}</div>
                    <p className="text-gray-600 mb-2 line-clamp-2" style={{ fontSize: '0.875rem' }}>
                      {message.subject}
                    </p>
                    <span className="text-gray-400" style={{ fontSize: '0.75rem' }}>{message.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Course Progress */}
            <Card className="lg:col-span-3 p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-[var(--gold)]" />
                <h2 className="text-[var(--navy)]">Course Progress & Grades</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courseProgress.map((course, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div style={{ fontWeight: 600 }}>{course.name}</div>
                      <Badge className="bg-[var(--gold)] text-white">{course.grade}</Badge>
                    </div>
                    <Progress value={course.progress} className="mb-2" />
                    <div className="text-gray-500" style={{ fontSize: '0.875rem' }}>
                      {course.progress}% Complete
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
