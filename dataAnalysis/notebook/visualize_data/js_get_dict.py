import pandas as pd
import re

# 전체 데이터 저장하는 모듈

def get_dict(df):
    '''
    JavaScript 문제의 전체 데이터를 dictionary 형태로 변환하여 반환하는 함수입니다.
    '''    
    
    # 파트별 딕셔너리 데이터 생성
    
    level_problem_name, level_problem_type, level_problem_type_ratio, level_per_function_method, function_method_sort = get_level_dict(df)  # 레벨별 & 전체적인 메서드 사용 현황
    problem_type_count, problem_type_function_method = get_ptype_dict(df)  # 문제유형별

    years, year_type = get_year_dict(df) # 연도별
    companys, company_type, company_ptype_radar = get_c_dict(df) # 출제업체별

    # 딕셔너리에 파트별 데이터 삽입
    
    ## 전체 데이터 저장할 딕셔너리
    temp_dict = {}
    
    ## level 별
    temp_dict['level_problem_name'] = level_problem_name
    temp_dict['level_problem_type'] = level_problem_type
    temp_dict['level_problem_type_ratio'] = level_problem_type_ratio
    temp_dict['level_per_function_method'] = level_per_function_method
    temp_dict['function_method_sort'] = function_method_sort

    ## 문제유형별
    temp_dict['problem_type_count'] = problem_type_count
    temp_dict['problem_type_function_method'] = problem_type_function_method
    
    ## 연도별
    temp_dict['years'] = years
    temp_dict['year_type'] = year_type

    ## 출제업체별
    temp_dict['companys'] = companys
    temp_dict['company_type'] = company_type
    temp_dict['company_ptype_radar'] = company_ptype_radar
    
    return temp_dict


# 레벨별

def multi_index_to_dict(data):
    temp_dict = dict()
    for (index_1,index_2), value in data.items():
        if index_1 not in temp_dict:
            temp_dict[index_1] = {}
        temp_dict[index_1][index_2]  = value
    return temp_dict


def get_level_dict(df):
    
    # 레벨별 문제 수 : 지금까지 푼 문제 중 레벨별 문제 id의 개수를 의미합니다.
    temp_df = df.copy()
    temp_df["problem_name"] = temp_df["problem_name"].apply(lambda x: re.sub("\(1\)|\s", "", x))
    temp_df = temp_df.groupby("level")["problem_name"].nunique()
    level_problem_name = temp_df.to_dict()

    # 레벨별 고유한 문제 유형 개수 : 총 13개의 문제 유형 중 레벨별 문제 유형 id의 개수를 의미합니다.
    temp_df = df.copy()
    temp_df["problem_type"] = temp_df["problem_type"].apply(lambda x: re.sub("\(1\)|\s", "", x))
    temp_df = temp_df.groupby("level")["problem_type"].nunique()
    level_problem_type = temp_df.to_dict()
    
    # 레벨별 문제 유형 비율 : 사람들이 레벨별 어떤 문제 유형을 많이 풀었는지 살펴보실 수 있습니다.
    temp_df = df.copy()
    temp_df["file_name"] = temp_df["file_name"].apply(lambda x: re.sub("\s", "", x))
    temp_df["problem_type"] = temp_df["problem_type"].apply(lambda x: re.sub("\(1\)|\s", "", x))
    temp_df = temp_df.groupby(["level","problem_type"])["file_name"].nunique()
    level_problem_type_ratio = multi_index_to_dict(temp_df)
    
    # 레벨별 메소드 이용수, 누적 : 레벨별로 어떤 메소드를 주로 사용하여 문제를 풀이했는지 살펴보실 수 있습니다.
    temp_df = df.copy()
    temp_df = temp_df.loc[temp_df["module"].isna(),:]
    temp_df = temp_df.groupby(['level','function_method'])['countmethod'].sum()
    level_per_function_method = multi_index_to_dict(temp_df)

    # 메소드 이용 현황, 누적 값 : 문제 풀이 시, 어떤 메소드를 많이 사용했는지 순위 표를 보실 수 있습니다.
    temp_df = df.copy()
    function_method_sort = temp_df.groupby("function_method")["countmethod"].sum().sort_values(ascending = False).nlargest(10).to_dict()
    
    return level_problem_name, level_problem_type, level_problem_type_ratio, level_per_function_method, function_method_sort


# 연도별

def NaN_to_None(d):
    return {k1 : {k2: None if v2 == -1 else v2 for k2, v2 in v1.items()} \
                    for k1, v1 in d.items()}


def get_year_dict(df):

    # 연도 별 수집 문제 수
    temp_df = df.copy()
    temp_df = temp_df.loc[temp_df.year!='0000']
    temp_df = temp_df.drop_duplicates('problem_name')
    temp_df = temp_df.groupby('year')['file_name'].count()
    years = temp_df.to_dict()


    # 연도 별 문제 유형 수
    temp_df = df.copy()
    temp_df = temp_df.loc[temp_df.year!='0000']
    temp_df = temp_df.drop_duplicates('problem_name')
    temp_df = temp_df.sort_values('year', ascending=False)

    year_type = temp_df.groupby(['year', 'problem_type']).size().unstack().fillna(-1).to_dict()
    year_type = NaN_to_None(year_type)

    
    return years, year_type


