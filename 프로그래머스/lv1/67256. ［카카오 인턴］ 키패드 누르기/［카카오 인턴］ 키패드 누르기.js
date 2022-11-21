function solution(numbers, hand) {
    var answer = '';
    let keyPad = [ [0,0], [1,0], [2,0],
                   [0,1], [1,1], [2,1],
                   [0,2], [1,2], [2,2],
                   [0,3], [1,3], [2,3]
                 ];
    let left = keyPad[9];
    let right = keyPad[11];        
    
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i] === 0 ? 10 : Number((numbers[i])-1);        
        let next = keyPad[num];
        
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            left = next;
            answer += 'L';
            continue;
        } else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            right = next;
            answer += 'R';
            continue;
        }

        let distanceLeft = Math.ceil(Math.sqrt((next[0] - left[0])**2 + (next[1] - left[1])**2)); 
        let distanceRight = Math.ceil(Math.sqrt((next[0] - right[0])**2 + (next[1] - right[1])**2));
        
        if (distanceLeft < distanceRight) {
            left = next;
            answer += 'L';
        } else if (distanceRight < distanceLeft) {
            right = next;
            answer += 'R';
        } else if (distanceLeft === distanceRight) {
            if(hand === 'left') {
                left = next;
                answer += 'L';
            } else if (hand === 'right') {
                right = next;
                answer += 'R';
            }                
        }        
    }        
    return answer;
}