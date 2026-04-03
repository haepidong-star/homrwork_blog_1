import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.info}>
          <span className={styles.title}>Computer Software Engineering</span>
          <span className={styles.copy}>© {currentYear} Shin Dong-gyu (20263207). All rights reserved.</span>
        </div>
        <div className={styles.social}>
          <a href="https://github.com" target="_blank" className={styles.link}>GitHub</a>
          <a href="mailto:donggyu@example.com" className={styles.link}>Email</a>
        </div>
      </div>
    </footer>
  );
}
