function navigate() {
    var addressBar = document.getElementById("address-bar");
    var iframe = document.getElementById("iframe");
    var loadingSpinner = document.getElementById("loading-spinner");

    var site = addressBar.value.trim().toLowerCase();

    // Show the loading spinner while navigating
    loadingSpinner.style.display = "block";

    // Check for specific predefined sites
    if (site === "n0tluck0xf") {
        // Load the site for "n0tluck0xf"
        iframe.src = "https://n0tluck0xf.github.io/";
    } else {
        // If the site doesn't match, reset iframe to blank
        iframe.src = "about:blank";
    }

    // Once the iframe loads, hide the loading spinner
    iframe.onload = function() {
        loadingSpinner.style.display = "none";  // Hide loading spinner
    };

    // Clear the input field after navigation
    addressBar.value = "";
}
