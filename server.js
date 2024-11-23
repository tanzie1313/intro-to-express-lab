const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.listen(3001, () => {
    console.log('listening on port 3001');
});

