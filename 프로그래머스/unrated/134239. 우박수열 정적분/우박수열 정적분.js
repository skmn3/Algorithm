function solution(k, ranges) {
    const answer = []
    const collatz = [k]
    const integral = []
    let count = 0
 
    while(k !== 1) {
        if(k % 2 === 0) {
            k = k / 2
        } else {
            k = k * 3 + 1
        }
        collatz.push(k)
        count++
    }
    
    for(let i = 0; i < collatz.length - 1; i++) {
        integral.push( (collatz[i] + collatz[i + 1]) / 2 )
    }
 
    ranges.map(el => {
        const left = el[0]
        const right = integral.length + el[1]
        
        if(left === right) {
            answer.push(0.0)  
        } 
        else if(left > right) {
            answer.push(-1.0)  
        } 
        else {
            let sum = 0.0
            for(let i = left; i < right; i++)
                sum += integral[i]
            answer.push(sum)
        }
    })
    
    return answer
}
