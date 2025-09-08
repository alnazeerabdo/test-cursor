// UIXSHUVO Travel Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Hero navigation dots functionality
    const navDots = document.querySelectorAll('.nav-dot');
    let currentDot = 0;

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            navDots.forEach(d => d.classList.remove('active'));
            // Add active class to clicked dot
            this.classList.add('active');
            currentDot = index;
            
            // Optional: Change content based on dot selection
            updateHeroContent(index);
        });
    });

    // Auto-rotate dots every 5 seconds
    setInterval(() => {
        navDots.forEach(d => d.classList.remove('active'));
        currentDot = (currentDot + 1) % navDots.length;
        navDots[currentDot].classList.add('active');
        updateHeroContent(currentDot);
    }, 5000);

    function updateHeroContent(index) {
        const heroTitle = document.querySelector('.hero-title');
        const heroTagline = document.querySelector('.hero-tagline');
        
        const content = [
            {
                tagline: 'ELEVATE YOUR TRAVEL JOURNEY',
                title: 'Experience<br>The Magic Of<br>Flight!'
            },
            {
                tagline: 'DISCOVER AMAZING DESTINATIONS',
                title: 'Explore<br>The World<br>Together!'
            },
            {
                tagline: 'CREATE UNFORGETTABLE MEMORIES',
                title: 'Journey<br>Beyond<br>Boundaries!'
            }
        ];

        if (heroTitle && heroTagline) {
            heroTagline.textContent = content[index].tagline;
            heroTitle.innerHTML = content[index].title;
            
            // Add animation class
            heroTitle.style.animation = 'none';
            heroTitle.offsetHeight; // Trigger reflow
            heroTitle.style.animation = 'fadeInUp 0.8s ease-out';
        }
    }

    // Button interactions with ripple effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });

    // Play button functionality
    const playButton = document.querySelector('.btn-play');
    if (playButton) {
        playButton.addEventListener('click', function() {
            // Add rotation animation
            const playIcon = this.querySelector('.play-icon');
            playIcon.style.transform = 'rotate(360deg)';
            playIcon.style.transition = 'transform 0.5s ease';
            
            setTimeout(() => {
                playIcon.style.transform = 'rotate(0deg)';
            }, 500);
            
            // Simulate video modal (you can replace this with actual video functionality)
            showVideoModal();
        });
    }

    function showVideoModal() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            max-width: 400px;
            animation: slideUp 0.3s ease;
        `;

        modalContent.innerHTML = `
            <h3 style="margin-bottom: 1rem; color: #1f2937;">Travel Video</h3>
            <p style="margin-bottom: 2rem; color: #6b7280;">Experience the magic of travel with our promotional video.</p>
            <button onclick="this.closest('.modal-overlay').remove()" style="
                background: #3b82f6;
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 25px;
                font-weight: 600;
                cursor: pointer;
            ">Close</button>
        `;

        modal.className = 'modal-overlay';
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Close modal on overlay click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.know-more-content, .awesome-places, .partner-logo');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.8s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const airplaneContainer = document.querySelector('.airplane-container');
        
        if (heroSection && airplaneContainer) {
            const rate = scrolled * -0.3;
            heroSection.style.transform = `translateY(${rate}px)`;
            
            // Slight rotation effect on airplane
            const rotationRate = scrolled * 0.02;
            airplaneContainer.style.transform = `translateY(${rate * 0.5}px) rotateZ(${rotationRate}deg)`;
        }
    });

    // Smooth page transitions
    window.addEventListener('beforeunload', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
    });

    // Book Trip button functionality
    const bookTripBtns = document.querySelectorAll('.book-trip-btn, .btn-primary');
    bookTripBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add loading animation
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
                
                // Show booking modal or redirect
                showBookingModal();
            }, 1500);
        });
    });

    function showBookingModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            max-width: 500px;
            animation: slideUp 0.3s ease;
        `;

        modalContent.innerHTML = `
            <div style="width: 60px; height: 60px; background: #3b82f6; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-plane" style="color: white; font-size: 1.5rem;"></i>
            </div>
            <h3 style="margin-bottom: 1rem; color: #1f2937; font-size: 1.5rem;">Book Your Trip</h3>
            <p style="margin-bottom: 2rem; color: #6b7280; line-height: 1.6;">Ready to embark on your next adventure? Our travel experts are here to help you plan the perfect journey.</p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="this.closest('.modal-overlay').remove()" style="
                    background: #3b82f6;
                    color: white;
                    border: none;
                    padding: 0.75rem 2rem;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                ">Get Started</button>
                <button onclick="this.closest('.modal-overlay').remove()" style="
                    background: transparent;
                    color: #6b7280;
                    border: 2px solid #d1d5db;
                    padding: 0.75rem 2rem;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                ">Later</button>
            </div>
        `;

        modal.className = 'modal-overlay';
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .modal-overlay {
            backdrop-filter: blur(5px);
        }
    `;
    document.head.appendChild(style);

    // Add loading state to page
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        
        // Animate elements on page load
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.place-image, .social-icon, .partner-logo');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal-overlay');
            modals.forEach(modal => modal.remove());
        }
    });

    console.log('UIXSHUVO Travel Website loaded successfully! ✈️');
});