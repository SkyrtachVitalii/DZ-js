let str = prompt("Введіть рядок: ");

function ucFirst(str){
    let string = str;
    let firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    let nextLetters = "";
    for(let i = 1; i < string.length; i++){
        nextLetters = nextLetters + string[i];
    }
    let finalString = firstLetter + nextLetters;
    return finalString;
}

console.log(ucFirst(str));