let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        let response = JSON.parse(xhr.responseText);
        for(let i = 0; i < response.length; i++){
            let item = document.createElement('div');
            item.classList.add('phone__item');
            let content = document.createElement('div');
            content.classList.add('phone__content');

            let img = document.createElement('div');
            img.classList.add('phone__img');
            img.setAttribute('style', `background-image: url(${(response[i].img)})`);
            content.appendChild(img);

            let name = document.createElement('div');
            name.classList.add('phone__name');
            name.innerText = response[i].name;
            content.appendChild(name);

            let description = document.createElement('div');
            description.classList.add('phone__description');
            description.innerText = response[i].description;
            content.appendChild(description);

            let price = document.createElement('div');
            price.classList.add('phone__price');
            price.innerText = response[i].price + " " + response[i].currency;
            content.appendChild(price);

            item.appendChild(content);
            document.getElementById('phones').appendChild(item);
        }
    }
}

xhr.open("GET", "https://demo2057852.mockable.io/phones");
function sendAJAX(){
    xhr.send();
    document.getElementById('load').style.display = "none";
}






















[
    {
        "name" : "iPhoneX",
        "price" : "500",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolore aperiam labore quia non atque consectetur architecto in, itaque, error aspernatur! Nisi quibusdam voluptas odit dolores illo fugiat eius nostrum.",
        "rating" : "8.2",
        "currency" : "USD",
        "img" : "https://hotline.ua/img/tx/158/158046386_s265.jpg"
    },
    {
        "name" : "iPhone12",
        "price" : "1000",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolore aperiam labore quia non atque consectetur architecto in, itaque, error aspernatur! Nisi quibusdam voluptas odit dolores illo fugiat eius nostrum.",
        "rating" : "9.6",
        "currency" : "USD",
        "img" : "https://mobiltelefon.ru/photo/september17/12/iphone_8_press_02.jpg"
    },
    {
        "name" : "iPhone11",
        "price" : "700",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolore aperiam labore quia non atque consectetur architecto in, itaque, error aspernatur! Nisi quibusdam voluptas odit dolores illo fugiat eius nostrum.",
        "rating" : "8.2",
        "currency" : "USD",
        "img" : "https://hotline.ua/img/tx/158/158046386_s265.jpg"
    },
    {
        "name" : "iPhone8",
        "price" : "550",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolore aperiam labore quia non atque consectetur architecto in, itaque, error aspernatur! Nisi quibusdam voluptas odit dolores illo fugiat eius nostrum.",
        "rating" : "8.8",
        "currency" : "USD",
        "img" : "https://mobiltelefon.ru/photo/september17/12/iphone_8_press_02.jpg"
    },
    {
        "name" : "iPhone9",
        "price" : "450",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolore aperiam labore quia non atque consectetur architecto in, itaque, error aspernatur! Nisi quibusdam voluptas odit dolores illo fugiat eius nostrum.",
        "rating" : "7.1",
        "currency" : "USD",
        "img" : "https://hotline.ua/img/tx/158/158046386_s265.jpg"
    },
    {
        "name" : "iPhone7",
        "price" : "300",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolore aperiam labore quia non atque consectetur architecto in, itaque, error aspernatur! Nisi quibusdam voluptas odit dolores illo fugiat eius nostrum.",
        "rating" : "6.3",
        "currency" : "USD",
        "img" : "https://mobiltelefon.ru/photo/september17/12/iphone_8_press_02.jpg"
    },
    {
        "name" : "iPhoneXPro",
        "price" : "850",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolore aperiam labore quia non atque consectetur architecto in, itaque, error aspernatur! Nisi quibusdam voluptas odit dolores illo fugiat eius nostrum.",
        "rating" : "9.0",
        "currency" : "USD",
        "img" : "https://hotline.ua/img/tx/158/158046386_s265.jpg"
    },
    {
        "name" : "iPhoneX",
        "price" : "900",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolore aperiam labore quia non atque consectetur architecto in, itaque, error aspernatur! Nisi quibusdam voluptas odit dolores illo fugiat eius nostrum.",
        "rating" : "8.1",
        "currency" : "USD",
        "img" : "https://mobiltelefon.ru/photo/september17/12/iphone_8_press_02.jpg"
    }
]