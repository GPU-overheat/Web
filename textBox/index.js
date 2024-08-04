document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    emailInput.addEventListener('input', () => {
        const email = emailInput.value;
        if (email === "") {
            emailInput.classList.remove('valid', 'invalid');
            errorMessage.textContent = '';
        } else if (!validateEmail(email)) {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            errorMessage.textContent = 'Please enter a valid email address.';
        } else {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            errorMessage.textContent = '';
        }
    });
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
