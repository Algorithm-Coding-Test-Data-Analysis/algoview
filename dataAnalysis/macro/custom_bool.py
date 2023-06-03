import re


def check_custom_functions_and_user_class(code_str) -> int:

    # 사용자 정의 함수 여부 체크
    # 'check_custom_funtions' 키를 사용하여 사용자 정의 함수 여부를 file_data에 추가
    matches = re.findall(r"def\s+(\w+)", code_str)
    has_custom_functions = 1 if matches else 0
    file_data['check_custom_functions'] = has_custom_functions

    # 사용자 정의 클래스 여부 체크
    # 'check_user_class' 키를 사용하여 사용자 정의 함수 여부를 file_data에 추가
    '''
    TODO: 사용자 정의 클래스 체크 코드 추가
    '''
    file_data['check_user_class'] = has_user_class

    return file_data
