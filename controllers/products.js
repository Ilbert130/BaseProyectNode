import { request, response } from "express";
import Product from '../models/product.js';



//GET: All
export const productsGet = async(req=request, res= response) => { 
    try {
        const {limit = 5, since = 0} = req.query;
        const query = {state:true};

        const [total, products] = await Promise.all([
            Product.countDocuments(query),
            Product.find(query)
                .skip(+since)
                .limit(+limit).populate('role','role')
        ]);

        res.json({
            total,
            products
        });

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

//GET
export const productGet = async(req = request, res = response) => {
    try {
        const {id} = req.params;
        const product = await Product.findOne({_id:id, state:true}).populate();

        res.json({
            product
        })

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


//POST
export const productPost = async(req = request, res = response) => {
    try {

        const {name, description, img='No_Image_Available.jpg', amount, price, available, user} = req.body;
        const product = new Product({name, description, img, amount, price, available, user});

        await product.save();
        res.json({
            product
        });
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

//PUT
// export const productPut

//DELETE



