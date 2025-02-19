// List of files (replace these with actual file paths)
const files = [
    { name: "java_notes.pdf", url: "Notes/java_notes.pdf" },
    { name: "java_tutorial.pdf", url: "Notes/java_tutorial.pdf" },
    { name: "cloud_notes.pdf", url: "Notes/cloud_notes.pdf" },
    { name: "c_programming.pdf", url: "Notes/c_programming.pdf" }
];

// Search function
function searchNotes() {
    const query = document.getElementById("searchBox").value.toLowerCase(); // Get the search term
    const results = files.filter(file => file.name.toLowerCase().includes(query)); // Filter files based on the query
    const resultsDiv = document.getElementById("results");

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Check if there are any matching results
    if (results.length > 0) {
        results.forEach(file => {
            const link = document.createElement("a");
            link.href = file.url; // File path
            link.textContent = file.name; // File name
            link.target = "_blank"; // Open in a new tab
            resultsDiv.appendChild(link);
            resultsDiv.appendChild(document.createElement("br")); // Line break
        });
    } else {
        resultsDiv.textContent = "No results found."; // Show this if no files match
    }
}
const toggleSwitch = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

// Toggle dark mode on switch change
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
