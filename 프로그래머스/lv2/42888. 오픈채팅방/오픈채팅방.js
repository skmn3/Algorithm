function solution(record) {
    const answers = [];
    const userList = {};

    const joinMsg = {
        Enter: "들어왔습니다",
        Leave: "나갔습니다"
    };

    for (let records of record) {
        const [ answer, uid, nickname ] = records.split(' ');
        if (nickname) {
            userList[uid] = nickname;
        }
        if (answer !== "Change") {
            answers.push([answer, uid]);
        }
    }
    return answers.map(([answer, uid]) => `${userList[uid]}님이 ${joinMsg[answer]}.`);
}
