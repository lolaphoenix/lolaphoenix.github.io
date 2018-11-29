var quotes = [
'TEST ONE',
'TEST TWO',
  ‘164 Now the words of the One-Eyed are heard in Valhalla, for the benefit of humans, for the harm of giants, health to you who speak them, health to you who know them, joy to you who learn them, health to you who hear them.’
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
