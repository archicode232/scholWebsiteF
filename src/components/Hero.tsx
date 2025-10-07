import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface HeroProps {
  onOpenApplication: () => void;
}

export function Hero({ onOpenApplication }: HeroProps) {
  return (
    <div className="relative bg-[var(--navy)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1OTY0MjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Students learning"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-block px-4 py-2 bg-[var(--gold)] rounded-full"
          >
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              EXCELLENCE IN EDUCATION SINCE 1985
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 text-white"
            style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}
          >
            Inspiring Minds,<br />Shaping Futures
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-gray-200 max-w-2xl mx-auto"
            style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
          >
            At BrightFuture Academy, we nurture tomorrow's leaders through innovative learning, 
            dedicated teaching, and a commitment to excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg"
              onClick={onOpenApplication}
              className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white px-8 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              Apply Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] px-8 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              Schedule a Tour
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
