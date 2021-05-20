const mongoose = require('mongoose');

const connectMongo = async() => {
    try{
        await mongoose.connect(process.env.BD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("Se conecto a MongoDB!!")
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectMongo;