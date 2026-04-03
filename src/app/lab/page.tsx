import styles from './page.module.css';
import CodeSnippet from '@/components/CodeSnippet';

export default function Lab() {
  const codeExamples = [
    {
      title: "01. Hello World & Student Identity",
      desc: "자신의 이름과 학번을 출력하는 가장 기본적인 C프로그램을 작성했습니다.",
      code: `#include <stdio.h>

int main() {
    printf("Name: Shin Dong-gyu\\n");
    printf("ID: 20263207\\n");
    printf("Major: Computer Software Engineering\\n");
    return 0;
}`,
      label: "hello.c"
    },
    {
      title: "02. Basic Calculation",
      desc: "사용자로부터 숫자를 입력받아 사칙연산을 수행하는 기초 문법을 학습했습니다.",
      code: `#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("Sum: %d\\n", a + b);
    return 0;
}`,
      label: "calc.c"
    },
    {
      title: "03. Loops & Patterns",
      desc: "반복문을 사용하여 별찍기 등 다양한 패턴을 구현하는 방법을 익혔습니다.",
      code: `#include <stdio.h>

int main() {
    for(int i=0; i<5; i++) {
        for(int j=0; j<=i; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
      label: "loop.c"
    }
  ];

  return (
    <div className="container fade-up">
      <section className={styles.lab}>
        <div className={styles.header}>
          <span className="accent-text">Research & Learning</span>
          <h1 className={styles.title}>C-Language Lab</h1>
          <p className={styles.subtitle}>
            신동규(20263207)가 탐구하는 소프트웨어의 근본과 기초
          </p>
        </div>

        <div className={styles.list}>
          {codeExamples.map((item, index) => (
            <div key={index} className={`${styles.item} card`}>
              <div className={styles.info}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
              <div className={styles.code}>
                <CodeSnippet code={item.code} label={item.label} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.futureMark}>
          <p>More experiments coming soon...</p>
        </div>
      </section>
    </div>
  );
}
