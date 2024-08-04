document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const convertedAmountInput = document.getElementById('converted-amount');
    const conversionText = document.getElementById('conversion-text');
    const countrySelect = document.getElementById('country');
    const buyForm = document.getElementById('buy-form');

    amountInput.addEventListener('input', handleAmountInput);
    countrySelect.addEventListener('change', handleAmountInput);

    function handleAmountInput() {
        let amount = amountInput.value.trim().replace(/[^0-9.]/g, '');
        
        if (!isValidAmount(amount)) {
            conversionText.textContent = `Invalid amount.`;
            convertedAmountInput.value = '';
            return;
        }

        let multiplier = getMultiplier(countrySelect.value);
        let convertedAmount = (parseFloat(amount) * multiplier).toFixed(2);

        conversionText.textContent = `You will receive ${convertedAmount} HB for ${amount} (${countrySelect.value}).`;
        convertedAmountInput.value = convertedAmount;
    }

    function getMultiplier(countryCode) {
        switch (countryCode) {
            case 'USD':
                return 30; // Example multiplier for USD
            case 'EUR':
                return 20; // Example multiplier for EUR
            case 'GBP':
                return 10; // Example multiplier for GBP
            default:
                return 1;
        }
    }

    function isValidAmount(amount) {
        return !isNaN(parseFloat(amount)) && isFinite(amount);
    }

    buyForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let amount = parseFloat(amountInput.value.trim());
        let multiplier = getMultiplier(countrySelect.value);
        let convertedAmount = amount * multiplier;

        // Update the eWallet balance using local storage
        let currentBalance = parseFloat(localStorage.getItem('hbBalance') || '0');
        let newBalance = (currentBalance + convertedAmount).toFixed(2);
        localStorage.setItem('hbBalance', newBalance);

        // Redirect to eWallet page
        window.location.href = 'ewallet.html';
    });
});







