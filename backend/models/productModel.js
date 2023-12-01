import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    bookName:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    bookPrice:{
        type: Number,
        required: true,
        default: 0,
    },
    bookDetail:{
        type: String,
        required: true,
    },
    bookImage:{
        type: String,
        required: true
    },
    bookQuaranty:{
        type: Number,
        required: true,
        default: 0,
    },
},{
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

export default Product;