const path = require('path');
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

/** MongoDB connection settings **/
const url = 'mongodb://127.0.0.1:27017/technical-test-flown';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
   .connect(url,options)
   .then(() =>
       app.listen(PORT, () =>
           console.log(`Server running on http://localhost:${PORT}`)
       )
   )
   .catch((error) => {
      throw error;
   });