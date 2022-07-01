const mongoose = require('mongoose')
const Schema = mongoose.Schema

//MongoDB de oluşturulacak olan dökümanın yapısını belirler
const contactSchema = new Schema({ 
    firstname: { 
        type: String,
        required: true,//require:true =>>Doldurması zorunlu alam
    }, 
    lastname: { 
        type: String,
        required: true,//require:true =>>Doldurması zorunlu alam
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    depoCesidi :{
        type: String,
        required: true,

    },
    message: {
        type: String,
        required: true,
    }
    
 
})

module.exports = mongoose.model("Contact",contactSchema)