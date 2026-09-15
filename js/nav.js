const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `nav a[href="#${entry.target.id}"]`
            );

            activeLink.classList.add("active");
        }

    });

}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});