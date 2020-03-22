const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let ans = '';
    if (expr.length %10 != 0) {
        for (let i = 0; i < expr.length%10; i++) {
            expr = '0' + expr;
        }
    }
    for (let j = 0; j + 10 <= expr.length; j += 10) {
        let code = expr.substr(j, 10);
        if (code === '**********') ans += ' ';
        else {
            code = code.replace(/10/g,'.');
            code = code.replace(/11/g,'-');
            code = code.replace(/0/g,'');
            ans += MORSE_TABLE[code];
        }
    }
    return ans;
}

module.exports = {
    decode
}