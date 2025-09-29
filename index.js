document.getElementById("btn").addEventListener("click", function () {
    var valueHeight = document.getElementById("hight").value;
    var valueWeight = document.getElementById("weight").value;
    var height = Number(valueHeight);
    var weight = Number(valueWeight);
    var _BMI = weight / (height * height);
    var roundBMI = Math.round(_BMI * 10) / 10;

    if (roundBMI < 18.5) {
        document.getElementById("BMI").innerHTML = `Underweight`;
        document.getElementById("numberBMI").innerHTML = `${roundBMI}`;
    } else if (roundBMI >= 18.5 && roundBMI <= 24.9) {
        document.getElementById("BMI").innerHTML = `Normal`;
        document.getElementById("numberBMI").innerHTML = `${roundBMI}`;
    } else if (roundBMI >= 25 && roundBMI <= 29.9) {
        document.getElementById("BMI").innerHTML = `Overweight`;
        document.getElementById("numberBMI").innerHTML = `${roundBMI}`;
    } else if (roundBMI >= 30 && roundBMI <= 34.9) {
        document.getElementById("BMI").innerHTML = `Obese`;
        document.getElementById("numberBMI").innerHTML = `${roundBMI}`;
    } else {
        document.getElementById("BMI").innerHTML = `Extremely obese`;
        document.getElementById("numberBMI").innerHTML = `${roundBMI}`;
    }
});
