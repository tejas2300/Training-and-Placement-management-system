const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const satScheama = new Schema({
    year:{type: String, required :true },
    totalaplied:{type: String, required :true },
    selected:{type: String, required :true },
    totalcomanies:{type: String, required :true },
    department:{type: String, required :true },
})
const Statistics  = mongoose.model("statistics",satScheama);
module.exports= Statistics;
