document.getElementById("btn").addEventListener("click", function () {
  var valueHeight = document.getElementById("hight").value;
  var valueWeight = document.getElementById("weight").value;
  var height = Number(valueHeight);
  var weight = Number(valueWeight);
  var _BMI = weight / (height * height);
  var roundBMI = Math.round(_BMI * 10) / 10;
  //   more simple
  var bmiMassage;
  var bmiNum = `${roundBMI}`;
  if (roundBMI < 18.5) {
    bmiMassage = `Underweight`;
    bmiNum;
  } else if (roundBMI >= 18.5 && roundBMI <= 24.9) {
    bmiMassage = `Normal`;
    bmiNum;
  } else if (roundBMI >= 25 && roundBMI <= 29.9) {
    bmiMassage = `Overweight`;
    bmiNum;
  } else if (roundBMI >= 30 && roundBMI <= 34.9) {
    bmiMassage = `Obese`;
    bmiNum;
  } else {
    bmiMassage = `Extremely obese`;
    bmiNum;
  }
  document.getElementById("BMI").innerHTML = bmiMassage;
  document.getElementById("numberBMI").innerHTML = bmiNum;
});
