
const readline = require('readline');

function putStr(questionText) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(questionText, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}


module.exports = putStr;
