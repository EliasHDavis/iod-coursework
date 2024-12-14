let list = [1, 2, 3, 4, 5];

list[0] = "new";
list[3] = "same";

list.unshift("Hi there");

list.pop();

console.log(list);