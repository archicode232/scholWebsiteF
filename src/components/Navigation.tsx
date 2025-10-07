import { GraduationCap } from 'lucide-react';
import { Button } from './ui/button';

type PageType = 'home' | 'about' | 'academics' | 'admissions' | 'contact' | 'dashboard';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenApplication: () => void;
  onOpenLogin: () => void;
}

export function Navigation({ currentPage, onNavigate, onOpenApplication, onOpenLogin }: NavigationProps) {
  const navLinks = [
    { name: 'Home', page: 'home' as PageType },
    { name: 'About', page: 'about' as PageType },
    { name: 'Academics', page: 'academics' as PageType },
    { name: 'Admissions', page: 'admissions' as PageType },
    { name: 'Contact', page: 'contact' as PageType },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-12 h-12 bg-[var(--navy)] rounded-full flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <div>
              <div className="text-[var(--navy)] tracking-tight" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                BrightFuture Academy
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.page)}
                className={`transition-colors ${
                  currentPage === link.page
                    ? 'text-[var(--navy)] border-b-2 border-[var(--gold)]'
                    : 'text-gray-700 hover:text-[var(--navy)]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onOpenLogin}
              variant="ghost"
              className="hidden sm:inline-flex text-[var(--navy)]"
            >
              Student Portal
            </Button>
            <Button
              onClick={onOpenApplication}
              className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
