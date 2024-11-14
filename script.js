document.addEventListener("DOMContentLoaded", () => {
    // Fade-out effect when navigating to a new page
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = event.target.href;
            }, 600);  // Adjust this to match the duration of the fade-out animation
        });
    });
});

// Get the images
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

// Function to handle mouse movement
function moveImages(event) {
    const x = event.clientX / window.innerWidth - 0.5; // Normalized X position (-0.5 to 0.5)

    // Adjust parallax effect based on mouse position (Top to Bottom = Least to Most moving)
    image1.style.transform = `translateX(${x * 5}px)`;   
    image2.style.transform = `translateX(${x * 25}px)`;   
    image3.style.transform = `translateX(${x * 33}px)`;   
    image4.style.transform = `translateX(${x * 39}px)`;   
}

// Event listener to track mouse movement
document.addEventListener('mousemove', moveImages);
