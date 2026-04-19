'use client';

import { useEffect, useState, useRef } from 'react';

interface TechProgressBarProps {
  label: string;
  val: string;
  color: string;
}

export default function TechProgressBar({ label, val, color }: TechProgressBarProps) {
  const [width, setWidth] = useState('0%');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setWidth(val);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [val]);

  // Tailwind dynamic classes for colors
  const colorMap: Record<string, string> = {
    'primary': 'bg-cyan-400',
    'secondary': 'bg-violet-400',
    'tertiary': 'bg-fuchsia-400'
  };

  const textColorMap: Record<string, string> = {
    'primary': 'text-cyan-400',
    'secondary': 'text-violet-400',
    'tertiary': 'text-fuchsia-400'
  };

  return (
    <div ref={ref}>
      <div className="flex justify-between items-end mb-2">
        <span className="font-headline font-bold text-xs tracking-widest uppercase text-on-surface-variant">{label}</span>
        <span className={`${textColorMap[color]} font-mono text-xs tracking-tighter`}>{val}</span>
      </div>
      <div className="h-1 bg-surface-container-highest w-full overflow-hidden rounded-full">
        <div 
          className={`h-full ${colorMap[color]} transition-all duration-[1500ms] ease-out shadow-[0_0_10px_rgba(34,211,238,0.3)]`} 
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
}
