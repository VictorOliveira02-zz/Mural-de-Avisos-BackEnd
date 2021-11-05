const express = require('express');
const app = express();
const cors = require('cors');
const apiRoute = require('./routes/api');

app.use(cors());


app.listen("https://mural-de-avisos-backend.herokuapp.com")

app.use('/api', apiRoute);