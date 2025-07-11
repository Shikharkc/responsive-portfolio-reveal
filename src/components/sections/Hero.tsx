import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg"
    >
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl float" />
        <div className="absolute top-40 right-32 w-48 h-48 bg-secondary/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="reveal">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block gradient-text">Alex Johnson</span>
          </h1>
        </div>

        <div className="reveal" style={{ animationDelay: '0.2s' }}>
          <div className="text-2xl md:text-4xl font-medium mb-8 text-muted-foreground min-h-[3rem] flex items-center justify-center">
            <span className="border-r-2 border-primary pr-2 animate-pulse">
              {typedText}
            </span>
          </div>
        </div>

        <div className="reveal" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional, and user-centered digital experiences
            with modern technologies and creative problem-solving.
          </p>
        </div>

        <div className="reveal flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            className="glass-card glow hover:glow-intense transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="glass-card border-primary/30 hover:border-primary transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="reveal flex justify-center space-x-6 mb-16" style={{ animationDelay: '0.8s' }}>
          {[
            { Icon: Github, href: '#', label: 'GitHub' },
            { Icon: Linkedin, href: '#', label: 'LinkedIn' },
            { Icon: Mail, href: '#', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 glass-card rounded-full hover:glow transition-all duration-300 transform hover:scale-110 group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="reveal absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ animationDelay: '1s' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};