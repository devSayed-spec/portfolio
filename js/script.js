// ===========================
// Project Data
// ===========================
const projectsData = {
    1: {
        title: "Formulir Pendaftaran Workshop Teknologi",
        year: "2025",
        role: "Front-End Web Development",
        description: "Sebuah proyek formulir pendaftaran workshop teknologi yang dibuat untuk menyelesaikan tantangan sertifikasi freeCodeCamp. Proyek ini membantu saya memahami struktur HTML semantik, berbagai tipe input form, serta dasar-dasar validasi dan styling menggunakan CSS.",
        tags: ["HTML5", "CSS3", "Form Validation", "Responsive Design"],
        images: ["images/form-pendaftaran.png"],
        liveUrl: "https://devsayed-spec.github.io/Formulir-Pendaftaran-FreeCodeCamp/"
    },
    2: {
        title: "IoT Smart Locker",
        year: "2025",
        role: "IoT / Hardware",
        description: "Sistem Smart Locker berbasis IoT dengan autentikasi sidik jari dan integrasi Firebase & MQTT. Sistem ini dikembangkan sebagai bagian dari proyek akhir saya dengan fitur keamanan tinggi dan monitoring real-time.",
        tags: ["IoT", "MQTT", "Firebase", "Hardware Integration", "ESP32"],
        images: ["images/tampak-depan.jpg", "images/tampak-belakang.jpg"],
        liveUrl: null
    },
    3: {
        title: "Halaman Penghormatan Dr. B.J. Habibie",
        year: "2025",
        role: "Web Design",
        description: "Tribute page responsif untuk Dr. B.J. Habibie menggunakan HTML5 dan CSS3. Proyek ini mengimplementasikan semantic HTML, responsive images, dan responsive design sebagai bagian dari sertifikasi Responsive Web Design freeCodeCamp.",
        tags: ["HTML5", "CSS3", "Responsive Design"],
        images: ["images/penghormatan.png"],
        liveUrl: "https://devsayed-spec.github.io/tribute-page/"
    },
    4: {
        title: "Mobile IoT Smart Locker",
        year: "2025",
        role: "Mobile Development",
        description: "Aplikasi mobile untuk mengontrol Smart Locker berbasis IoT yang saya buat menggunakan bahasa Dart. Aplikasi ini dibuat sebagai bagian dari proyek akhir saya dengan interface yang intuitif dan user-friendly.",
        tags: ["Dart", "Flutter", "Mobile Development", "IoT Integration"],
        images: ["images/mobile.jpg"],
        liveUrl: "https://devsayed-spec.github.io/project-tugas-akhir/"
    },
    5: {
        title: "TechVision - Company Profile Website",
        year: "2025",
        role: "Frontend Web Development",
        description: "Website profil perusahaan interaktif dengan dua halaman (Beranda & Profil). Fitur meliputi sistem greeting dinamis untuk user, contact form dengan validasi (nama, format email, panjang pesan), responsive hamburger menu untuk perangkat mobile, gradient hero section, serta struktur konten yang menampilkan visi, misi, dan nilai perusahaan. Fully responsive untuk desktop, tablet, dan mobile.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Form Validation", "DOM Manipulation"],
        images: [],
        liveUrl: "https://devsayed-spec.github.io/CodingCamp-3Nov25-sayed/"
    }
    

};

// ===========================
// Theme Toggle (Independent: Light/Dark + Monospaced overlay)
// ===========================
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const glitchOverlay = document.getElementById('glitchOverlay');
const body = document.body;

// Get all theme option buttons
const themeOptions = document.querySelectorAll('.theme-option');

let currentColorTheme = 'dark'; // light or dark
let monoEnabled = false;

function updateThemeUI() {
    themeOptions.forEach(option => {
        const theme = option.getAttribute('data-theme');
        
        if (theme === 'mono') {
            option.classList.toggle('active', monoEnabled);
        } else {
            option.classList.toggle('active', theme === currentColorTheme);
        }
    });
}

function applyTheme() {
    // Apply color theme
    body.setAttribute('data-theme', currentColorTheme);
    
    // Apply monospaced overlay
    if (monoEnabled) {
        body.classList.add('mono-active');
    } else {
        body.classList.remove('mono-active');
    }
    
    // Save to localStorage
    localStorage.setItem('colorTheme', currentColorTheme);
    localStorage.setItem('monoEnabled', monoEnabled);
    
    updateThemeUI();
}

function handleThemeClick(e) {
    const button = e.currentTarget;
    const theme = button.getAttribute('data-theme');
    
    // Trigger glitch effect
    glitchOverlay.classList.add('active');
    
    setTimeout(() => {
        if (theme === 'mono') {
            // Toggle monospaced
            monoEnabled = !monoEnabled;
        } else {
            // Switch color theme
            currentColorTheme = theme;
        }
        
        applyTheme();
        glitchOverlay.classList.remove('active');
    }, 200);
}

// Add click events to all theme buttons
themeOptions.forEach(option => {
    option.addEventListener('click', handleThemeClick);
});

// Load saved theme
const savedColorTheme = localStorage.getItem('colorTheme') || 'dark';
const savedMonoEnabled = localStorage.getItem('monoEnabled') === 'true';

currentColorTheme = savedColorTheme;
monoEnabled = savedMonoEnabled;
applyTheme();

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

        let liveUrlHTML = '';
        if (project.liveUrl) {
            liveUrlHTML = `
                <a href="${project.liveUrl}" target="_blank" class="btn-primary" style="display: inline-flex; margin-top: 1rem;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View Live Project
                </a>
            `;
        }

        modalContent.innerHTML = `
            <div class="modal-header">
                <div class="modal-meta">${project.year} / ${project.role}</div>
                <h2 class="modal-title">${project.title}</h2>
                <p class="modal-description">${project.description}</p>
                ${tagsHTML}
                ${liveUrlHTML}
            </div>
            ${imagesHTML}
        `;

        projectModal.classList.add('active');
        lockScroll();
        
        glitchOverlay.classList.remove('active');
    }, 200);
}

function closeProjectModal() {
    glitchOverlay.classList.add('active');
    
    setTimeout(() => {
        projectModal.classList.remove('active');
        unlockScroll();
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
// Matrix Canvas Animation (Monospaced Theme)
// ===========================
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
    // Only draw if monospaced theme is active
    if (body.getAttribute('data-theme') !== 'monospaced') {
        return;
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Start matrix animation
setInterval(drawMatrix, 50);