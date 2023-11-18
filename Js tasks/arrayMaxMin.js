// create random array
var randomArray = [];

for (var i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 10) + 1);
}
console.log(...randomArray);

// find the sum of the elements
var arraySum = 0;
for (let i = 0; i < randomArray.length; i++) {
    arraySum = arraySum + randomArray[i];
}
const average = Math.floor(arraySum / randomArray.length);

// function to find max and min at the same time
function MaxMin() {

    let max = -999;
    let min = 999;

    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] > max) {
            max = randomArray[i];
        }
        if (randomArray[i] < min) {
            min = randomArray[i];
        }
    }
    return {max, min};
}

var max = MaxMin(randomArray).max;
var min = MaxMin(randomArray).min;

// Find the sum, average, min, and max of the elements.
console.log("Sum of the above array is: " + arraySum + " and average is: " + average + "\n"
    + "Max in the array is: " + max + "\n"
    + "Min in the array is: " + min);

// Find the most repeated and least repeated element of the array.
// 1 2 3 4 5 5 6 7 
var cnt;
for ( let i = 0; i < randomArray.length; i++){
    if( randomArray[i] === randomArray[i+1] ){
        cnt++;
    }
}