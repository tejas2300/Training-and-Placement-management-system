const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const scheduleSchema = new Schema({
    event:{type: String, required :true },
    time:{type: String, required :true },
    date:{type: String, required :true },
    department:{type: String, required :true },
    venue:{type: String, required :true },
    detail:{type: String, required :true },
    
})
const Schedule = mongoose.model("schedule",scheduleSchema);
module.exports= Schedule;