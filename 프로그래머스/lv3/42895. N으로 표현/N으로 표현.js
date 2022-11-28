function solution(N, number) {
  let answer = Array(8).fill().map(() => new Array());

  for (let i = 0; i < 8; i++) {
    answer[i].push(Number(N.toString().repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (let x of answer[j]) {
        for (let y of answer[i-j-1]) {
          answer[i].push(x + y);
          answer[i].push(x - y);
          answer[i].push(x * y);
          answer[i].push(x / y);
        }
      }
    }
    if (answer[i].includes(number)) {
        return i + 1;
    }
  }
  return -1;
}