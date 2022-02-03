
// const Fuse = require('fuse.js')
// const fruits = ['apple', 'orange']
// const fuse = new Fuse(fruits)

// const data=fuse.search(['orange'])
// console.log(data)
///////////////
// var FuzzySearch = require('fuzzy-search');
 
// const people = [{
//   name: {
//     firstName: 'Jesse',
//     lastName: 'Bowen',
//   },
//   state: 'Seattle',
// }];
 
// const searcher = new FuzzySearch(people, ['name.firstName', 'name.lastName'], {
//   caseSensitive: true,
// });
// const result = searcher.search('Bowen');
// console.log(result)



///////////////////////

// query = 'jenny Jackson'
// names = ['John Jackson', 'Jack Johnson', 'Jerry Smith', 'Jenny Smith']

// results = []
// for (name in names){
//     var relevance = string_similarity(query, name)
//     obj = {name: name, relevance: relevance}
//     results.push(obj)
// }
// results = _.first(_.sortBy(results, 'relevance').reverse(), 10)

// console.log (results)
//////////////////////////


// function escapeRegex(text) {
//   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
// };
// const findUser = async (req) => {
    // var noMatch = null;
    // if(req.query.query) {
        // const regex = new RegExp(escapeRegex(req.query.query), 'gi');
        // console.log(req.query.query)
        // console.log(regex);
        //  const user = await User.find( { $or: [ { "key4.key5":regex}, { "key6": regex },{ "key2": regex },{ "key3": regex },{"key1":regex} ] });
        // const user=await User.find({'key1': {$regex:regex }})
        // const user=await User.find({key1:regex})
        // console.log(user)


        /////////////////

        //     const index = letters.findIndex((element, index) => {
    //         if (element.letter === 'b') {
    //           return true}
    ////////////////

    