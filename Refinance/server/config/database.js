const mongoose = require('mongoose')

const connectDBM = async() =>{
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log("ConnectDBM Success")
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDBM;