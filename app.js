const express = require('express');
const app = express();
const user = require('./routers/user');
const student = require('./routers/student');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/users', user);
app.use('/api/student', student);

const port =process.env.PORT || 3000; // You can use any available port

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
