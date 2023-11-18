function explodeString(inputString) {
    let explodedString = '';

    for (let i = 0; i < inputString.length; i++) {
        for (let j = 0; j <= i; j++) {
            explodedString += inputString[j];
        }
    }

    return explodedString;
}

var result = explodeString('Baku');
console.log(result);
