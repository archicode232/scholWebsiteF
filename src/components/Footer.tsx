import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="mb-4 text-[var(--gold)]">About Us</h3>
            <p className="text-gray-300" style={{ fontSize: '0.875rem' }}>
              BrightFuture Academy is dedicated to inspiring minds and shaping futures through excellence in education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[var(--gold)]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[var(--gold)] transition-colors" style={{ fontSize: '0.875rem' }}>About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--gold)] transition-colors" style={{ fontSize: '0.875rem' }}>Academics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--gold)] transition-colors" style={{ fontSize: '0.875rem' }}>Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--gold)] transition-colors" style={{ fontSize: '0.875rem' }}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-[var(--gold)]">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[var(--gold)]" />
                <span className="text-gray-300" style={{ fontSize: '0.875rem' }}>123 Education Lane<br />Springfield, ST 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-gray-300" style={{ fontSize: '0.875rem' }}>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-gray-300" style={{ fontSize: '0.875rem' }}>info@brightfuture.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-[var(--gold)]">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300" style={{ fontSize: '0.875rem' }}>
            © 2025 BrightFuture Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
