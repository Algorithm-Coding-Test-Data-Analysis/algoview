from collections import Counter
import re

def module_count(data):
    for file_data in data:
        code = file_data['code']

        module_counts = Counter()

        matches = re.findall(
            r'(?:from|import)\s+([\w\s,]+?)(?:\s+as\s+\w+)?(?=\s*import|\n|$)', code)

        for match in matches:
            modules = [m.strip() for m in match.split(',')]
            module_counts.update(modules)

        file_data['module'] = dict(module_counts)

        if code:
            # 프로그래머스 등 기존 def 이슈로 잠시 주석
            # 사용자 정의 함수 여부 체크
            # matches = re.findall(r"def\s+(\w+)", code_str)
            # has_custom_functions = 1 if matches else 0
            # file_data['check_custom_functions'] = has_custom_functions
            
            has_user_class = 1 if re.findall(r"class\s+(\w+)", code) else 0
            file_data['check_user_class'] = has_user_class

    return data
