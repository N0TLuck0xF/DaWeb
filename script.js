function navigate() {
    var addressBar = document.getElementById("address-bar");
    var iframe = document.getElementById("iframe");
    var loadingSpinner = document.getElementById("loading-spinner");

    var input = addressBar.value.trim();
    var site = input.toLowerCase();

    // Show the loading spinner while navigating
    loadingSpinner.style.display = "block";

    // Check if it’s a predefined site
    if (site === "n0tluck0xf") {
        iframe.src = "https://n0tluck0xf.github.io/";
    }
    // Check if it’s a valid URL (basic check)
    else if (/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/.test(input)) {
        // Add "https://" if missing
        if (!input.startsWith("http://") && !input.startsWith("https://")) {
            iframe.src = "https://" + input;
        } else {
            iframe.src = input;
        }
    }
    // Fallback: Treat as a search term and load Google search
    else if (input) {
        iframe.src = "https://www.google.com/search?q=" + encodeURIComponent(input);
    }
    // If input is empty, reset to blank
    else {
        iframe.src = "about:blank";
    }

    // Hide spinner when iframe loads or fails
    iframe.onload = function() {
        loadingSpinner.style.display = "none";
    };
    iframe.onerror = function() {
        loadingSpinner.style.display = "none";
    };

    // Clear the input field after navigation
    addressBar.value = "";
}
