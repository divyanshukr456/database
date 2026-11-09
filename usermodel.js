const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/starwar');

const userSchema =mongoose.Schema({
    name:String,
    username:String,
    email:String,

})
const usermodel =mongoose.model("user",userSchema);


module.exports =usermodel;
