import styles from './page.module.css';
import CodeSnippet from '@/components/CodeSnippet';

export default function Home() {
  const heroCode = `
#include <stdio.h>

int main() {
    char* name = "SHIN DONG GYU";
    int studentID = 20263207;
    
    printf("Future Software Engineer: %s\\n", name);
    printf("Student ID: %d\\n", studentID);
    printf("Status: Initializing Dream...\\n");
    
    return 0;
}
  `;

  const skills = [
    { title: "C Language", desc: "기초 문법 및 포인터, 메모리 관리 학습 중", icon: "💎" },
    { title: "Next.js", desc: "React 기반 프레임워크를 활용한 웹 프런트엔드 관심", icon: "⚡" },
    { title: "Python", desc: "데이터 분석 및 업무 자동화 기초 활용 가능", icon: "🐍" },
    { title: "Git/GitHub", desc: "버전 관리 및 협업을 위한 기초 도구 활용", icon: "📂" },
    { title: "Linux/WSL", desc: "개발 환경 구축 및 기본 커맨드 실행 가능", icon: "🐧" },
    { title: "Problem Solving", desc: "알고리즘을 통한 논리적 문제 해결 능력 함양", icon: "🧩" }
  ];

  const glossary = [
    { term: "Pointer", def: "메모리의 주소값을 저장하는 변수로, C언어의 핵심 개념" },
    { term: "Recursion", def: "함수가 자기 자신을 호출하여 문제를 해결하는 기법" },
    { term: "Data Structure", def: "데이터를 효율적으로 저장하고 관리하기 위한 구조" },
    { term: "Algorithm", def: "어떤 문제를 해결하기 위해 정해진 일련의 절차" }
  ];

  return (
    <div className="container">
      {/* 1. Hero Section (Scroll Page 1) */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={`${styles.badge} blue-glow`}>Computer Software Engineering</span>
          <h1 className={styles.title}>
            Designing the Future <br /> 
            <span className="accent-text">One Line of Code</span> <br /> 
            at a Time.
          </h1>
          <p className={styles.description}>
            안녕하세요, <span className="accent-text">신동규(20263207)</span>입니다. <br />
            컴퓨터소프트웨어공학부 신입생으로서 현재 C언어의 기초를 탄탄히 다지며 <br />
            세상을 변화시킬 소프트웨어를 꿈꾸고 있습니다.
          </p>
          <div className={styles.cta}>
            <a href="/lab" className={`${styles.primaryBtn} glass`}>View C-Lab</a>
            <a href="/about" className={styles.secondaryBtn}>Learn More</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <CodeSnippet code={heroCode} label="main.c" />
        </div>
      </section>

      {/* 2. Core Value Section (Scroll Page 1.5) */}
      <section className={styles.values}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My Philosophy</h2>
          <p className={styles.sectionSubtitle}>신동규의 개발 철학과 열정</p>
        </div>
        <div className={styles.valueGrid}>
          <div className="card">
            <h3>Complexity to Simplicity</h3>
            <p>복잡한 시스템의 이면을 파고들어 가장 단순하고 효율적인 해결책을 찾는 것을 즐깁니다.</p>
          </div>
          <div className="card">
            <h3>Continuous Growth</h3>
            <p>오늘의 부족함을 학습의 원동력으로 삼아 매일 조금씩 성장하는 엔지니어가 되겠습니다.</p>
          </div>
          <div className="card">
            <h3>Impact on Reality</h3>
            <p>코드 한 줄이 실제 사용자들에게 긍정적인 경험과 편리함을 줄 수 있다고 믿습니다.</p>
          </div>
        </div>
      </section>

      {/* 3. Skills Showcase (Scroll Page 2) */}
      <section className={styles.skills}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Tech Stack & Skills</h2>
          <p className={styles.sectionSubtitle}>현재 다루고 있는 도구와 앞으로 배우고 싶은 기술</p>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skill, i) => (
            <div key={i} className={styles.skillItem}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CS Glossary Peek (Scroll Page 2.5) */}
      <section className={styles.glossary}>
        <div className={styles.glossaryInner}>
          <div className={styles.glossaryText}>
            <h2 className={styles.sectionTitle}>CS Essential Concepts</h2>
            <p>신입생이 꼭 알아야 할 전공 기초 용어들을 정리하고 있습니다.</p>
          </div>
          <div className={styles.glossaryList}>
            {glossary.map((item, i) => (
              <div key={i} className={styles.glossaryItem}>
                <span className={styles.term}>{item.term}</span>
                <span className={styles.def}>{item.def}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. C-Lab Highlights (Scroll Page 3) */}
      <section className={styles.labPreview}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>C-Language Lab</h2>
          <p className={styles.sectionSubtitle}>학습한 연구 과제 중 핵심 요약</p>
        </div>
        <div className={styles.labGrid}>
          <div className={`${styles.labCard} card`}>
            <h3>01. Identity Program</h3>
            <p>학번(20263207)과 성함을 출력하는 첫 번째 과제</p>
            <a href="/lab" className="accent-text">Read More →</a>
          </div>
          <div className={`${styles.labCard} card`}>
            <h3>02. Memory Management</h3>
            <p>포인터와 동적 할당의 기초 원리 이해</p>
            <a href="/lab" className="accent-text">Read More →</a>
          </div>
          <div className={`${styles.labCard} card`}>
            <h3>03. Algo Challenge</h3>
            <p>반복문을 활용한 정밀한 패턴 구현 실험</p>
            <a href="/lab" className="accent-text">Read More →</a>
          </div>
        </div>
      </section>

      {/* 6. Footer Call to Action (Scroll Page 3.5) */}
      <section className={styles.finalCta}>
        <div className="glass card">
          <h2>Ready to Build the Future?</h2>
          <p>신동규(20263207)와 함께 소프트웨어의 새로운 가능성을 탐구해 보세요.</p>
          <a href="/contact" className={styles.primaryBtn}>Contact Me</a>
        </div>
      </section>
    </div>
  );
}
