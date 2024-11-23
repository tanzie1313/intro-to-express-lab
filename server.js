const express = require('express');
const morgan = require('morgan');  //middleware from lecture

const app = express();
app.use(morgan('dev'));

app.listen(3001, () => {
    console.log('listening on port 3001');
});

app.get('/', (req, res) => {
    res.send('<b>Welcome to the Express Lab</b>'); //not requiered in the assignment but figured for lab. Use the root for welcome to lab
});

app.get('/greetings/Christy', (req, res) => {
    res.send('<b>Hello There Christy!</b>');
});

app.get('/roll/:num', (req, res) => {
    let num = req.params.num;
    let roll = Math.floor(Math.random() * num) + 1; //random number
    if (isNaN(num)) {  //not a number...checking
        res.send('You must specify a number');
    } else {
        res.send(`You rolled a ${roll}`); //display the answer if number. template literal
    }
});


