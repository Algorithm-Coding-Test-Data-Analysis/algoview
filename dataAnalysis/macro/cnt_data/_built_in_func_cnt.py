from collections import Counter
import re


def insert_countmethod_data(full_data: list[dict]) -> list[dict]:
    '''
    수집된 모든 데이터 리스트를 받아 'countmethod' 키 값에
    value값을 넣어 반환해줍니다.
    
    Args:
        full_data (list[dict]): 수집된 전체 데이터 리스트

    Returns:
        full_data (list[dict]): 수정된 수집된 전체 데이터 리스트
    '''

    data = {}
    language = ''
    custom_class = []
    custom_values = []
    code_data = ''
    for i in full_data:
        language = i.get('file_name').split('.')[1]
        code_data = i.get('code')
        custom_class = user_class_names(code_data)
        # 사용자 정의 클래스가 있다면
        if custom_class:
            custom_values = class_value_names(code_data, custom_class)
            code_data = remove_custom(code_data, custom_values)

        data = get_method_cnt(code_data, language)
        i['countmethod'] = data if data else 0
    
    return full_data

def get_method_cnt(code_data: str, language: str = 'py') -> dict:
    '''
    file_data의 code 문자열 데이터를 받아
    Built_in_func 사용 횟수를 dict로 반환해줍니다.

    Args:
        code_data (str): 코드 문자열 데이터
        language  (str): 언어 구분

    Returns:
        built_in_func_cnt_data (dict): 사용된 빌트인 함수 사용 횟수 데이터
    '''
    built_in_python = [
        'abs', 'callable', 'compile', 'eval', 'exec', 'filter','format', 'globals', 'hash', 'help', 'id', 'map', 'memoryview', 'range',
        'object', 'ord', 'slice', 'sorted', 'staticmethod', 'super', 'type', 'zip','complex', 'divmod', 'max', 'min', 'pow', 'round', 'sum',
        'bin', 'bool', 'bytearray', 'bytes', 'chr', 'float', 'hex','int', 'oct', 'str',
        'callable', 'classmethod', 'delattr', 'dir', 'getattr', 'hasattr', 'id', 'isinstance', 'issubclass', 'property',
        'repr', 'setattr', 'vars', 'enumerate', 'len', 'reversed', 'sorted',
        'dict', 'frozenset', 'list', 'set', 'tuple', 'input', 'open', 'print','all', 'any',
        'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort',
        'keys', 'values', 'items', 'get', 'pop', 'update','lower', 'upper', 'split', 'join', 'strip', 'replace', 'find'
    ]
   
    built_in_javascript = ['parseInt']
    built_in_list = []
    match(language):
        case 'py':
            built_in_list = built_in_python
        case 'js':
            built_in_list = built_in_javascript

    func_list_str = str.join('|', built_in_list)
    pattern = f'({func_list_str}|[.][a-zA-Z0-9]+)\('
    p = re.compile(pattern)
    return dict(Counter(p.findall(code_data)))

def user_class_names(code_data: str) -> list:
    '''
    file_data의 code 문자열 데이터를 받아
    사용자가 정의한 class명을 리스트로 반환

    Args:
        code_data (str): 코드 문자열 데이터

    Returns:
        name_list (list): 사용자가 정의한 class명 리스트
    '''

    name_list = re.findall('class ([a-zA-Z0-9_]+)', code_data)
    return name_list


def class_value_names(code_data: str, class_names: list) -> list:
    '''
    file_data의 code 문자열 데이터와 class명 리스트를 받아
    사용자가 정의한 class 변수명을 리스트로 반환

    Args:
        code_data (str): 코드 문자열 데이터
        class_names (list): class명을 담은 리스트

    Returns:
        value_names (list): 사용자가 정의한 class변수명 리스트
    '''

    class_names_str = str.join('|', class_names)
    pattern = f'([a-zA-Z0-9]+)\s?=\s?(?:new)? (?:{class_names_str})\('
    value_names = re.findall(pattern, code_data)

    return value_names

def remove_custom(code_data: str, value_names: list) -> str:
    '''
    file_data의 code 문자열 데이터를 받아
    사용자가 정의한 class 변수명들을 리스트로 반환

    Args:
        code_data (str): 코드 문자열 데이터
        value_names (list): class 변수명을 담은 리스트

    Returns:
        remove_data (str): 사용자가 정의한 함수들 공백으로 제거한 코드 데이터
    '''

    value_names_str = str.join('|', value_names)
    pattern = f'((?:{value_names_str})[.][a-zA-Z0-9]+)\('
    remove_data = re.sub(pattern, ' ', code_data)
    return remove_data