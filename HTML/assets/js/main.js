// Adventure Ocean - Main JavaScript

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 100; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && !validateEmail(emailInput.value)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show success message
            showNotification('Thank you! We will contact you soon.', 'success');
            this.reset();
        });
    });

    // Newsletter subscription handler
    const newsletterForms = document.querySelectorAll('form');
    newsletterForms.forEach(form => {
        const submitBtn = form.querySelector('button[type="button"]');
        if (submitBtn && submitBtn.textContent.includes('Subscribe')) {
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const emailInput = form.querySelector('input[type="email"]');
                if (emailInput && validateEmail(emailInput.value)) {
                    showNotification('Successfully subscribed to newsletter!', 'success');
                    form.reset();
                } else {
                    showNotification('Please enter a valid email address', 'error');
                }
            });
        }
    });
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification fixed top-24 right-4 px-6 py-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    } text-white animate-fade-in-up`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Back to top button
window.addEventListener('scroll', function() {
    const scrollTop = document.querySelector('.scroll-to-top');
    if (scrollTop) {
        if (window.scrollY > 300) {
            scrollTop.classList.remove('hidden');
        } else {
            scrollTop.classList.add('hidden');
        }
    }
});

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}
