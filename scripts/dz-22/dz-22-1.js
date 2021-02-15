document.getElementById("send").addEventListener("click", send);

function send(e){
    alert("Well done!!!");
    send2();
    console.log(e);
}

function send2(){
    alert("Well done!!!");
    send3();
}

function send3(){
    alert("Well done!!!");
}

document.getElementById("box").addEventListener("mouseover", getEvent);
document.getElementById("box").addEventListener("mouseout", getEvent);
document.getElementById("box").addEventListener("mouseenter", getEvent);
document.getElementById("box").addEventListener("mouseleave", getEvent);
document.getElementById("box").addEventListener("mouseup", getEvent);
document.getElementById("box").addEventListener("mousedown", getEvent);
document.getElementById("box").addEventListener("contextmenu", getEvent);
document.getElementById("box").addEventListener("dblclick", getEvent);


function getEvent(event){
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.pageX);
    console.log(event.pageY);
}

function changeBg(elem, color){
    elem.style.backgroundColor = color;
}

function toggleBg(elem){
    let bgColor = window.getComputedStyle(elem).backgroundColor;
    // if (bgColor === "rgb(244, 65, 21)"){
    //     elem.style.backgroundColor = "#08c";
    // }
    // else{
    //     elem.style.backgroundColor = "#f44115";
    // }
    elem.style.backgroundColor = bgColor === "rgb(244, 65, 21)" ? "#08c" : "#f44115";
}

console.log(document.forms);

let form = document.forms[0];
console.log(form.elements['phone']);
form.elements['phone'].value = '+380 ';
console.log(form.elements['name']);
form.elements['name'].value = 'vit';
form.elements['agree'].checked= true;

form.elements['name'].addEventListener('focus', focusInput);
form.elements['name'].addEventListener('blur', blurInput);

function focusInput(){
    console.log("-------FOCUS INPUT--------")
}

function blurInput(){
    console.log("-------BLUR INPUT--------")
}