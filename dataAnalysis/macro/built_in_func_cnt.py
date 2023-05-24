from collections import Counter
import re
import get_data as gd

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
    # Built-in function list
    built_in_python = [
        'abs', 'aiter', 'anext', 'ascii', 'all', 'any', 
        'bin', 'breakpoint', 'bytearray', 'bytes', 'bool', 
        'callable', 'chr', 'classmethod', 'compile', 'complex', 
        'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 
        'exec', 'filter', 'float', 'format', 'frozenset', 'globals', 
        'getattr', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 
        'int', 'isinstance', 'issubclass', 'iter', 'len', 'list', 
        'locals', 'map', 'memoryview', 'max', 'min', 'next', 
        'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 
        'range', 'repr', 'reversed', 'round', 'set', 'setattr', 
        'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 
        'tuple', 'type', 'vars', 'zip']

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

if __name__ == '__main__':
    data = gd.get_data()
    print(insert_countmethod_data(data))
    