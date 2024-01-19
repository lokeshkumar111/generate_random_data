const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isMarried:Boolean
})

const Test = mongoose.model('Test', testSchema);
module.exports = Test