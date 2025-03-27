async function generateResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    // Simple AI Logic for response
    if (userMessage.includes("hello") || userMessage.includes("hi")) {
        return "Hello! How can I assist you today?";
    } 
    else if (userMessage.includes("how are you")) {
        return "I'm just a bot, but thanks for asking! How about you?";
    } 
    else if (userMessage.includes("what is your name")) {
        return "I am JTS-01, your AI assistant.";
    } 
    else if (userMessage.includes("what can you do")) {
        return "I can chat with you, answer questions, and more! Try asking me something.";
    } 
    else if (userMessage.includes("who made you")) {
        return "I was built by MW AI Group!";
    } 
    else if (userMessage.includes("tell me a joke")) {
        return "Why don’t skeletons fight each other? Because they don’t have the guts!";
    } 
    else {
        return "Hmm... I don't know how to respond to that yet. Try asking something else!";
    }
}
