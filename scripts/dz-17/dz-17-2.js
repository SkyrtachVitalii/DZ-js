let step = 2;
let sum = 0;
let counter = 100;

function arifmeticProgression(step, sum, counter){
    console.log(sum);
    for(let i = 0; i < counter; i++){
        sum +=step;
        console.log("Арифметична прогресія: " + sum);
    }
}

arifmeticProgression(step, sum, counter);