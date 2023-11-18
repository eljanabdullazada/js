// Get the full name and course grade of the user.
var name = prompt("What is your full name?");
// Greet the user.
if ( name.includes(" ") ) {
    alert("Welcome to this website " + name);
} else{
    alert("Please enter your full name");
}

var grade = prompt("What is your grade?");
// Let the user know if she/he passes or fails the course by alerting a message.
// In case the user passes the course alert the letter grade.
if ( grade >= 59.5 ) {
    alert("You passed the course with " + grade );
} else {
    alert( "You failed the course" );
}