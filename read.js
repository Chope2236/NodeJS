const { filter } = require('async');
const fs = require('fs');

    const data = fs.readFileSync('jokes.txt', 'utf-8');

    const lines = data.split('\n#\n');
    
    var miArray = [];

    lines.forEach((line) =>{
        miArray.push(line)
    });
// p = appears n=line
    var leader,leaderJ, actual, last = 0;
    for(i = 0; i < miArray.length-1; i++){
        var appears = 0; 
        actual = miArray[i];
            for(n = 0; n < miArray.length-1; n++){
                if(miArray[i] == miArray[n]){
                    appears++;
                }
            }
            if(appears > last){
                leaderJ = miArray[i];
                leader = appears;
            }
    last = appears;
    }
    console.log('The sentence ' + '"' + leaderJ + '"' + ' appears ' + leader + ' times');