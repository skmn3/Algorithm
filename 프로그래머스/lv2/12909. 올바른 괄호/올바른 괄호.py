def solution(s):
    answer = []
    for c in s:
        if c == "(":
            answer.append(c)
        else:
            if answer:
                answer.pop()
            else:
                return False
    if answer:
        return False
    return True
