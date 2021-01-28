let arrNumsS = [34, 15, 8, 5, 56, 50, 30, 25, 80, 13, 16, 108];
let nNums = prompt("Введіть кількість перевірюваних чисел з масису: ");
Number.nNums;

function checkArr(arrNumsS, nNums){
  for(let i = 0; i < arrNumsS; i++){
    arrNumsS.splice(arrNumsS-1, arrNumsS.length);
    if((arrNumsS[i] % 3 === 0) && (arrNumsS[i] % 5 === 0)){
      arrNumsS[i] = "fizzbuzz";
    }
    else if((arrNumsS[i] % 3 === 0) && (arrNumsS[i] % 5 !== 0)){
      arrNumsS[i] = "fizz";
    }
    else{
      arrNumsS[i] = "buzz";
    }
  }
}

checkArr(arrNumsS, nNums);
console.log(arrNumsS);