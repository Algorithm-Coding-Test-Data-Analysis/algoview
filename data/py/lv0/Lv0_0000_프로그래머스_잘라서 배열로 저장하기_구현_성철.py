import re

solution = lambda my_str, n: re.findall(f'(.{{1,{n}}})', my_str)
