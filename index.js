const address = require("./lib/address/index");

function getRandomInt(length) {
  max = Math.floor(length);
  return Math.floor(Math.random() * length); //The maximum is exclusive and the minimum is inclusive
}


function gibberishFromArrays(obj, wordLengthSeed) {
  let nameArray = [];

  for (let i = 0; i < wordLengthSeed; i++) {
    let numKeys = Object.keys(obj).length;
    let randKey = getRandomInt(numKeys);
    let key = Object.keys(obj)[randKey]
  
    let arrayIndex = getRandomInt(obj[key].length);

    nameArray.push(obj[key][arrayIndex]);
  }

  return nameArray.join("");
}

function cityName(obj) {
  let nameArray = [];

  for (let key in obj) {
    let arrayIndex = getRandomInt(obj[key].length);
    nameArray.push(obj[key][arrayIndex]);
  }

  return nameArray.join("");
}



console.log(gibberishFromArrays(address, 8));

console.log(cityName(address));