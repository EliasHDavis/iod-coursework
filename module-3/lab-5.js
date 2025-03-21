const getGreeting = function(name) {
    return 'Hello ' + name + '!';
}

const getArrowGreeting = (name) => {
    return 'Hello ' + name + '!';
}

console.log(getGreeting('harry'));
console.log(getArrowGreeting('harry'));