const house = new Object({
	floor: 5,
	basement: true,
	number_of_apartments: 15,
	ventilation_system: true,
	showInfo: function(){
		// for(let i = 0; i < Object.keys(building).length - 1; i++){
		// 	console.log(Object.keys(building)[i] + " = " + Object.values(building)[i]);
		// }
		
		// for (const [key, value] of Object.entries(building.__proto__)) {
		// 	console.log(`${key}: ${value}`);
		// }

			// for (const [key, value] of Object.entries(building)) {
			// 	console.log(`${key}: ${value}`);
			// }


		console.log(`floor = ${this.floor}`);
		console.log(`basement = ${this.basement}`);
		console.log(`number_of_apartments = ${this.number_of_apartments}`);
		console.log(`ventilation_system = ${this.ventilation_system}`);
		console.log(`attic = ${this.attic}`);
		console.log(`type_of_roof = ${this.type_of_roof}`);
		console.log(`address = ${this.address}`);
		console.log("-------");
	}
})

const house_01 = Object.create(house);
house_01.ventilation_system = true;
house_01.attic = true;
house_01.type_of_roof = "pitched";
house_01.address = "Gogol square, 1";
house_01.number_of_apartments = 3;
house_01.getHouseAddress = function(){
	console.log(`address = ${this.address}`);
}

const house_02 = Object.create(house);
house_02.address = "Kyiv, Bogdan Hmelnytskyi square, 32";


console.log(house);
console.log(house_01);

house_01.showInfo();
house_01.getHouseAddress();

let houseAddress = house_01.getHouseAddress.bind(house_02);
houseAddress();
house_01.getHouseAddress.call(house_02);