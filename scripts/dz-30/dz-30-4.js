class House {
    static type = "House";
    constructor(properties){
        this.city = properties.city;
        this.floor = properties.floor;
        this.material = properties.material;
        this.basement = properties.basement;
    }

    get addressInfo(){
        return this.address;
    }

    set addressInfo(adrs){
        this.address = adrs;
    }

    get materialInfo(){
        return this.material;
    }

    set materialInfo(mater){
        this.material = mater;
    }

    getAddress(){
        console.log(address);
    }
}

class PrivateHouse extends House{
    static type = "Private house";
    constructor(properties){
        super(properties);
        this.gas = properties.gas;
        this.water = properties.water;
        this.electricity = properties.electricity;
    }
}

class HighRiseBuilding extends House{
    static type = "High rise building";
    constructor(properties){
        super(properties);
        this.flatNumbers = properties.flatNumbers;
        this.liftNumbers = properties.liftNumbers;
        this.numberFlatsOnStage = properties.numberFlatsOnStage;
        this.accessSystem = properties.accessSystem;
    }
}

const myHouse = new House({
    city: "Starobilsk",
    floor: 5,
    material: "kyrpych",
    basement: true
})

const Home1 = new PrivateHouse({
    city: "Kyiv",
    floor: 15,
    material: "kyrpych",
    basement: true,
    gas: true,
    water: true,
    electricity: true
})

const Home2 = new PrivateHouse({
    city: "Dnipro",
    floor: 9,
    material: "kyrpych",
    basement: false,
    gas: true,
    water: true,
    electricity: true
})

const Building1 = new HighRiseBuilding({
    city: "Lviv",
    floor: 6,
    material: "kyrpych",
    basement: false,
    flatNumbers: 24,
    liftNumbers: 2,
    numberFlatsOnStage: 4,
    accessSystem: true
})

const Building2 = new HighRiseBuilding({
    city: "Lutsk",
    floor: 4,
    material: "kyrpych",
    basement: false,
    flatNumbers: 12,
    liftNumbers: 0,
    numberFlatsOnStage: 3,
    accessSystem: false
})


console.log(myHouse);
console.log(Home1);
console.log(Home2);
console.log(Building1);
console.log(Building2);