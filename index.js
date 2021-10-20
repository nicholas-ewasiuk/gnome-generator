const address = require("./lib/address/index");

function getRandomInt(length) {
  max = Math.floor(length);
  return Math.floor(Math.random() * length); //The maximum is exclusive and the minimum is inclusive
}

let nameArray = [];

for (let i = 0; i < 2; i++) {
  
  let numKeys = Object.keys(address).length;

  let randKey = getRandomInt(numKeys);

  let key = Object.keys(address)[randKey]

  let arrayIndex = getRandomInt(address[key].length);

  nameArray.push(address[key][arrayIndex]);
}

console.log(nameArray.join(""));