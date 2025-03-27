// AI Response Generation Logic
function generate_response(user_input) {
    let response = "";

    // Tracking context and level
    let conversation_level = 0;
    let context = {};

    // Define simple response logic for different input types (example)
    if (user_input.toLowerCase().includes("hello")) {
        response = "Hi there! How can I help you today?";
        conversation_level = 1;
    } else if (user_input.toLowerCase().includes("how are you")) {
        response = "I'm doing great, thank you for asking! How about you?";
        conversation_level = 2;
    } else if (user_input.toLowerCase().includes("weather")) {
        response = "I can't check the weather right now, but I can help you with other things!";
        conversation_level = 3;
    } else if (user_input.toLowerCase().includes("bye")) {
        response = "Goodbye! It was great chatting with you.";
        conversation_level = 4;
    } else {
        response = "I'm not sure how to respond to that, but let's keep chatting!";
        conversation_level = 5;
    }

    // Update context for the conversation
    context[conversation_level] = user_input;

    // Log conversation state for debug purposes
    console.log("Conversation Context: ", context);
    console.log("Response: ", response);

    return response;
}
