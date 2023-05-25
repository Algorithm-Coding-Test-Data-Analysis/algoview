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

    return data
