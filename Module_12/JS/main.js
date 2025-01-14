// Class representing an Animal
class Animal {
    constructor(name, species, age, habitat) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.habitat = habitat;
    }

    // Method to display animal information
    displayInfo() {
        return `${this.name} is a ${this.age}-year-old ${this.species} living in the ${this.habitat}.`;
    }
}

// Class representing a Zoo
class Zoo {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.animals = []; // Array to store animals in the zoo
    }

    // Method to add an animal to the zoo
    addAnimal(animal) {
        this.animals.push(animal);
        console.log(`${animal.name} the ${animal.species} has been added to the zoo.`);
    }

    // Method to remove an animal from the zoo by name
    removeAnimal(animalName) {
        this.animals = this.animals.filter(animal => animal.name !== animalName);
        console.log(`${animalName} has been removed from the zoo.`);
    }

    // Method to display all animals in the zoo
    displayAnimals() {
        if (this.animals.length === 0) {
            console.log("The zoo currently has no animals.");
        } else {
            console.log("Animals in the zoo:");
            this.animals.forEach(animal => {
                console.log(animal.displayInfo());
            });
        }
    }
}

// Example usage
let myZoo = new Zoo("City Zoo", "Downtown");

let lion = new Animal("Simba", "Lion", 5, "Savannah");
let elephant = new Animal("Dumbo", "Elephant", 10, "Elephant Enclosure");

myZoo.addAnimal(lion);
myZoo.addAnimal(elephant);
myZoo.displayAnimals();

myZoo.removeAnimal("Simba");
myZoo.displayAnimals();

