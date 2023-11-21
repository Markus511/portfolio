const express = require('express');
const bodyParser = require('body-parser');


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

const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
