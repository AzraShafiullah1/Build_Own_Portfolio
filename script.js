// Skills Data
const skillsList = [
    "Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop", "InDesign","Canva",
    "UI & UX Design", "Wireframing", "Rapid Prototyping", "Logo Design", "Color Theory",
    "Design Thinking", "Video Editing","Adobe InDesign","Adobe After Effects", "Graphic Design",
];

// Projects Data
const projectsData = [
    {
        icon: "fas fa-mobile-alt",
        title: "Fintech Dashboard UI",
        description: "Web & mobile interface that improves user engagement through clean layouts and intuitive navigation. Built design system in Figma. My project name is, Wireframe ,visual Design, Mockups, Mobile App Design ,SaaS website,B2C Service booking website, , CRM website, user interface design, Ecommerce website, Event Listing Mobile App,Travel booking website, Landing pages, Agency website, Real estate website, Fashion brand website, Restaurant website, Education website",
        tech: ["Figma","Adobe XD","Canva","Prototyping"]
    },
    {
        icon: "fas fa-shopping-cart",
        title: "EcoMarket Place",
        description: "A full e-commerce concept with high-fidelity interactive prototype, style guides, and cross-functional collaboration delivering a consistent brand identity. My project name is Logo Design, Poster Design, Business Card, Logo Redesign, Recreate the Hiring Post, storyboarding design, Cartoon picture design",
        tech: ["Illustrator","Adobe Photoshop","Adobe XD","Figma","Canva","UI Design"]
    },
    
    {
        icon: "fas fa-palette",
        title: "Brand Identity Suite",
        description: "Logo design, social media visuals, banners, and brand guidelines for multiple startups, enhancing overall brand visibility and professionalism",
        tech: ["Adobe Suite", "Branding",Logo Design"]
    }
];

// Work Experience Data
const workExperience = [
    {
        title: "UI/UX Designer Inter",
          date:"",
        description: "Conceptualized web/mobile interfaces, boosting engagement. Created high-fidelity prototypes & design systems (Figma/Adobe XD), streamlining dev handoff. Developed visual assets using Photoshop/Illustrator."
    },
    {
        title: "Graphic Design Intern",
        date:"",
        description: "Assisted in visual content for branding and marketing materials, collaborated on cross-team design projects."
    },   
];

// Education Data
const educationData = [
    {
        degree: "Diploma in Graphic Design",
        institution: "Virtual University of Pakistan",
        details: ""
    },
    {
        degree: "Bachelor of Commerce (Hons.)",
        institution: "University of Karachi",
        details: "2018 – 2021"
    }
];

// Certifications Data
const certifications = [
    "Graphic Designer (July-Oct 2024)",
    "UI/UX Design ",
    "UX Design",
    
];

// Populate Skills
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsList.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsGrid.appendChild(skillTag);
        });
    }
}

// Populate Projects
function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="card-img"><i class="${project.icon}"></i></div>
                <div class="card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }
}

// Populate Work Experience
function populateWorkExperience() {
    const workContainer = document.getElementById('workExperience');
    if (workContainer) {
        workExperience.forEach(exp => {
            const expDiv = document.createElement('div');
            expDiv.className = 'exp-item';
            expDiv.innerHTML = `
                <div class="exp-title">${exp.title} <span style="font-weight: normal;">• ${exp.location}</span></div>
                <div class="exp-date">${exp.date}</div>
                <p>${exp.description}</p>
            `;
            workContainer.appendChild(expDiv);
        });
    }
}

// Populate Education
function populateEducation() {
    const eduContainer = document.getElementById('education');
    if (eduContainer) {
        educationData.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.className = 'edu-item';
            eduDiv.innerHTML = `
                <div class="exp-title">${edu.degree}</div>
                <div class="exp-date">${edu.institution} | ${edu.details}</div>
            `;
            eduContainer.appendChild(eduDiv);
        });
    }
}

// Populate Certifications
function populateCertifications() {
    const certContainer = document.getElementById('certifications');
    if (certContainer) {
        certifications.forEach(cert => {
            const certBadge = document.createElement('span');
            certBadge.className = 'cert-badge';
            certBadge.textContent = cert;
            certContainer.appendChild(certBadge);
        });
    }
}

// Contact Form Handler
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                formMessage.innerHTML = '<span style="color: #10b981;">✓ Message sent successfully! I\'ll get back to you soon.</span>';
                form.reset();
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 5000);
            } else {
                formMessage.innerHTML = '<span style="color: #ef4444;">✗ Please fill in all fields.</span>';
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 3000);
            }
        });
    }
}

// Smooth Scroll for Navigation Links
function setupSmoothScroll() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for Fade-up Animations
function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll('section, .projects-grid, .resume-block, .contact-flex, .skills-grid, .hero, .section-title');
    fadeElements.forEach(el => {
        el.classList.add('fade-up');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    
    // Trigger for initially visible elements
    setTimeout(() => {
        document.querySelectorAll('.fade-up').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('appear');
            }
        });
    }, 100);
}

// Active Navigation Link Highlight
function setupActiveNavHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '#334155';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = '#8b5cf6';
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateSkills();
    populateProjects();
    populateWorkExperience();
    populateEducation();
    populateCertifications();
    setupContactForm();
    setupSmoothScroll();
    setupScrollAnimations();
    setupActiveNavHighlight();
});
