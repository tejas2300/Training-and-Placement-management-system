const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


const trainingSchema = new Schema({
    companyname:{type: String, required :true },
    reg_date:{type: String , required :true },
    mode:{type: String, required :true },
    duration:{type: String, required :true },
    prerequisite:{type: String, required :true },
    
})


const Training  = mongoose.model("Training",trainingSchema);
module.exports= Training;