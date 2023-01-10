const quotes = [
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Some people dream of success, while other people get up every morning and make it happen.",
        author: "Wayne Huizenga",
    },
    {
        quote: "The only thing worse than starting something and falling.. is not starting something.",
        author: "SEth Godin",
    },
    {
        quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
        author: "Jim Rohn",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `-${todayQuote.author}`;
