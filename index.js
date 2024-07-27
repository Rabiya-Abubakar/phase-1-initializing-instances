// Write your code here
class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

let breko = new Breakfast("Chapati", "Tea");
console.log(breko);

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let food = new Lunch("veggy-salad", "carrot-soup", "passion-juice");
console.log(food);

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }

    getDessert() {
        return this.#dessert;
    }
}

let supper = new Dinner("veggy-salad", "carrot-soup", "pasta", "cake");
console.log(supper);
console.log(supper.getDessert());
