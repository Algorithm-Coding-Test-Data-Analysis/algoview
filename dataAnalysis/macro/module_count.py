# Standard library import
from collections import Counter
import re

# Local application import
from get_data import get_data


def module_count(data):
    for file_data in data:
        code = file_data['code']

        module_counts = Counter()

        modules = re.findall(r'(?:import|from)\s+(\w+)', code)
        module_counts.update(modules)

        file_data['module'] = dict(module_counts)

        file_data.pop('code')
    return data


if __name__ == '__main__':
    data = get_data()
    print(module_count(data))
