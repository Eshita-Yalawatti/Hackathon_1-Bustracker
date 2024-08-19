// JavaScript for handling login functionality

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === 'admin' && password === 'admin') {
        // Store user as logged in
        localStorage.setItem('loggedIn', 'true');

        // Redirect to a different page (admin dashboard or home page)
        window.location.href = 'adminmain1.html'; // Change to your desired page
    } else {
        // Show error message
        document.getElementById('login-error').innerText = 'Invalid username or password';
    }
});

// Toggle password visibility
document.querySelector('.pw_hide').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    this.classList.toggle('uil-eye');
    this.classList.toggle('uil-eye-slash');
});
