function solution(people, limit) {
    var answer = 0;
    people = people.sort((a, b) => b -a)
    
    let peopleCnt = people.length
    for (let i = 0; i < peopleCnt; i++) {
        if (people[i] + people[peopleCnt-1] <= limit) {
            peopleCnt--;
        }
        answer++;
    }
    
    return answer;
}