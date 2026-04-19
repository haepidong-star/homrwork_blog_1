export interface LogEntry {
  id: number;
  title: string;
  category: string;
  tag: string;
  date: string;
  excerpt: string;
  icon: string;
  color: string;
  code?: string; // 실제 코드 예제 필드 추가
}

export const blogLogs: LogEntry[] = [
  {
    id: 1,
    title: "컴퓨터 공학이란 무엇인가?",
    category: "CS 개요 // 01",
    tag: "// 001_INTRODUCTION",
    date: "2024.11.01",
    excerpt: "컴퓨터 공학(Computer Science)은 정보의 표현, 저장, 처리, 전송을 연구하는 학문입니다. 단순히 하드웨어나 코딩만이 아닌, 논리적 사고와 문제 해결의 미학을 다룹니다.",
    icon: "psychology",
    color: "primary"
  },
  {
    id: 2,
    title: "2진수 체계: 컴퓨터의 언어",
    category: "CS 개요 // 02",
    tag: "// 002_BINARY",
    date: "2024.11.02",
    excerpt: "모든 디지털 정보는 0과 1로 표현됩니다. 비트(Bit)와 바이트(Byte)의 개념부터 2진수 연산이 어떻게 데이터가 되는지 분석합니다.",
    icon: "calculate",
    color: "secondary"
  },
  {
    id: 3,
    title: "논리 회로: 디지털의 기초",
    category: "CS 개요 // 03",
    tag: "// 003_LOGIC_GATES",
    date: "2024.11.03",
    excerpt: "AND, OR, NOT 게이트는 컴퓨터의 두뇌를 구성하는 가장 작은 단위입니다. 진리표(Truth Table)를 통해 논리 연산의 원리를 파악합니다.",
    icon: "schema",
    color: "tertiary"
  },
  {
    id: 4,
    title: "폰 노이만 구조와 메모리",
    category: "하드웨어 // 04",
    tag: "// 004_ARCHITECTURE",
    date: "2024.11.04",
    excerpt: "현대 컴퓨터의 근간인 프로그램 내장 방식(Stored Program)인 폰 노이만 구조를 분석합니다. CPU, 메모리, I/O 간의 데이터 흐름을 다룹니다.",
    icon: "memory",
    color: "primary"
  },
  {
    id: 5,
    title: "운영체제의 역할과 개요",
    category: "OS 개요 // 05",
    tag: "// 005_OS_INTRO",
    date: "2024.11.05",
    excerpt: "운영체제는 하드웨어를 관리하고 사용자에게 인터페이스를 제공하는 중재자입니다. 자원 관리와 프로세스 스케줄링의 필요성을 탐구합니다.",
    icon: "settings",
    color: "secondary"
  },
  {
    id: 6,
    title: "알고리즘과 시간 복잡도",
    category: "CS 이론 // 06",
    tag: "// 006_ALGORITHM",
    date: "2024.11.06",
    excerpt: "효율적인 코드를 작성하기 위한 첫걸음, Big O 표기법. 입력 크기에 따른 성능 변화를 예측하고 최적의 로직을 선택하는 기준을 배웁니다.",
    icon: "trending_up",
    color: "tertiary"
  },
  {
    id: 7,
    title: "네트워크와 인터넷의 탄생",
    category: "네트워크 // 07",
    tag: "// 007_NETWORK",
    date: "2024.11.07",
    excerpt: "패킷 교환 방식부터 전 세계가 연결된 오늘날의 인터넷까지. 통신의 기본 프로토콜과 레이어(Layer) 개념을 입문해 봅니다.",
    icon: "hub",
    color: "primary"
  },
  {
    id: 8,
    title: "프로그래밍 언어의 진화",
    category: "CS 개요 // 08",
    tag: "// 008_LANGUAGES",
    date: "2024.11.08",
    excerpt: "기계어, 어셈블리어에서 현대의 고수준 언어까지. 컴파일러와 인터프리터의 차이와 추상화 레벨에 따른 특징을 분석합니다.",
    icon: "terminal",
    color: "secondary"
  },
  {
    id: 9,
    title: "C언어의 역사와 철학",
    category: "C언어 소개 // 09",
    tag: "// 009_C_HISTORY",
    date: "2024.11.09",
    excerpt: "데니스 리치가 개발한 C언어는 시스템 프로그래밍의 표준입니다. 성능과 하드웨어 제어 능력을 갖춘 C언어의 탄생 배경을 탐구합니다.",
    icon: "history",
    color: "tertiary"
  },
  {
    id: 10,
    title: "C언어 첫걸음: Hello World",
    category: "C언어 입문 // 10",
    tag: "// 010_HELLO_C",
    date: "2024.11.10",
    excerpt: "가장 클래식한 프로그램 분석. stdio.h 헤더 포함부터 main 함수의 구조, printf의 동작 방식을 상세히 살펴봅니다.",
    icon: "code",
    color: "primary",
    code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`
  },
  {
    id: 11,
    title: "변수와 상수: 데이터의 저장",
    category: "C언어 입문 // 11",
    tag: "// 011_VARIABLES",
    date: "2024.11.11",
    excerpt: "메모리에 이름을 붙이는 행위, 변수 선언. 정수형, 실수형, 문자형 변수의 선언 방식과 상수의 개념을 다룹니다.",
    icon: "storage",
    color: "secondary",
    code: `int age = 20;\nconst float PI = 3.14159;\nchar grade = 'A';`
  },
  {
    id: 12,
    title: "정수형 자료형의 깊은 이해",
    category: "C언어 입문 // 12",
    tag: "// 012_INT_TYPES",
    date: "2024.11.12",
    excerpt: "short, int, long, 그리고 signed vs unsigned. 각 자료형의 크기와 표현 가능한 숫자 범위를 메모리적 관점에서 분석합니다.",
    icon: "filter_alt",
    color: "tertiary",
    code: `unsigned int positive_num = 100;\nlong long very_large_num = 123456789012345LL;`
  },
  {
    id: 13,
    title: "실수형 자료형과 정밀도",
    category: "C언어 입문 // 13",
    tag: "// 013_FLOAT_TYPES",
    date: "2024.11.13",
    excerpt: "float와 double의 정밀도 차이. 부동 소수점 표현 방식에서 발생하는 오차와 정확한 계산을 위한 주의사항을 공부합니다.",
    icon: "calculate",
    color: "primary",
    code: `float f = 0.1f;\ndouble d = 0.123456789;`
  },
  {
    id: 14,
    title: "문자와 ASCII 코드",
    category: "C언어 입문 // 14",
    tag: "// 014_CHARACTERS",
    date: "2024.11.14",
    excerpt: "컴퓨터는 어떻게 글자를 숫자(ASCII)로 저장하는가? char 타입과 서식 지정자 %c, %d를 이용한 출력 차이를 확인합니다.",
    icon: "spellcheck",
    color: "secondary",
    code: `char ch = 'A';\nprintf("%c is %d\\n", ch, ch); // A is 65`
  },
  {
    id: 15,
    title: "산술 연산자와 우선순위",
    category: "C언어 입문 // 15",
    tag: "// 015_OPERATORS",
    date: "2024.11.15",
    excerpt: "+, -, *, /, % 연산자와 복합 대입 연산자. 수학적 계산의 우선순위가 C언어 문법에서 어떻게 적용되는지 분석합니다.",
    icon: "exposure",
    color: "tertiary",
    code: `int res = (10 + 5) * 2 % 7; // (15 * 2) % 7 = 30 % 7 = 2`
  },
  {
    id: 16,
    title: "관계 및 논리 연산자",
    category: "C언어 입문 // 16",
    tag: "// 016_LOGIC_OPS",
    date: "2024.11.16",
    excerpt: "조건을 판별하는 기술. <, >, == 등 관계 연산자와 &&, ||, ! 등 논리 연산자를 사용한 조건 결합 방식을 배웁니다.",
    icon: "adjust",
    color: "primary",
    code: `if (a > 0 && b < 10) {\n    printf("Condition met\\n");\n}`
  },
  {
    id: 17,
    title: "비트 연산자: 로우레벨 제어",
    category: "C언어 입문 // 17",
    tag: "// 017_BITWISE",
    date: "2024.11.17",
    excerpt: "메모리 비트 단위를 직접 조작하는 AND, OR, XOR, SHIFT. 하드웨어 제어 및 플래그 관리에 필수적인 비트 연산을 심화 분석합니다.",
    icon: "toll",
    color: "secondary",
    code: `int flags = 0b0001;\nflags = flags | 0b0010; // set 2nd bit`
  },
  {
    id: 18,
    title: "조건문 if-else와 switch",
    category: "C언어 입문 // 18",
    tag: "// 018_CONDITIONALS",
    date: "2024.11.18",
    excerpt: "프로그램의 흐름을 분기하는 if-else와 다중 분기 switch-case. 효율적인 분기 처리를 위한 코딩 패턴을 예시와 함께 살펴봅니다.",
    icon: "alt_route",
    color: "tertiary",
    code: `switch(score / 10) {\n    case 10: case 9: grade = 'A'; break;\n    default: grade = 'F';\n}`
  },
  {
    id: 19,
    title: "반복문 for: 정해진 횟수 반복",
    category: "C언어 입문 // 19",
    tag: "// 019_FOR_LOOP",
    date: "2024.11.19",
    excerpt: "초기식, 조건식, 증감식을 이용한 제어. 배열 탐색이나 단순 반복 작업에 최적화된 for 루프의 구조를 완벽 분석합니다.",
    icon: "loop",
    color: "primary",
    code: `for (int i = 0; i < 10; i++) {\n    printf("%d ", i);\n}`
  },
  {
    id: 20,
    title: "반복문 while과 do-while",
    category: "C언어 입문 // 20",
    tag: "// 020_WHILE_LOOP",
    date: "2024.11.20",
    excerpt: "조건이 만족될 때까지 진행하는 유연한 반복. while과 한 번은 실행을 보장하는 do-while의 차이점과 활용 사례를 공부합니다.",
    icon: "repeat",
    color: "secondary",
    code: `while (count > 0) {\n    count--;\n}`
  },
  {
    id: 21,
    title: "함수(Function)의 정의와 호출",
    category: "C언어 입문 // 21",
    tag: "// 021_FUNCTIONS",
    date: "2024.11.21",
    excerpt: "코드의 재사용성과 모듈화. 매개변수(Parameter)와 반환값(Return Value)의 개념을 통해 기능적 단위로 코드를 분리하는 법을 배웁니다.",
    icon: "extension",
    color: "tertiary",
    code: `int add(int a, int b) {\n    return a + b;\n}`
  },
  {
    id: 22,
    title: "값의 전달(Call by Value)",
    category: "C언어 입문 // 22",
    tag: "// 022_VALUE_PASS",
    date: "2024.11.22",
    excerpt: "함수 인자 전달 방식의 기초. 원본 변수의 복사본이 생성되어 전달되는 매커니즘과 그 한계점에 대해 탐구합니다.",
    icon: "file_copy",
    color: "primary",
    code: `void swap(int x, int y) {\n    int tmp = x; x = y; y = tmp;\n} // doesn't affect caller`
  },
  {
    id: 23, title: "재귀 함수와 스택 오버플로우", category: "C언어 입문 // 23", tag: "// 023_RECURSION", date: "2024.11.23",
    excerpt: "자기 자신을 호출하는 로직. 팩토리얼처럼 문제를 부분 문제로 쪼개는 방식과 무한히 호출될 때 발생하는 스택 한계를 연구합니다.",
    icon: "published_with_changes", color: "secondary",
    code: `int fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n-1);\n}`
  },
  {
    id: 24, title: "변수의 범위와 생존 기간", category: "C언어 입문 // 24", tag: "// 024_SCOPE", date: "2024.11.24",
    excerpt: "지역 변수, 전역 변수, 정적 변수(static). 변수가 어디까지 유효하고 언제 메모리에서 사라지는지(Life Cycle)를 분석합니다.",
    icon: "timelapse", color: "tertiary",
    code: `static int count = 0;\nvoid func() { count++; }`
  },
  {
    id: 25, title: "전처리기(Preprocessor)의 비밀", category: "C언어 입문 // 25", tag: "// 025_PREPROCESSOR", date: "2024.11.25",
    excerpt: "#include와 #define. 컴파일 전 단계에서 코드가 어떻게 치환되고 매크로 상수가 어떻게 성능에 기여하는지 살펴봅니다.",
    icon: "build", color: "primary",
    code: `#define SQUARE(x) ((x)*(x))\n#ifdef DEBUG\n  printf("Debug mode");\n#endif`
  },
  {
    id: 26, title: "배열(Array): 연속된 메모리", category: "C언어 기초 // 26", tag: "// 026_ARRAYS", date: "2024.11.26",
    excerpt: "동일한 자료형을 묶어 관리하기. 배열의 인덱스가 0부터 시작하는 이유와 1차원/2차원 배열의 메모리 배치 방식을 배웁니다.",
    icon: "view_module", color: "secondary",
    code: `int arr[5] = {1, 2, 3, 4, 5};\nint matrix[2][3] = {{1,2,3}, {4,5,6}};`
  },
  {
    id: 27, title: "문자열 처리와 NULL 문자", category: "C언어 기초 // 27", tag: "// 027_STRINGS", date: "2024.11.27",
    excerpt: "C언어에서 문자열은 char 배열입니다. 문자열의 끝을 알리는 '\\0'(Null)의 중요성과 string.h의 주요 함수들을 분석합니다.",
    icon: "text_format", color: "tertiary",
    code: `char str[] = "Hello";\nprintf("Length: %zu", strlen(str));`
  },
  {
    id: 28, title: "포인터(Pointer) 입문: 주소값", category: "C언어 기초 // 28", tag: "// 028_POINTERS_INTRO", date: "2024.11.28",
    excerpt: "C언어의 핵심이자 난이도 최강. '&' 연산자를 통한 주소 획득과 포인터 변수의 선언 및 초기화 원리를 완벽 정리합니다.",
    icon: "pin_drop", color: "primary",
    code: `int n = 10;\nint *ptr = &n;\nprintf("Addr: %p", ptr);`
  },
  {
    id: 29, title: "역참조 연산자 '*'와 값 접근", category: "C언어 기초 // 29", tag: "// 029_DEREFERENCE", date: "2024.11.29",
    excerpt: "주소를 통해 메모리에 직접 다가가기. 별표(*)를 사용해 주소가 가리키는 값을 읽거나 직접 수정하는 강인한 메모리 제어 방식을 배웁니다.",
    icon: "gps_fixed", color: "secondary",
    code: `*ptr = 20; // change n to 20 via ptr`
  },
  {
    id: 30, title: "포인터 연산과 주소 이동", category: "C언어 기초 // 30", tag: "// 030_POINTER_MATH", date: "2024.11.30",
    excerpt: "포인터에 숫자를 더하면 어떻게 될까? 자료형의 크기에 따라 주소값이 건너뛰어지는 포인터 산술 연산의 원리를 이해합니다.",
    icon: "add_road", color: "tertiary",
    code: `ptr++; // moves by sizeof(int) bytes`
  },
  {
    id: 31, title: "배열과 포인터의 미묘한 관계", category: "C언어 기초 // 31", tag: "// 031_ARRAY_POINTER", date: "2024.12.01",
    excerpt: "배열 이름은 주소입니다. 배열 이름 자체가 첫 번째 요소의 주소를 가리키는 이유와 포인터로 배열에 접근하는 고급 기술을 공부합니다.",
    icon: "compare_arrows", color: "primary",
    code: `int arr[3] = {1, 2, 3};\nprintf("%d", *(arr + 1)); // prints 2`
  },
  {
    id: 32, title: "이중 포인터와 다차원 접근", category: "C언어 기초 // 32", tag: "// 032_DOUBLE_POINTER", date: "2024.12.02",
    excerpt: "주소를 담는 변수의 주소. 포인터 변수의 주소를 저장하는 이중 포인터의 필요성과 다차원 배열 및 복잡한 구조 활용을 연구합니다.",
    icon: "layers", color: "secondary",
    code: `int **pptr = &ptr;`
  },
  {
    id: 33, title: "구조체(struct): 사용자 정의 타입", category: "C언어 심화 // 33", tag: "// 033_STRUCTURE", date: "2024.12.03",
    excerpt: "서로 다른 타입의 데이터를 하나로 묶기. 학생 정보(이름, 학번, 성적)처럼 복합 데이터를 체계적으로 관리하는 법을 배웁니다.",
    icon: "table_rows", color: "tertiary",
    code: `struct Student {\n    char name[20];\n    int id;\n};`
  },
  {
    id: 34, title: "공용체(union)와 메모리 공유", category: "C언어 심화 // 34", tag: "// 034_UNION", date: "2024.12.04",
    excerpt: "한 공간을 여러 용도로 쓰기. 메모리를 절약하거나 하드웨어 입출력 데이터를 해석할 때 사용하는 공용체의 특수한 매커니즘을 봅니다.",
    icon: "view_day", color: "primary",
    code: `union Data {\n    int i; float f;\n};`
  },
  {
    id: 35, title: "typedef를 이용한 타입 별칭", category: "C언어 심화 // 35", tag: "// 035_TYPEDEF", date: "2024.12.05",
    excerpt: "코드의 가독성 향상. 복잡한 구조체나 포인터 타입에 직관적인 이름을 붙여 선언을 간결하게 만드는 typedef 활용법을 다룹니다.",
    icon: "label", color: "secondary",
    code: `typedef unsigned long ulong;`
  },
  {
    id: 36, title: "동적 메모리 할당: malloc", category: "C언어 심화 // 36", tag: "// 036_MALLOC", date: "2024.12.06",
    excerpt: "실행 중에 필요한 만큼 메모리 확보하기. 힙(Heap) 영역을 활용해 고정된 크기의 배열을 넘어 동적으로 확장하는 필수 기술입니다.",
    icon: "add_to_drive", color: "tertiary",
    code: `int *p = (int*)malloc(sizeof(int) * n);`
  },
  {
    id: 37, title: "메모리 확장과 재개발: calloc & realloc", category: "C언어 심화 // 37", tag: "// 037_REALLOC", date: "2024.12.07",
    excerpt: "0으로 초기화하며 할당하거나 이미 할당된 메모리 크기 변경하기. 확장 가능한 데이터 구조를 만들 때 핵심이 되는 함수들입니다.",
    icon: "auto_mode", color: "primary",
    code: `p = (int*)realloc(p, sizeof(int) * new_n);`
  },
  {
    id: 38, title: "절대 잊지 마세요: free()와 누수", category: "C언어 심화 // 38", tag: "// 038_FREE_MEMORY", date: "2024.12.08",
    excerpt: "할당된 메모리 반환하기. 메모리 누수(Memory Leak)가 발생하는 이유와 이를 방지하기 위한 정밀한 개발 습관을 분석합니다.",
    icon: "delete_sweep", color: "secondary",
    code: `free(p); p = NULL;`
  },
  {
    id: 39, title: "파일 입출력: 소스 밖의 데이터", category: "C언어 심화 // 39", tag: "// 039_FILE_IO", date: "2024.12.09",
    excerpt: "데이터 영속화(Persistence). 파일 포인터를 통해 HDD/SSD의 파일을 열고 닫는 기본적인 스트림 처리 방식을 연구합니다.",
    icon: "folder_open", color: "tertiary",
    code: `FILE *fp = fopen("data.txt", "r");`
  },
  {
    id: 40, title: "파일 읽기와 쓰기 기법", category: "C언어 심화 // 40", tag: "// 040_FILE_RW", date: "2024.12.10",
    excerpt: "텍스트 및 바이너리 모드. fprintf, fscanf를 통한 텍스트 입출력과 fread, fwrite를 이용한 고속 바이너리 처리를 공부합니다.",
    icon: "description", color: "primary",
    code: `fprintf(fp, "%s %d", name, score);`
  },
  {
    id: 41, title: "C표준 라이브러리: 날개 달기", category: "C언어 심화 // 41", tag: "// 041_STD_LIB", date: "2024.12.11",
    excerpt: "이미 검증된 도구들. 시간 제어(time.h), 수학 연산(math.h), 유틸리티(stdlib.h) 라이브러리를 통해 개발 생산성을 높여 봅니다.",
    icon: "auto_stories", color: "secondary",
    code: `#include <math.h>\ndouble s = sqrt(16.0);`
  },
  {
    id: 42, title: "자료구조: 스택(Stack)의 구현", category: "알고리즘 // 42", tag: "// 042_STACK", date: "2024.12.12",
    excerpt: "LIFO(Last-In-First-Out). 배열이나 연결 리스트를 이용해 웹 브라우저 뒤로가기나 실행 취소 로직의 근간인 스택을 직접 코딩합니다.",
    icon: "segment", color: "tertiary",
    code: `void push(int data) { stack[++top] = data; }`
  },
  {
    id: 43, title: "자료구조: 큐(Queue)의 구현", category: "알고리즘 // 43", tag: "// 043_QUEUE", date: "2024.12.13",
    excerpt: "FIFO(First-In-First-Out). 프로세스 대기열이나 주변 장치 버퍼에서 사용되는 큐의 작동 원리와 환형 큐(Circular Queue)를 분석합니다.",
    icon: "queue", color: "primary",
    code: `void enqueue(int data) { queue[rear++] = data; }`
  },
  {
    id: 44, title: "자료구조: 연결 리스트(Linked List)", category: "알고리즘 // 44", tag: "// 044_LINKED_LIST", date: "2024.12.14",
    excerpt: "포인터로 엮인 데이터 체인. 삽입과 삭제가 자유로운 링크드 리스트의 노드 구조를 설계하고 구현하는 프로그래밍 기법을 익힙니다.",
    icon: "linear_scale", color: "secondary",
    code: `struct Node {\n    int data;\n    struct Node *next;\n};`
  },
  {
    id: 45, title: "자료구조: 이진 탐색 트리(BST)", category: "알고리즘 // 45", tag: "// 045_BST", date: "2024.12.15",
    excerpt: "계층적 구조에서의 초고속 검색. O(log N)의 성능으로 데이터를 찾기 위한 균형 잡힌 트리 설계와 탐색 로직을 연구합니다.",
    icon: "account_tree", color: "tertiary",
    code: `void insert(Node **root, int data);`
  },
  {
    id: 46, title: "정렬 맛보기: 버블 및 선택 정렬", category: "알고리즘 // 46", tag: "// 046_BASIC_SORT", date: "2024.12.16",
    excerpt: "직관적이지만 느린 O(n²) 알고리즘. 데이터가 교환되는 과정을 코드로 확인하며 정렬의 기초 원리를 파악합니다.",
    icon: "sort", color: "primary",
    code: `if(arr[j] > arr[j+1]) swap(&arr[j], &arr[j+1]);`
  },
  {
    id: 47, title: "고급 정렬: 퀵과 병합 정렬", category: "알고리즘 // 47", tag: "// 047_ADVANCED_SORT", date: "2024.12.17",
    excerpt: "분할 정복의 위력. 대규모 데이터를 0.1초 만에 정리하는 효율적인 정렬 알고리즘의 동작 과정을 시각적으로 이해합니다.",
    icon: "bolt", color: "secondary",
    code: `void quickSort(int arr[], int low, int high);`
  },
  {
    id: 48, title: "탐색의 정석: 이진 탐색(Binary Search)", category: "알고리즘 // 48", tag: "// 048_SEARCH", date: "2024.12.18",
    excerpt: "반씩 쪼개며 찾기. 정렬된 데이터에서 목표값을 가장 빠르게 찾아내는 알고리즘의 우수성을 수학적으로 분석합니다.",
    icon: "find_in_page", color: "tertiary",
    code: `if(arr[mid] == key) return mid;`
  },
  {
    id: 49, title: "OS: 메모리 레이아웃(Code~Stack)", category: "시스템 기초 // 49", tag: "// 049_MEMORY_LAYOUT", date: "2024.12.19",
    excerpt: "내 코드가 메모리에 자리 잡는 법. 명령어, 데이터, 힙, 스택 영역이 각각 어떤 역할을 수행하며 보호되는지 탐구합니다.",
    icon: "grid_view", color: "primary"
  },
  {
    id: 50, title: "OS: 프로세스와 스레드의 본질", category: "시스템 기초 // 50", tag: "// 050_PROCESS_THREAD", date: "2024.12.20",
    excerpt: "프로그램의 살아있는 실체. OS가 어떻게 여러 프로그램을 동시에 실행(Multitasking)하고 자원을 분배하는지 핵심 메커니즘을 봅니다.",
    icon: "monitor_heart", color: "secondary"
  },
  {
    id: 51, title: "하드웨어 제어와 임베디드 C", category: "시스템 기초 // 51", tag: "// 051_EMBEDDED_C", date: "2024.12.21",
    excerpt: "펌웨어 개발의 필수품. 레지스터에 직접 데이터를 쓰고 전압을 조작하여 하드웨어를 움직이는 C언어의 특수한 기법들을 소개합니다.",
    icon: "developer_board", color: "tertiary",
    code: `*(volatile unsigned int *)0x40021018 |= 0x01;`
  },
  {
    id: 52, title: "C언어의 미래와 새로운 표준 C23", category: "시스템 기초 // 52", tag: "// 052_C_FUTURE", date: "2024.12.22",
    excerpt: "반세기 역사를 넘어 미래로. 새로운 표준인 C23의 기능과 인공지능, 자율주행 등 미래 기술에서 C언어의 위상을 조망합니다.",
    icon: "auto_graph", color: "primary",
    code: `nullptr_t n = nullptr; // C23 standard`
  }
];
