def solution(today, terms, privacies):
    answer = []
    
    expire = convert_to_date(today)
    termType = {}
    
    for item in terms:
        type, term = item.split(" ")
        termType[type] = int(term)
    
    for idx, item in enumerate(privacies):
        date, type = item.split(" ")
        
        chDate = convert_to_date(date)
        chDate = add_months(chDate, termType[type])
        
        if chDate <= expire:
            answer.append(idx + 1)
    
    return answer


def convert_to_date(date_string):
    year, month, day = map(int, date_string.split("."))
    return (year, month, day)


def add_months(date, months):
    year, month, day = date
    month += months
    year += month // 12
    month = month % 12
    
    if month == 0:
        month = 12
        year -= 1
    
    return (year, month, day)

