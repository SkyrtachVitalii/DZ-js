// let human = {
//     name: "vitalii",
//     getName: function(){
//         return this.name;
//     }
// }

// let svetlana ={
//     name: "Sveta",
//     age: 58
// }

// console.log(human.getName());
// console.log(human.getName.call(svetlana));

// let tempalateAuto = {
//     wheels: 4,
//     type: "sedan",
//     doors: 4,
//     getInfo: function(){
//         console.group("Auto INFO");
//         console.log(`Модель: ${this.model}`)
//         console.log(`Колеса: ${this.wheels}`)
//         console.groupEnd();
//     },
//     setModel: function(model){
//         this.model = model;
//     }
// }

// let Mercedes = Object.create(tempalateAuto);
// Mercedes.wheels = 6;
// Mercedes.model = "Mercedes";
// Mercedes.setModel("Mercedes");

// console.log(Mercedes);
// console.log(Mercedes.wheels);

// Mercedes.getInfo = function(){
//     console.group("Auto INFO");
//     console.log(`Модель M: ${this.model}`)
//     console.log(`Колеса M: ${this.wheels}`)
//     console.groupEnd();
// }


// Mercedes.getInfo();

//ЗАМИКАННЯ

// let a = 10;

// a = 20;
// function createSumFn(n){
//     return function(){
//         console.log(100 + n);
//     }
// }

// function showA(n){
//     console.log(100 + n);
// }

// a = 30;
// let fn = createSumFn(a);
// fn();

// showA(a);

// a = 50;

// fn();
// showA(a);

// fn();

// function createIncrementator(increment){
//     return function(number){
//         return increment + number;
//     }
// }

// const addTwo = createIncrementator(2);
// const addTen = createIncrementator(10);

// console.log(addTwo(10));
// console.log(addTwo(100));

// console.log(addTen(50));
// console.log(addTen(150));

// function createURL(domain){
//     return function(address){
//         return `https://${address}.${domain}`
//     }
// }

// const netUrl = createURL("net");
// const comUrl = createURL("com");
// const uaUrl = createURL("ua");

// console.log(netUrl("ukr"));
// console.log(comUrl("facebook"));
// console.log(uaUrl("football"));

//////////
//НАПИСАТИ bind

// function logPerson(a, b){
//     console.log(a + b)
//     console.log(`Person ${this.name}, ${this.age}, ${this.job}`);
// }

// const p1 = {
//     name: "vit",
//     age: 24,
//     job: "Front-end"
// }

// const p2 = {
//     name: "Elena",
//     age: 20,
//     job: "SMM"
// }

// logPerson();
// logPerson.call(p1);
// logPerson.call(p2);

// function bind(context, fn){
//     return function(...args){
//         fn.apply(context, args)
//     }
//     // fn.bind(person)();
// }

// console.log(bind(p1, logPerson));
// console.log(bind(p2, logPerson));

// let f1 = bind(p1, logPerson);
// f1(5, 8);
// let f2 = bind(p2, logPerson);
// f2(1, 3);

//Event LOOP

console.log(25);
console.log(50);

setTimeout(function(){
    console.log("hello from settimeout 3")
}, 3000);

setTimeout(function(){
    console.log("hello from settimeout 1")
}, 1000);

console.log('Кінець коду');
