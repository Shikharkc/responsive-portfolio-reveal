import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="reveal">
            <button
              onClick={scrollToTop}
              className="text-2xl font-display font-bold gradient-text mb-4 hover:scale-105 transition-transform"
            >
              Alex Johnson
            </button>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies and creative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 glass-card rounded-lg hover:glow transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal">
            <h3 className="text-lg font-semibold mb-6 gradient-text">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="reveal">
            <h3 className="text-lg font-semibold mb-6 gradient-text">Get in Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>San Francisco, CA</p>
              <p>alex@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p className="text-sm mt-4">
                Available for freelance work and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="reveal border-t border-muted/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 glass-card rounded-full glow hover:glow-intense transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};