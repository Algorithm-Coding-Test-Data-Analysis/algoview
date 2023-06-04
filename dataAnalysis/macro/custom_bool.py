import re

def check_custom_functions_and_user_class(code_str) -> int:

    # 프로그래머스 등 기존 def 이슈로 잠시 주석
    # 사용자 정의 함수 여부 체크
    # matches = re.findall(r"def\s+(\w+)", code_str)
    # has_custom_functions = 1 if matches else 0
    # file_data['check_custom_functions'] = has_custom_functions

    # 사용자 정의 클래스 여부 체크
    matches = re.findall(r"class\s+(\w+)", code_str)
    has_user_class = 1 if matches else 0
    file_data['check_user_class'] = has_user_class

    return file_data