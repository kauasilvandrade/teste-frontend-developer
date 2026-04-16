export function initAnimacaoScroll() {
    const elementos = document.querySelectorAll('[data-anime]');
    if (!elementos.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
                
                if (!entry.target.closest('.heroSection__introduction')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach((el) => observer.observe(el));
}
