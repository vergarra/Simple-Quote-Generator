const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote-button");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
     quote: "The best way to predict the future is to create it.",
     author: "Peter Drucker"
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley"
 }, {
    quote: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
    author: "Charles Darwin"
 }, {
    quote: "Music is the universal language of mankind.",
    author: "Henry Wadsworth Longfellow"
 }, {
    quote: "Life is too short to wait.",
    author: "Dorian Wilde"
 }, {
    quote: "Take the first step in faith. You don’t have to see the whole staircase, just take the first step.",
    author: "Martin Luther King Jr"
 }, {
    quote: "No longer chasing butterflies, Camila and I planted our garden so they could come to us.",
    author: "Matthew Mcconaughey"
 }

];

newQuoteButton.addEventListener("click", displayNewQuote);

function displayNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = "- " + randomQuote.author;
}