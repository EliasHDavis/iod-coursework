let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports.push("Golf", "Chess");
let dog2 = dog1;
dog2 = "WasHisNameOhh";
let cat2 = cat1;
cat2.name = "Lenord";


//teamSports and cat1 were changed because the sequencial objects created from them still referenced the originals, so changing the new altered the old.
//dog2 saved the value of dog1 instead of the reference.

/*
const moreSports = {...teamSports};
const cat2 = {...cat1};

*/