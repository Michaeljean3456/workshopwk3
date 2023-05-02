"use strict";
const depositAmount = document.getElementById("depositAmount");
const interestRate = document.getElementById("interestRate");
const numofyears = document.getElementById("numofyears");
const endingbalance = document.getElementById("endingbalance");
const interestamount = document.getElementById("interestamount");
const calculatebtn = document.getElementById("calculatebtn");

function init() {
  calculatebtn.onclick = calculatebtnClicked;
}

window.onload = init;

function calculatebtnClicked() {
  const deposit = parseFloat(depositAmount.value);
  const rate = parseFloat(interestRate.value) / 100;
  const years = parseFloat(numofyears.value);
  const Endingbal = deposit * (1 + rate) ** years;
  const interestEarned = Endingbal - deposit;
  
  endingbalance.value = Endingbal.toFixed(2);
  interestamount.value = interestEarned.toFixed(2);
}
