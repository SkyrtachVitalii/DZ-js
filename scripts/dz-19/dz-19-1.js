let arrNums = [];



function getNums(){
    for(let i = 0; i < 6; i++){
      let num = prompt("Введіть число для массиву: ");
      arrNums.push(num);
    }
    console.log("Числа які ви ввели: " + arrNums.join());
  }

  function mnojNumbers(arrNums){
    let newArr = [];
      for(let i = 0; i < arrNums.length; i++){
          
          newArr.push(arrNums[i]*2);
      }
      return console.log(newArr);
  }

  getNums();
  mnojNumbers(arrNums);