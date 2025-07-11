import { Code, Palette, Zap, Users } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using agile methodologies and modern tools.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="reveal">
            <div className="glass-card rounded-2xl p-8 glow">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                  AJ
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold">Alex Johnson</h3>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital solutions that make a difference. I specialize in React, Node.js, 
                and modern web technologies.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted/30 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="reveal glass-card rounded-xl p-6 hover:glow transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="reveal mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '20+', label: 'Happy Clients' },
              { number: '10+', label: 'Technologies' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center glass-card rounded-xl p-6 hover:glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};