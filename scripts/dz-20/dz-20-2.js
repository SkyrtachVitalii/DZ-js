let films =[{
    title: "Joker",
    rating: 8.1,
    premier: true
} ,
{
    title: "Iron Man",
    rating: 7,
    premier: true
} ,
{
    title: "Thor",
    rating: 7.5,
    premier: false
} 
,{
    title: "Black Panther",
    rating: 8.2,
    premier: true
} ,
{
    title: "Hulk",
    rating: 8.5,
    premier: false
} ]


function middleRating (objec){
    let middleRating;
    let sumRating = 0;
    for (let i = 0; i < objec.length; i++){
        sumRating += Number(objec[i].rating);
    }
    middleRating = sumRating/objec.length;
    return console.log(middleRating);
}


function ifPremierTrue(ob){
    for (let i = 0; i < ob.length; i++){
        if (ob[i].premier === true){
            console.log("Прем'єра " + ob[i].title);
        }
    }
}

function ifRatingMore_8(oB){
    for (let i = 0; i < oB.length; i++){
        if (oB[i].rating > 8.0 || oB[i].rating === 8.0){
            console.log(oB[i].title + " " + oB[i].rating);
        }
    }
}

middleRating(films);
ifPremierTrue(films);
ifRatingMore_8(films);