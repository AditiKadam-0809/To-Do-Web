function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Optional: handle contact form submission
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Message sent (demo only)!");
        form.reset();
    });
}