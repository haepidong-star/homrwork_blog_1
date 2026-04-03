import styles from './page.module.css';

export default function Roadmap() {
  const steps = [
    { title: "2026: The Beginning", content: "공학3계열 입학, C언어 및 기초 프로그래밍 구조 정복" },
    { title: "2027: Deep Dive", content: "자료구조, 알고리즘, 운영체제 심화 학습 및 개인 프로젝트 시작" },
    { title: "2028: Expand", content: "웹/내장 개발 실무 및 협업 프로젝트 경험 쌓기" },
    { title: "2029: Specialist", content: "전공 분야 심화 연구 및 인턴십, 커리어 준비" }
  ];

  return (
    <div className="container fade-up">
      <section className={styles.roadmap}>
        <div className={styles.header}>
          <h1 className={styles.title}>Future Roadmap</h1>
          <p className={styles.subtitle}>신동규(20263207)의 성장을 위한 마일스톤</p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={`${styles.step} card`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTitle}>{step.title}</span>
              </div>
              <p className={styles.stepContent}>{step.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
