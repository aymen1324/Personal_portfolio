document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending message...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Simulate network request (ready for backend / EmailJS integration later)
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent Successfully! 🎉';
                submitBtn.style.backgroundColor = 'var(--clr-success)';
                submitBtn.style.color = '#0D1117';
                contactForm.reset();

                // Reset button after 4 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                    submitBtn.style.opacity = '1';
                    submitBtn.disabled = false;
                }, 4000);
            }, 1000);
        });
    }
});