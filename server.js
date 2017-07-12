const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/', require('./src/routes')(express));
app.set('port', process.env.PORT || 3000);

exports.instance = app.listen(app.get('port'), () => {
	console.log(`Server running on port ${app.get('port')}`);
});

exports.app = app;
