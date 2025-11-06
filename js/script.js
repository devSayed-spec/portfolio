// ===================================
// 1. GREETING FUNCTION
// ===================================
function displayGreeting() {
    const userName = "Sayed Furqan";
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        greetingElement.innerHTML = `Hi ${userName}, Welcome To Website`;
    }
}

// ===================================
// 2. HAMBURGER MENU (RESPONSIVE)
// ===================================
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

// ===================================
// 3. FORM VALIDATION & SUBMISSION
// ===================================
function setupFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const contactType = document.getElementById('contactType').value;
            const contactValue = document.getElementById('contactValue').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('message').value;
            
            // Validation
            let isValid = true;
            let errorMessage = "";
            
            // Validate Name
            if (name.trim() === "") {
                isValid = false;
                errorMessage += "❌ Nama tidak boleh kosong!\n";
            }
            
            // Validate Contact Value
            if (contactValue.trim() === "") {
                isValid = false;
                errorMessage += "❌ Nomor/Email tidak boleh kosong!\n";
            } else {
                // Validate Email format
                if (contactType === "Email") {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(contactValue)) {
                        isValid = false;
                        errorMessage += "❌ Format email tidak valid!\n";
                    }
                }
                // Validate Phone format
                if (contactType === "Telepon") {
                    const phonePattern = /^[0-9]+$/;
                    if (!phonePattern.test(contactValue)) {
                        isValid = false;
                        errorMessage += "❌ Nomor telepon hanya boleh berisi angka!\n";
                    }
                    if (contactValue.length < 10) {
                        isValid = false;
                        errorMessage += "❌ Nomor telepon minimal 10 digit!\n";
                    }
                }
            }
            
            // Validate Gender
            if (!gender) {
                isValid = false;
                errorMessage += "❌ Pilih jenis kelamin!\n";
            }
            
            // Validate Message
            if (message.trim() === "") {
                isValid = false;
                errorMessage += "❌ Pesan tidak boleh kosong!\n";
            }
            
            // If validation fails
            if (!isValid) {
                alert(errorMessage);
                return;
            }
            
            // If validation passes
            displayResult({
                name: name,
                contactType: contactType,
                contactValue: contactValue,
                gender: gender.value,
                message: message
            });
        });
    }
}

// ===================================
// 4. DISPLAY RESULT FUNCTION
// ===================================
function displayResult(data) {
    // Get current time
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Jakarta'
    };
    const currentTime = now.toLocaleString('id-ID', options);
    
    // Format result HTML
    const resultHTML = `
        <h3>✅ Form Submitted Successfully!</h3>
        <p><strong>Current time:</strong> ${currentTime}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p><strong>Nama:</strong> ${data.name}</p>
        <p><strong>${data.contactType}:</strong> ${data.contactValue}</p>
        <p><strong>Jenis Kelamin:</strong> ${data.gender}</p>
        <p><strong>Pesan:</strong></p>
        <p style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-top: 10px;">${data.message}</p>
    `;
    
    // Display result
    const formResult = document.getElementById('formResult');
    if (formResult) {
        formResult.innerHTML = resultHTML;
    }
    
    // Reset form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.reset();
    }
    
    // Show success message
    alert('✅ Form berhasil dikirim!');
}

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
    setupFormValidation();
    setupSmoothScroll();
    setupImageLightbox();
    
    console.log('✅ Portfolio website loaded successfully!');
});