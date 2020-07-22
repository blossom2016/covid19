const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    file:{
        type: String,
        data :Buffer
        //required:true
    }
})

module.exports = mongoose.model("File", fileSchema);