import { Schema, model, models } from "mongoose";

const PortfolioSchema = new Schema({
    Name : {
        type : String,
        required : true,
    },
    Img : {
        type : String,
        required : true,
    },
    Link : {
        type : String,
        required : true,
        default : 'Non',
    },
    Devby : {
        type : Array,
        required : true,
    },
    Date : {
        type : String,
        required : true,
    }
});

const Portfolio = models.Portfolio || model("Portfolio", PortfolioSchema);

module.exports = Portfolio;