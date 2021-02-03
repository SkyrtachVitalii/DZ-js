let obj = {
    bread: 25,
    milk: 30,
    chips: 50,
    water: 10,
    cucumbers: 42
}

function totalSum (myObj){
    let sum = 0;
    for (let key in myObj){
        sum += myObj[key];
    }
    return console.log("Загальна сума чисел " + sum);
}

function maxPrice(everyObj){
    let thingPrice = 0;
    for (let key in everyObj){
        if (thingPrice < everyObj[key]){
            thingPrice = everyObj[key];
        }
    }
    return console.log("Максимальна сума об'єкту " + thingPrice);
}

function minPrice(everyOb){
    var keys = Object.keys(everyOb);
    let thingPrice = everyOb[keys[0]]; 
    for (let key in everyOb){
        if (thingPrice > everyOb[key]){
            thingPrice = everyOb[key];
        }
    }
    return console.log("Мінімальна сума об'єкту " + thingPrice);
}

totalSum(obj);
maxPrice(obj);
minPrice(obj);