namespace OldMacDonald {

class Animal {
    type: string;
    name: string;
    sound: string;
    food: Food;

    constructor(_type: string, _name: string, _sound: string, _food: Food) {
        this.type = _type;
        this.name = _name;
        this.sound = _sound;
        this.food = _food;
    }

    eat(): void {
        this.food.updateStock(1)

        console.log(this.food.stock )
    }
    sing(): void {
        console.log(this.sound + " Old Mac Donald had a Farm")

    }
}

class Horse extends Animal {
    jump: string

    constructor(_type: string, _name: string, _sound: string, _food: Food, _jump: string){
        super(_type, _name, _sound, _food,)
    }
}

class Cow extends Animal {
    milk: string

    constructor(_type: string, _name: string, _sound: string, _food: Food, _milk: string){
        super(_type, _name, _sound, _food,)
    }
}

class Chickan extends Animal {
    egg: string

    constructor(_type: string, _name: string, _sound: string, _food: Food, _egg: string){
        super(_type, _name, _sound, _food,)
    }
}

class Cat extends Animal {
    scratch: string

    constructor(_type: string, _name: string, _sound: string, _food: Food, _scratch: string){
        super(_type, _name, _sound, _food,)
    }
}

class Dog extends Animal {
    rollOver: string

    constructor(_type: string, _name: string, _sound: string, _food: Food, _rollOver: string){
        super(_type, _name, _sound, _food,)
    }
}

const foodSilo: Food[] = [
    new Food(500, "hay"),
    new Food(120, "corn"),
    new Food(400, "meat"),

]

const stable: Animal[] = [
    new Animal("horse", "Saphira", "Wiehr", foodSilo[0]),
    new Animal("cow", "Olga", "Moo", foodSilo[0]),
    new Animal("chickan", "Anita", "Bogok", foodSilo[1]),
    new Animal("Dog", "Bonsai", "Wuff", foodSilo[2]),
    new Animal("cat", "Frau von Schmidt", "Miau", foodSilo[2]),
]

for (let index: number = 0; index < stable.length; index++) {
    const animal: Animal = stable[index];
    console.log(animal.name)
    animal.eat()
    animal.sing()
}

}