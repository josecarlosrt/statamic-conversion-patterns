document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-contact');
  const closeBtn = document.getElementById('close-contact');
  const modal = document.getElementById('contact-modal');

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }
});

