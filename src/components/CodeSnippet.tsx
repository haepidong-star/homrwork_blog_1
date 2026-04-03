import styles from './CodeSnippet.module.css';

interface CodeSnippetProps {
  code: string;
  language?: string;
  label?: string;
}

export default function CodeSnippet({ code, language = 'c', label }: CodeSnippetProps) {
  return (
    <div className={styles.wrapper}>
      {label && <div className={styles.label}>{label}</div>}
      <pre className={styles.pre}>
        <code className={styles.code}>{code}</code>
      </pre>
    </div>
  );
}
