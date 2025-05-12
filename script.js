function searchIssue() {
    // Get the value entered in the search input field
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    // Get the result paragraph element
    const resultElement = document.getElementById('result');

    // Hide all issues by default
    document.querySelectorAll('.slowphone').forEach(issue => {
        issue.style.display = 'none';
    });

    document.querySelectorAll('.appnotworking').forEach(issue => {
        issue.style.display = 'none';
    });

    // Keywords and corresponding issues
    const issueKeywords = {
        "phoneSlow": ["lagging", "hanging", "slow", "phone", "lag", "hang", "hangy", "laggy", "laggi", "hangi", "hanggi", "lagi"],
        "appnotworking": ["app", "crashing", "app cashing", "app not working", "not working", "working", "apps", "app is not working"]
    };

    // Flag to check if any match is found
    let found = false;

    // Search for any of the keywords related to slow phone
    if (issueKeywords.phoneSlow.some(keyword => searchInput.includes(keyword))) {
        document.getElementById('slowPhoneIssue').style.display = 'block';
        found = true;
    } 
    // Search for any of the keywords related to app not working
    else if (issueKeywords.appnotworking.some(keyword => searchInput.includes(keyword))) {
        document.getElementById('appnotworkingissue').style.display = 'block';
        found = true;
    }

    // If no match is found
    if (!found) {
        alert("No matching solution found. Please try different keywords.");
    }
}