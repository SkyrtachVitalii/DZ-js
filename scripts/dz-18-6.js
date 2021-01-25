//Рандом від числа та до числа користувача
let number1 = prompt("Введіть число від якого відмірюється діапазон чисел: ");
let number2 = prompt("Введіть число до якого відмірюється діапазон чисел: ");


function numberRandom(number1, number2) {
  for(let i = 0; i < 10; i++){
  let rand = Math.floor(number1 + Math.random() * (number2 + 1 - number1));
  console.log(rand);
  }
}
  
numberRandom(Number(number1), Number(number2));