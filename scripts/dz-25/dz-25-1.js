// console.log(a);
// var a = 5;

// console.log(b);
// let b = 5;

// const PI = 3.15798;
// console.log(PI * 2);

// const arr = [3, 5, 6, 1]

// arr[1] = 16;

// console.log(arr)

// function output(){
//     console.log("test");
// }

// setTimeout(output, 1500);

// for(let i = 0; i < 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
// }

// let func = function(a, b){
//     return a + b;
// }

// console.log(func(3, 5));

// let sum = (a, b) => a + b;
// console.log(sum(6, 4));

let arr1 = [1, 4, 8];
// let arr2 = [];

// FOREACH
// arr1.forEach(function(item, i, arr1){
//     console.log('Елемент ' + item);
//     console.log('Індекс ' + i);
//     console.log('Масив ' + arr1);
// })
// console.log(arr1);

// // arr1.forEach(function(item){
// //     arr2.push(item + 5);
// // })

// arr1.forEach(item => {
//     arr2.push(item + 5);
// })

// console.log(arr2);


// FILTER
// let arr2 = arr1.filter(a => a > 10);
// console.log(arr2);

                    // MAP ARRAY
// let arr2 = arr1.map(item => item * 2);
// console.log(arr2);

//                     // REDUCE
// let res = arr1.reduce(function(sum, current){
//     return sum + current;
// }, 10);
// console.log(res);

let users = [
    {
        id: 1,
        name: "vit",
        rating: 8.5
    },
    {
        id: 2,
        name: "ol",
        rating: 8.2
    },
    {
        id: 3,
        name: "mine",
        rating: 7.2
    },
    {
        id: 4,
        name: "oks",
        rating: 6.3
    },
    {
        id: 5,
        name: "sec",
        rating:5.8
    },
    {
        id: 6,
        name: "tup",
        rating: 9.3
    },
    {
        id: 7,
        name: "det",
        rating: 10.0
    }
]

// let topUsers = users.filter(user => user.rating >= 7.0);
// console.log(topUsers);

// users.forEach(user =>{
//     // if(user.rating >= 8.3){
//     //     user.top = true
//     // }else{
//     //     user.top = false
//     // }

//     user.top = user.rating >= 8.3 ? true : false;
//     user.status = "active";
// });

// console.log(users);

let startId = 8;
let newUsers = users.map(function(user, i){
    user.id = startId + i;
    return user;
})

console.log(newUsers);