// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Unactive click outside the element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

const paymentNameElement = document.getElementById("payment-name");
const paymentAgeElement = document.getElementById("payment-age");
const paymentSelectedSeats = document.getElementById("payment-seats");
const paymentAmoungElement = document.getElementById("payment");

paymentNameElement.textContent = userNameAge[0];
paymentAgeElement.textContent = userNameAge[1];
paymentSelectedSeats.textContent = 123;
paymentAmoungElement.textContent = "Rp 49.000,00";

updateUserNameAge();
