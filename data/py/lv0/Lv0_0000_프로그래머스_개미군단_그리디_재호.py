def solution(hp):
    장군개미수 = hp // 5
    hp = hp - 장군개미수 * 5
    
    병정개미수 = hp // 3
    hp = hp - 병정개미수 * 3
    
    일개미수 = hp // 1
    hp = hp - 일개미수 * 3
    
    return 장군개미수 + 병정개미수 + 일개미수