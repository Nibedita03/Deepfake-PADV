// Function to show the main page and hide the landing page when the "Enter Site" button is clicked
document.getElementById('enter-site').addEventListener('click', function () {
    // Hide the landing page
    document.getElementById('landing-page').style.display = 'none';
    
    // Show the main page
    document.getElementById('main-page').style.display = 'block';
});

    // Fade out landing page
    landingPage.style.opacity = '0';
    setTimeout(() => {
        landingPage.style.display = 'none'; // Hide landing page after fade
        mainContent.style.display = 'block'; // Show main content
        mainContent.style.transition = 'opacity 1s ease-in-out'; // Add transition for opacity
        mainContent.style.opacity = '1'; // Make sure main content is fully visible with fade-in effect
    }, 500);
;

// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'  // Center scroll target for better view
        });
    });
});

// Add pulsing effect to logo on hover
const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s ease';
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)';
});

// Fade-in effect for page sections when they enter the viewport
const pages = document.querySelectorAll('.page');
function handlePageVisibility() {
    const windowHeight = window.innerHeight;
    pages.forEach(page => {
        const rect = page.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= windowHeight) {
            page.classList.add('visible');
            page.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            page.style.opacity = '1';
            page.style.transform = 'translateY(0)';
        } else {
            page.classList.remove('visible');
            page.style.opacity = '0';
            page.style.transform = 'translateY(50px)';  // Add subtle transform for better entrance effect
        }
    });
}

window.addEventListener('scroll', handlePageVisibility);
window.addEventListener('load', handlePageVisibility);

// Video fade-out effect based on scroll (Keep it to fade the video only during the transition)
window.addEventListener('scroll', function () {
    const video = document.querySelector('.background-video');  // Video container class updated to target the video directly

    if (video) {
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const opacity = Math.max(0, 1 - scrollPercentage * 1.5);  // Adjust fade speed for smoother effect
        video.style.opacity = opacity;
    }
});

// Initialize visibility check for sections on page load
handlePageVisibility();
// Adding scroll effect to header
window.addEventListener("scroll", function() {
    const header = document.querySelector(".scroll-header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust the scroll distance as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const landingPage = document.querySelector('#landing-page');
    
    // Show header only after scrolling past the landing page height
    if (window.scrollY > landingPage.offsetHeight) {
        header.classList.remove('hidden-header');
        header.classList.add('scrolled'); // Add 'scrolled' class when scrolled
    } else {
        header.classList.add('hidden-header');
        header.classList.remove('scrolled'); // Remove 'scrolled' class when at top
    }
});
// Function to hide the landing page and show the main page
function enterSite() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('main-header').style.display = 'flex'; // Show the header after landing page
    document.getElementById('nav-bar').style.display = 'flex'; // Show the navigation bar after landing page
}
