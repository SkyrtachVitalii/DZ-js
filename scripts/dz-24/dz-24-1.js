let boxes = document.querySelectorAll('.box');
for(let i = 0; i <boxes.length; i++){
    boxes[i].innerHTML = "Hello world";
}
console.log(boxes);

$('.box-J').html("Hello world from jQuery");

// $('.change-size').click(function(){
//     $('.box:nth-child(2)').toggleClass('box-lg');
//     console.log("click");
// })

$('section').on( "click", ".change-size", function() {
    $('.box:nth-child(2)').toggleClass('box-lg');
  });

$('.box:nth-child(1)').attr('data-count', '5');
let count = $('.box:nth-child(1)').attr('data-count');
console.log(count);

console.log($('.input').val());


$('.input').change(function(){
    // console.log($('.input').val());
    console.log($(this).val());
});

let cloneOBj = $('.box-container').clone();
$('.append').append(cloneOBj);

console.log(cloneOBj);
