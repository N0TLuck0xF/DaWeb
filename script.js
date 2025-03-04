function navigate() {
    var addressBar = document.getElementById("address-bar");
    var iframe = document.getElementById("iframe");
    var infoMessage = document.getElementById("info-message");
    var loadingSpinner = document.getElementById("loading-spinner");

    var site = addressBar.value.trim().toLowerCase();

    // Show the loading spinner while navigating
    loadingSpinner.style.display = "block";
    
    // Hide the info message if a site is being loaded
    infoMessage.style.display = "none";

    // Check for specific predefined sites
    if (site === "n0tluck0xf") {
        // Load the site for "n0tluck0xf"
        iframe.src = "https://n0tluck0xf.github.io/";
    } else {
        // If the site doesn't match, reset iframe to blank and show the info message
        iframe.src = "about:blank";
        infoMessage.style.display = "block";  // Show the message if the site is not found
    }

    // Once the iframe loads, hide the loading spinner and the message
    iframe.onload = function() {
        loadingSpinner.style.display = "none";  // Hide loading spinner
        infoMessage.style.display = "none";  // Hide info message once content is loaded
    };

    // Clear the input field after navigation
    addressBar.value = "";
}



