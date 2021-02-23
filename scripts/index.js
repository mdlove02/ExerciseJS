/*Form*/
function validate() { 
  //variables for fields
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("phoneNumber").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error"); 
  //let submit = document.getElementById("submit").addEventListener("click", function(event) {
  //  event.preventDefault();
  //});
 
  // variables for regex
  let nameRegex = /^([a-zA-Z]{4,})|\s|\w+/g;
  let emailRegex = /^\w-|.\w+|\w+@/g;
  let phoneRegex = /[^\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;

  let nameResult = name.match(nameRegex);
  let emailResult = email.match(emailRegex);
  let numberResult = number.match(phoneRegex);
  let passwordResult = password.match(passwordRegex);

  //variable for array of messages
  let message = ["All fields must be filled out",
    "Full name must be used",
    "Valid email must be used", 
    "Phone number must include area code", 
    "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 special character",
    "Please fill out the remaining inputs"];
    
    if(name != nameResult) {
      error.innerHTML = message[0];
      return false;
    } else if() {
      error.innerHTML = message[1];
      return false;
      } else {
        error.innerHTML = message[5];
      };
    
    if(email != emailResult) {
      error.innerHTML = message[2];
      return false;
    }; 

    if(number != numberResult) {
      error.innerHTML = message[3];
      return false;
    }; 





   

    alert ("Thank you for all your information" + " " + name); //adds name that was filled in to message
    return true;

}

/*Calculation*/
// fields
