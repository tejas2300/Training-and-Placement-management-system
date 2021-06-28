const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


const marksSchema=mongoose.Schema({
    id:{type: String },
    status:{type: String  },
  
})
const companySchema = new Schema({
    name:{type: String, required :true },
    email:{type: String, required :true },
    date:{type: String, required :true },
    packege:{type: String, required :true },
    basedOn:{type: String, required :true },
    detail:{type: String, required :true },
    apply:[marksSchema],
})


const Companies = mongoose.model("Companies",companySchema);
module.exports= Companies;