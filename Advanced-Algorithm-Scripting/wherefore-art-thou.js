//Wherefore art thou
//Function looks through an array of objects (collection) and returns an array of all objects that have matching name and value pairs (source).
//Each name and value pair of source has to be present in the object from the collection to be returned. 

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var arr = collection.filter(function(obj) {
    for (let i in source) {
      if (source[i] != obj[i]) {
        return false;
      } 
    }
     return true;
  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
