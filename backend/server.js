const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


var cors = function (req, res, next)
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

const app = express();
app.use(cors);
app.use(bodyParser.json());

// importataan reitit
const mailRoutes = require('./routes/mailRoutes');
app.use(mailRoutes);


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't
// match the ones above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
