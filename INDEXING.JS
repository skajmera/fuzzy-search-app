// Indexing
// #Fuse.createIndex
// Pre-generate the index from the list, and pass it directly into the Fuse instance. If the list is (considerably) large, it speeds up instantiation.

// Example

const Fuse = require('fuse.js')
const books=[
    {
      "title": "Old Man's War",
      "author": {
        "firstName": "John",
        "lastName": "Scalzi"
      }
    },
    {
      "title": "The Lock Artist",
      "author": {
        "firstName": "Steve",
        "lastName": "Hamilton"
      }
    }
  ]

const options = { keys: ['title', 'author.firstName'] }

// Create the Fuse index
const myIndex = Fuse.createIndex(options.keys, books)
// initialize Fuse with the index
const fuse = new Fuse(books, options, myIndex)
const fs=require('fs')

// Fuse.parseIndex
// Parses a serialized Fuse index.

// Example

// (1) In the build step
// Create the Fuse index
const myIndexx = Fuse.createIndex(['title', 'author.firstName'], books)
// Serialize and save it
fs.writeFile('fuse-index.json', JSON.stringify(myIndexx.toJSON()))

// (2) When app starts
// Load and deserialize index
const fuseIndex = require('fuse-index.json')
const myIndexxx = Fuse.parseIndex(fuseIndex)
// initialize Fuse with the index
const fusee = new Fuse(books, options, myIndexxx)