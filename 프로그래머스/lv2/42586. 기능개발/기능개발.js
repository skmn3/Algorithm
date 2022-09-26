function solution(progresses, speeds) {
    let answer = [0];

    const progress = progresses.map((time, index) =>
        Math.ceil((100 - time) / speeds[index])
    );

    let maxDay = progress[0];

    for (let i = 0, j = 0; i < progress.length; i++) {
        if (progress[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = progress[i];
            answer[++j] = 1;
        }
  }
  return answer;
}