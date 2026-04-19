import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Scanner from "@/components/Scanner";
import ScrollSpyNav from "@/components/ScrollSpyNav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "DONG GYU의 블로그 // SHIN DONG-GYU",
  description: "공학3계열 컴퓨터소프트웨어학과 신동규의 C언어 학습 및 포트폴리오 블로그",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${spaceGrotesk.variable} ${manrope.variable} dark`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary overflow-x-hidden">
        <Scanner />
        
        {/* TopNavBar */}
        <nav className="fixed top-0 w-full z-50 bg-[#0e0e13]/60 backdrop-blur-3xl border-b border-cyan-500/20">
          <div className="flex justify-between items-center px-8 py-4 max-w-full">
            <div className="text-2xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_8px_rgba(143,245,255,0.6)] font-headline">
              DONG GYU의 블로그
            </div>
            <ScrollSpyNav />
            <div className="flex items-center gap-4 text-cyan-400">
              <span className="material-symbols-outlined cursor-pointer hover:bg-cyan-500/10 p-2 transition-all">settings_ethernet</span>
              <span className="material-symbols-outlined cursor-pointer hover:bg-cyan-500/10 p-2 transition-all">terminal</span>
            </div>
          </div>
        </nav>

        {/* SideNavBar (Desktop Only) */}
        <aside className="hidden lg:flex h-screen w-64 fixed left-0 top-0 flex-col py-8 px-4 bg-[#0e0e13] shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-40 border-r border-white/5">
          <div className="mb-12 px-4 mt-20">
            <div className="text-xl font-bold text-violet-400 font-headline mb-8">SDG7</div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">account_circle</span>
              </div>
              <div>
                <div className="text-xs font-headline font-bold text-on-surface">신동규</div>
                <div className="text-[10px] text-slate-500 font-mono tracking-tighter">학번: 20263207</div>
              </div>
            </div>
          </div>
          {/* 하단 메뉴 삭제됨 */}
        </aside>

        {/* Main Content Area */}
        <main className="lg:pl-64 pt-20 min-h-screen">
          {children}
        </main>

        {/* Mobile BottomNavBar (필요한 경우 메뉴 축소) */}
        <nav className="lg:hidden fixed bottom-0 w-full bg-[#0e0e13]/80 backdrop-blur-xl border-t border-white/5 z-50">
          <div className="flex justify-around items-center py-3">
            {[
              { icon: 'database', label: '루트', active: true },
              { icon: 'key', label: '로그' },
              { icon: 'code', label: '소개' }
            ].map((item, idx) => (
              <a key={idx} href="#" className={`flex flex-col items-center gap-1 ${item.active ? 'text-cyan-400' : 'text-slate-500'}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: item.active ? "'FILL' 1" : "" }}>{item.icon}</span>
                <span className="text-[8px] font-headline font-bold">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <footer className="lg:pl-64 bg-[#0e0e13] flex flex-col items-center gap-6 py-12 w-full border-t border-white/5 font-headline text-[10px] tracking-widest text-slate-600">
          <div className="flex items-center gap-8 mb-4">
            <a className="hover:text-tertiary transition-all" href="#">GITHUB</a>
            <a className="hover:text-tertiary transition-all" href="#">STACK_OVERFLOW</a>
            <a className="hover:text-tertiary transition-all" href="#">DISCORD</a>
          </div>
          <div className="text-cyan-400 font-bold">DONG GYU의 블로그 // SHIN_DONG_GYU</div>
          <div className="uppercase">© 2024 네온 매뉴스크립트 // 모든 권리 보유</div>
        </footer>
      </body>
    </html>
  );
}
