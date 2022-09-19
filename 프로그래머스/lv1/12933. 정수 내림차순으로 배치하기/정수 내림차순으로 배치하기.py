# def solution(n):
#    lt = list(str(n))
#    lt.sort(reverse=True)
#    return int(''.join(lt))


def solution(n):
    return int(''.join(sorted(str(n), reverse=True)))
