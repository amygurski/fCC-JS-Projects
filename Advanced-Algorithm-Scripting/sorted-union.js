//Sorted Union
//Takes 2 or more arrays and returns new array of unique values in order of original provided arrays.
//Eg. uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

function uniteUnique(...arr) {
        return [...new Set([].concat(...arr))];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//This feels like cheating but it works for the sample cases and is simple to understand
//[].concat(...arr) to spread array and flatten then Set object returns only unique values from that combined, flattened array.