# 출제업체별

def NaN_to_None(d):
    return {k1 : {k2: None if v2 == -1 else v2 for k2, v2 in v1.items()} \
                    for k1, v1 in d.items()}

def get_c_dict(df):
    
    # 회사별 문제수
    temp_df = df.copy()
    temp_df = temp_df.drop_duplicates('problem_name')
    
    companys = temp_df.groupby('company_name').count().iloc[:,:1].to_dict()['file_name']
    

    # 회사별 문제 유형
    temp_df = df.copy()
    temp_df = temp_df.drop_duplicates('problem_name')
    
    company_type = temp_df.groupby(['problem_type','company_name'])['file_name'].count().unstack().fillna(-1).to_dict()
    company_type = NaN_to_None(company_type)
    
    # 회사 별 문제 유형 비율 (라이다)

    temp_df = df.copy()
    temp_df = temp_df.drop_duplicates('problem_name')
    temp_df = temp_df.loc[temp_df.problem_type != '구현']
    temp_df = temp_df.groupby(['problem_type','company_name'])['file_name'].count().unstack()
    company_ptype_radar = (temp_df/temp_df.sum()).fillna(0).to_dict()
    
    return companys, company_type, company_ptype_radar


# 문제유형별

def df_to_dict(df):
    '''
    분석 시각화 데이터를 딕셔너리 자료형으로 변환
    '''
    
    if df.index.nlevels == 1:
        return df.to_dict()

    elif df.index.nlevels == 2:
        temp_dict = {}
        for (first_key, second_key), value in df.items():
            if first_key not in temp_dict:
                temp_dict[first_key] = {}
            temp_dict[first_key][second_key] = value
        return temp_dict

def drop_duplicated_solution(df):
    '''
    같은 문제에 대한 중복 풀이 데이터를 처리합니다.
    중복 풀이 중 중복 사용된 메서드는 중앙값으로 집계 처리 합니다.

    Args:
        data: (DataFrame)
    Returns:
        data: (DataFrame)
    '''
    
    df = df.loc[df['module'].isna()]  # 메서드, 함수 사용 데이터 추출
    df = df[df['function_method'] != 'FunctionNotUsed']  # 메서드, 함수 미사용 데이터 제거
    df["problem_name"] = df["problem_name"].apply(lambda x: re.sub("\(1\)|\s", "", x))  # 문제이름(1)과 문제이름 => 동일 문제 처리

    # 중복 풀이된 고유 문제이름 리스트
    dup_pname_lst = df.loc[df['file_name'].apply(lambda x: x[-4]) == '1', 'problem_name'].unique()
    
    #중복 풀이가 있는 고유 데이터의 수: 79
    dup_df = df[df['problem_name'].isin(dup_pname_lst)]
    dup_df = dup_df.groupby(['problem_name', 'problem_type', 'function_method'])['countmethod'].median().reset_index()

    # 중복 풀이 없는 고유 데이터의 수: 66
    not_dup_df = df.loc[~df['problem_name'].isin(dup_pname_lst), 'problem_name':'countmethod']

    df = pd.concat([not_dup_df, dup_df], axis = 0, ignore_index = True)
    
    return df

def get_ptype_dict(df):
    '''
    JavaScript 문제의 문제유형별 문제 수를 카운트하는 함수입니다.
    JavaScript 문제의 문제유형마다 사용된 메소드별 횟수를 카운트하는 함수입니다.
    '''

    # 문제의 문제유형별 문제 수

    temp_df = df.copy()
    temp_df = temp_df.drop_duplicates(['file_name'], keep='first')
    temp_df = temp_df['problem_type'].value_counts()

    problem_type_count = df_to_dict(temp_df)

    # 차트에 시각화할 상위 갯수 지정
    top_n = 5

    # 문제유형별 사용된 메소드별 횟수
    temp_df = df.copy()
    temp_df = drop_duplicated_solution(temp_df)
    temp_df = temp_df[temp_df["problem_type"] != "구현"] # 현 데이터에 문제유형 중 '구현'(문제유형 불분명)이 상당 부분 차지하므로 임시 제외
    temp_df = temp_df.groupby(['problem_type', 'function_method'])['countmethod'].sum()
    temp_df = temp_df.groupby('problem_type').nlargest(top_n).reset_index(level = 0, drop = True)
    
    sorted_index = temp_df.groupby('problem_type').sum().sort_values(ascending = False).index
    temp_df = temp_df.loc[sorted_index]
    problem_type_function_method = df_to_dict(temp_df)
    
    return problem_type_count, problem_type_function_method