document.addEventListener("DOMContentLoaded", function() {
    const otpInput = document.getElementById("otp-input");
    const generateOTPBtn = document.getElementById("generate-otp-btn");
    const timerDisplay = document.getElementById("timer");
    const verifyBtn = document.getElementById("verify-btn");
    
    let countdown; // Countdown timer
    
    // Generate OTP function
    function generateOTP() {
        return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    }
    
    // Start timer function
    function startTimer() {
        let timeLeft = 30;
        countdown = setInterval(function() {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft}s`;
            if (timeLeft === 0) {
                clearInterval(countdown);
                generateOTPBtn.disabled = false;
                timerDisplay.textContent = '';
            }
        }, 1000);
    }
    
    // Initial OTP generation and timer start
    generateOTPBtn.addEventListener("click", function() {
        let otp = generateOTP();
        timerDisplay.textContent = '30s';
        generateOTPBtn.disabled = true;
        startTimer();
        
        // Simulate OTP sending (in real use case, this would be sent via SMS or app)
        setTimeout(function() {
            alert(`OTP sent: ${otp}`);
        }, 1000); // Adjust timing for simulation
    });
    
    // Verify button click event
    verifyBtn.addEventListener("click", function() {
        const enteredOTP = otpInput.value.trim();
        if (enteredOTP === otp.toString()) {
            clearInterval(countdown); // Stop the timer
            alert("OTP Verified! Redirecting to eWallet page...");
            // Redirect to eWallet page or perform other actions
            window.location.href = "ewallet.html"; // Replace with actual URL
        } else {
            alert("Incorrect OTP. Please try again.");
        }
    });
});
