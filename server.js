const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.send('Hello I am Vihaan');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
