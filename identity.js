function validateForm() {
    // Retrieve form fields
    var icNumber = document.getElementById('ic-number').value.trim();
    var address = document.getElementById('address').value.trim();
    var dob = document.getElementById('dob').value.trim();
    var nationality = document.getElementById('nationality').value.trim();

    // Validate if fields are filled
    if (icNumber === '' || address === '' || dob === '' || nationality === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // Redirect to eWallet page (replace with actual URL)
    window.location.href = 'ewallet.html';

    // Prevent form submission (since we're redirecting manually)
    return false;
}

document.getElementById('scan-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Allow HelpBit to access your camera?');
});
