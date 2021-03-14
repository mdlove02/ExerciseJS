/*validating form*/

function validate() {
  
  let fullName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("phoneNumber").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");
  let message = ["Full name must be used",
  "Valid email must be used", 
  "Phone number must include area code", 
  "Password must contain ≥ 8 characters, 1 uppercase and 1 digit"];

  if(fullName != fullName.match(/^[a-z ,.'-]+$/i)) {
    error.innerHTML = message[0];
    return false;
  } 
  if(email != email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    error.innerHTML = message[1];
    return false;
  } 
  if(number != number.match(/[^\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g)) {
    error.innerHTML = message[2];
    return false;
  } 
  if(password != password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
    error.innerHTML = message[3];
    return false;
  } else {
    alert ("Thanks for all your information" + " " + fullName);
    return true;
  } 
  
}

/*reformating phone number*/

function reformat() {
  let number = document.getElementById("phoneNumber");
  number.addEventListener("keyup", function(event) {
      let n = this.value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      number.value = n;
  });

}

/*Sending form*/

function savePersonalData(){
  $.ajax({
      url: "https://api.apispreadsheets.com/data/9259/",
      type:'post',
      data:$("newForm").serializeArray()
  });

}


