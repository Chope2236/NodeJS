const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's your name", function(name){
    rl.question("What's your adress", function(adress){
    console.log(`User name is ${name}, and lives in ${adress}`);
    rl.close;
    });
});