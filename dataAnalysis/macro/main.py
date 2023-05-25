# Standard library import
import os

# Local application library
from get_data import get_data
from module_count import module_count
from built_in_func_cnt import insert_countmethod_data
from dict_to_json import dict_to_json


# data collection
data = get_data()

# built-in function counting
built_in_cnt_data = insert_countmethod_data(data)

# module counting
func_module_cnt_data = module_count(built_in_cnt_data)

# final data
final_data = dict_to_json(func_module_cnt_data)


path = os.getcwd()
with open(f'{path}/dataAnalysis/macro/data.json', 'w') as f:
    f.write(final_data)
