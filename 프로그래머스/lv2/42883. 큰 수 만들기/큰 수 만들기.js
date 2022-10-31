function solution(number, k) {
    const arr = [];
    for(let i = 0; i < number.length; i ++) {
      (function recur() {
        if(k > 0 && arr[arr.length-1] < number[i]) {
            arr.pop();
            k--;
            recur()
         }
      })()  
      arr.push(number[i]);
    }  
    return arr.slice(0,arr.length-k).join('');  
}
