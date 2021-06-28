const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const resourceScheama = new Schema({
    topic:{type: String, required :true },
    links:{type: String, required :true },
    date:{type: String, required :true },
    department:{type: String, required :true },
    year:{type: String, required :true },
  
    
})
const Resource = mongoose.model("Resource",resourceScheama);
module.exports= Resource;