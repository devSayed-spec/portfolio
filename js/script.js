
// 1. GREETING FUNCTION

function displayGreeting() {
    const userName = "Sayed Furqan";
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        greetingElement.innerHTML = `Hi ${userName}, Welcome To Website`;
    }
}

// 2. HAMBURGER MENU (RESPONSIVE)

function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// (form handling removed - not used in this portfolio)

// ===================================
// 5. SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// 6. IMAGE LIGHTBOX FUNCTIONALITY
// ===================================
function setupImageLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Get all clickable images
    const clickableImages = document.querySelectorAll('.clickable-image');
    
    // Add click event to each image
    clickableImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxCaption.innerHTML = this.getAttribute('data-title') || this.alt;
        });
    });
    
    // Close lightbox when clicking the close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    }
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });
}

// ===================================
// 7. INITIALIZE ALL FUNCTIONS
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Run all initialization functions
    displayGreeting();
    setupHamburgerMenu();
    setupSmoothScroll();
    setupImageLightbox();
    
    console.log('✅ Portfolio website loaded successfully!');
});