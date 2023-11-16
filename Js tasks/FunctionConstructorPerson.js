function Person(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  
    this.fullName = function() {
      return this.firstName + " " + this.lastName;
    };
  
    this.age = function() {
      const currentYear = new Date().getFullYear();
      const birthYear = new Date(this.dateOfBirth).getFullYear();
      return currentYear - birthYear;
    };
  
    this.toString = function() {
      return this.fullName() + " is " + this.age() + " years old!";
    };
  }
  
  // Example usage:
  const john = new Person("John", "Doe", "1990-02-15");
  console.log(john.fullName()); // "John Doe"
  console.log(john.age()); // Calculated age based on date of birth
  console.log(john.toString()); // "John Doe is x years old!"
  