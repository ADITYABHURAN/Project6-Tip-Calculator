const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const numberOfPeopleInput = document.getElementById("number-of-people");
const totalTipDisplay = document.getElementById("TotalTip");
const totalPerPersonDisplay = document.getElementById("TotalPerPerson");

document.getElementById("tip-form").addEventListener("submit", calculateTip);

function calculateTip(event) {
    event.preventDefault();

    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const numberOfPeople = parseInt(numberOfPeopleInput.value);

    if (
        isNaN(billAmount) || billAmount <= 0 ||
        isNaN(tipPercentage) || tipPercentage < 0 ||
        isNaN(numberOfPeople) || numberOfPeople <= 0
    ) {
        alert("Please enter valid, positive numbers.");
        return;
    }

    const totalTip = (billAmount * tipPercentage) / 100;
    const totalPerPerson = (billAmount + totalTip) / numberOfPeople;

    totalTipDisplay.textContent = `Total Tip: $${totalTip.toFixed(2)}`;
    totalPerPersonDisplay.textContent = `Total Per Person: $${totalPerPerson.toFixed(2)}`;
}
