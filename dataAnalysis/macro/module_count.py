from get_data import get_data
from collections import Counter
import re

data = get_data()
for file_data in data:
    code = file_data['code']

    module_counts = Counter()

    modules = re.findall(r'(?:import|from)\s+(\w+)', code)
    module_counts.update(modules)

    file_data['module'] = dict(module_counts)

    file_data.pop('code')
