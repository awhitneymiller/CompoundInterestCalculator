// Get the DOM elements
const principalInput = document.getElementById("principal");
const periodInput = document.getElementById("period");
const aprInput = document.getElementById("apr");
const aprText = document.getElementById("aprText");
const yearsInput = document.getElementById("years");
const accumulatedOutput = document.getElementById("accumulated");
const amountOutput = document.getElementById("amount");

function calculateCompoundInterest(principal, rate, periods, time) {
  const ratePerPeriod = rate / periods / 100;
  const compoundFactor = Math.pow(1 + ratePerPeriod, periods * time);
  const totalAmount = principal * compoundFactor;
  const interestAccumulated = totalAmount - principal;

  return { interestAccumulated, totalAmount };
}

function updateValues() {
  const principal = principalInput.value || 0;
  const apr = aprInput.value || 0;
  const periods = periodInput.value;
  const years = yearsInput.value || 0;

  const { interestAccumulated, totalAmount } = calculateCompoundInterest(
    principal,
    apr,
    periods,
    years
  );

  accumulatedOutput.value = interestAccumulated.toFixed(2);
  amountOutput.value = totalAmount.toFixed(2);
}

aprInput.addEventListener("input", function () {
  aprText.textContent = aprInput.value;
  updateValues();
});

principalInput.addEventListener("input", updateValues);
periodInput.addEventListener("input", updateValues);
yearsInput.addEventListener("input", updateValues);

updateValues();
