// Display uploaded file name
function showFileName() {
    const fileInput = document.getElementById("file-upload");
    const fileNameDisplay = document.getElementById("file-name");
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = `Uploaded: ${fileInput.files[0].name}`;
    }
}

// Sequential print for animated line
const lines = [
    "Line 1: Welcome to the Signature Verification System",
    "Line 2: Upload your signature for verification",
    "Line 3: Accurate results within seconds",
    "Line 4: Secure and private",
    "Line 5: Start now to verify your signature"
];
let currentLine = 0;
function showNextLine() {
    const lineElement = document.getElementById("animated-line");
    lineElement.style.opacity = "0";
    setTimeout(() => {
        lineElement.textContent = lines[currentLine];
        lineElement.style.opacity = "1";
        currentLine = (currentLine + 1) % lines.length;
    }, 500);
}
setInterval(showNextLine, 4000);

// Verification popup animation
function verifySignature() {
    const popup = document.getElementById("verification-popup");
    popup.style.top = '60px'; // Stops just below the navbar
    popup.style.opacity = '1';

    setTimeout(() => {
        popup.style.top = '-100px';
        popup.style.opacity = '0';
    }, 2000);
}

// Dark mode toggle
document.getElementById("moonIcon").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.animated-line');
    let currentIndex = 0;

    function showNextLine() {
        // Hide the current line
        lines[currentIndex].style.opacity = '0'; // Fade out

        // Update the index to the next line
        currentIndex = (currentIndex + 1) % lines.length; // Loop back to start

        // Show the next line
        lines[currentIndex].style.opacity = '1'; // Fade in

        // Repeat after 3 seconds
        setTimeout(showNextLine, 3000);
    }

    // Start the animation
    lines[currentIndex].style.opacity = '1'; // Show the first line
    setTimeout(showNextLine, 3000); // Start the cycle after 3 seconds
});
