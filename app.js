let calcButton = document.querySelector("#calcButton");
calcButton.addEventListener("click", Calculate);

function Calculate() {
    let investment;
    let years;
    let increase = 3;

    investment = Number(document.form.investering.value);
    years = Number(document.form.år.value);
    
    if (years > 0 && investment > 0) {
        document.form.resultat.value = Math.pow(increase, years) * investment;
    }
}