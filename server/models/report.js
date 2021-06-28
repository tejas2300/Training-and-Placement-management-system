const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const reportSchema = new Schema({
    faculty:{type: String, required :true },
    subject:{type: String, required :true },
    event1:{type: String, required :true },
    report1:{type: String, required :true },
    date:{type: String, required :true }
   
})


const Report = mongoose.model("Reports",reportSchema);
module.exports= Report;