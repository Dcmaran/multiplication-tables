const multiplicationForm = document.querySelector("#multiplication-form");

const numberInput = document.querySelector("#number");

const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplication-operations");

const multiplicationTitle = document.querySelector("#multiplication-title span");

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tableOf = +numberInput.value;

    const multiplyUntil = +multiplicationInput.value;

    if (!tableOf || !multiplyUntil) return;

    createTable(tableOf, multiplyUntil);
});

const createTable = (tableOfNumber, multiplyUntilNumber) => {
    
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplyUntilNumber; i++) {
        
        const result = tableOfNumber * i

        const template = 
        
        `<div class="row">
            <div class="operation">${tableOfNumber} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row)

    }

    multiplicationTitle.innerText = tableOfNumber;
};