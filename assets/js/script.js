document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active"); // Add rotation effect
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-year").textContent = new Date().getFullYear();
});


// Select all elements with the class 'fade-slide-up'
const fadeElements = document.querySelectorAll('.fade-slide-up');

// Function to check if the element is in the viewport
function checkVisibility() {
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();

        // Check if element is within the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible'); // Add the 'visible' class to trigger the fade-slide-up
        } else {
            element.classList.remove('visible'); // Remove the 'visible' class if not in viewport
        }
    });
}

// Run the function initially to check if elements are already in view
checkVisibility();

// Add event listener for scroll event
window.addEventListener('scroll', checkVisibility);
