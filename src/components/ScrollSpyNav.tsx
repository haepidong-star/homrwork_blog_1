'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: '아카이브' },
  { id: 'philosophy', label: '철학' },
  { id: 'cs-logs', label: '컴퓨터 공학' },
  { id: 'tech-stack', label: '총정리' },
];

export default function ScrollSpyNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden md:flex items-center gap-8">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`font-headline tracking-tight uppercase transition-colors ${
            activeSection === section.id
              ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
              : 'text-slate-400 hover:text-cyan-200'
          }`}
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(section.id);
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth',
              });
            }
          }}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
}
