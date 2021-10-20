const address = require("./lib/address/index");
const name = require("./lib/gnomes/index");
const gm = require("./lib/gm/index");

function getRandomInt(length) {
  max = Math.floor(length);
  return Math.floor(Math.random() * length); //The maximum is exclusive and the minimum is inclusive
};


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
};

function gnomeName(obj, wordLengthSeed) {
  let nameArray = [];

  let arrayIndex = getRandomInt(obj["prefix"].length);
  nameArray.push(obj["prefix"][arrayIndex]);

  for (let i = 0; i < wordLengthSeed; i++) {
    arrayIndex = getRandomInt(obj["root"].length);
    nameArray.push(obj["root"][arrayIndex]);
  }
  return nameArray.join("");
};

function gmootGenerator(obj, wordLengthSeed) {
  let nameArray = [];
  let ootArray = [];
  let arrayIndex;

  for (let i = 0; i < wordLengthSeed; i++) {
    ootArray = [];
    arrayIndex = getRandomInt(obj["prefix"].length);
    ootArray.push(obj["prefix"][arrayIndex]);

    arrayIndex = getRandomInt(obj["root"].length);
    ootArray.push(obj["root"][arrayIndex]);

    ootArray.push(" ");
    
    ootArray = ootArray.join("")

    nameArray.push(ootArray); 
  }
  return nameArray.join("");
};

function cityName(obj) {
  let nameArray = [];

  for (let key in obj) {
    let arrayIndex = getRandomInt(obj[key].length);
    nameArray.push(obj[key][arrayIndex]);
  }
  return nameArray.join("");
};

const myArgs = process.argv.slice(2);

//console.log(gnomeName(name, myArgs[0]));

console.log(gmootGenerator(gm, myArgs[0]));
