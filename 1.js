// Random JavaScript code snippet

// Function to generate a random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Array of cities
  var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  
  // Loop through cities array and log each city
  console.log("Cities:");
  cities.forEach(function(city) {
    console.log(city);
  });
  
  // Conditional statement
  var randomNumber = getRandomNumber();
  if (randomNumber > 50) {
    console.log(randomNumber + " is greater than 50.");
  } else {
    console.log(randomNumber + " is less than or equal to 50.");
  }
  
  // Object representing a person
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    }
  };
  
  // Call
  