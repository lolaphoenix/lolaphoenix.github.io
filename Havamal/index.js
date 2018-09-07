function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

var quotes = [
  "1. At every doorway\n before you enter,\n you should take a good look around--\n for you never know where your enemies\n might be seated within.\n",
  "2. Hail to a good host!\n A guest has come inside, where should he sit?\n He is impatient,\n stranding on the threshold, ready to try his luck.\n",
  "3. He needs fire,\n the one who has just come in,\n his knees are shivering.\n Food and dry clothes\n will do him well,\n after his journey over the mountains.\n",
  "4. He needs water,\n the one who has just arrived,\n dry clothes, and a warm welcome\n from a friendly host--\n and if he can get it,\n a chance to listen and be listened to.\n",
  "5. A man needs wisdom\n if he plans to wander widely; \n life is easier at home.\n He'll be laughed at\n if he sits among the wsie\n and has nothing to say.\n",
  "6. A wise man\n is not showy about his wisdom;\n he guards it carefully.\n He is silent when he comes\n to a stranger's home.\n The wise man seldom wanders into harm, \n for you can never have\n a more faithful friend\n than a good supply of wisdom.\n",
  "7. The watchful guest,\n when he arrives for a meal,\n should keep his mouth shut,\n listening with his ears\n and watching wit his eyes--\n that's how the wise get wiser.\n",
  "8. A man is happy\n if he finds praise and friendship\n within himself.\n You can never be sure\n of where you stand\n in someone else's heart.\n",
  "9. A man is happy\n if he finds good advice\n within himself.\n Many men have received bad advice\n by trusting someone else.\n"
];
