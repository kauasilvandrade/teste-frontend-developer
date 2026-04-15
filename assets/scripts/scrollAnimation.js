export function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime]');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
      } else {
        entry.target.classList.remove('ativo');
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
}