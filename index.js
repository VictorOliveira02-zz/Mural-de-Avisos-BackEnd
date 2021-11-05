const express = require('express');
const app = express();

const apiRoute = require('./routes/api');

const PORT = 5000;
//const PORT = "https://mural-de-avisos-back-end.vercel.app"
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})

app.use('/api', apiRoute);