function getCapacity(w = 1, h = 1, l = 1) {
	return ("Volume = " + w * h * l);
}
console.log(getCapacity(45, 20, 10));
console.log(getCapacity(45, undefined, 10));
console.log(getCapacity(45, 20));
console.log(getCapacity(undefined, undefined, 19));

// function getCapacity1(parameters){
//     let width = parameters.width || 1;
//     let height = parameters.height || 1;
//     let length = parameters.length || 1;
//     return ("Volume = " + width * height * length);
// }

// let parameters = {
//     width: 3, 
//     height: 4, 
//     length: 5
// }

// console.log(getCapacity1(parameters));

//SPREAD
let arrA = [5, 8, 12, 15956, 12354, 6486486, 324894896, 654864, 64684, 98498498, 5, 5];
let arrB = [98498, 49849849, 6546546, 984984, 4798478, 984894, 2, 666, 878, 5];
let arrC = [...arrA, ...arrB];
console.log(arrA.length);
console.log(arrB.length);
console.log(arrC)

let autoTemplate = {
	wheels: 4,
	type: "sedan",
	na_hody: true,
	ne_bita: true,
	ne_krashena: true
}

let autos = [];

let iterator = 0;

let addAutoBtn = document.getElementById('addAuto');
addAutoBtn.addEventListener('click', addAuto);

function addAuto() {
	let auto = {
		wheels: 4,
		type: 'sedan',
		na_hody: false,
		ne_bita: false,
		ne_krashena: false,
		color: "red"
	}
	addNewAuto('Mazda', auto);
	console.log(autos);

}

function addNewAuto(name, args) {
	autos.push(
		{
			name,
			...autoTemplate,
			...args
		}
	)
}
console.log(autoTemplate)

//REST

function getMinMax(condition, ...args) {
	if (condition === "max") {
			args.sort((a, b) => {
				return a - b;
			}
		);
		console.log(args);
		return "Max = " + args[args.length - 1];
	}else if(condition === "min"){
			args.sort((a, b) => {
				return a - b;
			}
		);
		args.reverse();
		console.log(args);
		return "Min = " + args[args.length - 1];

	}
}

function sortNumbers(a, b) {
	return a - b;
}

console.log(getMinMax("max", 4, 8, 5, 6, 9, 3, 25, 15, 74, 58));
console.log(getMinMax("min", 4, 8, 5, 6, 9, 3, 25, 15, 74, 58));