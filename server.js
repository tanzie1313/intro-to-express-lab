const express = require('express');
const morgan = require('morgan');  //middleware from lecture

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
const app = express();
app.use(morgan('dev'));

app.listen(3001, () => {
    console.log('listening on port 3001');
});

app.get('/', (req, res) => {
    res.send('<b>Welcome to the Express Lab</b>'); //not requiered in the assignment but figured for lab. Use the root for welcome to lab
});

// app.get('/greetings/Christy', (req, res) => {
//     res.send('<b>Hello There Christy!</b>');
// });

// app.get('/roll/:num', (req, res) => {
//     let num = req.params.num;
//     let roll = Math.floor(Math.random() * num) + 1; //random number
//     if (isNaN(num)) {  //not a number...checking
//         res.send('You must specify a number');
//     } else {
//         res.send(`You rolled a ${roll}`); //display the answer if number. template literal
//     }
// });


app.get('/collectibles/:index', (req, res) => { 
    const index =parseInt(req.params.index);
        if (index < 0 || index >= collectibles.length)
            return res.send('This Item not yet in stock, Check back soon!');
        //parse the index string  to an integer, stack overflow and w3schools...an previous lesson
        
        const item = collectibles[index];
        res.send(`So you want the ${item.name}? For ${item.price}, it can be yours!`);
    });

