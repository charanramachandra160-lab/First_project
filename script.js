const quotes = [
  "Believe you can and you're halfway there.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "You miss 100% of the shots you don't take.",
  "In the middle of every difficulty lies opportunity."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}