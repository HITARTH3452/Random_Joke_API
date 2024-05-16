
const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json())

const Jokes = [
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I asked the librarian if the library had any books on paranoia. She whispered, “They’re right behind you!”",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What’s orange and sounds like a parrot? A carrot!",
    "I told my computer I needed a break, and now it won’t stop sending me vacation ads.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "Why don’t scientists trust stairs? Because they’re always up to something!",
    "I’m on a whiskey diet. I’ve lost three days already.",
    "Why couldn’t the bicycle stand up by itself? It was two-tired!",
    "Why don’t eggs tell jokes? They’d crack each other up!",
    "I would tell you a joke about paper, but it’s tearable.",
];


app.get("/api/random/jokes", (req , res) => {
    try{
    const randomInd = Math.floor(Math.random() * Jokes.length);
    console.log(randomInd)
    const randomJoke = Jokes[randomInd];
    console.log(randomJoke)
    res.json({ joke : randomJoke})
    }catch(err){
        console.log("ERR_OCCURED" , err)
    }
})


app.listen(PORT , () => {
    console.log("server is running on 3000 and fine")
})