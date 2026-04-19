"use client";

export default function Lab() {
  const experiments = [
    {
      id: "01",
      title: "HELLO_WORLD // IDENTITY",
      desc: "자신의 이름과 학번을 출력하는 가장 기본적인 C프로그램을 통해 개발 환경을 점검했습니다.",
      code: `#include <stdio.h>\n\nint main() {\n    printf("Name: Shin Dong-gyu\\n");\n    printf("ID: 20263207\\n");\n    return 0;\n}`,
      label: "identity.c"
    },
    {
      id: "02",
      title: "POINTER_ARITHMETIC // MEMORY",
      desc: "메모리 주소 직접 제어를 통해 C언어의 강력한 저수준 제어 기능을 실험했습니다.",
      code: `#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20};\n    int *ptr = arr;\n    printf("%d", *(ptr + 1));\n    return 0;\n}`,
      label: "pointer.c"
    }
  ];

  return (
    <div className="container py-24 fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="text-primary font-headline text-sm tracking-widest mb-2 uppercase">RESEARCH_LOG // LAB</div>
          <h1 className="text-6xl font-black font-headline tracking-tighter text-on-surface mb-4">C_LANGUAGE_LAB</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            신동규(20263207)가 탐구하는 소프트웨어의 근본과 저수준 아키텍처 실험 기록입니다.
          </p>
        </div>

        <div className="space-y-12">
          {experiments.map((exp, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-1 rounded-xl shadow-2xl border border-white/5 group">
              <div className="bg-surface-container-low border border-outline-variant/20 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/10 bg-surface-container-high/50">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-mono text-xs">// EXP_{exp.id}</span>
                    <h2 className="text-sm font-headline font-bold text-on-surface uppercase tracking-widest">{exp.title}</h2>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">{exp.label}</span>
                </div>
                <div className="p-8 flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <p className="text-on-surface-variant text-sm leading-relaxed italic mb-6">"{exp.desc}"</p>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-xl font-black font-headline text-primary tracking-tighter px-3 py-1 bg-primary/10 rounded">PASS</div>
                        <div className="text-[10px] text-slate-500 mt-1 uppercase">STATUS</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="bg-[#0e0e13] p-6 font-mono text-sm border-l-2 border-primary overflow-x-auto rounded-r">
                      <pre className="text-primary-dim">
                        <code>{exp.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border border-dashed border-outline-variant/30 text-center">
          <p className="text-slate-500 font-headline text-xs tracking-widest uppercase">Initializing new experiments... [Please Wait]</p>
        </div>
      </div>
    </div>
  );
}
