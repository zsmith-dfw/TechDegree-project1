/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
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
  

]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(quoteList) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // this code snippet was provided by Jacob Relkin on stackoverflow.com to answer the question "How can I select a random value from this array using JavaScript?"
  console.log(randomQuote);
  return randomQuote; 
};

getRandomQuote();


/***
 * `printQuote` function
***/

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function

  let quoteCall = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

 
  quoteCall = getRandomQuote();
  console.log("this is the quote");
  console.log(quoteCall['quote']);

  console.log("\n\nthis is the author");
  console.log(quoteCall['author']);
}

printQuote()
   
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, true);