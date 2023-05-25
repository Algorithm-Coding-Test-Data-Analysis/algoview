# Status Board
## 진행 사항
- get_data.py
    - data폴더를 순회하여 확장자가 .py이거나 .js파일의 데이터를 수집한 뒤, dictionary형태의 요소값을 가진 list를 반환
- module_count.py
    - get_data.py의 return 값을 data: list[dict]으로 받아서 module counting해준 뒤 data: list[dict] update
    - module 전체 counting 개선 완료
- built_in_func_cnt.py
    - code: str을 argument값으로 받는 기준으로 카운팅된 dict형 데이터 반환
    - counting 기능 함수에 알맞는 argument값을 주는 보조 insert_countmethod_data 함수 추가
- built-in/built_in_function.py
    - 2개의 argument값을 받으며, 첫 번째는 code_data: str, 두 번째는 language: str을 받아 language을 조건으로 txt파일에 정리해둔 built-in function을 기준으로 counting
- dict_to_json.py
    - data: List[dict] argument를 받아 file_name을 key값으로 가진 dict[dict]형식의 data를 반환


## 개선 사항
- built-in/built_in_function.py
    - get_built_in_func_cnt 함수와 동일하게 원하는 argument값을 제공하는 추가 함수 필요.
    - built-in function 리스트를 txt파일로 별도 관리할 경우, 읽어오는 과정에서 path 설정 필요.
- 풀이 code 제거
- module별 method 식별 작업
- lambda 함수 유/무 check
- Local application library 식별 작업
- JavaScript의 경우, Node 코드 check


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
