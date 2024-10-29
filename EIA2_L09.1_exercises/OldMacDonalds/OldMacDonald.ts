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

class Food {
    stock: number;
    type: string;

    constructor(_stock: number, _type: string) {
        this.stock = _stock;
        this.type = _type;
    }
    updateStock(_stock: number): number {
        this.stock = this.stock- _stock 
        return this.stock
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