document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch input values
    var recipientId = document.getElementById('recipient-id').value.trim();
    var amount = parseFloat(document.getElementById('amount').value.trim());

    // Error message element
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear previous error message

    // Validate form fields
    if (!recipientId || isNaN(amount) || amount <= 0) {
        errorMessage.textContent = 'Please fill in both fields correctly.';
        return; // Stop form submission if validation fails
    }

    // Prepare data for insertion into transaction history
    var transactionData = {
        date: getCurrentDate(),
        id: recipientId, // User-provided ID
        from: 'John Doe', // Hardcoded sender
        to: 'Alice', // Hardcoded recipient
        transactionFee: '0.0001 HB', // Hardcoded transaction fee
        amount: amount.toFixed(4) + ' HB' // Amount from user
    };

    // Store transaction data in localStorage
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.unshift(transactionData); // Add new transaction to the beginning
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Update balance in localStorage
    var balance = parseFloat(localStorage.getItem('balance')) || 1000000; // Default balance if none exists
    balance -= amount;
    localStorage.setItem('balance', balance.toFixed(4));

    // Redirect to ewallet.html after storing data
    window.location.href = 'ewallet.html';
});

// Helper function to get current date in YYYY-MM-DD format
function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}

// Helper function to generate a unique transaction ID (for demonstration purposes)
function generateTransactionId() {
    return Math.floor(Math.random() * 1000000000) + 1; // Generate random ID
}



