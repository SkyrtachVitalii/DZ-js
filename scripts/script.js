let a = prompt("Введіть перше число: ");
let b = prompt("Введіть друге число: ");
sum = Number(a) + Number(b);
alert(sum);

let name = prompt("Введіть своє ім'я: ");
let surName = prompt("Введіть своє прізвище: ");
let novelName = prompt("Введіть назву спектаклю: ");
let theater = prompt("Введіть назву театру: ");
let sector = prompt("Введіть номер сектору: ");
let ryad = prompt("Введіть номер рядку в секторі: ");
let place = prompt("Введіть номер місця в ряді: ");
let time = prompt("Введіть час відвідування: ");

let operationData = `Ім'я: ${name} \nПрізвище: ${surName} \nНазва спектаклю: ${novelName} \nНазва театру: ${theater} \nНомер сектору: ${sector} \nНомер ряду в секторі: ${ryad} \nНомер місця: ${place} \nЧас: ${time}`;

console.log(operationData)