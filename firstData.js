const Fuse = require('fuse.js')
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
const options = {
    includeScore: true,
    keys: ['author', 'title', 'tags']
}
const fuse = new Fuse(list, options)
const result = fuse.search('power')
let list1 = []
let list2 = []
let list3 = []
for (i of result) {
    if (i.item["author"].includes('power')) {
        list1.push(i.item)
    }
    if (i.item["title"].includes('power')) {
        list2.push(i.item)
    }
    else {
        list3.push(i.item)
    }
}

console.log("author", list1)
console.log("title", list2)
console.log('tags', list3);
