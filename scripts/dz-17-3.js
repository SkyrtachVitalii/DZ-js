let firstNumber = 2;
let secondNumber = 2;
deadLine = 25;

function fibbonachiNumbers(firstNumber, secondNumber, deadLine){    
    for(let i = 0; i < deadLine; i++){
        let sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
        console.log("Число фібоначчі: " + sum);
    }
}

fibbonachiNumbers(firstNumber, secondNumber, deadLine);