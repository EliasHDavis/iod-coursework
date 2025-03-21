const sydney = {
    name: 'Sydney',
    population: "5,121,000",
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const austin = {
    name: 'Austin',
    population: "979,882",
    state: 'TX',
    founded: 'December 27, 1839',
    timezone: 'Central Standard Time'
}

const cities = function(object) {
    for (const key in object) {
        console.log(key + ': ' + object[key]);
    }
}

cities(sydney);
cities(austin);