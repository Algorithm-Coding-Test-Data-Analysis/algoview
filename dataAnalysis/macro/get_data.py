import os

def get_data_from_file(path, file_name) -> dict:
    '''
    data 폴더 내에 모든 파일의 데이터를 수집하여
    dict형태로 만든 후 list로 묶어 반환합니다.

    Args:
        path (str): 파일의 경로
        file_name: 파일의 이름

    Returns:
        file_data (dict): 파일의 데이터
    '''
    f = open(path+'/'+file_name, 'r', encoding='utf-8')
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

    name_split = file_name.split('_')
    file_data = {
        "file_name" : file_name,
        "level":"level"+name_split[0][-1],
        "year":name_split[1],
        "company_name":name_split[2],
        "problem_name" : name_split[3],
        "problem_type" : name_split[4],
        "countmethod": None,
        "line_count":line_ctd,
        "module": None,
        "code": code_str,
    }
    f.close
    return file_data

def get_data() -> list[dict]:
    '''
    data 폴더 내에 모든 파일의 데이터를 수집하여
    dict형태로 만든 후 list로 묶어 반환합니다.

    Args:
        None

    Returns:
        data (list): 수집한 데이터 리스트
    '''
    dir_name = os.getcwd() + '/data/'
    data = []
    for (path, dir, files) in os.walk(dir_name):
        for file_name in files:
            ext = os.path.splitext(file_name)[-1]
            if ext == '.py' or ext == '.js':
                data.append(get_data_from_file(path, file_name))
    return data