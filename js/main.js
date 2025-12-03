
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Email reveal
  const emailBtn = document.getElementById('reveal-email');
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      const user = 'jean.rochelle';
      const domain = '2026.icam.fr';
      const a = document.getElementById('email-link');
      a.href = `mailto:${user}@${domain}`;
      a.textContent = `${user}@${domain}`;
      emailBtn.style.display = 'none';
    });
  }

  // Phone reveal
  const phoneBtn = document.getElementById('reveal-phone');
  if (phoneBtn) {
    phoneBtn.addEventListener('click', () => {
      const phone = '+33 7 87 25 87 36';
      const a = document.getElementById('phone-link');
      a.href = `tel:${phone.replace(/\s+/g,'')}`;
      a.textContent = phone;
      phoneBtn.style.display = 'none';
    });
  }
});
