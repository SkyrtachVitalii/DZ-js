function focusBtn(){
    
}

let id = 0;
function addNewEvent(){
    id++;
    idCheckBox = `${id}checkBox`;
    let form = document.forms[0];
    let newEvent = form[0].value;
    let formEvent = document.forms[1];
    let block = document.createElement("div");
    block.className = "event__item";
    let eventBlock = document.createElement("p");
    eventBlock.className = "event";
    eventBlock.className = "event--text";
    let checkBox = document.createElement("input");
    checkBox.className = "checkboxdone";
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "done");
    checkBox.setAttribute("id", idCheckBox);
    checkBox.setAttribute("onclick", "doneEvent(this)");
    eventBlock.innerText = newEvent;
    block.appendChild(eventBlock);
    block.appendChild(checkBox);
    formEvent.appendChild(block);
    console.log("create done!!!");
}

let m = document.getElementsByClassName("done");
for (let i = 0; i < m.length; i++){
    m[i].addEventListener('click', doneEvent)
}

function doneEvent(e){
    let textEvent = e.previousElementSibling.textContent;
    console.log(textEvent);

    let blockDone = document.createElement("div");
    blockDone.className = "event__item";
    let textDone = document.createElement("p");
    textDone.className = "event";
    textDone.className = "event--text";
    textDone.innerText = textEvent;
    let delImg = document.createElement("img");
    delImg.className = "recycle-img";
    delImg.setAttribute("src", "https://img.icons8.com/ios/452/shopping-cart.png");
    delImg.setAttribute("onclick", "deleteEvent(this)");
    blockDone.appendChild(textDone);
    blockDone.appendChild(delImg);
    let b = document.getElementById("list__done").appendChild(blockDone);
    e.parentNode.parentNode.removeChild(e.parentNode);
    console.log("done event is done!!!");
}

function deleteEvent(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
    // e.parentNode.removeChild(e);
    console.log("delete event is done!!!");
}