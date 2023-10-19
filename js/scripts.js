const multiplicationForm = document.querySelector("#multiplication-form")

const numberInput = document.querySelector("#number")

const multiplicationInput = document.querySelector("#multiplicator")

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tableOf = +numberInput.value;

    const multiplyUntil = +multiplicationInput.value;

    if (!tableOf || !multiplyUntil) return;

    console.log(tableOf, multiplyUntil);
});

