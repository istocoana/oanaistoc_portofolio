document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { 
    threshold: 0.1 
  });

  document.querySelectorAll('.fade-in-section').forEach((section) => {
    observer.observe(section);
  });
});
