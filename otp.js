document.addEventListener("DOMContentLoaded", function() {
    const otpCodeDisplay = document.getElementById("otp-code");
    const otpInput = document.getElementById("otp-input");
    const verifyBtn = document.getElementById("verify-btn");
    const timerDisplay = document.getElementById("timer");
    let otp = generateOTP(); // Initial OTP
    let countdown; // Countdown timer

    // Display initial OTP
    otpCodeDisplay.textContent = otp;

    // Generate OTP function
    function generateOTP() {
        return Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    }

    // Update OTP and timer function
    function updateOTPAndTimer() {
        otp = generateOTP();
        otpCodeDisplay.textContent = otp;
        otpInput.value = ""; // Clear input field
        startTimer();
    }

    // Start countdown timer
    function startTimer() {
        let timeLeft = 30; // 30 seconds countdown

        countdown = setInterval(function() {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft}s`;

            if (timeLeft === 0) {
                clearInterval(countdown);
                updateOTPAndTimer();
            }
        }, 1000);
    }

    // Initial start of timer
    startTimer();

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
