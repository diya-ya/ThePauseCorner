let currentMood = '';
let currentTheme = {};

// Mood themes configuration - Sophisticated and mature
const moodThemes = {
    'calm-galaxy': {
        name: 'Cosmic',
        bg: 'from-slate-900 via-slate-800 to-slate-900',
        text: 'text-white',
        accent: 'text-slate-300',
        cardBg: 'from-slate-800 to-slate-700',
        buttonBg: 'from-slate-600 to-slate-500',
        emoji: '●'
    },
    'soft-bloom': {
        name: 'Serene',
        bg: 'from-rose-50 via-pink-50 to-purple-50',
        text: 'text-slate-800',
        accent: 'text-rose-600',
        cardBg: 'from-rose-100 to-purple-100',
        buttonBg: 'from-rose-500 to-purple-500',
        emoji: '○'
    },
    'nature-breeze': {
        name: 'Natural',
        bg: 'from-emerald-50 via-teal-50 to-cyan-50',
        text: 'text-slate-800',
        accent: 'text-emerald-600',
        cardBg: 'from-emerald-100 to-teal-100',
        buttonBg: 'from-emerald-500 to-teal-500',
        emoji: '●'
    },
    'playful-pop': {
        name: 'Vibrant',
        bg: 'from-amber-50 via-orange-50 to-red-50',
        text: 'text-slate-800',
        accent: 'text-amber-600',
        cardBg: 'from-amber-100 to-orange-100',
        buttonBg: 'from-amber-500 to-orange-500',
        emoji: '○'
    },
    'minimal-clean': {
        name: 'Minimal',
        bg: 'from-slate-50 via-gray-50 to-zinc-50',
        text: 'text-slate-700',
        accent: 'text-slate-600',
        cardBg: 'from-white to-slate-100',
        buttonBg: 'from-slate-500 to-gray-500',
        emoji: '●'
    }
};

// Phrases for spinwheel
const phrases = [
    "You are not alone in this moment, even if it feels that way. Someone out there gets it.",
    "Take a breath so deep it surprises your shoulders. Let yourself be here, just for now.",
    "Every sunrise is proof that beginnings can be gentle, even after the longest night.",
    "You’ve made it through every hard day so far. That’s not luck—that’s you.",
    "Be as kind to yourself as you would be to a friend who’s having a rough day.",
    "You don’t have to be perfect to be worthy of love or rest. Progress is enough.",
    "You are stronger than you realize, especially on the days you feel fragile.",
    "It’s okay to laugh at yourself. Sometimes, that’s the bravest thing you can do.",
    "The path ahead might be foggy, but your feet know how to move forward.",
    "You matter, even if you can’t see the ripple you make in someone else’s life.",
    "Let yourself breathe out the worries, even if just for a minute. You deserve peace.",
    "You are worthy of love, even when you feel like you’re hard to love.",
    "Small steps count. Sometimes, just getting out of bed is a victory.",
    "Sips of water count as self‑care.",
    "You don't need a reason to breathe.",
    "You matter here.",
    "Your pace is valid.",
    "Permission granted: do nothing for 2 mins.",
    "Even clouds take breaks from raining.",
    "Being is plenty.",
    "You are enough, even if you don't feel like it.",
    "Choosing joy, even for a second, is a quiet act of rebellion.",
    "You have a softness that makes the world a little less sharp.",
    "It’s okay if you don’t have all the answers. Sometimes, just asking the questions is enough.",
    "You inspire others in ways you may never know. Your existence is a quiet encouragement.",
    "Believe in yourself the way you believe in your favorite song—without needing a reason.",
    "You are loved, even on the days you can’t feel it.",
    "Take things one moment at a time. Sometimes, that’s all you need to do.",
    "There is a quiet power in simply showing up, even when it’s hard.",
    "Every challenge you’ve faced has shaped you into someone more resilient.",
    "You are the author of your story, and you can always turn the page.",
    "Trust your gut. It’s wiser than you think.",
    "You are capable of more than you give yourself credit for.",
    "Kindness is never wasted, especially when you give it to yourself.",
    "You are allowed to be a work in progress and a masterpiece at the same time.",
    "Your heart knows the way, even when your mind is full of noise.",
    "You are resilient, even if you feel like a soggy piece of toast today.",
    "You bring something to the world that nobody else can.",
    "There is only one you, and that’s your superpower.",
    "Your dreams are valid, no matter how big or small they seem.",
    "Getting through today is enough. Tomorrow can wait its turn.",
    "You have wisdom inside you, even if it sometimes hides behind silly thoughts.",
    "You are a gift, even if you sometimes feel like you’re wrapped in yesterday’s newspaper.",
    "You can handle more than you think, but you don’t have to do it all at once.",
    "You are beautiful, even if you feel like a mess right now.",
    "Your potential is still unfolding. Give yourself time.",
    "You deserve happiness, even if you’re not sure how to find it yet.",
    "You are enough, even when you feel like you’re falling short.",
    "You are loved, even if you forgot to text someone back.",
    "You are strong, even if your strength looks like asking for help.",
    "You are brave, even if your courage is quiet.",
    "It’s okay to pause. There’s no need to run without knowing the reason.",
    "Keep walking, we’re still too young to stop.",
    "There’re a lot of things in the world that you can’t control. And that's okay",
    "You deserve your own patience.",
    "You make spaces softer by being you.",
    "You can put it down for now.",
    "You are already more than enough to be loved.",
    "You are enough, even if you don't feel like it.",
];

