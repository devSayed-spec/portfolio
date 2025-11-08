// ===========================
// Project Data
// ===========================
const projectsData = {
    1: {
        title: "Formulir Pendaftaran Workshop Teknologi",
        year: "2024",
        role: "Web Development",
        description: "Proyek formulir pendaftaran workshop yang saya buat untuk menyelesaikan sertifikasi freeCodeCamp. Dalam proyek ini saya belajar membuat berbagai jenis input form, validasi, dan struktur HTML semantik yang baik.",
        tags: ["HTML5", "CSS3", "Form Validation"],
        images: ["images/form-workshop.png"]
    },
    2: {
        title: "IoT Smart Locker",
        year: "2024",
        role: "IoT / Hardware",
        description: "Sistem Smart Locker berbasis IoT dengan autentikasi sidik jari dan integrasi Firebase & MQTT. Sistem ini dikembangkan sebagai bagian dari proyek akhir saya dengan fitur keamanan tinggi dan monitoring real-time.",
        tags: ["IoT", "MQTT", "Firebase", "Hardware Integration", "ESP32"],
        images: ["images/tampak-depan.jpg", "images/tampak-belakang.jpg"]
    },
    3: {
        title: "Halaman Penghormatan Dr. B.J. Habibie",
        year: "2024",
        role: "Web Design",
        description: "Tribute page responsif untuk Dr. B.J. Habibie menggunakan HTML5 dan CSS3. Proyek ini mengimplementasikan semantic HTML, responsive images, dan mobile-first design sebagai bagian dari sertifikasi Responsive Web Design freeCodeCamp.",
        tags: ["HTML5", "CSS3", "Responsive Design"],
        images: ["images/penghormatan.png"]
    },
    4: {
        title: "Mobile IoT Smart Locker",
        year: "2024",
        role: "Mobile Development",
        description: "Aplikasi mobile untuk mengontrol Smart Locker berbasis IoT yang saya buat menggunakan bahasa Dart. Aplikasi ini dibuat sebagai bagian dari proyek akhir saya dengan interface yang intuitif dan user-friendly.",
        tags: ["Dart", "Flutter", "Mobile Development", "IoT Integration"],
        images: ["images/mobile.jpg"]
    }
};

// ===========================
// Theme Toggle
// ===========================
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const glitchOverlay = document.getElementById('glitchOverlay');
const body = document.body;

function toggleTheme() {
    // Trigger glitch effect
    glitchOverlay.classList.add('active');
    
    setTimeout(() => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        glitchOverlay.classList.remove('active');
    }, 200);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// ===========================
// Mobile Menu
// ===========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling & Active Nav
// ===========================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ===========================
// Project Modal
// ===========================
const projectItems = document.querySelectorAll('.project-item');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    
    if (!project) return;

    // Trigger glitch effect
    glitchOverlay.classList.add('active');
    
    setTimeout(() => {
        // Build modal content
        let imagesHTML = '';
        if (project.images && project.images.length > 0) {
            imagesHTML = '<div class="modal-images">';
            project.images.forEach(img => {
                imagesHTML += `
                    <div class="modal-image">
                        <img src="${img}" alt="${project.title}" loading="lazy">
                    </div>
                `;
            });
            imagesHTML += '</div>';
        }

        let tagsHTML = '';
        if (project.tags && project.tags.length > 0) {
            tagsHTML = '<div class="modal-tags">';
            project.tags.forEach(tag => {
                tagsHTML += `<span class="modal-tag">${tag}</span>`;
            });
            tagsHTML += '</div>';
        }

        modalContent.innerHTML = `
            <div class="modal-header">
                <div class="modal-meta">${project.year} / ${project.role}</div>
                <h2 class="modal-title">${project.title}</h2>
                <p class="modal-description">${project.description}</p>
                ${tagsHTML}
            </div>
            ${imagesHTML}
        `;

        projectModal.classList.add('active');
        body.style.overflow = 'hidden';
        
        glitchOverlay.classList.remove('active');
    }, 200);
}

function closeProjectModal() {
    glitchOverlay.classList.add('active');
    
    setTimeout(() => {
        projectModal.classList.remove('active');
        body.style.overflow = 'auto';
        glitchOverlay.classList.remove('active');
    }, 200);
}

// Add click events to project items
projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Close modal
modalClose.addEventListener('click', closeProjectModal);

// Close modal when clicking outside content
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ===========================
// Hover Effects for Project Items
// ===========================
projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// ===========================
// Smooth Scroll to Top on Page Load
// ===========================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===========================
// Add transition delay to elements
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hero-content, .project-item, .about-text, .contact-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// Prevent body scroll when modal is open
// ===========================
let scrollPosition = 0;

function lockScroll() {
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
}

function unlockScroll() {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}

// Update modal functions to use lock/unlock scroll
const originalOpenProjectModal = openProjectModal;
openProjectModal = function(projectId) {
    originalOpenProjectModal(projectId);
    lockScroll();
};

const originalCloseProjectModal = closeProjectModal;
closeProjectModal = function() {
    unlockScroll();
    originalCloseProjectModal();
};
