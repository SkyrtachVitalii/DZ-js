// let human = new Object({
//     name: "vitalii",
//     age: 24,
//     show: function(){
//         console.log("Showed from human");
//     },
//     last_name: "Skyr"
// })

// let str = "this is string";
// str.toUpperCase();
// console.log(str.__proto__);
// console.log(str.toUpperCase());
// console.log(human);
// console.log(human.name);
// console.log(human.age);



Object.prototype.show = function(){
    console.log("show from prototype");
}

// console.log(human.toString());
// console.log(auto.toString());

// human.show();
// auto.show();

// const auto = new Object({
// 	type: "sedan",
// 	wheels: 4,
// 	doors: 4,
// 	show: function(){
// 		console.log("Showed from auto");
// 	}
// })

// const TESLA = Object.create(auto)
// TESLA.doors = 5;

// let str = "Hello world";
// let str2 = new String("Hello world");

// THIS


//Відносно ДОМ елементу
let testElement = document.querySelectorAll("p");
testElement.forEach(item =>{
	item.addEventListener("click", sayHi);
})
function sayHi(){
	// console.log("hi")
	let foSz = window.getComputedStyle(this).fontSize;
	foSz = foSz.substr(0, foSz.length - 2);
	console.log(foSz);

	this.style.fontSize = (parseInt(foSz) + 5) + "px";
}

//Відносно контексту

// console.log(this);

function hello(){
	console.log("hello world");
	console.log(this);
}

const auto = {
	type: "sedan",
	wheels: 4,
	doors: 4,
	model: "TESLA",
	sayHello: hello,
	sayHelloWindow: hello.bind(document),
	showInfo: function(neBita, neKrashena){
		console.log(`Auto model is ${this.model}`);
		console.log(`Auto wheels -  ${this.wheels}`);
		console.log(`Ne bita ${neBita}`);
		console.log(`Ne krashena ${neKrashena}`);
		console.log("-----------------");	
	}
}

// hello();
// auto.sayHello();

const BMW = {
	model: "BMW X5",
	type: "Outback",
	wheels: 5,
}

// auto.showInfo();
// let fn = auto.showInfo.bind(BMW, "Ні", "Bind");
// fn();
// auto.showInfo.call(BMW, "Ні", "Call");
// auto.showInfo.apply(BMW, ["Ні", "Apply"]);

const array = [1,8,6,9,10];

Array.prototype.multipleBy = function (n){
	return this.map(item => item * n)
}


// function multipleBy(arr, n){
// 	return arr.map(function (item){
// 		return item * n
// 	})
// }

// console.log(array);
// console.log(multipleBy(array, 5));