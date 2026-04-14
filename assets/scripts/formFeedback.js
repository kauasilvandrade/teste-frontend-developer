export function formFeedback() {
  const form = document.querySelector("#formContato");
  const button = document.querySelector("#btnEnviar");

  if (!form) return;

  form.addEventListener("submit", () => {
    button.innerText = "Enviando...";
    button.disabled  = true;
  });
}