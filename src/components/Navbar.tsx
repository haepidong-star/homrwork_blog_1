import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.nav} glass`}>
      <div className={`${styles.content} container`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logo}>SYLVAN.LAB</span>
          <span className={styles.studentInfo}>20263207 Shin Dong-gyu</span>
        </Link>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/lab" className={styles.link}>C-Lab</Link>
          <Link href="/roadmap" className={styles.link}>Roadmap</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
