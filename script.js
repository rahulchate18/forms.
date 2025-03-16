function validateName() {
    const name = document.getElementById('fullName').value;
    const nameError = document.getElementById('nameError');
    if (name.length < 5) {
        nameError.textContent = "Name must be at least 5 characters long.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        return false;
    } else {
        phoneError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value.toLowerCase(); // Convert to lowercase
    const name = document.getElementById('fullName').value.toLowerCase(); // Convert name to lowercase for comparison
    const passwordError = document.getElementById('passwordError');

    if (password === "password" || password === name || password.length < 8) {
        passwordError.textContent = "Password is not strong enough.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        alert("Please correct the errors in the form.");
        return false;
    }
}