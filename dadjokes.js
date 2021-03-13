const fs = require('fs');
const prompt = require('prompt');
const request = require('request');
prompt.start();


// reads the jokes file
const data = fs.readFileSync('jokes.txt', 'utf-8');
//defines that the jokes finish in \n#\n
const lines = data.split('\n#\n');
//creates the array
var miArray = [];
// for each line of the jokes.txt add it to the array
lines.forEach((line) =>{
    miArray.push(line)
});
// the 2 options, joke, or leaderboard
prompt.get(['input'], function (err, input){
    //writes a random joke and saves it in jokes.txt
    if(input.input == 'joke'){
        prompt.get(['term'], function (err, result){
            if(err){
                console.error('ERROR IN THE INPUT');
            }
            const options = {
                url: 'https://icanhazdadjoke.com/search?term=' + result.term,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Accept-charset': 'utf-8',
                    'User-Agent': 'my-agent',
                }
            };
            //request for the API
            request(options, (err, res, body) => {
                if (err){
                    console.error('ERROR IN THE REQUEST');
                }else{
                    if(body == null){
                        console.log('No jokes were found for that search term.');
                        return 0;
                    }else{   
                        //'n' generates a random number, then, that random number selects the joke
                        let obj = JSON.parse(body)
                        if(obj.results == undefined){
                            console.log('No jokes were found for that search term.');
                            return 0;
                        }else{
                            let n = between(0, obj.results.length)
                            let j = obj.results[n].joke
                            //Logs the joke
                            console.log(j);
                            //Writes the joke in log, in the jokes.txt
                            fs.appendFile('jokes.txt',j + '\n#\n' , function (err){
                                if(err){
                                    console.error('ERROR IN WRITE FILE');
                                }
                            })
                        }
                    }
                }     
            });
            })
    }else{
        //shows the joke that appears more times
        if(input.input == 'leaderboard'){
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
        }else{
            // if input is note joke or leaderboard, return 0
            return 0;
        }
    }
})
//RNG
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

