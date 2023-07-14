// Sample transaction data
let transactions = [
  {
    name: "huzain",
    age: 15,
    movieTitle: "Fast X",
    seatNumber: 6,
    amount: 53000,
  },
  {
    name: "hadi",
    age: 10,
    movieTitle: "John Wick: Chapter 4",
    seatNumber: 4,
    amount: 60000,
  },
  {
    name: "purnomo",
    age: 14,
    movieTitle: "The Super Mario Bros. Movie",
    seatNumber: 7,
    amount: 49000,
  },
];

// Transaction list element
const transactionList = document.getElementById("transaction-list");

// Function to format currency
function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

// Function to cancel transaction
function cancelTransaction(transactionId) {
  const cancelledTransaction = transactions.find(
    (transaction) => transaction.id === transactionId
  );
  if (cancelledTransaction) {
    // Refund the amount to the balance
    balance += cancelledTransaction.amount;
    updateBalance();

    // Remove the cancelled transaction from the list
    transactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    renderTransactionList();
    alert("Transaction cancelled successfully.");
  }
}

// Function to update balance on the page
function updateBalance() {
  const balanceElement = document.getElementById("current-balance");
  balanceElement.textContent = formatCurrency(balance);
}

function renderTransactionList() {
  transactionList.innerHTML = "";
  transactions.forEach(function (transaction) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.age}</td>
        <td>${transaction.movieTitle}</td>
        <td>${transaction.seatNumber}</td>
        <td>${formatCurrency(transaction.amount)}</td>
        <td><button class="cancel-button" onclick="cancelTransaction('${
          transaction.name
        }')">Cancel</button></td>
        `;
    transactionList.appendChild(row);
  });
}

// Initial render of transaction list
renderTransactionList();
