export function activeMenu() {

    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll("header nav a")

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            navLinks.forEach(link => link.classList.remove("active"))
            
            const id = entry.target.getAttribute("id")
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`)
            
            if (activeLink) {
                activeLink.classList.add("active")
            }
        }
    })
    }, {
        threshold: 0.6
    })

    sections.forEach(section => {
        observer.observe(section)
    })
}