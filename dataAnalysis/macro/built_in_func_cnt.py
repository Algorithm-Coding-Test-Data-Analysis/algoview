from collections import Counter
import re

def get_built_in_func_cnt(code_data: str) -> dict:
    '''
    file_data의 code 문자열 데이터를 받아
    Built_in_func 사용 횟수를 dict로 반환해줍니다.

    Args:
        code_data (str): 코드 문자열 데이터

    Returns:
        built_in_func_cnt_data (dict): 사용된 빌트인 함수 사용 횟수 데이터
    '''

    # Built-in function list
    built_in_list = ['abs', 'aiter', 'anext', 'ascii', 'all', 'any', 
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

    func_list_str = str.join('|', built_in_list)
    inner_func_pattern = '[.].+'
    p = re.compile(f'({func_list_str}|{inner_func_pattern})\(')
    built_in_func_cnt_data = dict(Counter(p.findall(code_data)))
    return built_in_func_cnt_data