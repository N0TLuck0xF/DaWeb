function navigate() {
    var addressBar = document.getElementById("address-bar");
    var iframe = document.getElementById("iframe");
    var loadingSpinner = document.getElementById("loading-spinner");

    var site = addressBar.value.trim().toLowerCase();

    // Show the loading spinner
    loadingSpinner.style.display = "block";

    // Check for specific predefined sites
    if (site === "n0tluck0xf") {
        iframe.src = "https://n0tluck0xf.github.io/";
    } else if (site === "" || site === "home") {
        iframe.src = "aka.html"; // Default to start page
    } else {
        iframe.src = "aka.html"; // Fallback to start page if input is invalid
    }

    // Hide spinner when iframe loads
    iframe.onload = function() {
        loadingSpinner.style.display = "none";
    };

    // Clear the input field
    addressBar.value = "";
}

// Load the start page on initial load
window.onload = function() {
    document.getElementById("iframe").src = "aka.html";
};
