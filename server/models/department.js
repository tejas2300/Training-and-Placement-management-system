const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const stdSchema = mongoose.Schema({
    id: { type: String},
    stud:{type:String},
    year:{type:String},
    c_id:{type:String},
 
    
})

const deptSchema = new mongoose.Schema(
    {
        dept_name: {
            type: String,
            trim: true,
            required: true,
            max: 20,
        },
        students: [stdSchema],
    }
  
);



const Department = mongoose.model("Department", deptSchema);
module.exports = Department;