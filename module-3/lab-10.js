function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
};

const sammy = new Person(Sam, 90);
const bart = new Person(bart, 12);
console.log(sammy);
console.log(bart);


class PersonCalss{
    constructor(name, age){
        this.name = name;
        this.age = age;
        if (this.age >= 18){
            this.canDrive = true;
        } else {
            this.canDrive = false;
        }
    }
}