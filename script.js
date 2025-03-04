function navigate() {
    const input = document.getElementById('address-bar').value.trim().toLowerCase();
    const iframe = document.getElementById('iframe');

    // Map "n0tluck0xf" to the specific URL
    const domainMap = {
        'n0tluck0xf': 'https://n0tluck0xf.github.io/'
    };

    // Remove ".m0d" if entered, just use the domain name
    const siteName = input.replace('.m0d', '');

    // Check if the input matches the predefined site
    if (domainMap[siteName]) {
        iframe.src = domainMap[siteName];
        document.getElementById('address-bar').value = siteName; // Show the domain name without ".m0d" in the address bar
    } else {
        alert("Site not found.");
    }
}

// Allow pressing "Enter" to navigate
document.getElementById('address-bar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        navigate();
    }
});
