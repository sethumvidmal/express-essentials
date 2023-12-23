const express = require('express');
const user = require('./routers/user');
const student = require('./routers/student');
const app = express();
// Middlewares
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
// Port config
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

if (app.get('env') === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/users', user);
app.use('/api/student', student);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});