import re


def check_custom_functions(code_str) -> int:
    matches = re.findall(r"def\s+(\w+)", code_str)
    has_custom_functions = 1 if matches else 0
    file_data['user_class'] = has_custom_functions

    return file_data