const fs = require('fs');

process.stdout.write('prompt > ');

const cat = () => {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().split(' ');
        fs.readFile(cmd[1], (err, data) => {
            if (err){
                throw err
            }else{
                process.stdout.write(data);
            }
          });
    }

    )}

module.exports = cat;