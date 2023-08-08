const mongoose = require('mongoose')
exports.connect=()=>{
    try {
        mongoose.connect('mongodb+srv://kishore:Kishoref1@moviesinfo.5blmkvd.mongodb.net/Movies',{useNewUrlParser : true, useUnifiedTopology:true})
        console.log('DB Connection is successfull')
    } catch (error) {
        console.log(error)
    }
}