//PIG LATIN
//Moves first consonant (or consonant cluster) to end of word
//Suffixes an ay
//If word begine with vowel, add way to end
//Input strings guaranteed to be English and all lowercase

function translatePigLatin(str) {
  //If starts with vowel, just add way to end
  if (str.match(/^[aeiou]/)) { 
    return str.concat("way");
  }

  //Move all constonants before 1st vowel to end
  //Use replace to swap "not a vowel at start" set and the set following which is any word character
  return str.replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");
