import styles from './page.module.css';

export default function Contact() {
  const contactInfo = [
    { label: "Email", value: "donggyu@example.com", link: "mailto:donggyu@example.com" },
    { label: "GitHub", value: "github.com/shindonggyu", link: "https://github.com/shindonggyu" },
    { label: "Department", value: "Computer Software Engineering", link: null },
    { label: "Student ID", value: "20263207", link: null }
  ];

  return (
    <div className="container fade-up">
      <section className={styles.contact}>
        <div className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>신동규(20263207)와 소통하기</p>
        </div>

        <div className={styles.grid}>
          {contactInfo.map((info, index) => (
            <div key={index} className={`${styles.item} card`}>
              <span className={styles.label}>{info.label}</span>
              {info.link ? (
                <a href={info.link} target="_blank" className={styles.value}>
                  {info.value}
                </a>
              ) : (
                <span className={styles.value}>{info.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.message}>
          <p>언제든 편하게 연락주세요! 함께 성장하는 프로그래머가 되고 싶습니다.</p>
        </div>
      </section>
    </div>
  );
}
