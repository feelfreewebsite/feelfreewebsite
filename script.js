document.addEventListener("DOMContentLoaded", () => {
  // List of files (replace these with actual file paths)
  const files = [
    { name: "java_notes.pdf", url: "Notes/java_notes.pdf" },
    { name: "java_tutorial.pdf", url: "Notes/java_tutorial.pdf" },
    { name: "cloud_notes.pdf", url: "Notes/cloud_notes.pdf" },
    { name: "c_programming.pdf", url: "Notes/c_programming.pdf" }
  ];

  // Search function
  function searchNotes() {
    const searchBox = document.getElementById("searchBox");
    const resultsDiv = document.getElementById("results");
    if (!searchBox || !resultsDiv) return; // Validate elements

    const query = searchBox.value.toLowerCase();
    const results = files.filter(file =>
      file.name.toLowerCase().includes(query)
    );

    // Clear previous results
    resultsDiv.innerHTML = "";

    if (results.length > 0) {
      results.forEach(file => {
        const link = document.createElement("a");
        link.href = file.url;
        link.textContent = file.name;
        link.target = "_blank"; // Open in a new tab
        resultsDiv.appendChild(link);
        resultsDiv.appendChild(document.createElement("br"));
      });
    } else {
      resultsDiv.textContent = "No results found.";
    }
  }

  // Attach search event (updates results as you type)
  const searchBox = document.getElementById("searchBox");
  if (searchBox) {
    searchBox.addEventListener("input", searchNotes);
  }

  // Dark mode functionality
  const toggleSwitch = document.getElementById("darkModeToggle");
  const darkModeText = document.getElementById("darkModeText");
  const body = document.body;

  // Function to enable dark mode
  const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    darkModeText.textContent = "Light Mode"; // Change text dynamically
  };

  // Function to disable dark mode
  const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    darkModeText.textContent = "Dark Mode"; // Change text dynamically
  };

  // Check if dark mode was previously enabled
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
    if (toggleSwitch) toggleSwitch.checked = true;
  }

  // Toggle dark mode on switch change
  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", () => {
      toggleSwitch.checked ? enableDarkMode() : disableDarkMode();
    });
  }
});
