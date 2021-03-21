/*Sending form to API*/
function savePersonalData(){
  $.ajax({
    url: "https://api.apispreadsheets.com/data/9259/",
    type:'post',
    data:$("#form").serializeArray()
  });
  return new Promise((resolve, reject) => {
    if (validate = true) {
      resolve({
         message: "Hi! Thanks for your information"})
    } else if (validate = false) {
      reject({
        message: "Please read"})
    } 
  })
}

/*Validating Form*/  
document.getElementById("form").addEventListener("submit", function (validate) {
  validate.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");
    let message = ["Full name must be used",
    "Valid email must be used",
    "Phone number must include area code",
    "Password must contain ≥ 8 characters, 1 uppercase and 1 digit"];
    
    if(name != name.match(/^[a-z ,.'-]+$/i)) {
      error.innerHTML = message[0];
      return false;
      } else if(email != email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      error.innerHTML = message[1];
      return false;
      } else if(number != number.match(/[^\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g)) {
      error.innerHTML = message[2];
      return false;
      } else if(password != password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
      error.innerHTML = message[3];
      return false;
    }

    return savePersonalData().then(val => {
      alert(val.message);
      onsubmit = setTimeout(function(){window.location.reload();},1000)
    }).catch(error => {
      alert(error.message);
    })
    
});
  
/*reformating phone number*/

document.getElementById("phoneNumber").addEventListener("keyup", function () {
  let newNumber = this.value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  this.value = newNumber;
});







