const htmlEntity = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};

function convertHTML(str) {
   return str.replace(/([&<>\"'])/g, match => htmlEntity[match]);
}

convertHTML("Dolce & Gabbana");

//My solution explanation:
//Set up htmlEntity object to define each character and it's corresponding html entity
//Use replace - the regex finds the characters and the function replaces the match with it's html entity from the object