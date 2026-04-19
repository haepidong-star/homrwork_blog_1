export default function About() {
  return (
    <div className="container py-24 fade-up">
      <section className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="text-secondary font-headline text-sm tracking-widest mb-2 uppercase">MANIFESTO // ABOUT</div>
          <h1 className="text-6xl font-black font-headline tracking-tighter leading-tight text-on-surface">
            LEAD_ARCHITECT: <span className="text-primary glow-cyan">SHIN DONG-GYU</span>
          </h1>
          <p className="text-xl text-on-surface-variant mt-4 font-light">
            STUDENT_ID: 20263207 | Computer Software Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-xl font-bold font-headline mb-4 text-primary tracking-widest uppercase">ACADEMIC_BACK</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              공학3계열 컴퓨터소프트웨어학과 1학년에 재학 중입니다. <br />
              현재 소프트웨어의 근간이 되는 기초 학문과 프로그래밍의 원리를 탐구하고 있습니다.
            </p>
          </div>

          <div className="card group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-xl font-bold font-headline mb-4 text-secondary tracking-widest uppercase">TECH_STACK</h2>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary"></span>
                <span className="text-on-surface font-bold">C Language:</span> 기초 문법 및 포인터 학습 중
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary"></span>
                <span className="text-on-surface font-bold">Web:</span> Next.js, Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary"></span>
                <span className="text-on-surface font-bold">Tools:</span> Git, Linux, VS Code
              </li>
            </ul>
          </div>

          <div className="card group relative overflow-hidden md:col-span-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-tertiary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-xl font-bold font-headline mb-4 text-tertiary tracking-widest uppercase">VISION_STATEMENT</h2>
            <p className="text-on-surface-variant leading-relaxed">
              단순히 코드를 짜는 사람이 아닌, 효율적이고 우아한 아키텍처를 설계하는 
              소프트웨어 엔지니어가 되는 것이 목표입니다. 
              대학 생활 동안 다양한 프로젝트와 협업을 통해 인격과 실력을 모두 갖춘 인재로 성장하겠습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
