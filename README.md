## 🧾 Git 규칙 및 협업 전략

### 1. 📌 커밋 컨벤션 (Commit Convention)

> 커밋 메시지는 다음과 같은 형식을 따릅니다:

#### 커밋 타입 예시
| 타입 | 설명 |
|------|------|
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 수정 (README 등) |
| style | 코드 포맷팅, 세미콜론 누락 등 |
| refactor | 코드 리팩토링 |
| test | 테스트 코드 추가 |
| chore | 기타 변경사항 (빌드 설정, 패키지 등) |

#### ✅ 예시:

- feat: 가계부 수정 기능 추가

### 2. 🚀 풀 리퀘스트 컨벤션 (Pull Request Convention)

> PR 제목과 본문은 다음 형식을 따릅니다:

#### PR 제목:


#### PR 본문 구조 (권장)
- 작업 개요:
- 주요 변경사항:
- 참고 이슈: (예: `#12`)

#### 예시:



### 3. 🌿 브랜치 전략 (Branch Strategy)
![image](https://github.com/user-attachments/assets/bbaaa52d-83a9-4451-88c2-cfdad7de0d23)

#### 브랜치 종류
| 브랜치명 | 설명 |
|----------|------|
| `main` | 제품 릴리즈용 안정 버전 |
| `feat/` | 새로운 기능 개발용 |
| `fix/` | 버그 수정용 브랜치 |
| `hotfix/` | 운영 중 긴급 수정 |

#### 브랜치 이름 규칙 예시:
- `feature/login-page`
- `fix/typo-in-readme`
- `hotfix/login-error`
