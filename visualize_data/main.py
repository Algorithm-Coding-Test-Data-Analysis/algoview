# Standard library import
import os

# Local application library
from visualize_data import json_to_dataframe



def get_viz_json():
    # load json and transform into dataframe
    py_df = json_to_dataframe("py")
    js_df = json_to_dataframe("py")



# if __name__ == '__main__':
#     data = get_viz_json()
    
#     # write data into json format
#     path = os.getcwd()
#     with open(f'{path}/dataAnalysis/notebook/data.json', 'w', encoding='cp949') as f: 
#         f.write(data)