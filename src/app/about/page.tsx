import styles from './page.module.css';

export default function About() {
  return (
    <div className="container fade-up">
      <section className={styles.profile}>
        <div className={styles.header}>
          <h1 className={styles.name}>Shin Dong-gyu</h1>
          <p className={styles.subtitle}>20263207 | Computer Software Engineering</p>
        </div>

        <div className={styles.contentGrid}>
          <div className="card">
            <h2 className={styles.sectionTitle}>Academic Background</h2>
            <p className={styles.text}>
              공학3계열 컴퓨터소프트웨어학과 1학년에 재학 중입니다. <br />
              현재 소프트웨어의 근간이 되는 기초 학문과 프로그래밍의 원리를 탐구하고 있습니다.
            </p>
          </div>

          <div className="card">
            <h2 className={styles.sectionTitle}>Current Tech Stack</h2>
            <ul className={styles.list}>
              <li><span className="accent-text">C Language:</span> 기초 문법 및 포인터, 파일 입출력 학습 중</li>
              <li><span className="accent-text">Web:</span> Next.js, CSS Modules (관심 분야)</li>
              <li><span className="accent-text">Tools:</span> Git, VS Code, GCC</li>
            </ul>
          </div>

          <div className="card">
            <h2 className={styles.sectionTitle}>Learning Journey</h2>
            <p className={styles.text}>
              C언어는 하드웨어와 가장 가까운 언어 중 하나라는 점에서 매력을 느꼈습니다. 
              변수 하나하나가 메모리 상에서 어떻게 움직이는지 이해하는 과정이 즐겁습니다.
            </p>
          </div>

          <div className="card">
            <h2 className={styles.sectionTitle}>Vision & Goals</h2>
            <p className={styles.text}>
              단순히 코드를 짜는 사람이 아닌, 효율적이고 우아한 아키텍처를 설계하는 
              소프트웨어 엔지니어가 되는 것이 목표입니다. 
              대학 생활 동안 다양한 프로젝트와 협업을 통해 실력을 쌓아나갈 계획입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
