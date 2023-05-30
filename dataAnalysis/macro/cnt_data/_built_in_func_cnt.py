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
    for i in full_data:
        language = i.get('file_name').split('.')[1]
        data = get_method_cnt(i.get('code'), language)
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
        'abs', 'callable', 'compile', 'eval', 'exec', 'filter','format', 'globals', 'hash', 'help', 'id', 'map', 'memoryview',
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
