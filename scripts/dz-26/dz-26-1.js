let arr = [1, 2, 3]
let arr2 = [5, 6, 7];

// arr2[1] = 5;

// console.log(...arr);
// console.log(arr.concat(arr2));
// let arr3 = [...arr, ...arr2, 9, 3, true, {name:'val'}];
// console.log(arr3)

// console.log(arr2)

// let obj1 = {
//     name: 'Vit',
//     age: 24,
//     grades: {
//         web: 100,
//         biology: 80
//     }
// }

// let obj2 = {
//     ...obj1,
//     teacher: 'true',
//     test: false
// }
// obj2.name = 'Vitalii';

// obj1.age = 28;
// obj2.name = 'Max';
// obj2.grades.web = 99;

// console.log(obj1)
// console.log(obj2)


// function test(a, b, ...args){
//     console.log(a, b, ...args);
// }

// test(4,5,6,8,1,2,3,4,5,6);

// let users = [
//     {
//         id: 1,
//         name: "vit",
//         rating: 8.5
//     },
//     {
//         id: 2,
//         name: "ol",
//         rating: 8.2
//     },
//     {
//         id: 3,
//         name: "mine",
//         rating: 7.2
//     },
//     {
//         id: 4,
//         name: "oks",
//         rating: 6.3
//     },
//     {
//         id: 5,
//         name: "sec",
//         rating:5.8
//     },
//     {
//         id: 6,
//         name: "tup",
//         rating: 9.3
//     },
//     {
//         id: 7,
//         name: "det",
//         rating: 10.0
//     }
// ]

// let newUsers = [
//     {
//         name: 'Irina',
//         rating: 8.1
//     },
//     {
//         name: 'Kolya',
//         rating: 7.9
//     }
// ]

// send([...users, ...newUsers]);

// function send(arr){
//     console.log(arr);
//     console.log("Данні успішно відправлені");
// }

let filmTemplate = {
    name: "",
    description: "",
    rating: 0
}
let films = []

let btn = document.getElementById('addFilm');
btn.addEventListener('click', addFilm);

function addFilm(){
    let film = {
        icons: "",
        reviews: [8, 7, 9]

    }

    addNewFilm('Film', film);
    console.log(films);
}

function addNewFilm(type, args){
    films.push(
        {
            type,
            ...filmTemplate,
            ...args
        }
    )
}
// let c = 5;
let isShowModal = false;

// function sum (a= 0, b = 0){
//     console.log(a+b)
// }

// sum(c, 8);
// sum(c);
// sum();

let openBtn = document.querySelector('#openButton');
let modal = document.querySelector('#modal');
let overlay = document.querySelector('#modal__overlay');

openBtn.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

function toggleModal(show = !isShowModal){
    if(isShowModal){
        isShowModal = false;
        modal.classList.remove('modal--open');
    }else{
        isShowModal = true;
        modal.classList.add('modal--open');
    }
}