let login = "admin";
let password = "123456";
let enteringMessage = prompt("Введіть логін: ");
if (enteringMessage === login){
    let enteringPassword = prompt("Введіть пароль: ");
    if (enteringPassword === password){
        alert("Ласкаво просимо))))");
    }
    else{
        alert("Пароль не вірний");
    }
}
else if (!enteringMessage){
    alert("Вхід відмінено!");
}
else{
    alert("Я вас не знаю!!!");
}