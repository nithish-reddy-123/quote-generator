const quotes = [
 {
 quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
 author: "Nelson Mandela"
 },
 {
 quote: "The way to get started is to quit talking and begin doing.",
 author: "Walt Disney"
 },
 {
 quote: "Your time is limited, so don't waste it living someone else's life.",
 author: "Steve Jobs"
 },
 {
 quote: "If life were predictable it would cease to be life, and be without flavor.",
 author: "Eleanor Roosevelt"
 },
 {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
 },
 {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
 },
 {
    quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy"
 },
 {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
 },
 {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
 },
 {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
 }
 
]; 

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn'); 

function getRandomQuote() {
 const randomIndex = Math.floor(Math.random() * quotes.length);
 const randomQuote = quotes[randomIndex];
 quoteText.textContent = randomQuote.quote;
 authorText.textContent = randomQuote.author;
} 

newQuoteBtn.addEventListener('click', getRandomQuote); 

// Display a random quote on initial load
getRandomQuote();