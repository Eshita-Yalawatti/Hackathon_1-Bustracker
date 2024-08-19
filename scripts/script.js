document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#login');
    const signupLink = document.querySelector('#signupLink');
    const loginLink = document.querySelector('#loginLink');
    const loginEmail = document.querySelector('#loginEmail');
    const loginPassword = document.querySelector('#loginPassword');

    // Switch to Signup Form
    signupLink.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.login_form').style.display = 'none';
        document.querySelector('.signup_form').style.display = 'block';
    });

    // Switch back to Login Form
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.signup_form').style.display = 'none';
        document.querySelector('.login_form').style.display = 'block';
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const username = loginEmail.value;
        const password = loginPassword.value;

        // Check if the credentials match the hardcoded values
        if (username === "eshita" && password === "eshita123") {
            // Redirect to main.html
            window.location.href = 'trial.html';
        } else {
            // Display an alert or handle invalid credentials
            alert('Invalid credentials. Please try again.');
        }
    });
});
