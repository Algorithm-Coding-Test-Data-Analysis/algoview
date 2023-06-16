import re
import requests
import unicodedata

key_pattern = r'\- ([^\(]+)\(([^)]+)\).*'
value_pattern = r'- ([^:]+):\s*([^)]+)'

def get_description_text():
    chart_description_path = 'https://raw.githubusercontent.com/Algorithm-Coding-Test-Data-Analysis/algoview/main/dataAnalysis/notebook/visualization_description.txt'
    res = requests.get(chart_description_path)
    chart_description = res.text.split("\n")

    return chart_description


def extract_from_text(lst, pattern):
    temp_lst = []

    for line in lst:
        match = re.match(pattern, line)
        if match:
            temp = match.group(2).strip()
            temp_lst.append(temp)
    
    return temp_lst


def remove_unicode(lst):
    new_lst = []
    for item in lst:
        item = ''.join(c for c in unicodedata.normalize('NFD', item) if not unicodedata.combining(c))
        new_lst.append(item)
    return new_lst


def description_to_dict():
    temp_lst = get_description_text()
    temp_lst = remove_unicode(temp_lst)
    key_lst = extract_from_text(temp_lst, key_pattern)
    value_lst = extract_from_text(temp_lst, value_pattern)

    temp_dict = dict(zip(key_lst, value_lst))
    return temp_dict
