const express = require('express');
const app = express();
const apiRouter = require('./routes/api.js');
const port = process.env.PORT || 5000;

// Routes
app.use('/api', apiRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));