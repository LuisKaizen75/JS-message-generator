// This program generates random messages with horoscopes thematic.
const fs = require('fs');

// Function to read file and split by new lines
const myReader = (path) => {
    try {
        return fs.readFileSync(path, "utf-8").split("\r\n")
    } catch (error) {
        console.error(`Error reading file from path: ${path}`, error);
        return [];
    }
};

// Function to pick a random element from an array
const rP = (arr) => {
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
};

// Load data from files
const zodiac = myReader('zodiac_signs.txt');
const sn = ["should", "shouldn't"];
const verbs = myReader('verbs.txt');
const nouns = myReader('nouns.txt');

// Generate and print the message
const generateMessage = () => {
    return `${rP(zodiac)}, you ${rP(sn)} ${rP(verbs)} your ${rP(nouns)} today.\n`;
};

console.log("Welcome! Ready to know your fortune?\n");
console.log(generateMessage());