// JavaScript for Carousel


document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0; // Start with the first slide
    const slidesToShow = 4; // Number of slides visible at the same time
    const slides = document.getElementsByClassName("carousel-slide"); // Get all slides
    const totalSlides = slides.length; // Total number of slides

    function showSlides() {
        // Hide all slides initially
        for (let i = 0; i < totalSlides; i++) {
            slides[i].style.display = "none";
        }

        // Show the number of slides defined in slidesToShow
        for (let i = slideIndex; i < slideIndex + slidesToShow; i++) {
            if (slides[i]) {
                slides[i].style.display = "block";
            }
        }
    }

    // Function to move slides
    function moveSlides(n) {
        slideIndex += n;

        // Loop around when the end/start is reached
        if (slideIndex < 0) {
            slideIndex = totalSlides - slidesToShow; // Wrap to the end if at the beginning
        } else if (slideIndex > totalSlides - slidesToShow) {
            slideIndex = 0; // Wrap to the start if at the end
        }

        showSlides();
    }

    // Initialize the slider on page load
    showSlides();

    // Add event listeners for next/prev buttons
    document.getElementById("prev").addEventListener("click", function () {
        moveSlides(-1);
    });

    document.getElementById("next").addEventListener("click", function () {
        moveSlides(1);
    });
    console.log("Portfolio");
});

 