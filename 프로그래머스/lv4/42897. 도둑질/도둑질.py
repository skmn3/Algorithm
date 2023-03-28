def solution(money):
    dyp1 = [0] * len(money)
    dyp2 = [0] * len(money)
    dyp1[0] = money[0]
    
    for i in range(1, len(money) - 1):
        dyp1[i] = max(dyp1[i - 1], dyp1[i - 2] + money[i])
        
    dyp1[0] = 0
    for i in range(1, len(money)):
        dyp2[i] = max(dyp2[i - 1], dyp2[i - 2] + money[i])

    return max(dyp1[-2], dyp2[-1])

