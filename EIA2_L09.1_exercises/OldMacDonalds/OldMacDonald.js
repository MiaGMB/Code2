"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Animal {
        constructor(_type, _name, _sound, _food) {
            this.type = _type;
            this.name = _name;
            this.sound = _sound;
            this.food = _food;
        }
        eat() {
            this.food.updateStock(1);
            console.log(this.food.stock);
        }
        sing() {
            console.log(this.sound + " Old Mac Donald had a Farm");
        }
    }
    class Horse extends Animal {
        constructor(_type, _name, _sound, _food, _jump) {
            super(_type, _name, _sound, _food);
        }
    }
    class Cow extends Animal {
        constructor(_type, _name, _sound, _food, _milk) {
            super(_type, _name, _sound, _food);
        }
    }
    class Chickan extends Animal {
        constructor(_type, _name, _sound, _food, _egg) {
            super(_type, _name, _sound, _food);
        }
    }
    class Cat extends Animal {
        constructor(_type, _name, _sound, _food, _scratch) {
            super(_type, _name, _sound, _food);
        }
    }
    class Dog extends Animal {
        constructor(_type, _name, _sound, _food, _rollOver) {
            super(_type, _name, _sound, _food);
        }
    }
    const foodSilo = [
        new OldMacDonald.Food(500, "hay"),
        new OldMacDonald.Food(120, "corn"),
        new OldMacDonald.Food(400, "meat"),
    ];
    const stable = [
        new Animal("horse", "Saphira", "Wiehr", foodSilo[0]),
        new Animal("cow", "Olga", "Moo", foodSilo[0]),
        new Animal("chickan", "Anita", "Bogok", foodSilo[1]),
        new Animal("Dog", "Bonsai", "Wuff", foodSilo[2]),
        new Animal("cat", "Frau von Schmidt", "Miau", foodSilo[2]),
    ];
    for (let index = 0; index < stable.length; index++) {
        const animal = stable[index];
        console.log(animal.name);
        animal.eat();
        animal.sing();
    }
})(OldMacDonald || (OldMacDonald = {}));
