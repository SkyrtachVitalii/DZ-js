let title = document.querySelector('.hrei');

title.innerText = "sdkjgoksjgoie";
title.classList.add('homework');
// title.classList.add('display');

//На пропонованому сайті мій код чомусь не працював
//на Розетці все працює як годинник))))

// title.style.display = "none";
// title.style.display = "block";
// title.hidden = true;
// title.hidden = false;

document.querySelector(".hfoiwe").innerHTML = "";
// 
// document.querySelector(".sjdhgkwe").removeAttribute("class");

let a = document.querySelector(".lorem");
// a.className = "";
a.removeAttribute("class");
a.style.backgroundColor = "#08c";

function addTag(){
    let par = document.getElementsByTagName('p')[0]
    let text = document.createElement("div");
    text.className = 'homework box';
    text.innerText = 'POWERCODE';
    par.appendChild(text);
}


let features = [
    {
        title: "Suspendisse",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://pngimg.com/uploads/like/like_PNG71.png"
    },
    {
        title: "Maecenas",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://www.freepnglogos.com/uploads/key-png/key-icon-housing-and-residential-life-28.png"
    },
    {
        title: "Aliquam",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7wTEBP8hB6_9ADMMPEhcO_timBkTSvPcpcb7mSaBhpNfYThj-"
    },
    {
        title: "Habitasse",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://s1.iconbird.com/ico/2013/3/635/w240h264139388538316.png"
    }
]


addTag();

console.log(features);

let arrayContainer = document.getElementById('array');
for(let i = 0; i < features.length; i++){
    let newItem = document.createElement('div');
    newItem.classList.add("array__item");

    let arrayImg = document.createElement("img");
    arrayImg.setAttribute('src', features[i].iconSrc);
    arrayImg.setAttribute('class', "array__img");
    newItem.appendChild(arrayImg);

    let arrayTitle = document.createElement("h3");
    arrayTitle.setAttribute('class', "array__title");
    arrayTitle.innerText = features[i].title;
    newItem.appendChild(arrayTitle);

    let arrayText = document.createElement("p");
    arrayText.setAttribute('class', "array__text");
    arrayText.innerText = features[i].text;
    newItem.appendChild(arrayText);

    let arrayButton = document.createElement("div");
    arrayButton.setAttribute('class', "array__btn");
    let newBtn = document.createElement('a');
    newBtn.setAttribute('href', features[i].link);
    newBtn.innerText = "read more";
    arrayButton.appendChild(newBtn);
    newItem.appendChild(arrayButton);

    if(i === 0){
        arrayButton.classList.add('array__btn--active');
    }
    arrayContainer.appendChild(newItem);
}

