//DNA PAIRING
//Base pairs are a pair of AT and CG. Match missing element to provided character
//Eg. for input GCG return [["G", "C"], ["C","G"],["G", "C"]]

//object to store DNA pairs
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

//split into array and map character to [character, character pair]
function pairElement(str) {
  return str.split("").map(p => [p, pairs[p]]);
}

pairElement("GCG");
