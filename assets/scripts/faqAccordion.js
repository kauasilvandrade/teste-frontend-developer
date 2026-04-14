export function initAccordion() {
  const accordionList = document.querySelectorAll(".sectionFaq__faq");

  accordionList.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("aberto");
    });
  });
}