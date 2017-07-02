const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/', require('./src/routes')(express));

const port = 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});