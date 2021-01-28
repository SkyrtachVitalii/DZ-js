let arrNumsS = [34, 15, 8, 5, 56, 50, 30, 25, 80, 13, 16, 108];
let nNums = prompt("Введіть кількість перевірюваних чисел з масиву: ");
Number.nNums;

function checkArr(arrNumsS, nNums){
  for(let i = 0; i < nNums; i++){
    arrNumsS.splice(nNums-1, arrNumsS.length);
    if((arrNumsS[i] % 3 === 0) && (arrNumsS[i] % 5 === 0)){
      arrNumsS[i] = "fizzbuzz";
    }
    else if((arrNumsS[i] % 3 === 0) && (arrNumsS[i] % 5 !== 0)){
      arrNumsS[i] = "fizz";
    }
    else if((arrNumsS[i] % 3 !== 0) && (arrNumsS[i] % 5 === 0)){
      arrNumsS[i] = "buzz";
    }
  }
}

checkArr(arrNumsS, nNums);
console.log(arrNumsS);