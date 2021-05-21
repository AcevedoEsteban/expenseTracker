const express = require('express');
const dontenv = require('dontenv');
const colors = require('colors');
const morgan = require('morgan');

dontenv.config({path: './config/config.env'})

const app = express();

app.get('/', (req, res ) =>res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.long(`server running in  ${process.env.NODE_ENV} mode on port${5000}`.yellow.bold));