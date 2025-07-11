import { useEffect, useRef, useState } from 'react';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'AWS/Vercel', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Figma', level: 85 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="reveal glass-card rounded-xl p-8 hover:glow transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-display font-semibold mb-8 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <div
                        className={`skill-bar h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? 'animate' : ''
                        }`}
                        style={{
                          '--skill-width': `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="reveal mt-16">
          <h3 className="text-2xl font-display font-semibold text-center mb-8 gradient-text">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
              'AWS', 'Docker', 'Git', 'Figma', 'Tailwind', 'Next.js', 'GraphQL'
            ].map((tech, index) => (
              <div
                key={tech}
                className="glass-card rounded-lg px-6 py-3 hover:glow transition-all duration-300 transform hover:scale-105 float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};