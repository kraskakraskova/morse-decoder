const MORSE_TABLE = {
  " ": " ",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  wordsArray = expr.split("**********");

  let newArray = [];
  for (let key in wordsArray) {
    newArray.push(wordsArray[key]);
    if (Number(key) !== wordsArray.length - 1) {
      newArray.push(" ");
    }
  }

  let finArray = [];
  for (let key in newArray) {
    for (i = 0; i < newArray[key].length; i = i + 10) {
      finArray.push(newArray[key].slice(i, i + 10));
    }
  }

  let morseArray = [];
  for (let key in finArray) {
    morseArray.push(
      finArray[key]
        .replaceAll("10", ".")
        .replaceAll("11", "-")
        .replaceAll("00", "")
    );
  }

  let res = [];
  for (let key in morseArray) {
    res.push(MORSE_TABLE[morseArray[key]]);
  }

  return res.join("");
}

module.exports = {
  decode,
};
