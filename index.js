const express = require('express');
const app = express();
const cors = require('cors');
const apiRoute = require('./routes/api');

app.use(cors());


app.listen(process.env.PORT || 5000)

app.use('/api', apiRoute);