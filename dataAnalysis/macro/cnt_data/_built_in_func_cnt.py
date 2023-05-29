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
        # Built-in function list
    built_in_python = [
        # 기타 함수
        'abs', 'callable', 'compile', 'eval', 'exec', 'filter',
        'format', 'globals', 'hash', 'help', 'id', 'map', 'memoryview',
        'object', 'ord', 'slice', 'sorted', 'staticmethod', 'super', 'type', 'zip',

        # 수학 함수
        'complex', 'divmod', 'max', 'min', 'pow', 'round', 'sum',

        # 타입 변환 함수
        'bin', 'bool', 'bytearray', 'bytes', 'chr', 'float', 'hex',
        'int', 'oct', 'str',

        # 함수 속성 및 객체 조작 함수
        'callable', 'classmethod', 'delattr', 'dir', 'getattr',
        'hasattr', 'id', 'isinstance', 'issubclass', 'property',
        'repr', 'setattr', 'vars',

        # 시퀀스 조작 함수
        'enumerate', 'len', 'reversed', 'sorted',

        # 컬렉션 함수
        'dict', 'frozenset', 'list', 'set', 'tuple',

        # 파일 입출력 함수
        'input', 'open', 'print',

        # 조건 및 비교 함수
        'all', 'any',

        # 리스트 메소드 함수
        'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert',
        'pop', 'remove', 'reverse', 'sort',

        # 딕셔너리 메소드 함수
        'keys', 'values', 'items', 'get', 'pop', 'update',

        # 문자열 메소드 함수
        'lower', 'upper', 'split', 'join', 'strip', 'replace', 'find'
]
    built_in_javascript = [
        # 기본 함수
        'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt',
        
        # 수학 함수
        'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'expm1',
        'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log10', 'log2', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin',
        'sinh', 'sqrt', 'tan', 'tanh', 'trunc',
        
        # 문자열 함수
        'fromCharCode', 'fromCodePoint', 'charAt', 'charCodeAt', 'codePointAt', 'concat', 'endsWith', 'includes', 'indexOf', 'lastIndexOf',
        'localeCompare', 'match', 'matchAll', 'normalize', 'padEnd', 'padStart', 'repeat', 'replace', 'search', 'slice', 'split',
        'startsWith', 'substr', 'substring', 'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toString', 'toUpperCase', 'trim',
        'trimEnd', 'trimStart', 'valueOf',
        
        # 배열 함수
        'from', 'isArray', 'of', 'concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'flat', 'flatMap',
        'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift',
        'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toSource', 'toString', 'unshift', 'values',
        
        # 객체 함수
        'assign', 'create', 'defineProperties', 'defineProperty', 'entries', 'freeze', 'fromEntries', 'getOwnPropertyDescriptor',
        'getOwnPropertyDescriptors', 'getOwnPropertyNames', 'getOwnPropertySymbols', 'getPrototypeOf', 'is', 'isExtensible',
        'isFrozen', 'isSealed', 'keys', 'preventExtensions', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString',
        'toString', 'valueOf', 'seal', 'setPrototypeOf', 'values',
        
        # 날짜 함수
        'now', 'parse', 'UTC', 'getDate', 'getDay', 'getFullYear', 'getHours', 'getMilliseconds', 'getMinutes', 'getMonth', 'getSeconds',
        'getTime', 'getTimezoneOffset', 'getUTCDate', 'getUTCDay', 'getUTCFullYear', 'getUTCHours', 'getUTCMilliseconds', 'getUTCMinutes',
        'getUTCMonth', 'getUTCSeconds', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds', 'setMinutes', 'setMonth', 'setSeconds',
        'setTime', 'setUTCDate', 'setUTCFullYear', 'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
        'toDateString', 'toISOString', 'toJSON', 'toLocaleDateString', 'toLocaleString', 'toLocaleTimeString', 'toString',
        'toTimeString', 'toUTCString', 'valueOf'
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
