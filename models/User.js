const mongoose = require('mongoose')
const Schema = mongoose.Schema

//MongoDB de oluşturulacak olan dökümanın yapısını belirler
const userSchema = new Schema({ 
    username: { 
        type: String,
        required: true,//require:true =>>Doldurması zorunlu alam
        unique: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User",userSchema)