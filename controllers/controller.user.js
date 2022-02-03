const usersDataAccess = require("../dal/dal.user");
require("dotenv").config();
const ExpressError = require("../utils/errorGenerator");

exports.getUser = async (req) => {
  const users = await usersDataAccess.findUser(req);
  return {
    error: false,
    sucess: true,
    message: "Get user",
    data: users,
  };
};

exports.createUser = async (req) => {
  const data = [
     { key1: "subhash",
    key2: "This is worng",
   key3: "Where are you",
   key4:{
       key5:"goutam"
    },
   key6: "Something else wrong"}
];

  const storedUser = await usersDataAccess.storeUser(data);
  return {
    error: false,
    sucess: true,
    message: "user created successfully",
    data: storedUser,
  };
};



exports.getAllusers = async (req, res) => {
    const users = await usersDataAccess.findAll();
    return {
      error: false,
      sucess: true,
      message: "Get all users Sucessfully",
      data: users,
    };
  };
  