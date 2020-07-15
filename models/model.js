const mongoose = require('mongoose');
const {Schema} = mongoose;

const dataSchema = new Schema(
    {id:String,city:String,start_date:String,end_date:String,price:String,status:String,color:String,}
)

mongoose.model('collection1', dataSchema);