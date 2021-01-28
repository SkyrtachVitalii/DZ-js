let arrNums1 = [
  [4, 5, 13],
  [-5, 0, 4],
  [12, -3, 12]
];
let arrNums2 = [
  [5, 8, 0],
  [87, 65, 7],
  [-50, 24, 43]
];


function sum2Arrs(arrNums1) {
  let finalArr = [];
  for (let i = 0; i < arrNums1.length; i++) {
    finalArr[i] = [];
    for (let j = 0; j < arrNums1.length; j++) {
      finalArr[i][j] = arrNums1[i][j] + arrNums2[i][j];

    }
  }
  return console.log(finalArr);
}


sum2Arrs(arrNums1);