const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); 
app.listen(8000, () => console.log(`online on port 8000`));

const gorillas = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gorilla_%2801%29.jpg/120px-Gorilla_%2801%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Gorilla_%2815375819139%29.jpg/120px-Gorilla_%2815375819139%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Male_silverback_Gorilla.JPG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaLJy3kiW16iV9MwI6GjadLYTfmwVenkc0g&s',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Male_gorilla_in_SF_zoo.jpg/250px-Male_gorilla_in_SF_zoo.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Male_Gorilla_%28181091305%29.jpg/250px-Male_Gorilla_%28181091305%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gorilla_Thinker.jpg/250px-Gorilla_Thinker.jpg'
    ];

app.get('/Random', async (req, res) => {
    try {
        const gorilla = gorillas[Math.floor(Math.random() * gorillas.length)];
        
        res.send(gorilla);
    }

    catch (error) {
        res.status(300).send(`Error: ${error}`);
    }

});