import { initShowMenu } from "./showMenu.js";
import { initAccordion } from "./faqAccordion.js";
import { initScrollSuave } from "./smoothScroll.js";
import { initAnimacaoScroll } from "./scrollAnimation.js";
import { formFocus } from "./formFocus.js";
import { validateForm } from "./validateForm.js";

document.addEventListener('DOMContentLoaded', () => {
  initShowMenu();
  initAccordion();
  initScrollSuave();
  initAnimacaoScroll();
  formFocus();
  validateForm();
});

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const progresso = (scroll / height) * 100;

    document.querySelector(".progressBar").style.width = progresso + "%";
});