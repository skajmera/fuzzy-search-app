
const User = require("../models/model.user");
const Fuse = require('fuse.js')
const findUser = async (req) => {
        const user=await User.find({})
        const fuse = new Fuse(user, {
          keys: ['key3','key1','key2','key6','key4.key5']})
      const result = fuse.search(req.query.query)
      console.log(result)
      return result
    }

const storeUser = async (userToStore) => {
  const storedUser = await User.create(userToStore);
  console.log(storedUser)
  return storedUser;    
};

const findAll = async () => {
  const user = await User.find({});
  return user;
};


module.exports = {
  findUser,
  storeUser,
  findAll,
};
