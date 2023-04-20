import { Schema, model, models } from "mongoose";

const MydataSchema = new Schema({
    url : {
        type : String,
        required : true,
    },
    Title : {
        type : String,
        required : true,
    },
    Description : {
        type : String,
        required : true
    }
});

const Mydata = models.Mydata || model("Mydata", MydataSchema)

module.exports = Mydata;