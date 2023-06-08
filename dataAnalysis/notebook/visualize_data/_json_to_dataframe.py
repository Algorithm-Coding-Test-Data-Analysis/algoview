import pandas as pd
import numpy as np
import json
import requests
import unicodedata
from copy import deepcopy


def json_to_dataframe(language = "py"):
    '''
    json 형태인 데이터를 불러와 사전 처리를 거친 후 
    '언어별' 알고리즘 풀이 데이터를 반환합니다.

    Args:
        language (str): 언어 구분 ('py' | 'js'), default 'py'

    Returns:
        data (DataFrame): json 에서 DataFrame으로 변환된 '언어별' 테이블 데이터 
    '''
    
    data_path = "https://raw.githubusercontent.com/Algorithm-Coding-Test-Data-Analysis/algoview/main/dataAnalysis/macro/data.json"                
    resp = requests.get(data_path)
    data_json = json.loads(resp.text)
    
    data_json = file_name_exception(data_json)
    df = json_to_df(data_json)
    df = split_data_into_py_js(df, language)
    
    return df


def remap_problem_type(x):
    '''
    problem_type_list.txt에 리스트업된 문제 유형 기준으로
    중복된 문제 유형을 그룹화합니다.
    
    Args:
        data : (DataFrame | Series)

    Returns:
        data : (DataFrame | Series)
    '''
    
    ptype_list_path = "https://raw.githubusercontent.com/Algorithm-Coding-Test-Data-Analysis/algoview/main/dataAnalysis/problem_type_list.txt"
    res = requests.get(ptype_list_path)
    ptype_list = res.text.split("\n")[2:-1]
    
    for ptype in ptype_list:
        if (x in ptype) or (ptype in x):
            return ptype
    else:
        return x
    

def unicode_err(df):  # 회사명, 문제유형, 문제이름 중복 오류
    
    '''
    unicodedata.normalize() 함수는 문자열에 있는 유니코드 문자를 
    NFKC형식(문자열을 표준 호환성(KC) 형식으로 정규화)으로 정규화합니다.
    problem_name, problem_type, company_name 컬럼의 값 중 같은 값을 
    파이썬에서 다르게 인식하는 문제를 해결합니다.
    
    Args:
        data : (DataFrame | Series)

    Returns:
        data : (DataFrame | Series)
    '''
    
    df["problem_name"] = df['problem_name'].apply(lambda x: unicodedata.normalize('NFKC', x))
    df["company_name"] = df['company_name'].apply(lambda x: unicodedata.normalize('NFKC', x))
    df["problem_type"] = df['problem_type'].apply(lambda x: unicodedata.normalize('NFKC', x))
    df["file_name"] = df['file_name'].apply(lambda x: unicodedata.normalize('NFKC', x))

    return df


def prob_type_to_etc(value):  # 문제 유형이 아닌 카테고리를 "기타"로 분류 (추후 제거 될 수 있는 기능)
    
    '''
    오류로 인해 실제 문제 유형이 아닌 값들을 예외 처리
    추후 추가 혹은 삭제 될 수 있습니다.
    
    Args:
        data : (DataFrame | Series)

    Returns:
        data : (DataFrame | Series)
    '''
    
    err_list = [ # 추후 err_list 종류가 늘어나는 것을 대비, 혹은 문제 유형 list를 만들어 비교하여 제거
               '에라토스테네스의체', 
               ]
    if value in err_list:
        return "기타"
    else:
        return value
    
    
def file_name_exception(json_file):
    err_list_path = "https://raw.githubusercontent.com/Algorithm-Coding-Test-Data-Analysis/algoview/main/dataAnalysis/excluded_list.txt"
    res = requests.get(err_list_path)
    err_list = res.text.split("\n")[2:-1]

    print("예외 처리 전 json 파일 길이: ", len(json_file))
    
    for error_file in err_list:
        try:
            del json_file[error_file]
        except KeyError:
            pass

    print("예외 처리 후 json 파일 길이: ", len(json_file))
    
    return json_file


def split_data_into_py_js(data, lang = "py"):  # Python, JavaScript로 data 분리
    
    '''
    전체 데이터인 DataFrame을 입력 받아
    Pytho과 JavaScript 별로 데이터를 분리

    Args:
        data (DataFrame): DataFrame으로 변환된 data
        language  (str): 언어 구분

    Returns:
        언어별 데이터 (DataFrame)
    '''
    
    print("-"*5, "split into python DataFrame & js DataFrame","-"*5)
    
    df = data.copy()
    if lang == "py":
        py_df = df[df["file_name"].str.contains(".py")].reset_index(drop = True)
        print("python DataFrame 길이: {0}".format(len(py_df)))
        return py_df
    
    elif lang == "js":
        js_df = df[df["file_name"].str.contains(".js")].reset_index(drop = True)
        print("js DataFrame 길이: {0}".format(len(js_df)))
        return js_df

    
def json_to_df(json_file):  # methodcount 와 method명을 분리하기 위함
    
    '''
    json 형태인 데이터를 입력 받아
    DataFrame으로 변환
    ‘function_method’ column 안에 method 와 module이 함께 집계됩니다.

    Args:
        data : (json)

    Returns:
        data : (DataFrame)
    '''
    
    data_json = deepcopy(json_file)
    df = pd.DataFrame() # empty DataFrame
    for file_name in data_json.keys():
        temp_df = pd.DataFrame(data_json[file_name])
        temp_df = temp_df.reset_index()
        df = pd.concat([df, temp_df], axis = 0) 

        temp_df_len = len(temp_df)  # countmethod가 0인 파일 사전 처리 후 concat
        if temp_df_len == 0:
            temp_df = pd.DataFrame(data_json[file_name], index = [0]).reset_index()
            df = pd.concat([df, temp_df], axis = 0)
            
    df = df.reset_index(drop = True).rename(columns = {"index" : "function_method"})  # method명 column으로 변환
    df = df[['file_name', 'level', 'year', 'company_name','problem_name', 'problem_type',  # column 순서 재배치
             'function_method', 'countmethod', 'module', 'check_user_class', 'line_count', 'code']]

    df = df.fillna(np.nan)
    df = unicode_err(df) # 회사명, 문제유형, 문제이름 중복 오류
    df["problem_type"] = df["problem_type"].apply(lambda x: prob_type_to_etc(x))  # 문제 유형이 아닌 카테고리를 "기타"로 분류
    df["company_name"] = df["company_name"].apply(lambda x: prob_type_to_etc(x))  # 문제 유형이 아닌 카테고리를 "기타"로 분류
    df = df.drop(df.loc[df["code"] == "",:].index).reset_index(drop = True)
    df["check_user_class"] = df["check_user_class"].astype("int").astype("category")
    df["problem_type"] = df["problem_type"].apply(lambda x: remap_problem_type(x))
    df.loc[df["function_method"] == 0, "function_method"] = df.loc[df["function_method"] == 0, "function_method"].apply(lambda x: str(x).replace("0", "None")) # module 혹은 method를 사용하지 않은 경우 "None" 으로 대체

    
    return df





