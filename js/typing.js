document.addEventListener('DOMContentLoaded', () => {
    const taglineEl = document.querySelector('.hero-tagline');
    if (!taglineEl) return;

    const phrases = [
        "Building AI Systems & Backend Applications",
        "Automating Workflows with Python & Termux",
        "Exploring Linux Infrastructure & Networking",
        "Information Systems Student @ Wollo University"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            taglineEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30;
        } else {
            taglineEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 60;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2200; // Wait before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400; // Wait before typing next phrase
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Initialize after brief delay
    setTimeout(typeWriter, 1200);
});