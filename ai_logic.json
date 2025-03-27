// This function decides how to generate a response
async function generateResponse(userMessage) {
    // Fetch up-to-date information from the web
    let webData = await fetchWebData(userMessage);

    // If web data is useful, return it as the response
    if (webData) return webData;

    // Default fallback responses
    let responses = [
        "I'm still learning! What else can I help with?",
        "That's an interesting question!",
        "I'll need a moment to think about that...",
        "I'm not sure, but I can try to find out!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to fetch relevant web data (Example: Uses DuckDuckGo API)
async function fetchWebData(query) {
    try {
        let response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
        let data = await response.json();
        if (data.AbstractText) return data.AbstractText;
        return null;  // No relevant data found
    } catch (error) {
        return null;
    }
}
