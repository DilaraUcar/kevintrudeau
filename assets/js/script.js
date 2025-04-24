document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active"); // Rotate icon
        });
    }

    // Footer year update
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Video play/pause toggle
    const video = document.querySelector(".vertical-video");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'; // Play icon
    const pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14h4v14h-4z"/></svg>'; // Pause icon

    if (video && playPauseBtn) {
        // Function to update the button icon and class based on video state
        function updatePlayPauseButton() {
            if (video.paused) {
                playPauseBtn.innerHTML = playIcon; // Show play icon
                playPauseBtn.classList.remove("playing"); // Remove "playing" class
            } else {
                playPauseBtn.innerHTML = pauseIcon; // Show pause icon
                playPauseBtn.classList.add("playing"); // Add "playing" class
            }
        }

        // Initially set the button icon
        updatePlayPauseButton();

        // Add event listener for play/pause functionality
        playPauseBtn.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            updatePlayPauseButton(); // Update button icon after action
        });

        // Update button when the video ends
        video.addEventListener("ended", () => {
            updatePlayPauseButton(); // Reset button to play icon after video ends
        });
    } else {
        console.error("Video or play/pause button not found!"); // Debugging
    }

    // Scroll animation - fade and slide elements into view
    const fadeElements = document.querySelectorAll('.fade-slide-up');

    function checkVisibility() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    checkVisibility(); // Initial check
    window.addEventListener('scroll', checkVisibility);

    const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carousel = document.querySelector(".affiliate-options");
  const sections = document.querySelectorAll(".affiliate");

  let currentIndex = 0;

  // Function to update the carousel position
  const updateCarousel = () => {
    const offset = -currentIndex * 100;
    console.log("🔄 Updating carousel:");
    console.log("👉 Current Index:", currentIndex);
    console.log("📐 Offset:", offset);
    if (carousel) {
      carousel.style.transform = `translateX(${offset}%)`;
    } else {
      console.error("❌ Carousel container not found!");
    }
  };

  if (prevButton && nextButton && carousel && sections.length > 0) {
    prevButton.addEventListener("click", () => {
      console.log("⬅️ Previous button clicked");
      currentIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
      updateCarousel();
    });

    nextButton.addEventListener("click", () => {
      console.log("➡️ Next button clicked");
      currentIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });

    updateCarousel(); // Initial display
  } else {
    console.error("❌ One or more carousel elements not found!");
    console.log({ prevButton, nextButton, carousel, sections });
  }
});




