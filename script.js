function searchNotes() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let notes = {
        "java": "java.pdf",
        "python": "python.pdf",
        "math": "math.pdf"
    };

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";  // Clear previous results

    if (notes[query]) {
        resultsDiv.innerHTML = <p>📄 <a href="${notes[query]}" target="_blank">Download ${query} Notes</a></p>;
    } else {
        resultsDiv.innerHTML = <p>❌ No notes found for "${query}".</p>;
    }
}
