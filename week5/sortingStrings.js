var inputString = prompt("Please enter a string!");

function sortAlphabetical(value) {
    var arr = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i] === " ") {
            continue;
        } else {
            arr[i] = value[i];
        }
    }
    arr.sort();
    return arr;
}
var sortedString = sortAlphabetical(inputString);

console.log(sortedString);