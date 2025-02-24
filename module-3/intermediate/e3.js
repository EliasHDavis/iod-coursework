const animals = ['Tiger', 'Giraffe']
console.log(animals);

animals.push("Ant", "Bee");
console.log(animals);

animals.unshift("Rabbit", "Dog");
console.log(animals);

console.log(animals.sort);

const replaceMiddleAnimal = function(newAnimal){
     let middle = Math.ceil(animals.length/2);
     animals[middle] = newAnimal
     console.log(animals)
};
replaceMiddleAnimal('Slamander');

const findMatchingAnimals = function(letter){
    let filteredAnimals = animals.filter(animal =>
      animal.startsWith(letter))
    console.log(filteredAnimals)
};

findMatchingAnimals('A');