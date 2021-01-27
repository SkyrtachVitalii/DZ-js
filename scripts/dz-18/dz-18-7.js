//Лотарея

let arrNums = [];
let randomArr = [];

function getNums(){
  for(let i = 0; i < 6; i++){
    let num = prompt("Введіть число від 1 до 36: ");
    arrNums.push(num);
  }
  console.log("Числа які ви ввели: " + arrNums.join());
}

function getRandomInRange() {
  for(let i = 0; i < 6; i++){
  let randomNum = Math.floor(Math.random() * (36 - 1 + 1)) + 1;
  randomArr.push(randomNum);
  }
  console.log("Згенерований массив: " + randomArr);
}

function checkArrs(arrNums, randomArr){
  let messageArr = "";
  let result = 0;
  for(let i = 0; i < arrNums.length; i++){
      if (arrNums[i] == randomArr[i]){
        messageArr += arrNums[i] + "-yes ";
        result++;
      }
      else{
        messageArr += arrNums[i] + "-no ";
      }
  }
console.log(messageArr);
console.log("Результат:" + result + "/6")
}

getNums();
console.log("-------------");
getRandomInRange();
console.log("-------------");
checkArrs(arrNums, randomArr);