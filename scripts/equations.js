/*Calculation*/


    
  
//BMI
function bmi() {
  let inputAge = document.getElementById("age");
  let inputHt = document.getElementById("height");
  let inputWt = document.getElementById("weight");
  let inputResult = document.getElementById("results");
  inputResult.addEventListener("click", function() {
    let bmi = inputWT.value / [(inputWt.value**2)]*703;
    inputResult.value.innerHTML = bmi;
    if(bmi < 18.5){
      return "Underweight";
    }else if (bmi < 25){
      return "Normal";
    }else if (bmi < 30){
      return "Overweight";
    }else{
      return "Obese";
    }
  });
  

      
  
    //RMR Male
    if(inputWT.value == ("lbs")/2.2 && inputHt.value == ("in")*2.54) {
      result.value = ((inputWT.value)*10)+((inputHt.value)*6.25)-((inputAge.value)*5)+5;
    } 
  
    //RMR Female
    if(inputWT.value == ("lbs")/2.2 && inputHt.value == ("in")*2.54) {
      result.value = ((inputWT.value)*10)+((inputHt.value)*6.25)-((inputAge.value)*5)-161;
    }
  
   
  } 