# Standard library import
import os
import json

# Local application library
from visualize_data import json_to_dataframe
from visualize_data import py_get_dict
from visualize_data import js_get_dict


def get_viz_json():
    # load json and transform into dataframe
    py_df = json_to_dataframe("py")
    js_df = json_to_dataframe("js")

    temp_dict = {}
    temp_dict['py'] = py_get_dict.get_dict(py_df)
    temp_dict['js'] = js_get_dict.get_dict(js_df)

    return temp_dict


if __name__ == '__main__':
    data = get_viz_json()
    
    # write data into json format
    path = os.getcwd()

    with open(f'{path}/dataAnalysis/notebook/chart_data.json', "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii = False, indent = 4)