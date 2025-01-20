const toggleForm = document.getElementById('toggle-form');
const formTitle = document.getElementById('form-title');
const formButton = document.getElementById('form-button');
const fullNameField = document.getElementById('full-name');
const form = document.getElementById('login-signup-form');
const statusMessage = document.getElementById('status-message');

// Toggling between Login and Signup forms
toggleForm.addEventListener('click', () => {
    const isLogin = formTitle.textContent === 'Login';
    formTitle.textContent = isLogin ? 'Signup' : 'Login';
    formButton.textContent = isLogin ? 'Signup' : 'Login';
    fullNameField.classList.toggle('hidden', !isLogin);
    fullNameField.required = isLogin;
    toggleForm.innerHTML = isLogin
        ? 'Already have an account? <span>Login</span>'
        : "Don't have an account? <span>Signup</span>";
});
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        statusMessage.textContent = "Both fields are required.";
        statusMessage.style.color = "red";
        statusMessage.classList.remove('hidden');
        return;
    }

    // Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        statusMessage.textContent = "Please enter a valid email address.";
        statusMessage.style.color = "red";
        statusMessage.classList.remove('hidden');
        return;
    }

    // Login validation
    if (formTitle.textContent === "Login") {
        if (password.length < 6) {
            statusMessage.textContent = "Password must be at least 6 characters.";
            statusMessage.style.color = "red";
            statusMessage.classList.remove('hidden');
            return;
        }

        statusMessage.textContent = "Login Successful! Redirecting...";
        statusMessage.style.color = "green";
        statusMessage.classList.remove('hidden');

        // Redirect to homepage
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        if (password.length < 6) {
            statusMessage.textContent = "Password must be at least 6 characters.";
            statusMessage.style.color = "red";
            statusMessage.classList.remove('hidden');
            return;
        }

        statusMessage.textContent = "Signup Successful! Please login.";
        statusMessage.style.color = "green";
        statusMessage.classList.remove('hidden');
        formTitle.textContent = "Login";
        formButton.textContent = "Login";
        fullNameField.classList.add('hidden');
        fullNameField.required = false;
        toggleForm.innerHTML = "Don't have an account? <span>Signup</span>";
    }
});

