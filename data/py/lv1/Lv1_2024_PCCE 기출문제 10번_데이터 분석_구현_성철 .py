def solution(data, ext, val_ext, sort_by):
    exts = ("code", "date", "maximum", "remain")
    filter_data = list(filter(lambda x: x[exts.index(ext)] < val_ext, data))
    return sorted(filter_data, key=lambda x: x[exts.index(sort_by)])