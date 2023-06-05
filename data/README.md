## 파일 업로드 양식

- ### 파일 이름
  - .js
    - 예) `Lv0_2018_카카오_별풍선게임_LRU_호준.js`
    - 출제 연도가 없는 예) `Lv0_0000_프로그래머스_hello_스택큐_호준.js`
  - .py
    - 예) `Lv0_2018_카카오_별풍선게임_LRU_호준.py`
    - 출제 연도가 없는 예) `Lv0_0000_프로그래머스_hello_스택큐_호준.py`

---

- ### 파일 내용

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
