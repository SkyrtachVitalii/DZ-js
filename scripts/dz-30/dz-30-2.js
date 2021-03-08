// const animal = {
//     name: "Animal",
//     age: 5,
//     hatTail: true
// }

class Animal {
    static type = "Animal";
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    getVoice(){
        console.log("Gav-gav");
    }

    getName(){
        console.log(this.name);
    }
}

const animal = new Animal({
    name: "Animal",
    age: 5,
    hatTail: true
})

class Cat extends Animal{
    static type = "Cat";
    constructor(options){
        super(options);
        this.color = options.color;
        this.paws = options.paws;
    }

    getVoice(){
        // super.getVoice();
        console.log("Myau-myau");
    }

    get ageInfoAsHuman(){
        return this.age * 4;
    }

    set ageInfoAsHuman(newAge){
        this.age = newAge / 4;
    }
}

const barsik = new Cat({
    name: "Barsik",
    age: 8,
    hasTail: true,
    color: "gray",
    paws: 4
})

console.log(barsik);