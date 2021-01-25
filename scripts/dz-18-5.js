//Рандом від 1 до числа користувача
let number = prompt("Введіть число до якого відмірюється діапазон чисел: ");

function numberRandom(number) {
  let rand = Math.floor(1 + Math.random() * (number + 1 - 1));
  return rand;
}
  
console.log(numberRandom(Number(number)));