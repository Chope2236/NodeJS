const prompt = require('prompt');

prompt.start();


prompt.get(['username', 'age'], function(err, result){
    if(err){
        return onerror(err);}
        console.log('Username: ' + result.username);
        console.log('age: ' + result.age);
        console.log('\x1b[32m%s\x1b[0m', 'Finished!');

});

function onerror(err){
    console.log('error');
    return 1;
}