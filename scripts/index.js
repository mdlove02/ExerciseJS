/*Form*/

function validate() { 
  //variables for fields
  let name = document.getElementById("fname").value;
  let email = document.getElementById("eName").value;
  let number = document.getElementById("phoneNumber").value;
  let password = document.getElementById("pName").value;

  // variables for regex
  let emailRegex = /^\w-|.\w+|\w+@/g;
  let phoneRegex = /[^\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
  let passwordRegex = 

  // more variables to try
  let emailResult = emailRegex.test(email);
  let phoneResult = phoneRegex.test(phone);

  // variable for error message
  let error = document.getElementById("error"); 
  let error_2 = document.getElementById("error_2"); 
  let error_3 = document.getElementById("error_3"); 
  let error_4 = document.getElementById("error_4"); 

  //variable for array of messages
  let message = ["All fields must be filled out",
    "Full name must be used",
    "Valid email must be used", 
    "Phone number must include area code", 
    "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 special character"];
  
 
  if(email = emailResult) {
    error_2.innerHTML = message [2];
    return false;
  } else if(number = phoneResult) {
    error_3.innerHTML = message [3];
    return false;
  }
    //for (i = 0; i < message.length; i++) {}
  
 
  

  alert ("Thank you for all your information" + " " + name); //adds name that was filled in to message
  return true;

}

/*Calculation*/
// fields
