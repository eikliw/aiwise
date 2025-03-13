document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Resources filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resourcesContainer = document.getElementById('resources-container');
    
    // Load resources from JSON files
    loadResources();
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter resources
            filterResources(filterValue);
        });
    });
    
    // Learning path cards interaction
    const pathCards = document.querySelectorAll('.path-card');
    pathCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            loadPathContent(category);
        });
    });
});

// Function to load resources from markdown files
async function loadResources() {
    try {
        // In a real implementation, this would load from actual markdown files
        // For now, we'll use sample data
        const resources = [
            {
                title: "Machine Learning Crash Course",
                description: "Google's fast-paced, practical introduction to machine learning",
                link: "https://developers.google.com/machine-learning/crash-course",
                image: "images/resource1.jpg",
                tags: ["beginner", "machine-learning"],
                category: "machine-learning"
            },
            {
                title: "Deep Learning Specialization",
                description: "A series of courses teaching the foundations of Deep Learning by Andrew Ng",
                link: "https://www.coursera.org/specializations/deep-learning",
                image: "images/resource2.jpg",
                tags: ["intermediate", "deep-learning"],
                category: "deep-learning"
            },
            {
                title: "Natural Language Processing with Transformers",
                description: "Learn how to build state-of-the-art NLP models using transformers",
                link: "https://www.oreilly.com/library/view/natural-language-processing/9781098136789/",
                image: "images/resource3.jpg",
                tags: ["advanced", "nlp"],
                category: "nlp"
            },
            {
                title: "AI Ethics: An Introduction",
                description: "Understanding the ethical implications of artificial intelligence",
                link: "https://www.edx.org/course/artificial-intelligence-ethics-bias",
                image: "images/resource4.jpg",
                tags: ["beginner", "ai-ethics"],
                category: "ai-ethics"
            },
            {
                title: "Reinforcement Learning: An Introduction",
                description: "The classic textbook on reinforcement learning by Sutton and Barto",
                link: "http://incompleteideas.net/book/the-book-2nd.html",
                image: "images/resource5.jpg",
                tags: ["intermediate", "reinforcement-learning"],
                category: "reinforcement-learning"
            },
            {
                title: "Computer Vision: Algorithms and Applications",
                description: "Comprehensive textbook on computer vision techniques",
                link: "https://szeliski.org/Book/",
                image: "images/resource6.jpg",
                tags: ["advanced", "computer-vision"],
                category: "computer-vision"
            }
        ];
        
        renderResources(resources);
    } catch (error) {
        console.error('Error loading resources:', error);
    }
}

// Function to render resources to the page
function renderResources(resources) {
    const container = document.getElementById('resources-container');
    container.innerHTML = '';
    
    resources.forEach(resource => {
        // Create resource card
        const card = document.createElement('div');
        card.className = `resource-card ${resource.tags.join(' ')}`;
        
        // Create card HTML structure
        card.innerHTML = `
            <div class="resource-image">
                <img src="${resource.image || 'images/placeholder.jpg'}" alt="${resource.title}">
            </div>
            <div class="resource-content">
                <div class="resource-tags">
                    ${resource.tags.map(tag => `<span class="resource-tag ${tag}">${tag}</span>`).join('')}
                </div>
                <h3 class="resource-title">${resource.title}</h3>
                <p class="resource-description">${resource.description}</p>
                <a href="${resource.link}" class="resource-link" target="_blank">Explore Resource</a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Function to filter resources
function filterResources(filter) {
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Function to load path content (would be implemented with actual content in a real application)
function loadPathContent(category) {
    console.log(`Loading content for ${category} path`);
    // This would navigate to a dedicated page for the learning path in a real implementation
    // For now, we'll just log to console
}
