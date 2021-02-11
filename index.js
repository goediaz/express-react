const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.js');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));