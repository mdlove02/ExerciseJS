/*Form*/

function validate() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("phoneNumber").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error"); 
  let nameRegex = /^[a-z ,.'-]+$/i;
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let phoneRegex = /[^\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
  let message = ["Full name must be used",
  "Valid email must be used", 
  "Phone number must include area code", 
  "Password must contain ≥ 8 characters, 1 uppercase and 1 digit"];

  if(name != name.match(nameRegex)) {
    error.innerHTML = message[0];
    return false;
  } else if(email != email.match(emailRegex)) {
    error.innerHTML = message[1];
    return false;
  } else if(number != number.match(phoneRegex)) {
    error.innerHTML = message[2];
    return false;
  } else if(password != password.match(passwordRegex)) {
    error.innerHTML = message[3];
    return false;
  } else {
    alert ("Thanks for all your information" + " " + name);
    return true;
  } 
  
};




 

