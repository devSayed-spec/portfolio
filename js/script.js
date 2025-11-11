// ===========================
// Project Data - UPDATED
// ===========================
const projectsData = {
    1: {
        title: "Formulir Pendaftaran Workshop Teknologi",
        year: "2025",
        role: "Front-End Web Development",
        description: "Sebuah proyek formulir pendaftaran workshop teknologi yang dibuat untuk menyelesaikan tantangan sertifikasi freeCodeCamp. Proyek ini membantu saya memahami struktur HTML semantik, berbagai tipe input form, serta dasar-dasar validasi dan styling menggunakan CSS.",
        tags: ["HTML5", "CSS3", "Form Validation", "Responsive Design"],
        images: ["images/form-pendaftaran.png"],
        liveUrl: "https://devsayed-spec.github.io/Formulir-Pendaftaran-FreeCodeCamp/",
        githubUrl: "https://github.com/devSayed-spec/Formulir-Pendaftaran-FreeCodeCamp"
    },
    2: {
        title: "IoT Smart Locker",
        year: "2025",
        role: "IoT / Hardware",
        description: "Sistem Smart Locker berbasis IoT dengan autentikasi sidik jari dan integrasi Firebase & MQTT. Sistem ini dikembangkan sebagai bagian dari proyek akhir saya dengan fitur keamanan tinggi dan monitoring real-time.",
        tags: ["IoT", "MQTT", "Firebase", "Hardware Integration", "ESP32"],
        images: ["images/tampak-depan.jpg", "images/tampak-belakang.jpg"],
        liveUrl: null,
        githubUrl: null
    },
    3: {
        title: "Halaman Penghormatan Dr. B.J. Habibie",
        year: "2025",
        role: "Web Design",
        description: "Tribute page responsif untuk Dr. B.J. Habibie menggunakan HTML5 dan CSS3. Proyek ini mengimplementasikan semantic HTML, responsive images, dan responsive design sebagai bagian dari sertifikasi Responsive Web Design freeCodeCamp.",
        tags: ["HTML5", "CSS3", "Responsive Design"],
        images: ["images/penghormatan.png"],
        liveUrl: "https://devsayed-spec.github.io/tribute-page/",
        githubUrl: "https://github.com/devSayed-spec/tribute-page"
    },
    4: {
        title: "Mobile IoT Smart Locker",
        year: "2025",
        role: "Mobile Development",
        description: "Aplikasi mobile untuk mengontrol Smart Locker berbasis IoT yang saya buat menggunakan bahasa Dart. Aplikasi ini dibuat sebagai bagian dari proyek akhir saya dengan interface yang intuitif dan user-friendly.",
        tags: ["Dart", "Flutter", "Mobile Development", "IoT Integration"],
        images: ["images/mobile.jpg"],
        liveUrl: "https://devsayed-spec.github.io/project-tugas-akhir/",
        githubUrl: "https://github.com/devSayed-spec/project-tugas-akhir"
    },
    5: {
        title: "TechVision - Company Profile Website",
        year: "2025",
        role: "Frontend Web Development",
        description: "Website profil perusahaan interaktif dengan dua halaman (Beranda & Profil). Fitur meliputi sistem greeting dinamis untuk user, contact form dengan validasi (nama, format email, panjang pesan), responsive hamburger menu untuk perangkat mobile, gradient hero section, serta struktur konten yang menampilkan visi, misi, dan nilai perusahaan. Fully responsive untuk desktop, tablet, dan mobile.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Form Validation", "DOM Manipulation"],
        images: ["images/tech-vision.png    "],
        liveUrl: "https://devsayed-spec.github.io/CodingCamp-3Nov25-sayed/",
        githubUrl: "https://github.com/devSayed-spec/CodingCamp-3Nov25-sayed"
    },
    6: {
        title: "CSS Grid Documentation",
        year: "2025",
        role: "Frontend Developer",
        description: "Proyek Build a Technical Documentation Page dari freeCodeCamp Responsive Web Design Certification. Dokumentasi lengkap CSS Grid dengan navigasi interaktif, contoh kode praktis, dan responsive design menggunakan media queries.",
        tags: ["HTML5", "CSS3", "CSS Grid", "Responsive Design", "Documentation"],
        images: ["images/css.png"],
        liveUrl: " https://devsayed-spec.github.io/Build-a-Technical-Documentation-Page/",
        githubUrl: "https://github.com/devSayed-spec/Build-a-Technical-Documentation-Page"
    }
};

// ===========================
// Theme Toggle
// ===========================
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const glitchOverlay = document.getElementById('glitchOverlay');
const body = document.body;

const themeOptions = document.querySelectorAll('.theme-option');

let currentColorTheme = 'wine';
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
    body.setAttribute('data-theme', currentColorTheme);
    
    if (monoEnabled) {
        body.classList.add('mono-active');
    } else {
        body.classList.remove('mono-active');
    }
    
    localStorage.setItem('colorTheme', currentColorTheme);
    localStorage.setItem('monoEnabled', monoEnabled);
    
    updateThemeUI();
}

function handleThemeClick(e) {
    const button = e.currentTarget;
    const theme = button.getAttribute('data-theme');
    
    glitchOverlay.classList.add('active');
    
    setTimeout(() => {
        if (theme === 'mono') {
            monoEnabled = !monoEnabled;
        } else {
            currentColorTheme = theme;
        }
        
        applyTheme();
        glitchOverlay.classList.remove('active');
    }, 200);
}

themeOptions.forEach(option => {
    option.addEventListener('click', handleThemeClick);
});

const savedColorTheme = localStorage.getItem('colorTheme') || 'wine';
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
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        const offset = window.innerWidth <= 768 ? 100 : 150;
        
        if (scrollY >= (sectionTop - offset)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

window.addEventListener('load', () => {
    setActiveNav();
});

// ===========================
// Project Modal - UPDATED WITH GITHUB LINKS
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

    glitchOverlay.classList.add('active');
    
    setTimeout(() => {
        // Build modal images
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

        // Build tags
        let tagsHTML = '';
        if (project.tags && project.tags.length > 0) {
            tagsHTML = '<div class="modal-tags">';
            project.tags.forEach(tag => {
                tagsHTML += `<span class="modal-tag">${tag}</span>`;
            });
            tagsHTML += '</div>';
        }

        // Build project links (Live Demo + GitHub)
        let linksHTML = '';
        if (project.liveUrl || project.githubUrl) {
            linksHTML = '<div class="modal-links" style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">';
            
            if (project.liveUrl) {
                linksHTML += `
                    <a href="${project.liveUrl}" target="_blank" class="btn-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                    </a>
                `;
            }
            
            if (project.githubUrl) {
                linksHTML += `
                    <a href="${project.githubUrl}" target="_blank" class="btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        View Code
                    </a>
                `;
            }
            
            linksHTML += '</div>';
        }

        modalContent.innerHTML = `
            <div class="modal-header">
                <div class="modal-meta">${project.year} / ${project.role}</div>
                <h2 class="modal-title">${project.title}</h2>
                <p class="modal-description">${project.description}</p>
                ${tagsHTML}
                ${linksHTML}
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

projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

modalClose.addEventListener('click', closeProjectModal);

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ===========================
// Hover Effects
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
// Page Load Animations
// ===========================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

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