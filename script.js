//get all the elements from the HTML
const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const numberOfPeopleInput = document.getElementById("number-of-people");
const calculateButton = document.getElementById("calculate-button");
const totalTipDisplay = document.getElementById("TotalTip");
const totalPerPersonDisplay = document.getElementById("TotalPerPerson");

calculateButton.addEventListener("click", calculateTip);

function calculateTip() {
    // Get the values from the inputs
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const numberOfPeople = parseInt(numberOfPeopleInput.value);

    // Validate inputs
    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate total tip and total per person
    const totalTip = (billAmount * tipPercentage) / 100;
    const totalPerPerson = (billAmount + totalTip) / numberOfPeople;

    // Display the results
    totalTipDisplay.textContent = `Total Tip: $${totalTip.toFixed(2)}`;
    totalPerPersonDisplay.textContent = `Total Per Person: $${totalPerPerson.toFixed(2)}`;
}