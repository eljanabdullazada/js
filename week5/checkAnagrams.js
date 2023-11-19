var userInput = prompt("Please enter two strings to check if they are anagrams!");

function sortAlphabetical(value) {
    return value.split('').sort().join('');
}

function anagramChecker (valueOne, valueTwo) {
    if (sortAlphabetical(valueOne) === sortAlphabetical(valueTwo)) {
        return "Yes";
    } else {
        return "No";
    }
}
var input = userInput.toLowerCase().split(' ');
var stringOne = input[0];
var stringTwo = input[1];

var isAnagram = anagramChecker(stringOne, stringTwo);

console.log(isAnagram);