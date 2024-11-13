document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const overlayContent = document.getElementById("embed-placeholder");
    const closeOverlay = document.querySelector(".close");

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

    // Project overlay functionality
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", () => {
            const embedType = project.getAttribute("data-embed");
            let embedContent = "";

            if (embedType === "scratch") {
                embedContent = "<iframe src='[Your Scratch Embed Link]' width='100%' height='400'></iframe>";
            } else if (embedType === "p5js") {
                embedContent = "<iframe src='[Your p5.js Embed Link]' width='100%' height='400'></iframe>";
            } else if (embedType === "youtube") {
                embedContent = "<iframe src='[Your YouTube Embed Link]' width='100%' height='400' allowfullscreen></iframe>";
            }

            overlayContent.innerHTML = embedContent;
            overlay.style.display = "flex";
        });
    });

    closeOverlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});
// Get the images
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

// Function to handle mouse movement
function moveImages(event) {
    const x = event.clientX / window.innerWidth - 0.5; // Normalized X position (-0.5 to 0.5)

    // Adjust parallax effect based on mouse position (you can change the multiplier to tweak the effect)
    image1.style.transform = `translateX(${x * 5}px)`;   // Image 1 moves the most (closer to the viewer)
    image2.style.transform = `translateX(${x * 25}px)`;   // Image 2 moves at a moderate speed
    image3.style.transform = `translateX(${x * 33}px)`;    // Image 3 moves the least (furthest back)
}

// Event listener to track mouse movement
document.addEventListener('mousemove', moveImages);
