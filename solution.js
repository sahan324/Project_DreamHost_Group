const steps = document.querySelectorAll('.overlay-step');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('step-visible')) {
          entry.target.classList.add('step-visible');
        }
      });
    }, { threshold: 0.3 });

    steps.forEach(step => observer.observe(step));

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.hero-banner').classList.add('loaded');
    });