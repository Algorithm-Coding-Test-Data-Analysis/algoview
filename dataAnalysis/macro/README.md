# Status Board

## Python 3.10+

```
- cnt_data
    - __init__.py
    - _built_in_func_cnt.py
    - _dict_to_json.py
    - _get_data.py
    - _module_count.py
- main.py
```

---

## 진행 사항

- 각 기능별 폴더에 묶어서 패키지화
  - main.py import 사용시 데이터 제공
  - main.py 직접 실행시, data.json 생성
- \_get_data.py
  - data폴더를 순회하여 파일 네임컨벤션에 맞다면 데이터를 수집하고, 맞지 않다면 excluded_list에 데이터 수집
  - 중복값 예외 처리 개선
- \_module_count.py
  - \_get_data.py의 반환 값을 받아서 모듈을 사용했을 경우, 모듈별로 카운팅 해주고, 사용자 정의 클래스와 메서드가 있을 경우, 사용 유/무에 따라 별도의 값을 지정함
- \_built_in_func_cnt.py
  - 내부 함수별로 카운팅 해주고, JavaScript의 경우 Node.js 코드 등 개선 진행중
- \_dict_to_json.py
  - data: List[dict] argument를 받아 file_name을 key값으로 가진 dict[dict]형식의 data를 반환

## 개선 사항

- ~~JavaScript 사용자 정의 클래스 카운팅 이슈 개선~~
  - 23-06-01 \_built_in_func_cnt.py 파일에서 개선
- ~~사용자 정의 클래스, 메서드 유/무 체크 개선~~
  - 23-06-06 \_module_count.py 파일에서 개선 중
- lambda 사용 유/무
- excluded_list를 repo최상단에 위치하여 공유.
  - excluded_list 체크하여 예외 처리하거나 네이밍 컨벤션 공유
- 예외 처리

---

# Code Convention

## Code lay-out

- 들여쓰기(indent)는 공백 4칸을 띄어 씁니다.
- 함수정의는 2줄씩 띄어 씁니다.
- class내의 method 정의는 1줄씩 작성합니다.
- Type hint를 작성합니다.
  - ```py
      def f(s: str, i: int) -> dict:
    ```
- 조건문 등 계산 우선순위가 필요할 경우 소괄호`()` 로 묶어줍니다.

## Comments

- 주석(Docstring)은 함수의 전체 기능을 적습니다.
  - input(parameter)값, 기능, output(return)
- 주석을 작성할 때는 기존 코드에서 2칸 띄고, # 에서 한칸 띄고 작성합니다.
  - ```py
      age = 30  # 주석
    ```

## Naming Conventions

- 클래스 명은 카멜케이스(CamelCase)로 작성합니다.
- 함수명과 변수명은 스네이크케이스(snake_case)로 작성합니다.
