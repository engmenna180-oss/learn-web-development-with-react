document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
        offset: 100
    })
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const sidebarToggle = document.getElementById('sidebarToggle')
    const leftSidebar = document.getElementById('leftSidebar')
    if (sidebarToggle && leftSidebar) {
        sidebarToggle.addEventListener('click', function (e) {
            e.stopPropagation()
            leftSidebar.classList.toggle('show')
        });
        document.addEventListener('click', function (e) {
            if (window.innerWidth <= 991) {
                if (!leftSidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    leftSidebar.classList.remove('show')
                }
            }
        })
    }
    const contactForm = document.getElementById('contactForm')
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent.')
            contactForm.reset();
        })
    }
})