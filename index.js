process.stdin.on('readable', function() {
    
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'exit': 
                process.stdout.write('Quitting app!\n'); //kończenie pracy programu
                process.exit();
                break;
            case 'node-version':
                console.log(process.version);  // wyświetlenie wersji node js
                break;
            case 'language':
                console.log(process.env.LANG);// język systemowy użytkownika
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});