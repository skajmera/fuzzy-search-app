// const Fuse = require('fuse.js')
// const express = require("express");
// const router = express.Router();
// var stringSimilarity = require("string-similarity");
// const res = require('express/lib/response');
// router.get('/ejs',(req,res)=>{
//     res.render('index');
//   })
// router.get("/query",async (request, response) => {
// const list = [
//     {
//         "title": "Old Man's War",
//         "author": "power Jh Scalz",
//         "tags": ["fic"]
//     },
//     {
//         "title": "power The Lock Artist",
//         "author": "Steve",
//         "tags": ["thriller"]
//     },
//     {
//         "title": "The Lock Artist",
//         "author": "Steve",
//         "tags": ["power"]
//     }, {
//         "title": "this is values",
//         "author": "contry ",
//         "tags": ["something else"]
//     }, {
//         "title": "this is laptop",
//         "author": "america",
//         "tags": ["india"]
//     }, {
//         "title": "this is wrong",
//         "author": "something",
//         "tags": ["fic"]
//     },
// ]
// const options = {
//     includeScore: true,
//     keys: ['author', 'title', 'tags']
// }
// const fuse = new Fuse(list, options)
// const result = fuse.search(request.query.query)
// let a=0
// let list11=[]
// for(i of result){
// var matches = stringSimilarity.findBestMatch(request.query.query,[
//     result[a].item.title,result[a].item.author,result[a].item.tags[0]]
// );a++
// if(matches.ratings[0].rating> 0.47){
//     list11.push(matches.bestMatch)
// }else{
//     console.log(false)
//  return response.json("data not found");
// }
// }
// console.log(list11)
// return res.json(list11)
//   });
//   module.exports = router;

/////////////////////////////////////////////
// const res = require('express/lib/response');
const express = require("express");
const router = express.Router();
var stringSimilarity = require("string-similarity");
router.get('/ejs',(req,res)=>{
    res.render('index');
  })
router.get("/query",async (request, response) => {
const list = [
    {
        "title": "Old Man's War",
        "author": "power Jh Scalz",
        "tags": ["fic"]
    },
    {
        "title": "power power ",
        "author": "Steve",
        "tags": ["thriller"]
    },
    {
        "title": "The Lock Artist",
        "author": "Steve",
        "tags": ["power"]
    }, {
        "title": "this is values",
        "author": "contry ",
        "tags": ["something else"]
    }, {
        "title": "this is laptop",
        "author": "america",
        "tags": ["india"]
    }, {
        "title": "this is wrong",
        "author": "something",
        "tags": ["fic"]
    },
]

var list11=[]
for(i of list){
var matches = stringSimilarity.findBestMatch(request.query.query,[i.title,i.author,i.tags[0]]);
let reformattedArray = matches.ratings.map(obj => {
if(obj.rating> 0.38){
    // list11.push(matches.bestMatch)
    list11.push(i)
}
 })

}
console.log(list11)
return response.json(list11)
  });
  module.exports = router;