// Rewind corner activities - Sophisticated and mature
const rewindActivities = {
    'calm-galaxy': [
        {
            title: "Cosmic Breathing",
            description: "Inhale deeply, expanding your awareness like the universe. Exhale slowly, releasing tension into the void.",
            emoji: "●",
            duration: "1 min",
            interactive: "breathing",
            theme: "galaxy"
        },
        {
            title: "Ambient Resonance",
            description: "Listen to a 30-second ambient soundscape. Allow your mind to drift into deep space.",
            emoji: "○",
            duration: "30 sec",
            interactive: "audio",
            theme: "galaxy"
        },
        {
            title: "Universal Perspective",
            description: "Reflect on three aspects of existence that inspire awe. Contemplate your place in the cosmos.",
            emoji: "●",
            duration: "2 min",
            interactive: "writing",
            theme: "galaxy"
        }
    ],
    'soft-bloom': [
        {
            title: "Mindful Observations",
            description: "Note three subtle moments of beauty you experienced today. Appreciate the details.",
            emoji: "○",
            duration: "1 min",
            interactive: "writing",
            theme: "bloom"
        },
        {
            title: "Organic Expression",
            description: "Create a simple organic shape on paper. Focus on the flow of movement, not the result.",
            emoji: "●",
            duration: "2 min",
            interactive: "drawing",
            theme: "bloom"
        },
        {
            title: "Natural Harmony",
            description: "Listen to a gentle natural sound for 30 seconds. Feel the rhythm of the natural world.",
            emoji: "○",
            duration: "30 sec",
            interactive: "audio",
            theme: "bloom"
        }
    ],
    'nature-breeze': [
        {
            title: "Sensory Grounding",
            description: "Engage your senses systematically: 5 visual, 4 tactile, 3 auditory, 2 olfactory, 1 gustatory.",
            emoji: "●",
            duration: "2 min",
            interactive: "senses",
            theme: "breeze"
        },
        {
            title: "Contemplative Gaze",
            description: "Look out the window with a soft focus for one minute. Let your eyes rest and your mind wander.",
            emoji: "○",
            duration: "1 min",
            interactive: "gazing",
            theme: "breeze"
        },
        {
            title: "Mindful Inventory",
            description: "Count twenty natural elements around you. Notice the abundance of life and growth.",
            emoji: "●",
            duration: "1 min",
            interactive: "counting",
            theme: "breeze"
        }
    ],
    'playful-pop': [
        {
            title: "Energetic Release",
            description: "Stand and move your body freely for 10 seconds. Release any pent-up energy with intention.",
            emoji: "○",
            duration: "10 sec",
            interactive: "movement",
            theme: "pop"
        },
        {
            title: "Creative Flow",
            description: "Draw an abstract shape and observe what emerges. Trust the creative process.",
            emoji: "●",
            duration: "1 min",
            interactive: "drawing",
            theme: "pop"
        },
        {
            title: "Vocal Expression",
            description: "Hum a simple melody for 30 seconds. Feel the vibration in your chest and throat.",
            emoji: "○",
            duration: "30 sec",
            interactive: "singing",
            theme: "pop"
        }
    ],
    'minimal-clean': [
        {
            title: "Contemplative Breath",
            description: "Focus on your breathing for two minutes. Visualize a circle expanding and contracting with each breath.",
            emoji: "●",
            duration: "2 min",
            interactive: "breathing",
            theme: "minimal"
        },
        {
            title: "Intentional Release",
            description: "Identify one non-essential task and consciously release it. Give yourself permission to let go.",
            emoji: "○",
            duration: "1 min",
            interactive: "reflection",
            theme: "minimal"
        },
        {
            title: "Pure Sound",
            description: "Listen to a simple instrumental tone. Focus on the clarity and simplicity of the sound.",
            emoji: "●",
            duration: "30 sec",
            interactive: "audio",
            theme: "minimal"
        }
    ]
};

