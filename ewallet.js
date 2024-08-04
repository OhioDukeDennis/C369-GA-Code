document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and display balance from local storage
    var balanceAmount = document.getElementById('balance-amount');
    let currentBalance = parseFloat(localStorage.getItem('hbBalance') || '1000000'); // Default to initial hardcoded value if not found
    balanceAmount.textContent = `$ ${currentBalance.toFixed(2)} HB`;

    // Retrieve and display transactions from localStorage
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    var transactionHistory = document.getElementById('transactionHistory');

    transactions.forEach(function(transaction) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.id}</td>
            <td>${transaction.from}</td>
            <td>${transaction.to}</td>
            <td>${transaction.transactionFee}</td>
            <td>${transaction.amount}</td>
        `;
        transactionHistory.appendChild(row);
    });
});



