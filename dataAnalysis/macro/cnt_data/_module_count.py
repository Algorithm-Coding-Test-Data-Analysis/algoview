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

        if file_data["company_name"] == "프로그래머스":
    
            code = re.sub(r"def\s+\w+\s*\(.*?\)\s*:\s*(?=[^\n]+def|$)", "", code, count=1)
            
            has_user_func = 1 if re.findall(r"def\s+\w+", code) else 0
            file_data['check_user_func'] = has_user_func

        else:
            has_user_func = 1 if re.findall(r"def\s+\w+", code) else 0
            file_data['check_user_func'] = has_user_func

        has_user_class = 1 if re.findall(r"class\s+(\w+)", code) else 0
        file_data['check_user_class'] = has_user_class

    return data