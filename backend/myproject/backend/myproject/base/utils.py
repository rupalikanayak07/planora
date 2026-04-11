import random
import datetime


def get_mood_msg(mood):

    hour= datetime.datetime.now().hour

    messages = {
        "happy": [
            "You're doing amazing! Keep the momentum 🚀",
            "Great mood = great productivity 💯",
            "Use this energy to finish strong!"
        ],

        "tired": [
            "Take a short break, then try again 💆",
            "Even 30 mins of focus is progress 👍",
            "Rest a bit, then start small"
        ],

        "stressed": [
            "Don't overthink, just start with one topic 🌱",
            "Small steps reduce stress 💡",
            "Focus on progress, not perfection"
        ],

        "motivated": [
            "This is your moment! Push harder 🔥",
            "You're unstoppable today 💪",
            "Go beyond your limits 🚀"
        ]
    }    

    if mood =='tired'and hour>=23:
        return "It's late 😴 Proper rest will help you study better tomorrow"
    
    if mood =='motivated'and hour<10:
        return "It's late 😴 Proper rest will help you study better tomorrow"
    

    return random.choice(messages.get(mood, ["Keep going!"]))