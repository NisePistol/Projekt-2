function calculate() {
    let investment;
    let years;
    let increase = 3;

    investment = Number(document.form.investering.value);
    years = Number(document.form.år.value);

    for (let index = 0; index < years; index++) {
        investment *= increase;
    }

    document.form.resultat.value = investment;
}