
2
3
4
5
6
7
8
9
10
11
12
13
14
15
def solution(triangle):
    answer = 0
    n = len(triangle)
    dp = [triangle[i] + [-1] * (n-i-1) for i in range(n)]

    for i in range(1, n):
        for j in range(n):
            if j == 0:
                dp[i][j] += dp[i-1][j]
            else:
                dp[i][j] += max(dp[i-1][j], dp[i-1][j-1])

    return max(dp[-1])
