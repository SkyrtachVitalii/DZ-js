let arrNums = [34, 15, 8, 5, 56, 50, 30, 25, 80, 13, 16, 108];
let nNums = prompt("Введіть кількість перевірюваних чисел з масису: ");
Number.nNums;

function checkArr(arrNums, nNums){
  for(let i = 0; i < nNums; i++){
    arrNums.splice(nNums-1, arrNums.length);
    if((arrNums[i] % 3 === 0) && (arrNums[i] % 5 === 0)){
      arrNums[i] = "fizzbuzz";
    }
    else if((arrNums[i] % 3 === 0) && (arrNums[i] % 5 !== 0)){
      arrNums[i] = "fizz";
    }
    else{
      arrNums[i] = "buzz";
    }
  }
}

checkArr(arrNums, nNums);
console.log(arrNums);