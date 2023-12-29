const express = require('express');
const routers = require('./src/routers/Routers');
const app = express();
// Middlewares
const morgan = require('morgan'); //	HTTP request logger.
const cors = require('cors'); // Enable cross-origin
const bodyParser = require('body-parser'); // Parse HTTP request body

// Port config
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

if (app.get('env') === 'development') {
    app.use(morgan('dev'));
}

app.use('/api', routers);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});