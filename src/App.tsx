import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { AcademicsPage } from './components/AcademicsPage';
import { AdmissionsPage } from './components/AdmissionsPage';
import { ContactPage } from './components/ContactPage';
import { StudentDashboard } from './components/StudentDashboard';
import { ApplicationForm } from './components/ApplicationForm';
import { LoginModal } from './components/LoginModal';
import { Footer } from './components/Footer';

type PageType = 'home' | 'about' | 'academics' | 'admissions' | 'contact' | 'dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: PageType) => {
    if (page === 'dashboard') {
      if (!isAuthenticated) {
        setShowLoginModal(true);
      } else {
        setCurrentPage('dashboard');
      }
    } else {
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentPage(page);
    }
  };

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const renderPage = () => {
    if (currentPage === 'dashboard' && isAuthenticated) {
      return (
        <motion.div
          key="dashboard"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <StudentDashboard onNavigate={handleNavigate} />
        </motion.div>
      );
    }

    return (
      <>
        <Navigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenApplication={() => setShowApplicationForm(true)}
          onOpenLogin={() => setShowLoginModal(true)}
        />
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage onOpenApplication={() => setShowApplicationForm(true)} />
            </motion.div>
          )}
          {currentPage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AboutPage />
              <Footer />
            </motion.div>
          )}
          {currentPage === 'academics' && (
            <motion.div
              key="academics"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AcademicsPage />
              <Footer />
            </motion.div>
          )}
          {currentPage === 'admissions' && (
            <motion.div
              key="admissions"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AdmissionsPage onOpenApplication={() => setShowApplicationForm(true)} />
              <Footer />
            </motion.div>
          )}
          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ContactPage />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
      
      <ApplicationForm
        open={showApplicationForm}
        onOpenChange={setShowApplicationForm}
      />
      
      <LoginModal
        open={showLoginModal}
        onOpenChange={setShowLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />
      
      <Toaster />
    </div>
  );
}
