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

/**
 * Formats a phone number string into (DD) XXXXX-XXXX format
 */
export function formatPhone(value: string) {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "");

    // Limit to 11 digits
    const limited = numbers.slice(0, 11);

    // Apply mask
    if (limited.length <= 2) return limited;
    if (limited.length <= 7) return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
}
