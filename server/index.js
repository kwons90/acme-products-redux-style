const chalk = require('chalk');
const path = require('path');

// EXPRESS SERVER & PORT
const express = require('express');
const app = express();

app.use(express.json())
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname,'../client')
const privatePath = path.join(__dirname,'../dist')

app.use(express.static(publicPath));
app.use(express.static(privatePath));

app.listen(PORT,() => console.log(chalk.blueBright(`Listening on Port ${PORT}`)));

