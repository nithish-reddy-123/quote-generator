// const quotes = [
//  {
//  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//  author: "Nelson Mandela"
//  },
//  {
//  quote: "The way to get started is to quit talking and begin doing.",
//  author: "Walt Disney"
//  },
//  {
//  quote: "Your time is limited, so don't waste it living someone else's life.",
//  author: "Steve Jobs"
//  },
//  {
//  quote: "If life were predictable it would cease to be life, and be without flavor.",
//  author: "Eleanor Roosevelt"
//  },
//  {
//     quote: "Life is what happens when you're busy making other plans.",
//     author: "John Lennon"
//  },
//  {
//     quote: "Get busy living or get busy dying.",
//     author: "Stephen King"
//  },
//  {
//     quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
//     author: "Brian Tracy"
//  },
//  {
//     quote: "Believe you can and you're halfway there.",
//     author: "Theodore Roosevelt"
//  },
//  {
//     quote: "The only impossible journey is the one you never begin.",
//     author: "Tony Robbins"
//  },
//  {
//     quote: "Act as if what you do makes a difference. It does.",
//     author: "William James"
//  }

// ]; 

// const quoteText = document.getElementById('quote');
// const authorText = document.getElementById('author');
// const newQuoteBtn = document.getElementById('new-quote-btn'); 

// function getRandomQuote() {
//  const randomIndex = Math.floor(Math.random() * quotes.length);
//  const randomQuote = quotes[randomIndex];
//  quoteText.textContent = randomQuote.quote;
//  authorText.textContent = randomQuote.author;
// } 

// newQuoteBtn.addEventListener('click', getRandomQuote); 

// // Display a random quote on initial load
// getRandomQuote();
// Object containing quotes categorized by interest
const quotes = {
    inspirational: [
        { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { quote: "Get busy living or get busy dying.", author: "Stephen King" },
        { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
        { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" }
    ],
    success: [
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
        { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" }
    ],
    life: [
        { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
        { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
        { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
        { quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
        { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" }

    ],
    humor: [
        { quote: "I'm sorry, if you were right, I'd agree with you.", author: "Robin Williams" },
        { quote: "I always wanted to be somebody, but now I realize I should have been more specific.", author: "Lily Tomlin" },
        { quote: "If you think you are too small to make a difference, try sleeping with a mosquito.", author: "Dalai Lama" },
        { quote: "I used to think I was indecisive, but now I'm not too sure.", author: "Unknown" },
        { quote: "I told my wife the truth. I told her I was seeing a psychiatrist. Then she told me the truth: that she was seeing a psychiatrist, two plumbers, and a bartender.", author: "Rodney Dangerfield" },
    
    ]
};

// DOM Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const interestButtons = document.querySelectorAll('.interest-btn');

// State variable to keep track of the current interest
let currentInterest = 'inspirational'; // Default interest

// --- Functions ---

// Function to set the current interest and update active button
function setInterest(e) {
    // Remove active class from all buttons
    interestButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the clicked button
    const clickedButton = e.target;
    clickedButton.classList.add('active');
    
    // Update the current interest
    currentInterest = clickedButton.dataset.interest;
    
    // Display a new quote from the selected category
    getRandomQuote();
}

// Function to get and display a random quote from the current interest category
function getRandomQuote() {
    const quotesByCategory = quotes[currentInterest];
    const randomIndex = Math.floor(Math.random() * quotesByCategory.length);
    const randomQuote = quotesByCategory[randomIndex];
    
    quoteText.textContent = randomQuote.quote;
    authorText.textContent = randomQuote.author;
}

// --- Event Listeners ---

// Add click event listener to the "New Quote" button
newQuoteBtn.addEventListener('click', getRandomQuote);

// Add click event listener to each interest button
interestButtons.forEach(btn => btn.addEventListener('click', setInterest));

// --- Initial Load ---

// Display a random quote from the default category on initial page load
getRandomQuote();