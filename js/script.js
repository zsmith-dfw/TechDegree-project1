
 
 //quotes array 

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
  {quote: 'Nobody puts Baby in a corner.', author: "Johnny Castle (Patrick Swayze)", citation: "Dirty Dancing", year: "1987"}

]



 //getRandomQuote` function

function getRandomQuote(quoteList) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // this code snippet was provided by Jacob Relkin on stackoverflow.com to answer the question "How can I select a random value from this array using JavaScript?"
  console.log(randomQuote);
  return randomQuote; 
};

getRandomQuote();


//printQuote function


function printQuote() {
 
let quoteCall = getRandomQuote();
  

 
let quoteString = `<p class = "quote">${quoteCall.quote}</p>  
<p class ="source">${quoteCall.author}`

if (quotes.citation && quotes.year === true) {
  quoteString += `<span class = "citation">${quoteCall.citation}</span>
  <span class = "year">${quoteCall.year}</span></p>`;
} else {
  quoteString += `</p>`;
}






 
document.getElementById('quote-box').innerHTML = quoteString;

}



document.getElementById('load-quote').addEventListener("click", printQuote, true);