// Array to store selected seats
let selectedSeats = [];

// Array to store name and age user
let userNameAge = ["name", 123];

// Maximum number of tickets per transaction
const maxTickets = 6;

// Minimum age to watch the movie
const minimumAge = 15;

// Current user balance
let balance = 100000;

// Function to toggle seat selection
function toggleSeat(seatId) {
  const seatElement = document.getElementById(seatId);
  const seatIndex = selectedSeats.indexOf(seatId);

  if (seatIndex > -1) {
    // Seat is already selected, so deselect it
    selectedSeats.splice(seatIndex, 1);
    seatElement.classList.remove("selected");
  } else {
    // Check if maximum tickets reached
    if (selectedSeats.length >= maxTickets) {
      alert("Maximum tickets per transaction reached.");
      return;
    }

    // Seat is not selected, so select it
    selectedSeats.push(seatId);
    seatElement.classList.add("selected");
  }

  updatePaymentAmount();
  updateContinueButton();
}

// Function to update payment amount
function updatePaymentAmount() {
  const paymentAmountElement = document.getElementById("payment-amount");
  const paymentAmount = selectedSeats.length * 41000;
  paymentAmountElement.textContent = "Rp" + paymentAmount;
}

// Function to update continue button status
function updateContinueButton() {
  const continueButton = document.getElementById("continue-button");
  continueButton.disabled = selectedSeats.length === 0;

  checkAgeAndProceed();
}

// Fucntion to check age and proceed to payment
function checkAgeAndProceed() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name.length === 0) {
    alert("You must insert your name to watch this movie.");
    const continueButton = document.getElementById("continue-button");
    continueButton.disabled = true;
    return;
  } else if (age < minimumAge) {
    alert("You are not old enough to watch this movie.");
    const continueButton = document.getElementById("continue-button");
    continueButton.disabled = true;
    return;
  }

  userNameAge[0] = name;
  userNameAge[1] = age;
}

// Function to show payment section
function showPaymentSection() {
  const personalInfoForm = document.getElementById("personal-info-form");
  const paymentAmountElement = document.getElementById("payment-amount");
  const payButton = document.getElementById("pay-button");

  personalInfoForm.classList.add("hidden");
  paymentAmountElement.textContent = "Rp" + selectedSeats.length * 41000;
  payButton.disabled = balance < selectedSeats.length * 41000;
}

// Function to process payment
function processPayment() {
  if (balance < selectedSeats.length * 41000) {
    alert("Insufficient balance. Please add funds.");
    return;
  }

  // Payment successful, perform necessary actions
  alert("Payment successful. Enjoy the movie!");
  // ...
}

// Generate seats dynamically
const seatsContainer = document.getElementById("seats");
for (let i = 1; i <= 64; i++) {
  const seatElement = document.createElement("div");
  seatElement.classList.add("seat");
  seatElement.id = "seat-" + i;
  seatElement.textContent = i;

  seatElement.addEventListener("click", function () {
    toggleSeat(this.id);
  });

  seatsContainer.appendChild(seatElement);
}
