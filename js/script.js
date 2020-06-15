
// This is a simple array of quote objects.  The ones said by real people only have the quote itself as well as who said it. The ones from film have the name of the film (citation) as well as the year it was released. For fictional characters, the actor/actress saying the quote in parentheses.

let quotes = [
  {quote: 'My grandfather once told me that there were two kinds of people: those who do the work and those who take the credit. He told me to try to be in the first group; there was much less competition.', author: "Indira Gandhi"},
  {quote: 'If I want to knock a story off the front page, I just change my hairstyle.', author: "Hillary Clinton"},
  {quote: 'People who think they know everything are a great annoyance to those of us who do.', author: "Isaac Asimov"},
  {quote: 'I’d rather have 1% of the effort of 100 men than 100% of my own effort', author: "J. Paul Getty"},
  {quote: 'My wife Mary and I have been married for forty-seven years and not once have we had an argument serious enough to consider divorce; murder, yes, but divorce, never.', author: "Jack Benny"},
  {quote: 'Money is not the most important thing in the world. Love is. Fortunately, I love money.', author: "Jackie Mason"},
  {quote: 'Women are wiser than men because they know less and understand more.', author: " James Thurber"},
  {quote: 'When we talk to God, we’re praying. When God talks to us, we’re schizophrenic.', author: "Jane Wagner"},
  {quote: 'Men are like shoes. Some fit better than others. And sometimes you go out shopping and there’s nothing you like. And then, as luck would have it, the next week you find two that are perfect, but you don’t have the money to buy both.', author: "Janet Evanovich"},
  {quote: 'According to a new survey, 90% of men say their lover is also their best friend. Which is really kind of disturbing when you consider man’s best friend is his dog.', author: "Jay Leno"},
  {quote: 'My pessimism extends to the point of even suspecting the sincerity of other pessimists.', author: "Jean Rostand"},
  {quote: 'Haters are just confused admirers because they can’t figure out the reason why everyone loves you.', author: "Jeffree Star"},
  {quote: 'It’s amazing that the amount of news that happens in the world every day always just exactly fits the newspaper', author: "Jerry Seinfeld"},
  {quote: 'Laugh a lot. It burns a lot of calories.', author: "Jessica Simpson"},
  {quote: 'A martini. Shaken, not stirred.', author: "James Bond (Sean Connery)", citation: "Goldfinger", year: "1964"},
  {quote: 'Carpe diem. Seize the day, boys. Make your lives extraordinary', author: "John Keating (Robin Williams)", citation: "Dead Poets Society", year: "1989"},
  {quote: 'Nobody puts Baby in a corner.', author: "Johnny Castle (Patrick Swayze)", citation: "Dirty Dancing", year: "1987"},
  {quote: 'You can\'t handle the truth!', author: "Col. Nathan R. Jessup (	Jack Nicholson)", citation: "Goldfinger", year: "1964"},
  {quote: 'Show me the money!', author: "Rod Tidwell (Cuba Gooding Jr.)", citation: "Jerry McGuire", year: "1996"},
  {quote: 'Mama always said life was like a box of chocolates. You never know what you\'re gonna get.', author: "Forrest Gump(Tom Hanks)", citation: "Forrest Gump", year: "1994"},
  {quote: 'Gentlement, you can\'t fight in here! This is the War Room!', author: "President Merkin Muffley (Peter Sellers)", citation: "Dr. Strangelove", year: "1964"},
  {quote: 'Greed, for lack of a better word, is good.', author: "Gordon Gekko (Michael Douglas)", citation: "Wall Street", year: "1987"},
  {quote: "Surely you can\'t be serious... I am serious, and don\'t call me Shirley", author: "Ted Striker and Dr. Rumack", citation: "Airplane", year: "1980"}
];

 // This funciton takes the length of the quote array (so that we don't have to count every single quote...) and multiplies it by a random number between 0 and up to but not including 1. Whatever quote has an index value that matches our returned value becomes our random quote

function getRandomQuote(quoteList) {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // this code snippet was provided by Jacob Relkin on stackoverflow.com to answer the question "How can I select a random value from this array using JavaScript?" asked by another user several years ago. I modified it to fit the needs of this project.
  return randomQuote; 
};

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

  document.body.style.background = bgColor;
  }



getRandomQuote(); // This is really only for testing purposes - it does not affect the program in any way. This was also a spot where I had console.log but it is now moved to the end.

// The printQuote function starts off with no parameters because they are not necessary for this program. We define our two variables. QuoteCall stores our random quote from earlier and logs it for future use. The quoteString variable exists because we need it to hold our HTML string. If we used "quoteCall" for that, it would override our previous assignment and we don't want that.
// We finish off the function with a conditional statement to see if our randomly selected code is a quotation that has a citation and year. If it does, then we print that out as well.

function printQuote() {
  let quoteCall = getRandomQuote();
  let quoteString = `<p class = "quote">${quoteCall.quote}</p><p class ="source">${quoteCall.author}`; // Here we are checking our variable "quoteCall" and printing the "quote" and "author" properties associated with our random quote.
   
  // Since we are going to use template literals to join the conditional statement with our string, we can leave the second <p> tag open for now. This if statement checks to see if the properties "citation" and "year" exist and use template literals to join the strings.
  
  if (quoteCall.hasOwnProperty('citation')) {
      quoteString += `<span class = "citation">${quoteCall.citation}</span>`
  };

  if (quoteCall.hasOwnProperty('year')) {
      quoteString += `<span class = "year">${quoteCall.year}</span></p>`
      console.log(quoteString); // This is really just a convenience for a developer to ensure what the user sees matches the console and to troubleshoot issues.
  }; 
  random_bg_color();
document.getElementById('quote-box').innerHTML = quoteString; // This finally prints our quote in accordance with the HTML element tags defined in the index.HTML document. 

};
setInterval(printQuote, 3000);

document.getElementById('load-quote').addEventListener("click", printQuote, true); // This results in a new quote every time the user clicks the button

