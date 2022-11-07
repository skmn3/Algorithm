const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const arr = input.map(Number);

function solution(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    if(n===3) return 4;

    return solution(n-1) + solution(n-2) + solution(n-3);
}

arr.forEach((item) => console.log(solution(item)))
