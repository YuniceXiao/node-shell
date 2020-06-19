process.stdout.write('prompt > ');


const printDir = () => {
    process.stdin.on('data', (data)=> {
        console.log(data);
        const cmd = data.toString().trim();
        
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    });
}


module.exports = printDir;