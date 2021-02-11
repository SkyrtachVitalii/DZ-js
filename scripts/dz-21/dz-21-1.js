addHomework();
toggleElem();
toggleElem();
delElem();

function addHomework(){
    let a = document.querySelector('.DZ-16');
    a.classList.add("homework");
    console.log(a);
}

function toggleElem(){
    let a = document.querySelector('.DZ-17');
    a.classList.toggle("display");
    console.log(a);
}

function delElem(){
    var elem = document.getElementsByClassName('DZ-20');
	elem[0].remove();
}