const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function updateActiveLink() {
    const scrollPosition = window.scrollY + 160;
    let currentSection = sections[0];

    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition) {
            currentSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection.id}`
        );
    });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("resize", updateActiveLink);
updateActiveLink();