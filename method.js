const Fuse = require('fuse.js')


// // setCollection:-
// const fruits = ['apple', 'orange']
// const fuse = new Fuse(fruits)

// fuse.setCollection(['banana', 'pear'])

/////////////////////////////////

// #add
// Adds a doc to the collection. Example:

// const fruits = ['apple', 'orange']
// const fuse = new Fuse(fruits)

// fuse.add('banana')

// console.log(fruits.length)
// // => 3

///////////////////////

// remove
// Removes all documents from the list which the predicate returns truthy for, and returns an array of the removed docs. The predicate is invoked with two arguments: (doc, index). Example:

// const fruits = ['apple', 'orange', 'banana', 'pear']
// const fuse = new Fuse(fruits)

// const results = fuse.remove((doc) => {
//   return doc === 'banana' || doc === 'pear'
// })

// console.log(fruits.length)
// // => 2

// console.log(results)
// // => ['banana', 'pear']

////////////////////////////////////////////

// removeAt
// Removes the doc at the specified index. Example:

// const fruits = ['apple', 'orange', 'banana', 'pear']
// const fuse = new Fuse(fruits)

// fuse.removeAt(1)

// console.log(fruits)
// // => ['apple', 'banana', 'pear']

//////////////////////////////////////

// getIndex
// Returns the generated Fuse index. Example:

// const fruits = ['apple', 'orange', 'banana', 'pear']
// const fuse = new Fuse(fruits)

// console.log(fuse.getIndex().size())
// // => 4

/////////////////////////////////////

