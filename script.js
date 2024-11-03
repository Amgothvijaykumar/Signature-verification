// main.js

// Dark mode toggle
document.getElementById("moonIcon").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Display file name when uploaded
function displayFileName() {
    const fileInput = document.getElementById('file-upload');
    const fileName = document.getElementById('file-name');
    fileName.textContent = fileInput.files.length ? fileInput.files[0].name : '';
}

// Simulated signature verification
function verifySignature() {
    const popup = document.getElementById('verification-popup');
    popup.style.top = '10px'; // Position above the navbar
    popup.style.opacity = '1';

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.style.top = '-50px'; // Move out of view
        popup.style.opacity = '0';
    }, 3000);
}

