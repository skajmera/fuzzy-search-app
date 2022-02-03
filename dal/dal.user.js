
const User = require("../models/model.user");
const Fuse = require('fuse.js')
const findUser = async (req) => {
        // const user=await User.find({})
        const list = [
          {
              "title": "Old Man's War",
              "author": "power Jh Scalz",
              "tags": ["fic"]
          },
          {
              "title": "power The Lock Artist",
              "author": "Steve",
              "tags": ["thriller"]
          },
          {
              "title": "The Lock Artist",
              "author": "Steve",
              "tags": ["power"]
          }
      ]

    //     const fuse = new Fuse(user, {
    //       keys: ['key3','key1','key2','key6','key4.key5']})
    //   const result = await fuse.search(req.query.query)
    //   console.log(result)
    //   return result
    // }
/////////////
const user = {
  includeScore: true,
  keys: ['author', 'title', 'tags']
}
const fuse = new Fuse(list, user)
const result = fuse.search(req.query.query)
let list1 = []
let list2 = []
let list3 = []
for (i of result) {
  if (i.item["author"].includes(req.query.query)) {
      list1.push(i.item)
  }
  if (i.item["title"].includes(req.query.query)) {
      list2.push(i.item)
  }
  else {
      list3.push(i.item)
  }
}
return ({"autor":list1,"title":list2,"tags":list3})
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
