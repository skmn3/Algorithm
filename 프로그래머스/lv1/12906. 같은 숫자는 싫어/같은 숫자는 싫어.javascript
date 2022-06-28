function solution(arr) {
     var answer = [];
     return arr.filter((val, index) => val !== arr[index + 1]);
}
