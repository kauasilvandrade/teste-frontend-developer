export function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  if (!linksInternos.length) return;

  linksInternos.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      const section = document.querySelector(href);

      if (!section) return; 

      event.preventDefault();

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}