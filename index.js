const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    console.log('Here');
    res.status(500).json({message:"Hi"});
    res.send('Hi');
});

app.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}.`)
    )