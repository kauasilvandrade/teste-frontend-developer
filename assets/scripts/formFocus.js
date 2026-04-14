export function formFocus() {
  const links = document.querySelectorAll('.formFocus')
  const inputName = document.querySelector('#nome')

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            inputName.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
            inputName.focus({ preventScroll: true })
        })
    })
}