/*Form*/

function validate() { 
  //fields
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
 
  //error message
  let error = document.getElementById("error"); 
  
  //create an error message array so it throws out all errors possible (future)
  let message = ["All fields must be filled out", "Full name must be used", "Valid email must be used", "Phone number must include area code"];

  if(name.length == 0 || email.length == 0 || number.length == 0) {
    error.innerHTML = message [0];
    return false;
  } else if(name.length >=1 && name.length <= 6) {
    error.innerHTML = message [1];
    return false;
  } else if(email.indexOf("@") == -1) {
    error.innerHTML = message [2];
    return false;
  } else if(number.length >=1 && number.length < 10) {
    error.innerHTML = message [3];
    return false;
  }

  alert ("Thank you for your support" + " " + name); //adds name that was filled in to message
  return true;

}

/*Calculation*/
// fields
