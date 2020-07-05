const chalk = require('chalk');
const path = require('path');
const {UUIDV4} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { db, Product, seed } = require('./db/index')


// EXPRESS SERVER & PORT
const express = require('express');
const app = express();

app.use(express.json())
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../client')
const privatePath = path.join(__dirname, '../dist')

//SYNC DB
seed()

// Routes for Server
app.get('/api/products', async (req, res) => {
    let products = await Product.findAll()
    // console.log(products)
    res.send(products)
});

app.post('/api/products', async (req, res) => {
    const { name } = req.body;
    // console.log("typeof",typeof name);
    if (typeof name !== 'string') {
        res.status(400).send({
            message: 'body must include a name that is a string'
        })
    }
    else {
        const createdId = uuidv4();
        const createdProduct = await Product.create({
            id: createdId,
            name,
        });
        res.status(201).send({
            product: createdProduct,
            message: `Product ${name} was created successfully!`,
        });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    console.log("params", req.params.id)
    const selectedID = req.params.id
    console.log(selectedID)
    Product.destroy({
        where: {
            id: selectedID
        }
    })
    res.status(101).send( {
        message: 'Product has been deleted'
    })
})

// USE STATIC METHODS
app.use(express.static(publicPath));
app.use(express.static(privatePath));

// LISTEN TO PORT 3000
app.listen(PORT, () => console.log(chalk.blueBright(`Listening on Port ${PORT}`)));


