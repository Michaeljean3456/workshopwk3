"use strict"
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const numofyears = document.getElementById("numofyears");
const monthlypayment = document.getElementById("monthlypayment");
const interestamount = document.getElementById("interestamount");
const calculatebtn = document.getElementById("calculatebtn");

function init(){

    calculatebtn.onclick = calculatebtnclicked;

}

window.onload = init;

function calculatebtnclicked(){
    let loan = parseFloat(loanAmount.value);
    let rate = parseFloat(interestRate.value) / 100 / 12;
    let years = parseFloat(numofyears.value) * 12;
    const monthlyRate = (loan * rate) / (1 - (1 + rate) ** -years);
    const totalinterest = (monthlyRate * years - loan).toFixed(2);
    monthlypayment.value = monthlyRate.toFixed(2);

    interestamount.value = totalinterest;
}

