const express = require('express');
const app = express();

const apiRoute = require('./routes/api');

const PORT = 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})

app.use('/api', apiRoute);