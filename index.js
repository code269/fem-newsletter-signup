const defaultSection = document.getElementById('default-section');
const success = document.getElementById('success');
const subscribeBtn = document.getElementById('subscribe-btn');
const dismissBtn = document.getElementById('dismiss-btn');

function toggleHidden(e) {
  e.preventDefault();

  defaultSection.classList.toggle('hidden');
  success.classList.toggle('hidden');
}

// Fn: apply form logic & authentication
// If pass, use toggleHidden.fn

// Possibly turn these into just 1 button ?
subscribeBtn.addEventListener('click', toggleHidden);
dismissBtn.addEventListener('click', toggleHidden);
