"use strict";
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
class Food {
    constructor(_stock, _type) {
        this.stock = _stock;
        this.type = _type;
    }
    updateStock(_stock) {
        this.stock = this.stock - _stock;
        return this.stock;
    }
}
const foodSilo = [
    new Food(500, "hay"),
    new Food(120, "corn"),
    new Food(400, "meat"),
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
//# sourceMappingURL=OldMacDonald.js.map