let firstNumber = prompt("Введіть перше число: ");
let secondNumber = prompt("Введіть друге число: ");

function maxNumber(firstNumber, secondNumber){
    return Math.max(firstNumber, secondNumber);
}

console.log(maxNumber(firstNumber, secondNumber));