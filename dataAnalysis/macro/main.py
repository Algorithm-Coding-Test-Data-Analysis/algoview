# Standard library import
import os

# Local application library
from cnt_data import get_data
from cnt_data import insert_countmethod_data
from cnt_data import module_count
from cnt_data import dict_to_json


def get_cnt_data():
    # data collection
    data = get_data()

    # built-in function counting
    built_in_cnt_data = insert_countmethod_data(data)

    # module counting
    func_module_cnt_data = module_count(built_in_cnt_data)

    # final data
    final_data = dict_to_json(func_module_cnt_data)
    return final_data


if __name__ == '__main__':
    data = get_cnt_data()
    
    # return된 data값을 json파일로 저장
    path = os.getcwd()
    with open(f'{path}/dataAnalysis/macro/data.json', 'w', encoding='utf-8') as f:
        f.write(data)
