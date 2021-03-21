//BMI
document.getElementsByTagName("button").addEventListener("click", function (calc) {
  let inputHt = document.getElementById("height");
  let inputWt = document.getElementById("weight");
  let inputResult = document.getElementById("results");
  let bmi = inputWt.value / [(inputHt.value**2)]*703;
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

  
for (var i = 0 ; i < comment.length; i++) {
  comment[i].addEventListener('click' , showComment , false ) ; 
}

 
/*     
  
    //RMR Male
    if(inputWt.value == ("lbs")/2.2 && inputHt.value == ("in")*2.54) {
      result.value = ((inputWt.value)*10)+((inputHt.value)*6.25)-((inputAge.value)*5)+5;
    } 
  
    //RMR Female
    if(inputWt.value == ("lbs")/2.2 && inputHt.value == ("in")*2.54) {
      result.value = ((inputWt.value)*10)+((inputHt.value)*6.25)-((inputAge.value)*5)-161;
    }
  
   
 */  