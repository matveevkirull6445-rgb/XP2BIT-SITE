document.querySelectorAll('[data-toast]').forEach((button) => {
  button.addEventListener('click', () => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = button.dataset.toast;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  });
});

if (window.XP2BIT_API_URL) {
  fetch(`${window.XP2BIT_API_URL}/health`)
    .then((response) => response.ok && response.json())
    .then((data) => {
      if (data?.status === 'ok') document.documentElement.dataset.api = 'online';
    })
    .catch(() => document.documentElement.dataset.api = 'offline');
}
