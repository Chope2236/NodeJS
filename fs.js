const fs = require('fs')
const prompt = require('prompt')

prompt.start();

prompt.get(['data'], function(err, result){
    if(err){
        return onerror(err);}
        console.log('\x1b[32m%s\x1b[0m', 'Finished!');


        fs.writeFile('test.txt', result.data, err =>{
            if(err){
                console.error(err)
                return
            }else{
                console.log('\x1b[32m%s\x1b[0m', 'Written!');
            }
        })
});













