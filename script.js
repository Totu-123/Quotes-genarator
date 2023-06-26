const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateQuote);
