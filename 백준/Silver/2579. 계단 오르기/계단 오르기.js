const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let input = [];

rl.on('line', line => input.push(line)).on('close', () => {
    const n = parseInt(input.shift());
    input = input.map(Number);
    dp = Array(301);

    dp[0] = input[0];
    dp[1] = Math.max(input[0]+input[1], input[1]);
    dp[2] = Math.max(input[1]+input[2], input[0]+ input[2]);

    for(let i =3; i<n; i++){
        dp[i] = Math.max(input[i] + dp[i-2], input[i]+input[i-1]+ dp[i-3]);
    }

    console.log(dp[n-1]);
})
