function navigate() {
    var addressBar = document.getElementById("address-bar");
    var iframe = document.getElementById("iframe");
    var loadingSpinner = document.getElementById("loading-spinner");

    var input = addressBar.value.trim();
    var site = input.toLowerCase();

    loadingSpinner.style.display = "block";

    if (site === "n0tluck0xf") {
        iframe.src = "https://n0tluck0xf.github.io/";
    } else if (/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/.test(input)) {
        iframe.src = input.startsWith("http") ? input : "https://" + input;
    } else if (input) {
        iframe.src = "https://www.google.com/search?q=" + encodeURIComponent(input);
    } else {
        iframe.src = "about:blank";
    }

    iframe.onload = function() { loadingSpinner.style.display = "none"; };
    iframe.onerror = function() { loadingSpinner.style.display = "none"; };

    addressBar.value = "";
}
