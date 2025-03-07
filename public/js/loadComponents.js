// public/js/loadComponents.js

// Function to dynamically load components
function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Run when the document is ready
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "components/header.html");  // Load Header
    loadComponent("footer", "components/footer.html");  // Load Footer
});
