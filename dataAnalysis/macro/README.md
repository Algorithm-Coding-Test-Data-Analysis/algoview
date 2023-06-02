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
  - data폴더를 순회하여 확장자가 .py이거나 .js파일의 데이터를 수집한 뒤, dictionary형태의 요소값을 가진 list를 반환
- \_module_count.py
  - get_data.py의 return 값을 data: list[dict]으로 받아서 module counting해준 뒤 data: list[dict] update
  - module 전체 counting 개선 완료
- \_built_in_func_cnt.py
  - code: str을 argument값으로 받는 기준으로 카운팅된 dict형 데이터 반환
  - counting 기능 함수에 알맞는 argument값을 주는 보조 insert_countmethod_data 함수 추가
  - 사용자 정의 class의 경우, counting이 되지 않도록 관련 method 제거되는 관련 함수 생성
    - user_class_names : 사용자 정의 클래스 체크
    - class_value_names : 클래스 인스턴스 체크
    - remove_custom : method 체크하여 제거
- \_dict_to_json.py
  - data: List[dict] argument를 받아 file_name을 key값으로 가진 dict[dict]형식의 data를 반환

## 개선 사항

- ~~JavaScript 사용자 정의 클래스 카운팅 이슈 개선~~
  - 23-06-01 \_built_in_func_cnt.py 파일에서 개선
- 사용자 정의 클래스의 사용 유/무
- lambda 사용 유/무
- 네이밍 전처리
  - 띄어쓰기 통일화
- 중복값 분류
  - 동일 솔루션의 경우 0부터 카운팅
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
