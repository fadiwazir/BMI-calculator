document.getElementById("btn").addEventListener("click", function () {
  var valueHeight = document.getElementById("hight").value;
  var valueWeight = document.getElementById("weight").value;
  var height = Number(valueHeight);
  var weight = Number(valueWeight);
  var _BMI = weight / (height * height);
  var roundBMI = Math.round(_BMI * 10) / 10;
  //   more simple
  var bmiMassage;
  var bmiNum;
  if (roundBMI < 18.5) {
    bmiMassage = `Underweight`;
    bmiNum = `${roundBMI}`;
  } else if (roundBMI >= 18.5 && roundBMI <= 24.9) {
    bmiMassage = `Normal`;
    bmiNum = `${roundBMI}`;
  } else if (roundBMI >= 25 && roundBMI <= 29.9) {
    bmiMassage = `Overweight`;
    bmiNum = `${roundBMI}`;
  } else if (roundBMI >= 30 && roundBMI <= 34.9) {
    bmiMassage = `Obese`;
    bmiNum = ` ${roundBMI}`;
  } else {
    bmiMassage = `Extremely obese`;
    bmiNum = ` ${roundBMI}`;
  }
  document.getElementById("BMI").innerHTML = bmiMassage;
  document.getElementById("numberBMI").innerHTML = `${roundBMI}`;
});
