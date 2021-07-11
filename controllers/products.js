const { response } = require('express');

const Product = require('../database/models/Product');

const getProducts = async(req, res = response) => {

    try {

        const product = await Product.findAll({
            attributes: ['id', 'name', 'url_image', 'price', 'discount', 'category']
        });
    
        res.json({
            ok: true,
            product
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false
        });
    }

}

const search = async(req, res = response) => {

    const { text } = req.body;
    let productsFiltered;

    try {
        if( text === '') {
            productsFiltered = [];
        } else {

            const products = await Product.findAll({
                attributes: ['id', 'name', 'url_image', 'price', 'discount', 'category']
            });

            productsFiltered = products.filter( p => p.name.toLowerCase().includes( text.toLowerCase() ) );

            res.json({
                ok: true,
                productsFiltered
            });

        }
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false
        });
    }

}


module.exports = {
    getProducts,
    search
}