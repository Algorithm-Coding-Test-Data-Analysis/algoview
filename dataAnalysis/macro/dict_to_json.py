# Standard library import
import json

# Local application import
import module_count as mc
import get_data as gd
import built_in_func_cnt as bf

def dict_to_json(data):
    '''
    module과 method count가 완료된 list(dict) 형태의 데이터를 입력받아
    file_name을 key로 하는 dict(dict)로 변환하여 JSON으로 반환합니다.

    Args:
        count가 끝난 list(dict)형태의 data

    Returns:
        file_name을 key로 가지는 dict(dict) 형태의 JSON
    '''
    json_data = {}
    for file_data in data:
        json_data[file_data['file_name']] = file_data
    return json.dumps(json_data, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    data = gd.get_data()
    data_built_in_counted = bf.insert_countmethod_data(data)
    data_module_counted = mc.module_count(data_built_in_counted)
    data_json = dict_to_json(data_module_counted)
    print(data_json)