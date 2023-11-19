var word = "SITE";

function sliceUnderscore (value){
    for (let i = 0; i < word.length; i++) {
        const firstHalf = word.slice(0, i);
        const secondHalf = word.slice(i);
        console.log(`${firstHalf}_${secondHalf}`);
    }
}

sliceUnderscore(word);