# Initialize context and level tracking
context = {}
conversation_level = 0  # Level of the conversation, can increase with each turn
previous_response = None

def generate_response(user_input):
    global conversation_level, previous_response

    # Pre-process input
    user_input = user_input.lower().strip()

    # Layer 1: Basic greetings
    if "hello" in user_input or "hi" in user_input:
        conversation_level = 1  # Starting level of interaction
        return "Hello! How can I assist you today?"

    # Layer 2: Asking the user for their name or remembering it
    if "name" in user_input:
        if "what's your name" in user_input or "who are you" in user_input:
            return "I'm your personal assistant. What can I call you?"
        elif "my name is" in user_input:
            name = user_input.split("my name is")[-1].strip()
            context['name'] = name
            conversation_level = 2  # Move to deeper level
            return f"Nice to meet you, {name}! How can I assist you today?"

    # Layer 3: Providing personalized responses based on stored context
    if "how are you" in user_input:
        if context.get('name'):
            return f"I'm doing well, {context['name']}. Thanks for asking!"
        else:
            return "I'm just a bot, but I'm here to help!"

    # Layer 4: Asking for specific information or offering help
    if "help" in user_input:
        if conversation_level > 1:
            return "What kind of help do you need? I can assist with a variety of tasks."
        else:
            return "I'm here to assist you. How can I be of service?"

    # Layer 5: Follow-up after answering questions or remembering past actions
    if "remember" in user_input:
        # Check if context has been set and refer back to it
        if 'name' in context:
            return f"You're {context['name']}, right?"
        else:
            return "I haven't learned your name yet. What's your name?"

    # Layer 6: Contextualizing based on previous responses (e.g., if the user previously asked about the weather)
    if "weather" in user_input:
        conversation_level = 3  # This could represent a more advanced topic of conversation
        previous_response = "weather"
        return "Sure! Let me check the weather for you."
    
    if previous_response == "weather" and conversation_level > 2:
        return "The weather is looking sunny today! Anything else you'd like to know?"

    # Layer 7: Providing feedback or escalating conversation based on tone
    if "angry" in user_input:
        conversation_level = 4  # Higher-level conversation, more emotional tone
        return "I see you're upset. How can I help to resolve things?"
    
    # Layer 8: Offering complex problem-solving based on prior inputs
    if "solve" in user_input:
        if conversation_level >= 3:
            return "Let's work together to solve this. What seems to be the issue?"
        else:
            return "I can help solve problems. What specifically do you need assistance with?"

    # Layer 9: Offering to end the conversation or thank the user
    if "goodbye" in user_input or "bye" in user_input:
        if context.get('name'):
            return f"Goodbye, {context['name']}! Have a great day!"
        else:
            return "Goodbye! Take care!"

    # Layer 10: Topic-based escalation (e.g., specific topics like tech, science, etc.)
    if "technology" in user_input:
        conversation_level = 5
        return "Ah, you're interested in technology! Are you asking about recent advancements or a specific area?"

    # Layer 11: Adding context to repeated topics
    if "technology" in user_input and conversation_level >= 5:
        return "We've talked about technology before. Would you like to know about the latest trends in AI?"

    # Layer 12: Track favorite color
    if "favorite color" in user_input:
        color = user_input.split("my favorite color is")[-1].strip()
        context['favorite_color'] = color
        return f"Got it! Your favorite color is {color}. Anything else you'd like to share?"

    # Layer 13: Respond based on stored favorite color
    if "color" in user_input and 'favorite_color' in context:
        return f"Ah, I remember your favorite color is {context['favorite_color']}!"

    # Layer 14: Track different contexts (e.g., remember weather request)
    if "weather" in user_input:
        context['weather_asked'] = True
        return "Sure, I can help you with that. What specific weather information are you looking for?"

    # If the weather was asked earlier
    if context.get('weather_asked') and "weather" in user_input:
        return "I see you are still interested in the weather. Would you like me to check the forecast for tomorrow?"

    # Layer 15: More advanced context tracking for multiple topics
    if "sports" in user_input:
        context['sports_asked'] = True
        return "Sure! What sport are you interested in?"

    if context.get('sports_asked') and "sports" in user_input:
        return "You've asked about sports before. Would you like me to give you an update on your favorite team?"

    # If no match, ask for clarification
    return "Sorry, I didn't quite catch that. Could you please rephrase?"
