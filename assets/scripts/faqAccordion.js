export function initAccordion() {
  const accordionList = document.querySelectorAll(".sectionFaq__faq");
  if (!accordionList.length) return;

  accordionList.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("aberto");
    });
  });
}