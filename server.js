const express = require('express');
const morgan = require('morgan');  //middleware from lecture

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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
    
    app.get('/hello', (req, res) => {
        res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
    });
    //Q4 filter by the minumum price, shoes included greater that or equal to min price
    // max price  less than or equal to max price
    // type of shoe: shows only shoes of the specified type
    //if non full shoe list. 
app.get('/shoes', (req, res) => {
    let shoesToShow = [...shoes]; //spread operator shallos copy of shoes array
    if (req.query['min-price']) { //
        const minPrice = parseInt(req.query['min-price']);
        shoesToShow = shoesToShow.filter(shoe => shoe.price >= minPrice);
    }
    if (req.query['max-price']) {
        const maxPrice = parseInt(req.query['max-price']);
        shoesToShow = shoesToShow.filter(shoe => shoe.price <= maxPrice);
    }
    if (req.query.type) {
        const type = req.query.type;
        shoesToShow = shoesToShow.filter(shoe => shoe.type === type);
    }
    
    res.json(shoesToShow); //differnt method that same as send...sends the json to the client// 
});
//ask about it or touch on it in a bit
    
