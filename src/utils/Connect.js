import mongoose from 'mongoose'

const connectmongodb = async (callback) => {
    mongoose.set("strictQuery", false);
    try {
        await mongoose.connect('mongodb+srv://Aszer:BoHZ1rfFlDnsQHPg@cluster0.h8aukeb.mongodb.net/itcamp', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        typeof callback === "function" && callback();
    } catch (error) {
        console.log(error.toString());
    }
}

export default connectmongodb;