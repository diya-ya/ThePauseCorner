// Global variables
let currentMood = '';
let currentTheme = {};

// Mood themes configuration
const moodThemes = {
    'calm-galaxy': {
        name: 'Calm Galaxy',
        bg: 'from-slate-900 via-blue-900 to-indigo-900',
        text: 'text-white',
        accent: 'text-blue-300',
        cardBg: 'from-slate-800 to-blue-800',
        buttonBg: 'from-blue-600 to-indigo-600',
        emoji: '🌌'
    },
    'soft-bloom': {
        name: 'Soft Bloom',
        bg: 'from-pink-100 via-rose-100 to-purple-100',
        text: 'text-gray-800',
        accent: 'text-pink-600',
        cardBg: 'from-pink-200 to-purple-200',
        buttonBg: 'from-pink-500 to-purple-500',
        emoji: '🌸'
    },
    'nature-breeze': {
        name: 'Nature Breeze',
        bg: 'from-green-100 via-emerald-100 to-teal-100',
        text: 'text-gray-800',
        accent: 'text-green-600',
        cardBg: 'from-green-200 to-teal-200',
        buttonBg: 'from-green-500 to-teal-500',
        emoji: '🌿'
    },
    'playful-pop': {
        name: 'Playful Pop',
        bg: 'from-yellow-100 via-orange-100 to-red-100',
        text: 'text-gray-800',
        accent: 'text-orange-600',
        cardBg: 'from-yellow-200 to-orange-200',
        buttonBg: 'from-orange-500 to-red-500',
        emoji: '🌈'
    },
    'minimal-clean': {
        name: 'Minimal Clean',
        bg: 'from-gray-50 via-slate-50 to-zinc-50',
        text: 'text-gray-700',
        accent: 'text-gray-600',
        cardBg: 'from-white to-gray-100',
        buttonBg: 'from-gray-500 to-slate-500',
        emoji: '🪞'
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

// Rewind corner activities
const rewindActivities = [
    {
        title: "1-Minute Breath",
        description: "Close your eyes and take 4 slow breaths in, hold for 4, breathe out for 6",
        emoji: "🫁",
        duration: "1 min"
    },
    {
        title: "Name 3 Good Smells",
        description: "Think of three things that smell wonderful to you",
        emoji: "👃",
        duration: "30 sec"
    },
    {
        title: "Silly Doodle",
        description: "Draw a simple shape and turn it into something fun",
        emoji: "✏️",
        duration: "2 min"
    },
    {
        title: "Gratitude Moment",
        description: "Name one thing you're grateful for right now",
        emoji: "🙏",
        duration: "30 sec"
    },
    {
        title: "Stretch Break",
        description: "Stand up and reach for the sky, then touch your toes",
        emoji: "🤸‍♀️",
        duration: "1 min"
    },
    {
        title: "Color Hunt",
        description: "Look around and find 5 things of your favorite color",
        emoji: "🎨",
        duration: "1 min"
    },
    {
        title: "Kind Words",
        description: "Say something nice to yourself in the mirror",
        emoji: "💬",
        duration: "30 sec"
    },
    {
        title: "Nature Sound",
        description: "Listen to the sounds around you for 1 minute",
        emoji: "🌿",
        duration: "1 min"
    }
];

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
    // Hide all pages
    document.querySelectorAll('[id$="Page"]').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');
}

function goBack() {
    if (currentPage === 'mainMenuPage') {
        showPage('welcomePage');
        // Reset body to default theme
        document.body.className = 'min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50';
    } else {
        showPage('mainMenuPage');
    }
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
                        <div class="text-6xl mb-4">🎡</div>
                        <h3 class="text-2xl font-semibold mb-2">Spinwheel</h3>
                        <p class="opacity-80">Spin for a random uplifting phrase</p>
                    </div>

                    <!-- Rewind Corner -->
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-8 rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showPage('rewindCornerPage'); loadRewindCorner();">
                        <div class="text-6xl mb-4">🔄</div>
                        <h3 class="text-2xl font-semibold mb-2">Rewind Corner</h3>
                        <p class="opacity-80">Quick activities for rest and play</p>
                    </div>

                    <!-- Uplift Wall -->
                    <div class="bg-gradient-to-br ${currentTheme.cardBg} ${currentTheme.text} p-8 rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showPage('upliftWallPage'); loadUpliftWall();">
                        <div class="text-6xl mb-4">💝</div>
                        <h3 class="text-2xl font-semibold mb-2">Uplift Wall</h3>
                        <p class="opacity-80">Share and discover kind messages</p>
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
            <div class="max-w-4xl mx-auto text-center">
                <!-- Header -->
                <div class="mb-12">
                    <h1 class="text-5xl md:text-6xl font-bold ${currentTheme.text} mb-4">
                        🔄 Rewind Corner
                    </h1>
                    <p class="text-xl ${currentTheme.text} opacity-80">
                        Quick activities for rest and play
                    </p>
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

function getRandomActivity() {
    const activityContent = document.getElementById('activityContent');
    const randomActivity = rewindActivities[Math.random() * rewindActivities.length | 0];
    
    activityContent.innerHTML = `
        <div class="text-8xl mb-6">${randomActivity.emoji}</div>
        <h3 class="text-3xl font-semibold mb-4">${randomActivity.title}</h3>
        <p class="text-xl opacity-80 mb-4">${randomActivity.description}</p>
        <div class="text-lg opacity-70 mb-8">⏱️ ${randomActivity.duration}</div>
        <button onclick="getRandomActivity()" class="bg-gradient-to-r ${currentTheme.buttonBg} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Another Activity
        </button>
    `;
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
                        💝 Uplift Wall
                    </h1>
                    <p class="text-xl ${currentTheme.text} opacity-80">
                        Share and discover kind messages
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

// Add CSS for spinwheel animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(720deg); }
    }
`;
document.head.appendChild(style);

// Initialize the app
document.addEventListener('DOMContentLoaded', async function() {
    // Load messages from backend
    await loadMessages();
    
    // App is ready
    console.log('The Pause Corner is ready! ✨');
});
