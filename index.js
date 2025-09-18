const defaultSection = document.getElementById('default-section');
const success = document.getElementById('success');
const dismissBtn = document.getElementById('dismiss-btn');
const confirmationEmail = document.getElementById('confirmation-email');
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

function toggleHidden() {
  defaultSection.classList.toggle('hidden');
  success.classList.toggle('hidden');
}

function handleValidation(e) {
  e.preventDefault();

  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Matches as long as no whitespace or extra @ symbols

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
}

form.addEventListener('submit', handleValidation);
dismissBtn.addEventListener('click', toggleHidden); // Reverts page
