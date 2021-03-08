class Component {
    constructor(selector){
        this.$elem = document.querySelector(selector);
    }

    hide(){
        this.$elem.style.display = "none";
    }

    show(){
        this.$elem.style.display = "block";
    }
}

const comp = new Component( "#component")

class Box extends Component{
    constructor(options){
        super(options.selector);
        this.$elem.style.width = this.$elem.style.height = options.size + "px";
        this.$elem.style.backgroundColor = options.bgColor;
    }
}

const box = new Box({
        selector: "#box",
        size: 200,
        bgColor: "#f00"
})

const box2 = new Box({
    selector: "#box2",
    size: 100,
    bgColor: "#ff0"
})

class Circle extends Box{
    constructor(options){
        super(options);
        this.$elem.style.borderRadius = "50%";
    }
}

const circle = new Circle({
    selector: "#circle",
    size: 300,
    bgColor: "#f0f"
})