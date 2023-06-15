import { Schema, model } from "mongoose";

const ProductSchema =  Schema({
    name: {
        type: String,
        required: [true, 'The name is required'],
        unique: true
    },
    descripcion: { 
        type: String 
    },
    img: {
        type: String,
    },
    amount: {
        type:Number,
        required: [true, 'The amount is required']
    },
    price: {
        type: Number,
        required: [true, 'The price is required']
    },
    available: { 
        type: Boolean, 
        defult: true 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    state: {
        type: Boolean,
        default: true
    }
})

ProductSchema.methods.toJSON = function() {
    const {__v, state, ...data} = this.toObject();
    return data;
}

export default model('Product', ProductSchema);