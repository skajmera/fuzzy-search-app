const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  key1: {
      type:String
    },
  key2:{
      type:String
    },
  key3:{
      type:String
    },
  key4:{
      key5:{
      type:String
    }},
  key6 :{
      type:String
    }
});

const User = mongoose.model("fuzzyData", UserSchema);
module.exports = User;
