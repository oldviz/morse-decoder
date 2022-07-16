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
  let l = expr.length / 10;
  let i = 0;
  let binary = [];
  let morse = [];
  let result = '';
  while (i < l) {
    expr.slice(i * 10, (i + 1) * 10) === '**********' ? binary.push(' ') : binary.push(Number(expr.slice(i * 10, (i + 1) * 10)));
    i++;
  }
  l = binary.length;
  i = 0;
  while (i < l) { 
  morse.push(String(binary[i]).replace(/10/g, "." ).replace(/11/g, "-" ));
  i++;
  }
  l = morse.length;
  i = 0;
  while (i < l) {
    morse[i] === ' ' ? result = result + ' ' : result = result + MORSE_TABLE[morse[i]]
    i++
  }
  return result
}

module.exports = {
    decode
}