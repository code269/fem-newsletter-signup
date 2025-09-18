const defaultSection = document.getElementById('default-section');
const success = document.getElementById('success');
// const subscribeBtn = document.getElementById('subscribe-btn');
const dismissBtn = document.getElementById('dismiss-btn');
const confirmationEmail = document.getElementById('confirmation-email');

function toggleHidden() {
  defaultSection.classList.toggle('hidden');
  success.classList.toggle('hidden');
}

// function handleValidation(e) {

// }

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;

  // Check if input matches Regex:
  const validation = emailRegex.test(email);

  if (validation) {
    errorMsg.classList.add('hidden');
    emailInput.classList.remove('form__input--error');

    toggleHidden();
    confirmationEmail.textContent = email;
  } else {
    errorMsg.classList.remove('hidden');
    emailInput.classList.add('form__input--error');
  }
});

// Revert success page
dismissBtn.addEventListener('click', toggleHidden);
