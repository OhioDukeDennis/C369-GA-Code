function goBack() {
    window.history.back();
}

function validateAndProceed() {
    // Validate all fields before proceeding
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var phone = document.getElementById('phone').value;

    if (fullname === '' || email === '' || password === '' || confirmPassword === '' || phone === '') {
        alert('Please fill in all fields.');
        return;
    }

    // If all validations pass, proceed to next step (register 2)
    window.location.href = 'identity.html'; // Replace with your actual page URL
}
