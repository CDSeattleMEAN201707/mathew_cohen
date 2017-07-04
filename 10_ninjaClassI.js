function Ninja(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    this.sayName = function(){
        console.log("My name is " + this.name);
    }
    this.showStats = function(){
        console.log("Ninja stats:\n{Health: " + this.health + "},\n{Strength: " + this.strength + "},\n{Speed: " + this.speed + "}");
    }
}

let ninja1 = new Ninja("Mathew");
ninja1.sayName();
ninja1.showStats();