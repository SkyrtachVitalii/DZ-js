let products = [
    {
        name: 'Apple iPhone 12',
        price: 1000,
        currency: 'USD',
        status: 'active'
    },
    {
        name: 'Xiaomi Redmi Note 9',
        price: 600,
        currency: 'USD',
        status: 'active'
    },
    {
        name: 'Samsung Galaxy s20',
        price: 850,
        currency: 'USD',
        status: 'active'
    },
    {
        name: 'Apple iPhone X',
        price: 550,
        currency: 'USD',
        status: 'active'
    },
    {
        name: 'Xiaomi Redmi 5',
        price: 200,
        currency: 'USD',
        status: 'not_available'
    },
    {
        name: 'Samsung Note 8',
        price: 400,
        currency: 'USD',
        status: 'not_active'
    },
]
    
function checkElements1(elements) {
    return elements.filter( elements => elements.status === "active");
  }

let newArrElements = products.filter(products => products.status === "active");

function checkPrice1(elements) {
    return elements.filter( elements => elements.price >= 650);
  }

let checkPrice2 = products.filter(products => products.price >= 650);

function sumActiveElem1(elements) {
    let sum = 0;
    elements.map(item => {
        if(item.status === "active"){
            sum += item.price;
        }
    })
    return sum;
    }

function addPoleIs_Phone1(elements){
    elements.forEach(element => {
        element.is_phone = true;
    })
    return elements;
}

function addPoleIs_Phone2(elements){
    elements.forEach(function(element){
        element.is_phone = true;
    })
    return elements;
}


function addPolePremium1(elements){
    elements.forEach(element => {
        if(element.price >= 800){
            element.premium = true;
        }
    })
    return elements;
}
function addPolePremium2(elements){
    elements.forEach(function (element){
        if(element.price >= 800){
            element.premium = true;
        }
    })
    return elements;
}

// MAP
// let sumActiveElem2 = products.map(function(item, i){
//     let sum = 0;
//     if(item.status === "active"){
//         sum += item.price;
//     }
//     return sum;
// })

let resSum1 = products.reduce(function(item, current){
    let number = current.status == "active" ? item + current.price : item;
    // if(current.status == "active"){
    //     number = item + current.price;
    // }
    // number = item + current.price;
    // console.log(current.status);
    return number;
}, 0);

let resSum2 = products.reduce((item, current) => {
    let number = current.status == "active" ? item + current.price : item;
    // if(current.status == "active"){
    //     number = item + current.price;
    // }
    // number = item + current.price;
    // console.log(current.status);
    return number;
}, 0);

console.log(checkElements1(products));
console.log(newArrElements);

console.log(checkPrice1(products));
console.log(checkPrice2);

console.log(addPoleIs_Phone1(products));
console.log(addPoleIs_Phone2(products));

console.log(addPolePremium1(products));
console.log(addPolePremium2(products));

// console.log(sumActiveElem1(products));
// console.log(sumActiveElem2);

console.log("Active sum = " + resSum1);
console.log("Active sum = " + resSum2);