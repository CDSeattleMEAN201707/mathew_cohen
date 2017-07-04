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

    this.punch = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(ninja.name + " just got punched by " + this.name + "!");
        }else{
            console.log("Uh... can't do that.")
        }
        
    }
    this.kick = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= (5 * this.strength);
            console.log(ninja.name + " just got kicked by " + this.name + "!");
        }else{
            console.log("Uh... can't do that.")
        }
    }
}

let ninja1 = new Ninja("Mathew");
ninja1.sayName();
ninja1.showStats();
let ninja2 = new Ninja("Graham");
ninja2.sayName();
ninja2.showStats();
ninja1.punch(ninja2);
ninja2.showStats();