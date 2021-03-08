//ЗАВДАННЯ №1
function toDoSomething(){
    const promiseToDoSomething = new Promise(function(resolve, reject){
        setTimeout(() =>{
            resolve(console.log("Я щось зробив через 6 секунд!!!"));
        }, 6000)
    })
}

toDoSomething();

//ЗАВДАННЯ №2
let buttonLoadMoreUsers = document.getElementById('buttonLoadMoreUsers');
buttonLoadMoreUsers.addEventListener('click', showAnotherUsers);

function showAnotherUsers(){
    this.classList.add('loading');
    showUsers();
}

let data = [
    {
        name: "User1",
        status: "verified",
        avatar: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
        email: "test@gmail.com",
        phone: 380955555555
    },
    {
        name: "User1",
        status: "verified",
        avatar: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
        email: "test@gmail.com",
        phone: 380955555555
    },
    {
        name: "User1",
        status: "verified",
        avatar: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
        email: "test@gmail.com",
        phone: 380955555555
    }
]

function showUsers(){
    console.log("Починається обробка користувачів...");
    const promiseShowUsers = new Promise(function(resolve, reject){
        if (data != ""){
            resolve(data);
            console.log(data);
        }else{
            reject(data = "Data is null!!!");
        }
    })

    promiseShowUsers.then(data => {
        console.log("Дані отримано!!!");
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                console.log("Юзерів отримано!!!")
                resolve(data);
            }, 1000)
        })
    }).then(data => {
        console.log("Опрацювання даних...");
        data.forEach(user => {
            let newUser = document.querySelector('.users__item').cloneNode(true);
            newUser.querySelector(".users__name").innerHTML = user.name;
            newUser.querySelector(".users__status").innerHTML = user.status;
            newUser.querySelector(".users__phone").innerHTML = user.phone;
            newUser.querySelector(".users__email").innerHTML = user.email;
            newUser.querySelector(".users__avatar").setAttribute("style",`background-image: url(${user.avatar});`)
            document.getElementById('users').appendChild(newUser);
        })
    }).catch(error => {
        console.log("Error: ", error)
    }).finally(data => {
        buttonLoadMoreUsers.classList.remove('loading');
        console.log("Дані опрацьовано!!!");
    })
}

function createEmail(postType){
    return function(address){
        return `${address}@${postType}`
    }
}

const netUrl = createEmail("i.net");
const gmailUrl = createEmail("gmail.com");
const ramblerUrl = createEmail("rambler.ua");
const yandexUrl = createEmail("yandex.ua");


console.log(netUrl("valeriy.gorbachevskiy"));
console.log(gmailUrl("valeriy.gorbachevskiy"));
console.log(ramblerUrl("valeriy.gorbachevskiy"));
console.log(yandexUrl("valeriy.gorbachevskiy"));
