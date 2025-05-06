document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden');
    this.reset();
  
    setTimeout(() => {
      confirmation.classList.add('hidden');
    }, 5000);
  });
  