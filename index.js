const express = require('express');
const app = express();
const cors = require('cors');
const apiRoute = require('./routes/api');
require("dotenv").config();
app.use(cors());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})

app.use('/api', apiRoute);