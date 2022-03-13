const express = require('express');
const getName = require('./rac');

const app = express();

app.get('/userName/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const name = await getName(id);
    res.json({
        name
    });
});

app.listen(3000, () => {
    console.log('ap listem');
});
