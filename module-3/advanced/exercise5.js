let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description(); //works
setTimeout(function(){ car.description(), 200}); //fails because it isn't a proper function taken as a perameter

car = {...car, year: 1492} 

let carDescription = car.description.bind(car);

setTimeout(describeCar, 100);

car = {...car, make: "Hot Wheels"};