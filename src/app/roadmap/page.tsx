export default function Roadmap() {
  const steps = [
    { id: "01", title: "2026: THE_BEGINNING", content: "공학3계열 입학, C언어 및 기초 프로그래밍 구조 정복", status: "ACTIVE" },
    { id: "02", title: "2027: DEEP_DIVE", content: "자료구조, 알고리즘, 운영체제 심화 학습 및 개인 프로젝트 시작", status: "LOCKED" },
    { id: "03", title: "2028: EXPAND_DOMAIN", content: "웹/내장 개발 실무 및 협업 프로젝트 경험 쌓기", status: "LOCKED" },
    { id: "04", title: "2029: SPECIALIST", content: "전공 분야 심화 연구 및 인턴십, 커리어 준비", status: "LOCKED" }
  ];

  return (
    <div className="container py-24 fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="text-secondary font-headline text-sm tracking-widest mb-2 uppercase">MISSION // ROADMAP</div>
          <h1 className="text-6xl font-black font-headline tracking-tighter text-on-surface mb-4">FUTURE_LOGS</h1>
          <p className="text-on-surface-variant text-lg font-light max-w-xl">
            신동규(20263207)의 성장을 위한 마일스톤 및 시스템 업그레이드 경로입니다.
          </p>
        </div>

        <div className="space-y-6 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-24 group">
              <div className={`absolute left-6 top-6 w-5 h-5 rounded-full border-2 bg-background z-10 transition-all ${step.status === 'ACTIVE' ? 'border-primary shadow-[0_0_10px_#8ff5ff]' : 'border-white/20'}`}></div>
              <div className="card group-hover:border-primary/30 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-4 items-center">
                    <span className="font-mono text-xs text-secondary">// STEP_{step.id}</span>
                    <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight uppercase">{step.title}</h2>
                  </div>
                  <span className={`text-[10px] font-headline font-bold px-2 py-1 rounded border ${step.status === 'ACTIVE' ? 'border-primary/50 text-primary bg-primary/10' : 'border-white/10 text-slate-500'}`}>
                    {step.status}
                  </span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
