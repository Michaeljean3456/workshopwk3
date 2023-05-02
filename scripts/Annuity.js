"use strict";
const monthlyPay = document.getElementById("monthlyPay");
const interestRate = document.getElementById("interestRate");
const numofyears = document.getElementById("numofyears");
const Investamount = document.getElementById("Investamount");
const calculateBtn = document.getElementById("calculateBtn");

function init() {
  calculateBtn.onclick = calculateBtnClicked;
}

window.onload = init;

function calculateBtnClicked() {
  const monthlyPayValue = parseFloat(monthlyPay.value);
  const annualInterestRate = parseFloat(interestRate.value) / 100 / 12;
  const numPayments = parseFloat(numofyears.value) * 12;
  const InvestamountTotal = monthlyPayValue * ((1 - (1 / (1 + annualInterestRate) ** numPayments)) / annualInterestRate);
  const InvestamountRounded = InvestamountTotal.toFixed(2);
  Investamount.value = InvestamountRounded;
}
