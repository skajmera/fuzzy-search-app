var stringSimilarity = require("string-similarity");

var similarity = stringSimilarity.compareTwoStrings("healed", "sealed");

var matches = stringSimilarity.findBestMatch("healed", [
  "healed",
  "sealed",
  "theatre",
]);

if(similarity> 0.4){
    console.log('true')
}else{
    console.log(false)
}
/////////////////////////////////////////////