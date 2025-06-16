function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (!weight || !heightCm) {
        document.getElementById('result').textContent = "Ju lutem plotësoni të dy fushat.";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const result = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Nën peshë";
    } else if (bmi < 25) {
        category = "Peshë normale";
    } else if (bmi < 30) {
        category = "Mbipeshë";
    } else {
        category = "Obez";
    }

    document.getElementById('result').textContent = `BMI-ja juaj është ${result} (${category})`;
}