// Uplift wall messages (will be loaded from backend)
let upliftMessages = [];

// Load messages from backend
async function loadMessages() {
    try {
        const response = await fetch('/api/messages');
        const data = await response.json();
        upliftMessages = data.messages;
    } catch (error) {
        console.log('Using default messages');
        upliftMessages = [
            "You are amazing! ✨",
            "Today is going to be great! 🌟",
            "You make the world better just by being you 💖",
            "Keep shining your light! 🌟",
            "You've got this! 💪",
            "Sending you positive vibes! 🌈",
            "You are loved and appreciated! 💕",
            "Your smile brightens someone's day! 😊"
        ];
    }
}

// Navigation functions
function selectMood(mood) {
    currentMood = mood;
    currentTheme = moodThemes[mood];
    
    // Apply theme to body
    document.body.className = `min-h-screen bg-gradient-to-br ${currentTheme.bg}`;
    
    // Show main menu
    showPage('mainMenuPage');
    loadMainMenu();
}

function showPage(pageId) {
    console.log('showPage called with:', pageId); // Debug log
    
    // Hide all pages
    document.querySelectorAll('[id$="Page"]').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        console.log('Page shown:', pageId); // Debug log
    } else {
        console.error('Page not found:', pageId); // Debug log
    }
}

function goBack() {
    console.log('goBack function called'); // Debug log
    // Always go back to welcome page and reset theme
    showPage('welcomePage');
    // Reset body to default theme
    document.body.className = 'min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50';
    console.log('Navigation completed'); // Debug log
}

