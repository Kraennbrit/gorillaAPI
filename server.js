const express = require('express');
const app = express();
const cors = require('cors');

app.use('cors')({ origin: '*' });

const gorillas = [  ];

app.get('/Random', async (req, res) => {
    try {
        const gorilla = gorillas[Math.floor(Math.random() * gorillas.length)];
    }

    catch (error) {
        res.status(300).send(`Error: ${error}`);
    }

});