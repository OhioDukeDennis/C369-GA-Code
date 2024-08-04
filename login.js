function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    if (!username || !password) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Here you can proceed with form submission or other logic
        // For example: document.getElementById('login-form').submit();
    }
}
