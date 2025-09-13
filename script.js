// PortfolioHub - Professional Portfolio Platform
class PortfolioHub {
    constructor() {
        this.currentUser = null;
        this.users = this.loadUsers();
        this.posts = this.loadPosts();
        this.projects = this.loadProjects();
        this.network = this.loadNetwork();
        this.theme = this.loadTheme();
        
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
        this.checkAuth();
    }

    // Authentication
    checkAuth() {
        const currentUser = localStorage.getItem('portfoliohub-current-user');
        if (currentUser) {
            this.currentUser = JSON.parse(currentUser);
            this.showMainApp();
            this.loadUserData();
        } else {
            this.showAuthModal();
        }
    }

    showAuthModal() {
        document.getElementById('authModal').classList.add('show');
        document.getElementById('mainApp').classList.add('hidden');
    }

    showMainApp() {
        document.getElementById('authModal').classList.remove('show');
        document.getElementById('mainApp').classList.remove('hidden');
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('portfoliohub-current-user', JSON.stringify(user));
            this.showMainApp();
            this.loadUserData();
            this.showNotification('Welcome back!', 'success');
            return true;
        }
        this.showNotification('Invalid credentials', 'error');
        return false;
    }

    register(userData) {
        const existingUser = this.users.find(u => u.email === userData.email);
        if (existingUser) {
            this.showNotification('Email already exists', 'error');
            return false;
        }

        const newUser = {
            id: this.generateId(),
            ...userData,
            createdAt: new Date().toISOString(),
            profile: {
                name: `${userData.firstName} ${userData.lastName}`,
                title: userData.profession,
                about: '',
                location: '',
                avatar: `https://via.placeholder.com/120x120/6366f1/ffffff?text=${userData.firstName[0]}${userData.lastName[0]}`,
                cover: 'https://via.placeholder.com/1200x300/6366f1/ffffff?text=Cover+Photo',
                skills: [],
                experience: [],
                education: [],
                contact: {
                    email: userData.email,
                    phone: '',
                    website: '',
                    linkedin: '',
                    github: '',
                    twitter: ''
                },
                languages: [],
                stats: {
                    projects: 0,
                    connections: 0,
                    views: 0
                }
            }
        };

        this.users.push(newUser);
        this.saveUsers();
        this.currentUser = newUser;
        localStorage.setItem('portfoliohub-current-user', JSON.stringify(newUser));
        this.showMainApp();
        this.loadUserData();
        this.showNotification('Account created successfully!', 'success');
        return true;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('portfoliohub-current-user');
        this.showAuthModal();
        this.showNotification('Signed out successfully', 'success');
    }

    // Data Management
    loadUsers() {
        const saved = localStorage.getItem('portfoliohub-users');
        return saved ? JSON.parse(saved) : [];
    }

    loadPosts() {
        const saved = localStorage.getItem('portfoliohub-posts');
        return saved ? JSON.parse(saved) : [];
    }

    loadProjects() {
        const saved = localStorage.getItem('portfoliohub-projects');
        return saved ? JSON.parse(saved) : [];
    }

    loadNetwork() {
        const saved = localStorage.getItem('portfoliohub-network');
        return saved ? JSON.parse(saved) : [];
    }

    loadTheme() {
        return localStorage.getItem('portfoliohub-theme') || 'light';
    }

    saveUsers() {
        localStorage.setItem('portfoliohub-users', JSON.stringify(this.users));
    }

    savePosts() {
        localStorage.setItem('portfoliohub-posts', JSON.stringify(this.posts));
    }

    saveProjects() {
        localStorage.setItem('portfoliohub-projects', JSON.stringify(this.projects));
    }

    saveNetwork() {
        localStorage.setItem('portfoliohub-network', JSON.stringify(this.network));
    }

    saveTheme() {
        localStorage.setItem('portfoliohub-theme', this.theme);
    }

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Theme Management
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.saveTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const themeIcon = document.querySelector('.theme-toggle i');
        if (themeIcon) {
            themeIcon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    // Event Listeners
    setupEventListeners() {
        // Auth forms
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            this.login(email, password);
        });

        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const userData = {
                firstName: document.getElementById('registerFirstName').value,
                lastName: document.getElementById('registerLastName').value,
                email: document.getElementById('registerEmail').value,
                password: document.getElementById('registerPassword').value,
                profession: document.getElementById('registerProfession').value
            };
            this.register(userData);
        });

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                this.showSection(section);
            });
        });

        // User menu
        document.addEventListener('click', (e) => {
            const userMenu = document.getElementById('userDropdown');
            const userAvatar = document.querySelector('.user-avatar');
            
            if (userAvatar && userAvatar.contains(e.target)) {
                userMenu.classList.toggle('show');
            } else if (userMenu && !userMenu.contains(e.target)) {
                userMenu.classList.remove('show');
            }
        });

        // Modal close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                }
            });
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.show').forEach(modal => {
                    modal.classList.remove('show');
                });
            }
        });
    }

    // Navigation
    showSection(sectionName) {
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Show section
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName).classList.add('active');

        // Load section data
        this.loadSectionData(sectionName);
    }

    loadSectionData(sectionName) {
        switch (sectionName) {
            case 'home':
                this.loadHomeData();
                break;
            case 'profile':
                this.loadProfileData();
                break;
            case 'projects':
                this.loadProjectsData();
                break;
            case 'network':
                this.loadNetworkData();
                break;
        }
    }

    // Home Section
    loadHomeData() {
        this.renderPosts();
        this.updateStats();
    }

    renderPosts() {
        const postsFeed = document.getElementById('postsFeed');
        if (!postsFeed) return;

        const userPosts = this.posts.filter(post => post.userId === this.currentUser.id);
        
        if (userPosts.length === 0) {
            postsFeed.innerHTML = `
                <div class="post-card">
                    <div class="post-content">
                        <p style="text-align: center; color: var(--text-muted);">
                            No posts yet. Share your first update!
                        </p>
                    </div>
                </div>
            `;
            return;
        }

        postsFeed.innerHTML = userPosts.map(post => `
            <div class="post-card">
                <div class="post-header">
                    <img src="${this.currentUser.profile.avatar}" alt="User" class="post-avatar">
                    <div class="post-info">
                        <h4>${this.currentUser.profile.name}</h4>
                        <p>${this.formatDate(post.createdAt)}</p>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                    ${post.image ? `<img src="${post.image}" alt="Post" class="post-image">` : ''}
                </div>
                <div class="post-actions">
                    <button class="post-action">
                        <i class="fas fa-heart"></i>
                        <span>${post.likes || 0}</span>
                    </button>
                    <button class="post-action">
                        <i class="fas fa-comment"></i>
                        <span>${post.comments || 0}</span>
                    </button>
                    <button class="post-action">
                        <i class="fas fa-share"></i>
                        <span>Share</span>
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateStats() {
        const userProjects = this.projects.filter(p => p.userId === this.currentUser.id);
        const userConnections = this.network.filter(n => n.userId === this.currentUser.id);
        
        document.getElementById('totalProjects').textContent = userProjects.length;
        document.getElementById('totalConnections').textContent = userConnections.length;
        document.getElementById('totalViews').textContent = this.currentUser.profile.stats.views;
    }

    createPost() {
        const postInput = document.getElementById('postInput');
        const content = postInput.value.trim();
        
        if (!content) return;

        const newPost = {
            id: this.generateId(),
            userId: this.currentUser.id,
            content: content,
            image: null,
            likes: 0,
            comments: 0,
            createdAt: new Date().toISOString()
        };

        this.posts.unshift(newPost);
        this.savePosts();
        this.renderPosts();
        postInput.value = '';
        this.showNotification('Post created successfully!', 'success');
    }

    // Profile Section
    loadProfileData() {
        this.renderProfile();
    }

    renderProfile() {
        const profile = this.currentUser.profile;
        
        // Update profile header
        document.getElementById('profileName').textContent = profile.name;
        document.getElementById('profileTitle').textContent = profile.title;
        document.getElementById('profileLocation').textContent = profile.location || 'Location not specified';
        document.getElementById('profileAbout').textContent = profile.about || 'Tell people about yourself, your experience, and what you\'re passionate about.';
        
        // Update avatars
        document.getElementById('profileAvatar').src = profile.avatar;
        document.getElementById('userAvatar').src = profile.avatar;
        document.getElementById('composerAvatar').src = profile.avatar;
        
        // Render skills
        this.renderSkills();
        
        // Render experience
        this.renderExperience();
        
        // Render education
        this.renderEducation();
        
        // Render contact info
        this.renderContactInfo();
        
        // Render social links
        this.renderSocialLinks();
        
        // Render languages
        this.renderLanguages();
    }

    renderSkills() {
        const skillsGrid = document.getElementById('profileSkills');
        if (!skillsGrid) return;

        if (this.currentUser.profile.skills.length === 0) {
            skillsGrid.innerHTML = '<p style="color: var(--text-muted);">No skills added yet.</p>';
            return;
        }

        skillsGrid.innerHTML = this.currentUser.profile.skills.map(skill => `
            <div class="skill-tag">${skill}</div>
        `).join('');
    }

    renderExperience() {
        const experienceList = document.getElementById('profileExperience');
        if (!experienceList) return;

        if (this.currentUser.profile.experience.length === 0) {
            experienceList.innerHTML = '<p style="color: var(--text-muted);">No experience added yet.</p>';
            return;
        }

        experienceList.innerHTML = this.currentUser.profile.experience.map(exp => `
            <div class="experience-item">
                <h4>${exp.title}</h4>
                <p class="company">${exp.company}</p>
                <p class="duration">${exp.duration}</p>
                <p class="description">${exp.description}</p>
            </div>
        `).join('');
    }

    renderEducation() {
        const educationList = document.getElementById('profileEducation');
        if (!educationList) return;

        if (this.currentUser.profile.education.length === 0) {
            educationList.innerHTML = '<p style="color: var(--text-muted);">No education added yet.</p>';
            return;
        }

        educationList.innerHTML = this.currentUser.profile.education.map(edu => `
            <div class="education-item">
                <h4>${edu.degree}</h4>
                <p class="institution">${edu.institution}</p>
                <p class="duration">${edu.duration}</p>
            </div>
        `).join('');
    }

    renderContactInfo() {
        const contactInfo = document.getElementById('profileContact');
        if (!contactInfo) return;

        const contact = this.currentUser.profile.contact;
        contactInfo.innerHTML = `
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>${contact.email}</span>
            </div>
            ${contact.phone ? `
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${contact.phone}</span>
                </div>
            ` : ''}
            ${contact.website ? `
                <div class="contact-item">
                    <i class="fas fa-globe"></i>
                    <span>${contact.website}</span>
                </div>
            ` : ''}
        `;
    }

    renderSocialLinks() {
        const socialLinks = document.getElementById('profileSocial');
        if (!socialLinks) return;

        const contact = this.currentUser.profile.contact;
        socialLinks.innerHTML = `
            ${contact.linkedin ? `
                <a href="${contact.linkedin}" target="_blank" class="social-link">
                    <i class="fab fa-linkedin"></i>
                    LinkedIn
                </a>
            ` : ''}
            ${contact.github ? `
                <a href="${contact.github}" target="_blank" class="social-link">
                    <i class="fab fa-github"></i>
                    GitHub
                </a>
            ` : ''}
            ${contact.twitter ? `
                <a href="${contact.twitter}" target="_blank" class="social-link">
                    <i class="fab fa-twitter"></i>
                    Twitter
                </a>
            ` : ''}
        `;
    }

    renderLanguages() {
        const languagesList = document.getElementById('profileLanguages');
        if (!languagesList) return;

        if (this.currentUser.profile.languages.length === 0) {
            languagesList.innerHTML = '<p style="color: var(--text-muted);">No languages added yet.</p>';
            return;
        }

        languagesList.innerHTML = this.currentUser.profile.languages.map(lang => `
            <div class="language-item">
                <span class="language-name">${lang.name}</span>
                <span class="language-level">${lang.level}</span>
            </div>
        `).join('');
    }

    // Projects Section
    loadProjectsData() {
        this.renderProjects();
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;

        const userProjects = this.projects.filter(p => p.userId === this.currentUser.id);
        
        if (userProjects.length === 0) {
            projectsGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-folder-open"></i>
                    <h3>No Projects Yet</h3>
                    <p>Start building your portfolio by adding your first project!</p>
                    <button class="btn btn-primary" onclick="portfolioHub.openProjectModal()">
                        <i class="fas fa-plus"></i>
                        Add Your First Project
                    </button>
                </div>
            `;
            return;
        }

        projectsGrid.innerHTML = userProjects.map(project => `
            <div class="project-card">
                <div class="project-image">
                    ${project.image ? 
                        `<img src="${project.image}" alt="${project.title}">` : 
                        `<i class="fas fa-folder"></i>`
                    }
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies ? project.technologies.split(',').map(tech => 
                            `<span class="tech-tag">${tech.trim()}</span>`
                        ).join('') : ''}
                    </div>
                    <div class="project-actions">
                        <button class="btn btn-sm btn-primary" onclick="portfolioHub.viewProject('${project.id}')">
                            View Details
                        </button>
                        <button class="btn btn-sm btn-secondary" onclick="portfolioHub.editProject('${project.id}')">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Network Section
    loadNetworkData() {
        this.renderNetwork();
    }

    renderNetwork() {
        const networkGrid = document.getElementById('networkGrid');
        if (!networkGrid) return;

        // For now, show all users except current user
        const otherUsers = this.users.filter(u => u.id !== this.currentUser.id);
        
        if (otherUsers.length === 0) {
            networkGrid.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No other users found.</p>';
            return;
        }

        networkGrid.innerHTML = otherUsers.map(user => `
            <div class="network-card">
                <img src="${user.profile.avatar}" alt="${user.profile.name}" class="network-avatar">
                <h4>${user.profile.name}</h4>
                <p>${user.profile.title}</p>
                <button class="btn btn-sm btn-primary">Connect</button>
            </div>
        `).join('');
    }

    // Utility Functions
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 3000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    loadUserData() {
        this.updateStats();
        this.renderProfile();
    }

    // Modal Functions
    openProjectModal() {
        document.getElementById('projectModal').classList.add('show');
    }

    closeProjectModal() {
        document.getElementById('projectModal').classList.remove('show');
    }

    openProfileEditModal() {
        document.getElementById('profileEditModal').classList.add('show');
    }

    closeProfileEditModal() {
        document.getElementById('profileEditModal').classList.remove('show');
    }

    viewCV() {
        document.getElementById('cvModal').classList.add('show');
    }

    closeCVModal() {
        document.getElementById('cvModal').classList.remove('show');
    }

    editProfilePhoto() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.currentUser.profile.avatar = e.target.result;
                    this.saveUsers();
                    this.renderProfile();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }

    editCoverPhoto() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.currentUser.profile.cover = e.target.result;
                    this.saveUsers();
                    this.renderProfile();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }
}

// Global Functions
function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    
    document.querySelector(`[onclick="switchAuthTab('${tab}')"]`).classList.add('active');
    document.getElementById(tab === 'login' ? 'loginForm' : 'registerForm').classList.add('active');
}

function toggleUserMenu() {
    document.getElementById('userDropdown').classList.toggle('show');
}

function toggleTheme() {
    portfolioHub.toggleTheme();
}

function showSection(section) {
    portfolioHub.showSection(section);
}

function logout() {
    portfolioHub.logout();
}

function createPost() {
    portfolioHub.createPost();
}

function openProjectModal() {
    portfolioHub.openProjectModal();
}

function closeProjectModal() {
    portfolioHub.closeProjectModal();
}

function openProfileEditModal() {
    portfolioHub.openProfileEditModal();
}

function closeProfileEditModal() {
    portfolioHub.closeProfileEditModal();
}

function viewCV() {
    portfolioHub.viewCV();
}

function closeCVModal() {
    portfolioHub.closeCVModal();
}

function editProfilePhoto() {
    portfolioHub.editProfilePhoto();
}

function editCoverPhoto() {
    portfolioHub.editCoverPhoto();
}

// Initialize the application
let portfolioHub;
document.addEventListener('DOMContentLoaded', () => {
    portfolioHub = new PortfolioHub();
});

// Add CSS for notifications
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
