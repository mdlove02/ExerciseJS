/*BMI*/
document.getElementById("bmiForm").addEventListener("submit", function (calcBmi) {
  calcBmi.preventDefault();
    let inputHt = document.getElementById("height").value;
    let inputWt = document.getElementById("weight").value;
    let result = document.getElementById("results");
    let bmi = (inputWt / [(inputHt*inputHt)]*703).toFixed(2);
  
     if(bmi < 18.5) {
       result.innerHTML = `Underweight: ${bmi}`;
       } else if (bmi > 18.5 && bmi <= 24.9) {
         result.innerHTML = `Normal: ${bmi}`;
       } else if (bmi > 25 && bmi <= 29.9) {
         result.innerHTML = `Over Weight : ${bmi}`;
       } else if (bmi > 29.9) {
         result.innerHTML = `Obese : ${bmi}`;
       } 
});
/*RMR*/
function calcRmr() {
  let inputHt = document.getElementById("height").value;
  let inputWt = document.getElementById("weight").value;
  let inputAge = document.getElementById("age").value;
  let resultRmr = document.getElementById("resultsRmr");
  let wtKg = inputWt/2.2
  let htCm = inputHt*2.54
  let rmrMale = ((10*wtKg) + (6.25*htCm) - (5*inputAge) + 5).toFixed(2);
  let rmrFemale = ((10*wtKg) + (6.25*htCm) - (5*inputAge) - 161).toFixed(2);
  let sel = document.getElementById("sex");
  let value = sel.options[sel.selectedIndex].text;

    if(value === "Male") {
      resultRmr.innerHTML = `Resting Caloric Expenditure: ${rmrMale}`;
      return false;
    } else if (value === "Female") {
      resultRmr.innerHTML = `Resting Caloric Expenditure: ${rmrFemale}`;

      }
  
}





