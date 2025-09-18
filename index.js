const defaultSection = document.getElementById('default-section');
const success = document.getElementById('success');
// const subscribeBtn = document.getElementById('subscribe-btn');
const dismissBtn = document.getElementById('dismiss-btn');
const confirmationEmail = document.getElementById('confirmation-email');

function toggleHidden() {
  defaultSection.classList.toggle('hidden');
  success.classList.toggle('hidden');
}

// function validateEmail(e) {

// }

// Fn: Form submitted
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input
  const email = emailInput.value;
  console.log(email);

  // Check if input matches Regex:
  const validation = emailRegex.test(email);

  if (validation) {
    console.log('Submitted');
    confirmationEmail.textContent = email;
    toggleHidden();
  } else {
    console.log('Error!');
  }
  // If success, log submitted and run toggleHidden
});

// Revert success page
dismissBtn.addEventListener('click', toggleHidden);
