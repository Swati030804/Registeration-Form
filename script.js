// script.js

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    let valid = true;

    // Name validation
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        valid = false;
        document.getElementById('nameError').textContent = 'Name is required.';
        document.getElementById('nameError').style.display = 'block';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        valid = false;
        document.getElementById('emailError').textContent = 'Invalid email address.';
        document.getElementById('emailError').style.display = 'block';
    }

    // Password validation
    const password = document.getElementById('password');
    if (password.value.trim().length < 6) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        document.getElementById('passwordError').style.display = 'block';
    }

    // DOB validation
    const dob = document.getElementById('dob');
    if (dob.value === '') {
        valid = false;
        document.getElementById('dobError').textContent = 'Date of birth is required.';
        document.getElementById('dobError').style.display = 'block';
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        valid = false;
        document.getElementById('genderError').textContent = 'Please select a gender.';
        document.getElementById('genderError').style.display = 'block';
    }

    // If all validations pass
    if (valid) {
        alert('Form submitted successfully!');
        // Form can be submitted to a server here
    }
});
