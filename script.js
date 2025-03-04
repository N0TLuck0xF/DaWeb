function navigate() {
    const input = document.getElementById('address-bar').value.trim().toLowerCase();
    const iframe = document.getElementById('iframe');

    // Map "n0tluck0xf" to the specific URL
    const domainMap = {
        'n0tluck0xf': 'https://n0tluck0xf.github.io/'
    };

    // Check if the input matches the predefined site
    if (domainMap[input]) {
        iframe.src = domainMap[input];
        document.getElementById('address-bar').value = input + '.m0d'; // Show the TLD-less name in the address bar
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
