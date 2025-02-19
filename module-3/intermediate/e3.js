const animals = ['Tiger', 'Giraffe']
console.log(animals);

animals.push("Ant", "Bee");
console.log(animals);

animals.unshift("Rabbit", "Dog");
console.log(animals);

//console.log(animals.sort((a, b) => a - b));

const replaceMiddleAnimal = function(newAnimal){
     let middle = Math.ceil(animals.length/2);
     animals[middle] = newAnimal
     console.log(animals)
};
replaceMiddleAnimal('slamander');

/*
const findMatchingAnimals = function(letter){
    let filteredAnimals = animals.filter()
    console.log(filteredAnimals)
};


e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.
*/