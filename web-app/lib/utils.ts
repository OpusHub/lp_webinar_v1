/**
 * Smoothly scrolls to the registration form in the Hero section
 */
export function scrollToForm() {
    const formSection = document.getElementById('registration-form');

    if (formSection) {
        const yOffset = -100; // Offset for fixed headers if any
        const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
}
