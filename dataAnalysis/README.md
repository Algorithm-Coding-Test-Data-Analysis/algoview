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