// Main menu
function loadMainMenu() {
    const mainMenuPage = document.getElementById('mainMenuPage');
    mainMenuPage.innerHTML = `
        <div class="min-h-screen flex items-center justify-center p-4">
            <div class="max-w-4xl mx-auto text-center">
                <!-- Header -->
                <div class="mb-12">
                    <div class="text-8xl mb-4">${currentTheme.emoji}</div>
                    <h1 class="text-5xl md:text-6xl font-bold ${currentTheme.text} mb-4">
                        Welcome to ${currentTheme.name}
                    </h1>
                    <p class="text-xl ${currentTheme.text} opacity-80">
                        Choose your peaceful activity
                    </p>
                </div>

                <!-- Three Options -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <!-- Spinwheel -->
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-8 rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showPage('spinwheelPage'); loadSpinwheel();">
                                                <div class="text-6xl mb-4">●</div>
                        <h3 class="text-2xl font-semibold mb-2">Reflection Wheel</h3>
                        <p class="opacity-80">Discover thoughtful insights and wisdom</p>
                    </div>

                    <!-- Rewind Corner -->
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-8 rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showPage('rewindCornerPage'); loadRewindCorner();">
                                            <div class="text-6xl mb-4">○</div>
                    <h3 class="text-2xl font-semibold mb-2">Mindful Practices</h3>
                    <p class="opacity-80">Guided exercises for presence and awareness</p>
                    </div>

                    <!-- Uplift Wall -->
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-8 rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showPage('upliftWallPage'); loadUpliftWall();">
                                            <div class="text-6xl mb-4">●</div>
                    <h3 class="text-2xl font-semibold mb-2">Community Wall</h3>
                    <p class="opacity-80">Share and discover thoughtful messages</p>
                    </div>
                </div>

                <!-- Back Button -->
                <div class="mt-12">
                    <button onclick="goBack()" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                        ← Back to Mood Selection
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Spinwheel functionality
function loadSpinwheel() {
    const spinwheelPage = document.getElementById('spinwheelPage');
    spinwheelPage.innerHTML = `
        <div class="min-h-screen flex items-center justify-center p-4">
            <div class="max-w-4xl mx-auto text-center">
                <!-- Header -->
                <div class="mb-12">
                    <h1 class="text-5xl md:text-6xl font-bold ${currentTheme.text} mb-4">
                        🎡 Spinwheel of Positivity
                    </h1>
                    <p class="text-xl ${currentTheme.text} opacity-80">
                        Spin for a random uplifting message
                    </p>
                </div>

                <!-- Spinwheel -->
                <div class="mb-12">
                    <div id="wheel" class="w-80 h-80 mx-auto relative cursor-pointer" onclick="spinWheel()">
                        <div class="w-full h-full rounded-full bg-gradient-to-br ${currentTheme.cardBg} border-8 border-white shadow-2xl flex items-center justify-center text-6xl">
                            🎡
                        </div>
                        <div id="pointer" class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl">
                            👆
                        </div>
                    </div>
                </div>

                <!-- Result Display -->
                <div id="result" class="hidden">
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
                        <div id="resultText" class="text-2xl font-semibold mb-4"></div>
                        <button onclick="spinWheel()" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                            Spin Again
                        </button>
                    </div>
                </div>

                <!-- Back Button -->
                <div class="mt-12">
                    <button onclick="showPage('mainMenuPage')" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                        ← Back to Menu
                    </button>
                </div>
            </div>
        </div>
    `;
}

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    
    // Hide previous result
    result.classList.add('hidden');
    
    // Add spinning animation
    wheel.style.animation = 'spin 2s ease-out';
    
    // Get random phrase
    const randomPhrase = phrases[Math.random() * phrases.length | 0];
    
    // Show result after animation
    setTimeout(() => {
        wheel.style.animation = '';
        resultText.textContent = randomPhrase;
        result.classList.remove('hidden');
    }, 2000);
}

// Rewind Corner functionality
function loadRewindCorner() {
    const rewindCornerPage = document.getElementById('rewindCornerPage');
    rewindCornerPage.innerHTML = `
        <div class="min-h-screen flex items-center justify-center p-4">
            <div class="max-w-5xl mx-auto text-center">
                <!-- Header -->
                <div class="mb-12">
                    <h1 class="text-5xl md:text-6xl font-bold ${currentTheme.text} mb-4">
                        🔄 Rewind Corner
                    </h1>
                    <p class="text-xl ${currentTheme.text} opacity-80 mb-2">
                        Quick activities for rest and play
                    </p>
                    <p class="text-lg ${currentTheme.text} opacity-60">
                        Tailored to your ${currentTheme.name.toLowerCase()} mood
                    </p>
                </div>

                <!-- Theme Preview -->
                <div class="mb-12">
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
                        <div class="text-6xl mb-4">${currentTheme.emoji}</div>
                        <h3 class="text-2xl font-semibold mb-3">${currentTheme.name} Activities</h3>
                        <p class="text-lg opacity-80">
                            ${getThemeDescription(currentMood)}
                        </p>
                    </div>
                </div>

                <!-- Activity Display -->
                <div id="activityDisplay" class="mb-12">
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-12 rounded-2xl shadow-2xl max-w-3xl mx-auto">
                        <div id="activityContent" class="text-center">
                            <div class="text-8xl mb-6">🎯</div>
                            <h3 class="text-3xl font-semibold mb-4">Ready for an activity?</h3>
                            <p class="text-xl opacity-80 mb-8">Click the button below to get a random mindful activity</p>
                            <button onclick="getRandomActivity()" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-8 py-4 rounded-full font-semibold text-xl hover:scale-105 transition-transform duration-300">
                                Get Activity
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Back Button -->
                <div class="mt-12">
                    <button onclick="showPage('mainMenuPage')" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                        ← Back to Menu
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Helper function to get theme descriptions
function getThemeDescription(mood) {
    const descriptions = {
        'calm-galaxy': 'Cosmic practices for deep contemplation and universal perspective',
        'soft-bloom': 'Gentle mindfulness exercises for inner tranquility',
        'nature-breeze': 'Grounding techniques that connect you with the natural world',
        'playful-pop': 'Energetic practices for vitality and creative expression',
        'minimal-clean': 'Focused exercises for clarity and intentional living'
    };
    return descriptions[mood] || 'Mindful practices tailored to your chosen atmosphere';
}



function getRandomActivity() {
    const activityContent = document.getElementById('activityContent');
    const themeActivities = rewindActivities[currentMood] || rewindActivities['calm-galaxy'];
    const randomActivity = themeActivities[Math.random() * themeActivities.length | 0];
    
    // Create interactive elements based on activity type
    let interactiveElement = '';
    
            switch(randomActivity.interactive) {
            case 'breathing':
                interactiveElement = `
                    <div class="mb-6">
                        <div class="text-6xl mb-4">${randomActivity.emoji}</div>
                        <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${currentTheme.buttonBg} opacity-20 breathing-animation"></div>
                        <div class="text-lg mt-4 opacity-70">Breathe in... and out...</div>
                    </div>
                `;
                break;
            case 'audio':
                interactiveElement = `
                    <div class="mb-6">
                        <div class="text-6xl mb-4">${randomActivity.emoji}</div>
                        <button onclick="playAudio('${randomActivity.theme}')" class="w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${currentTheme.buttonBg} flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300">
                            🔊
                        </button>
                        <div class="text-lg mt-4 opacity-70">Click to play audio</div>
                    </div>
                `;
                break;
        case 'drawing':
            interactiveElement = `
                <div class="mb-6">
                    <div class="text-6xl mb-4">${randomActivity.emoji}</div>
                    <div class="w-20 h-20 mx-auto border-2 border-dashed border-current opacity-40 rounded-lg flex items-center justify-center">
                        ✏️
                    </div>
                </div>
            `;
            break;
        case 'movement':
            interactiveElement = `
                <div class="mb-6">
                    <div class="text-6xl mb-4">${randomActivity.emoji}</div>
                    <div class="w-20 h-20 mx-auto bg-gradient-to-r ${currentTheme.buttonBg} rounded-full animate-bounce flex items-center justify-center text-white text-2xl">
                        💃
                    </div>
                </div>
            `;
            break;
        case 'senses':
            interactiveElement = `
                <div class="mb-6">
                    <div class="text-6xl mb-4">${randomActivity.emoji}</div>
                    <div class="grid grid-cols-5 gap-2 max-w-xs mx-auto">
                        <div class="w-8 h-8 bg-gradient-to-r ${currentTheme.buttonBg} rounded-full opacity-60"></div>
                        <div class="w-8 h-8 bg-gradient-to-r ${currentTheme.buttonBg} rounded-full opacity-50"></div>
                        <div class="w-8 h-8 bg-gradient-to-r ${currentTheme.buttonBg} rounded-full opacity-40"></div>
                        <div class="w-8 h-8 bg-gradient-to-r ${currentTheme.buttonBg} rounded-full opacity-30"></div>
                        <div class="w-8 h-8 bg-gradient-to-r ${currentTheme.buttonBg} rounded-full opacity-20"></div>
                    </div>
                </div>
            `;
            break;
        default:
            interactiveElement = `<div class="text-6xl mb-6">${randomActivity.emoji}</div>`;
    }
    
    activityContent.innerHTML = `
        ${interactiveElement}
        <h3 class="text-3xl font-semibold mb-4">${randomActivity.title}</h3>
        <p class="text-xl opacity-80 mb-4">${randomActivity.description}</p>
        <div class="text-lg opacity-70 mb-6">⏱️ ${randomActivity.duration}</div>
        
        <!-- Interactive Instructions -->
        <div class="bg-gradient-to-r ${currentTheme.cardBg} p-4 rounded-xl mb-6 opacity-80">
            <p class="text-sm font-medium">💡 <strong>Pro tip:</strong> ${getProTip(randomActivity.interactive)}</p>
        </div>
        
        <button onclick="getRandomActivity()" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Another Activity
        </button>
    `;
}

// Helper function to get pro tips for different activity types
function getProTip(interactiveType) {
    const proTips = {
        'breathing': 'Find a comfortable position and allow your breath to flow naturally without forcing.',
        'audio': 'Close your eyes and surrender to the sound, letting it guide your awareness.',
        'drawing': 'Focus on the process of creation rather than the outcome. Trust your hand.',
        'movement': 'Move with intention and awareness, honoring your body\'s natural rhythm.',
        'senses': 'Engage each sense fully, taking time to appreciate the subtle details.',
        'gazing': 'Allow your eyes to soften and your mind to settle into a state of gentle observation.',
        'counting': 'Notice the unique qualities of each item as you count, maintaining mindful awareness.',
        'singing': 'Express yourself freely through sound, feeling the vibration and resonance.',
        'reflection': 'Approach your thoughts with curiosity and compassion, without judgment.',
        'writing': 'Write from a place of authenticity, allowing your inner wisdom to emerge.'
    };
    return proTips[interactiveType] || 'Approach this practice with gentle awareness and presence.';
}

// Uplift Wall functionality
function loadUpliftWall() {
    const upliftWallPage = document.getElementById('upliftWallPage');
    upliftWallPage.innerHTML = `
        <div class="min-h-screen flex items-center justify-center p-4">
            <div class="max-w-6xl mx-auto text-center">
                <!-- Header -->
                <div class="mb-12">
                    <h1 class="text-5xl md:text-6xl font-bold ${currentTheme.text} mb-4">
                        Community Wall
                    </h1>
                    <p class="text-xl ${currentTheme.text} opacity-80">
                        Share and discover thoughtful messages
                    </p>
                </div>

                <!-- Add Message Form -->
                <div class="mb-12">
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
                        <h3 class="text-2xl font-semibold mb-4">Leave a Kind Message</h3>
                        <textarea id="newMessage" placeholder="Write something kind, encouraging, or playful..." class="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-800 mb-4" rows="3"></textarea>
                        <button onclick="addMessage()" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                            Post Message
                        </button>
                    </div>
                </div>

                <!-- Messages Wall -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="messagesWall">
                    ${upliftMessages.map(message => `
                        <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-6 rounded-2xl shadow-xl">
                            <p class="text-lg">${message}</p>
                        </div>
                    `).join('')}
                </div>

                <!-- Back Button -->
                <div class="mt-12">
                    <button onclick="showPage('mainMenuPage')" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                        ← Back to Menu
                    </button>
                </div>
            </div>
        </div>
    `;
}

async function addMessage() {
    const messageInput = document.getElementById('newMessage');
    const message = messageInput.value.trim();
    
    if (message) {
        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message })
            });
            
            const data = await response.json();
            
            if (data.success) {
                messageInput.value = '';
                await loadMessages(); // Reload messages from backend
                loadUpliftWall(); // Reload the page
            } else {
                alert('Error posting message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Fallback to local storage
            upliftMessages.unshift(message);
            messageInput.value = '';
            loadUpliftWall();
        }
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(720deg); }
    }
    
    @keyframes breathing {
        0%, 100% { 
            transform: scale(1); 
            opacity: 0.2; 
        }
        50% { 
            transform: scale(1.3); 
            opacity: 0.6; 
        }
    }
    
    .breathing-animation {
        animation: breathing 6s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// Audio functionality for different themes
function playAudio(theme) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create different audio patterns for each theme
    let frequency, duration, type;
    
    switch(theme) {
        case 'galaxy':
            // Space-like ambient sound
            frequency = 220;
            duration = 0.3;
            type = 'sine';
            break;
        case 'bloom':
            // Gentle bird-like sound
            frequency = 440;
            duration = 0.2;
            type = 'triangle';
            break;
        case 'breeze':
            // Wind-like sound
            frequency = 330;
            duration = 0.4;
            type = 'sawtooth';
            break;
        case 'pop':
            // Cheerful sound
            frequency = 523;
            duration = 0.15;
            type = 'square';
            break;
        case 'minimal':
            // Clean, simple sound
            frequency = 196;
            duration = 0.5;
            type = 'sine';
            break;
        default:
            frequency = 440;
            duration = 0.3;
            type = 'sine';
    }
    
    // Create oscillator
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = type;
    
    // Fade in and out
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', async function() {
    // Load messages from backend
    await loadMessages();
    
    // Make functions globally accessible
    window.goBack = goBack;
    window.showPage = showPage;
    window.selectMood = selectMood;
    
    // App is ready
    console.log('The Pause Corner is ready! ✨');
});
