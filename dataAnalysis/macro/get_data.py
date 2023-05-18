import os

def get_data() -> list[dict]:
    '''
    data 폴더 내에 모든 파일의 데이터를 수집하여
    dict형태로 만든 후 list로 묶어 반환합니다.

    Args:
        None

    Returns:
        data (list): 수집한 데이터 리스트
    '''
    path = os.getcwd() + '/data/'
    file_list = os.listdir(path)
    data = []
    for i in file_list:
        f = open(path + i, 'r', encoding='utf-8')
        code_str = ''
        line_ctd = 0
        while True:
            line = f.readline()
            if line == '\n':
                continue
            if not line:
                break
            code_str += line
            line_ctd += 1

        name_split = i.split('_')
        data.append({
            "file_name" : i,
            "level":"level"+name_split[0][-1],
            "year":name_split[1],
            "company_name":name_split[2],
            "problem_name" : name_split[3],
            "problem_type" : name_split[4],
            "countmethod": None,
            "line_count":line_ctd,
            "module": None,
            "code": code_str,
        })
        f.close
    return data