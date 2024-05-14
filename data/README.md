## 파일 업로드 양식

### 파일 이름

- .js
  - 예) `Lv0_2018_카카오_별풍선게임_LRU_호준.js`
  - 출제 연도가 없는 예) `Lv0_0000_프로그래머스_hello_스택큐_호준.js`
- .py

  - 예) `Lv0_2018_카카오_별풍선게임_LRU_호준.py`
  - 출제 연도가 없는 예) `Lv0_0000_프로그래머스_hello_스택큐_호준.py`

- 문제 이름에 띄어쓰기가 있을 경우, 그대로 작성하기
  - 언더바(\_)로 작성할 경우 데이터가 취합되지 않습니다. (excluded_list에 추가됨)
  - 올바른 예)
    `Lv1_0000_월간코드챌린지시즌2_음양 더하기_구현_성철.py`
  - 잘못된 예)
    `Lv1_0000_월간코드챌린지시즌2_음양_더하기_구현_성철.py`

---

### 파일 내용

- .js

  ```js
  function solution(s) {
    let isOpen = 0;
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        isOpen++;
      } else {
        if (isOpen < 1) {
          return false;
        }
        isOpen--;
      }
    }
    return isOpen === 0 ? true : false;
  }
  ```

- .py
  ```python
  def solution(quiz):
      answer = []
      for i in quiz:
          c = i.split('=')
          for j in range (len(c)):
              if eval(c[0]) == eval(c[1]):
                  answer.append('O')
                  break
              else:
                  answer.append('X')
                  break
      return answer
  ```

---
