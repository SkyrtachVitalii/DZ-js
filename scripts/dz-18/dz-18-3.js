//Гральні кубики
let kude1 = 1;
let kube2 = 6;

function kubes(min, max) {
    let firstkude = Math.round(Math.random() * (max - min) + min);
    let secondKube = Math.round(Math.random() * (max - min) + min);
    return `Перший кубик: ${firstkude} \nДругий кубик: ${secondKube}`;
  }
  
console.log(kubes(kude1, kube2));