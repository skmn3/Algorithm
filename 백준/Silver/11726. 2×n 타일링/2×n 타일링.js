const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(n) {
  const memo = [...Array(1000)];

  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i < n + 1; i += 1) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }

  console.log(memo[n]);
}

solution(n);
