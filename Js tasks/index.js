const readline = prompt('readline-sync');

const fullName = readline.question("Please enter your first name: ");
const courseGrade = parseFloat(readline.question("Please enter your course grade: "));

console.log("Good morning " + fullName);

if (courseGrade >= 59.5) {
    console.log("You passed the course!");
    console.log(courseGrade);
} else {
    console.log("You failed the course");
}


document.getElementById("demo").innerHTML=