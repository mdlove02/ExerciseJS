/*Calculation*/

function changeWeight() {
    let inputAge = document.getElementById("age");
    let inputHt = document.getElementById("height");
    let inputWt = document.getElementById("weight");
    let inputHr = document.getElementById("hr");
    
  
     //BMI
    if(inputTypeWT.value == "lbs" && inputTypeHt.value == "in") {  
      result.value = (inputWt.value)/[inputHt.value * inputHt.value]*703;
    }  
  
    //RMR Male
    if(inputTypeWT.value == ("lbs")/2.2 && inputTypeHt.value == ("in")*2.54) {
      result.value = ((inputWT.value)*10)+((inputHt.value)*6.25)-((inputAge.value)*5)+5;
    } 
  
    //RMR Female
    if(inputTypeWT.value == ("lbs")/2.2 && inputTypeHt.value == ("in")*2.54) {
      result.value = ((inputWT.value)*10)+((inputHt.value)*6.25)-((inputAge.value)*5)-161;
    }
  
   
  }