//Орел і рішка

function monet(min, max) {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  if (rand === 1){
    return "Орел";
  }
  else{
    return "Рішка";
  }
  }
  
console.log(monet(0, 1));