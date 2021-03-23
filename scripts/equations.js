//BMI

function calculate() {
  document.getElementById("done").addEventListener("click", (event) => {
    event.preventDefault();

    let inputHt = document.getElementById("height").value;
    let inputWt = document.getElementById("weight").value;
    let bmi = (inputWt / [(inputHt*inputHt)]*703).toFixed(2);
    let result = document.getElementById("results");

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
  

  

   
}

