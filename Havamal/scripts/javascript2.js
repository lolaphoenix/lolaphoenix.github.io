var quotes = [
'TEST ONE',
'TEST TWO',
  'Test three',
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
