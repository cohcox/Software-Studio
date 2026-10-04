const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const descriptionInput = document.querySelector("#description");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const description = descriptionInput.value.trim();

    clearMessage();

    if (!name || !email || !description) {
        showMessage("Please complete every field.", "error");
        return;
    }

    if (!isValidEmail(email)) {
        showMessage("Please enter a valid email address.", "error");
        emailInput.focus();
        return;
    }

    showMessage(
        `Thank you, ${name}. Your request is ready to be submitted.`,
        "success"
    );

    contactForm.reset();
});

function isValidEmail(email) {
    const basicEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return basicEmailPattern.test(email);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

function clearMessage() {
    formMessage.textContent = "";
    formMessage.className = "form-message";
}