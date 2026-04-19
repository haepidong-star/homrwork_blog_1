import { blogLogs } from '@/data/blogData';
import TechProgressBar from '@/components/TechProgressBar';

export default function Home() {
  const skills = [
    { title: "HTML5_SEMANTICS", icon: "html", color: "text-primary" },
    { title: "REACT_ENGINEERING", icon: "javascript", color: "text-secondary" },
    { title: "TAILWIND_UX", icon: "css", color: "text-tertiary" },
    { title: "SHELL_ARCH", icon: "terminal", color: "text-primary" },
    { title: "SQL_STRUCTURE", icon: "database", color: "text-secondary" },
    { title: "DATA_VISUALS", icon: "monitoring", color: "text-tertiary" }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section id="hero" className="relative px-8 md:px-16 flex flex-col xl:flex-row items-center justify-between gap-12 overflow-hidden border-b border-white/5 snap-start min-h-screen py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-headline text-xs tracking-widest uppercase mb-6">
            사용자 프로필 // 인증됨
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-tight text-on-surface mb-4">
            SHIN <span className="text-primary glow-cyan">DONG-GYU</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light tracking-tight max-w-xl mb-8">
            학번: <span className="text-secondary">20263207</span><br />
            <span className="italic font-bold">DONG GYU의 블로그 입니다.</span>
          </p>
        </div>

        {/* Terminal Visualization with C Code */}
        <div className="relative w-full max-w-xl aspect-square md:aspect-video bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between p-3 bg-surface-container-high border-b border-outline-variant/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-error/40"></div>
              <div className="w-2 h-2 rounded-full bg-secondary/40"></div>
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
              <span className="ml-4 text-[10px] font-headline text-on-surface-variant tracking-widest italic">main.c</span>
            </div>
            <span className="text-[10px] font-mono text-primary/60">UTF-8</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">1</span>
              <div><span className="text-violet-400">#include</span> <span className="text-cyan-400">&lt;stdio.h&gt;</span></div>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">2</span>
              <div>&nbsp;</div>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">3</span>
              <div><span className="text-secondary">int</span> <span className="text-primary">main</span>() {'{'}</div>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">4</span>
              <div className="pl-4">
                <span className="text-primary">printf</span>(<span className="text-cyan-400">"Welcome to DONG GYU's Blog\n"</span>);
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">5</span>
              <div className="pl-4">
                <span className="text-primary">printf</span>(<span className="text-cyan-400">"System Status: Online\n"</span>);
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">6</span>
              <div className="pl-4">
                <span className="text-violet-400">return</span> <span className="text-secondary">0</span>;
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">7</span>
              <div>{'}'}</div>
            </div>
            <div className="flex gap-4 pt-4">
              <span className="text-slate-600 select-none">8</span>
              <div className="flex gap-1">
                <span className="text-primary">λ</span>
                <div className="w-2 h-5 bg-primary animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid"></div>
        </div>
        
        {/* Background Ghost Text */}
        <div className="absolute -right-20 top-20 text-[20rem] font-headline font-black text-white/[0.02] select-none pointer-events-none">
          2026
        </div>
      </section>

      {/* 2. CS Philosophy Section */}
      <section id="philosophy" className="px-8 md:px-16 py-24 bg-surface-container-low border-b border-white/5 snap-start min-h-screen flex flex-col justify-center">
        <div className="mb-16">
          <div className="text-primary font-headline text-sm tracking-widest mb-2 uppercase">컴퓨터 공학 // 01</div>
          <h2 className="text-5xl font-black font-headline tracking-tighter">CS 아카이브 개요</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "CS 기초 개요", icon: "functions", color: "primary", desc: "컴퓨터의 기본 동작 원리부터 정보 이론까지, 0과 1로 이루어진 디지털 세계의 근간을 탐구합니다." },
            { title: "C언어 소개 및 예제", icon: "code", color: "secondary", desc: "전 세계 모든 언어의 뿌리가 되는 C언어의 문법과 실무적인 코딩 예시를 통해 프로그래밍의 기초를 다집니다." },
            { title: "시스템 프로그래밍", icon: "architecture", color: "tertiary", desc: "운영체제와 메모리 구조를 이해하고, 하드웨어 성능을 극대화하는 수준 높은 엔지니어링 지식을 학습합니다." }
          ].map((v, i) => (
            <div key={i} className="group relative p-8 bg-surface-container transition-all duration-500 hover:bg-surface-container-high border border-white/5">
              <div className={`absolute top-0 left-0 w-full h-1 bg-${v.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`mb-6 text-${v.color}`}>
                <span className="material-symbols-outlined text-4xl">{v.icon}</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4 text-on-surface uppercase tracking-tight">{v.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 52 Professional CS Logs - Snap Sections */}
      <section id="cs-logs" className="bg-surface relative overflow-visible">
        <div className="px-8 md:px-16 py-8 border-b border-white/5 sticky top-20 bg-surface/80 backdrop-blur-md z-20 flex justify-between items-center transition-all">
          <div>
            <div className="text-tertiary font-headline text-sm tracking-widest mb-1 uppercase">연대기 // 02</div>
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter">전공 아카이브 모음</h2>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-1">TOTAL_RECORDS</div>
            <div className="text-3xl font-headline font-black text-primary">052</div>
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {blogLogs.map((log) => (
            <div key={log.id} className="group relative px-8 md:px-16 hover:bg-white/[0.02] transition-colors snap-start min-h-screen flex flex-col justify-center py-20">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 w-full">
                <div className="lg:w-1/4">
                  <div className={`text-${log.color} font-mono text-xs mb-4 tracking-widest opacity-70`}>{log.tag}</div>
                  <div className="text-7xl font-headline font-black text-white/5 transition-colors mb-4">
                    {String(log.id).padStart(3, '0')}
                  </div>
                  <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">일자: {log.date}</div>
                </div>

                <div className="lg:w-3/4 space-y-6">
                  <div className={`text-${log.color} font-headline text-xs tracking-widest mb-2 uppercase`}>{log.category}</div>
                  <h3 className="text-4xl md:text-6xl font-black font-headline tracking-tighter leading-none group-hover:text-primary transition-all">
                    {log.title}
                  </h3>
                  <p className="text-xl text-on-surface-variant leading-relaxed max-w-4xl">
                    {log.excerpt}
                  </p>

                  {/* C Code Example Rendering */}
                  {log.code && (
                    <div className="mt-8 bg-[#0a0a0f] border border-white/5 rounded-lg overflow-hidden relative group/code shadow-2xl">
                      <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-slate-600 tracking-widest uppercase">EXAMPLE_SOURCE</div>
                      <pre className="p-8 font-mono text-base text-cyan-400 overflow-x-auto leading-relaxed">
                        <code>{log.code}</code>
                      </pre>
                    </div>
                  )}
                  
                  {/* 버튼 삭제됨 */}
                </div>
              </div>
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${log.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Tech Stack & Skills */}
      <section id="tech-stack" className="px-8 md:px-16 py-24 bg-surface-container-low border-t border-white/5 snap-start min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-16 items-start max-w-7xl mx-auto w-full">
          <div className="lg:w-1/3">
            <div className="text-secondary font-headline text-sm tracking-widest mb-2 uppercase">학습 아카이브 // 03</div>
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-8 leading-none">전공 지식 총정리</h2>
            <p className="text-on-surface-variant mb-12 text-sm leading-loose">
              컴퓨터 공학의 기초부터 심화까지, 52개의 연구 로그를 통해 정립한 전공 지식의 완성도입니다. 
              이 블로그는 신동규의 학술적 성장과 코드의 진화를 담은 디지털 기록입니다.
            </p>
            <div className="space-y-8">
              <TechProgressBar label="C언어 & 시스템" val="95%" color="primary" />
              <TechProgressBar label="알고리즘 & 논리" val="82%" color="secondary" />
              <TechProgressBar label="프론트엔드 기초" val="78%" color="tertiary" />
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {skills.map((skill, i) => (
              <div key={i} className="p-8 bg-surface-container-low border border-outline-variant/10 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300 group">
                <span className={`material-symbols-outlined text-4xl mb-6 ${skill.color} opacity-80 group-hover:scale-110 transition-transform`}>{skill.icon}</span>
                <span className="font-headline font-bold tracking-widest text-[10px] uppercase">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
