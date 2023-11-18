var array = [2, 2, 1, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7];
var TwoArray = [];

for (let i = 0; i < array.length; i++) {
    CheckFor(array[i]);
}

function CheckFor(value) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
        if (value === array[j]) {
            count++;
        }
    }

    TwoArray.push({ value, count });
}

function MaxMin() {
    let max = { value: null, count: -1 };
    let min = { value: null, count: 999 };

    for (let i = 0; i < TwoArray.length; i++) {
        if (TwoArray[i].count > max.count) {
            max.value = TwoArray[i].value;
            max.count = TwoArray[i].count;
        }
        if (TwoArray[i].count < min.count) {
            min.value = TwoArray[i].value;
            min.count = TwoArray[i].count;
        }
    }
    return { max, min };
}

var result = MaxMin();
var max = result.max;
var min = result.min;

console.log("Most frequently occurring element in the array is: " + max.value + " with frequency " + max.count + "\n"
    + "Least frequently occurring element in the array is: " + min.value + " with frequency " + min.count);
