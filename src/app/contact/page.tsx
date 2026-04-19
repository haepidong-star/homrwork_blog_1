export default function Contact() {
  const contactInfo = [
    { label: "EMAIL_NODE", value: "donggyu@example.com", link: "mailto:donggyu@example.com", icon: "mail" },
    { label: "GITHUB_REPO", value: "github.com/shindonggyu", link: "https://github.com/shindonggyu", icon: "hub" },
    { label: "CORE_DEPT", value: "Computer Software Engineering", link: null, icon: "schema" },
    { label: "PRIMARY_ID", value: "20263207", link: null, icon: "fingerprint" }
  ];

  return (
    <div className="container py-24 fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="text-tertiary font-headline text-sm tracking-widest mb-2 uppercase">COMMUNICATION // CONTACT</div>
          <h1 className="text-6xl font-black font-headline tracking-tighter text-on-surface mb-4">ESTABLISH_LINK</h1>
          <p className="text-on-surface-variant text-lg font-light max-w-xl">
            신동규(20263207)와 보안 연결을 설정하기 위한 채널입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="card group hover:border-tertiary/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-tertiary opacity-70 group-hover:opacity-100 transition-opacity">{info.icon}</span>
                <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">{info.label}</span>
              </div>
              {info.link ? (
                <a href={info.link} target="_blank" className="text-xl font-headline font-bold text-on-surface hover:text-tertiary transition-colors break-all">
                  {info.value}
                </a>
              ) : (
                <span className="text-xl font-headline font-bold text-on-surface">{info.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-surface-container-high/30 p-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-tertiary select-none">
            <span className="material-symbols-outlined text-9xl">contact_support</span>
          </div>
          <p className="text-on-surface-variant font-light text-sm italic relative z-10">
            "언제든 편하게 연락주세요! 함께 성장하고 미래를 설계하는 동료가 되고 싶습니다."
          </p>
        </div>
      </div>
    </div>
  );
}
