var Quote = function(quote, author) {
  this.quote = quote;
  this.author = author;
}
var quotes = [];
quotes.push(new Quote("Insanity: doing the same thing over and over again and expecting different results.", "A. Einstein"));
quotes.push(new Quote("There are no facts, only interpretations.", "F. Nietzsche"));
quotes.push(new Quote("I am against religion because it teaches us to be satisfied with not understanding the world.", "R. Dawkins"));
quotes.push(new Quote("Three things cannot be long hidden: the sun, the moon, and the truth.", "Buddha"));
quotes.push(new Quote("The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.", "H.P. Lovecraft"));
quotes.push(new Quote("Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before.", "E. A. Poe"));
quotes.push(new Quote("First they ignore you, then they laugh at you, then they fight you, then you win.", "Gandhi"));
var generateButton = $("#generate-quote");
var quoteField = $(".quote");
var quoteAuthor = $(".quote-author");
generateButton.click(function() {
  var randomNumber = Math.floor((Math.random() * quotes.length) + 0);
  console.log(randomNumber);
  quoteField.html(quotes[randomNumber].quote);
  quoteAuthor.html(quotes[randomNumber].author);
})