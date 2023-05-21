# Status Board
## 진행 사항
- get_data.py
    - 특정(./data/)폴더를 순회하여 확장자가 .py이거나 .js파일의 데이터를 수집한 뒤, dictionary형태의 요소값을 가진 list를 반환
- module_count.py
    - get_data.py의 return 값을 data로 받아서 모든 요소값의 code에서 import {값}을 count 해준 뒤 업데이트 해주고, data의 code를 삭제한 뒤, list[dict]형으로 반환

## 개선 사항
- get_data.py
    - js와 py폴더를 data폴더에 넣어 문제 해결하거나, 전체폴더(./)를 순회할 경우, js와 py폴더만 순회하도록 개선하여 문제 해결
- module_count.py
    - import math, re 일 경우 두 번째 값은 count하지 못하여 개선 필요
        -  ```py
            import math
            import re
            # 각 라인일 경우 count되는것은 확인
            ```


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
