import os
import re


name_count_dict = {}  # 중복된 문제 카운트를 위한 global dict

def get_data() -> list[dict]:
    '''
    data 폴더 내에 모든 파일의 데이터를 수집하여
    dict형태로 만든 후 list로 묶어 반환합니다.
    파일 제목이 컨벤션에 맞지 않으면 제외하고
    제외된 목록을 /dataAnalysis/macro/excluded_list.txt에 저장합니다.

    Args:
        None

    Returns:
        data (list): 수집한 데이터 리스트
    '''
    dir_name = os.getcwd() + '/data/'
    data = []
    excluded_list = []

    # 파일 순회 시작
    for (path, dir, files) in os.walk(dir_name):
        for file_name in files:
            if check_file_name(file_name):  # 파일 이름이 유효한지 검사
                data.append(get_data_from_file(path, file_name))
            else:
                if (file_name in excluded_list) or file_name == 'README.md':
                    continue  # 기존에 있던 파일이거나, README.md는 수집되지 않음
                else:
                    excluded_list.append(file_name)

    # 제외된 목록 저장
    dataAnalysis_folder_path = os.path.join(os.getcwd(), '..')
    with open(os.path.join(dataAnalysis_folder_path, 'excluded_list.txt'), 'w', encoding='utf-8') as f:
        f.write('파일 업로드 양식에 맞지 않아 수집되지 않은 파일 리스트입니다.\n\n')
        for i in excluded_list:
            f.write(str(i).replace('/', '\\') + '\n')

    return data


def check_file_name(file_name: str) -> bool:
    '''
    파일 이름이 컨벤션에 맞게 되어있는지 정규표현식으로 확인합니다.
    예시) Lv0_0000_회사명_문제명_유형_제출자.js

    Args:
        file_name (str): 파일의 이름

    Returns:
        bool: 컨벤션에 맞는지 유무
    '''
    # \u2005 : 일반 공백처럼 보이나 다른 문자, 이것이 들어간 파일이 있어서 추가함
    p = re.compile(r'Lv[0-9]_[0-9]{4}(_[^_\u2005]{1,}){4}\.(js|py)', re.IGNORECASE)
    if p.fullmatch(file_name):
        return True
    return False


def get_data_from_file(path: str, file_name: str) -> dict:
    '''
    파일 하나를 읽어 데이터를 dict로 만들어 반환합니다.

    Args:
        path (str): 파일의 경로
        file_name (str): 파일의 이름

    Returns:
        file_data (dict): 파일의 데이터
    '''
    f = open(path+'/'+file_name, 'r', encoding='utf-8')

    # 코드 내용을 한줄씩 읽어서 카운트 하고, 코드 내용을 변수로 저장
    code_str = ''
    line_cnt = 0
    while True:
        line = f.readline()
        if line == '\n':
            continue
        if not line:
            break
        code_str += line
        line_cnt += 1

    # 파일명 일관되게 수정
    global name_count_dict
    name_split = file_name.split('_')
    name_split[0] = 'Lv' + name_split[0][-1]
    name_split[2] = name_split[2].upper()
    name_split[3] = name_split[3].replace(' ', '').upper()
    name_split_ext = '.' + name_split[5].split('.')[1]

    # 같은 문제들 카운팅하여 제출자 이름을 넘버링으로 수정
    temp_name = name_split[3] + name_split_ext  # 문제명 + .확장자
    if temp_name in name_count_dict:
        name_count_dict[temp_name] += 1
        name_split[5] = str(name_count_dict[temp_name])
    else:
        name_count_dict.update({temp_name : 0})
        name_split[5] = str(0)

    # 반환되는 dict 값
    file_data = {
        "file_name" : '_'.join(name_split) + name_split_ext,
        "level":"level"+name_split[0][-1],
        "year":name_split[1],
        "company_name":name_split[2],
        "problem_name" : name_split[3],
        "problem_type" : name_split[4],
        "countmethod": None,
        "line_count":line_cnt,
        "module": None,
        "code": code_str,
    }

    f.close
    return file_data