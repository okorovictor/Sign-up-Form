function validateForm() {
    const firstName = document.getElementById('FName').value.trim();
    const lastName = document.getElementById('LName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('Pass').value.trim();
    const errorMessages = document.querySelectorAll('.error-message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation

    let isValid = true;

    // Clear previous error messages
    errorMessages.forEach(error => (error.style.display = 'none'));

    // Validate First Name
    if (!firstName) {
        errorMessages[0].style.display = 'block';
        errorMessages[0].textContent = "First Name cannot be empty.";
        isValid = false;
    }

    // Validate Last Name
    if (!lastName) {
        errorMessages[1].style.display = 'block';
        errorMessages[1].textContent = "Last Name cannot be empty.";
        isValid = false;
    } 

    // Validate Email
    if (!email) {
        errorMessages[2].style.display = 'block';
        errorMessages[2].textContent = "Email Address cannot be empty.";
        document.querySelectorAll("input")[2].setAttribute("placeholder", "email@example.com");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        errorMessages[2].style.display = 'block';
        errorMessages[2].textContent = "Email Address is not valid.";
        isValid = false;
    }

    // Validate Password
    if (!password) {
        errorMessages[3].style.display = 'block';
        errorMessages[3].textContent = "Password cannot be empty.";
        isValid = false;
    }

    // Return false if any validation fails
    return isValid; 

}
