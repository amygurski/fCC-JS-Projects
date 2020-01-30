function convertToRoman(num) {
//Function to convert a given number into a roman numberal.

    //List in decending value because going to first check 1000, etc.
    var romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    //Added where it subtracts instead (4,9,40,90,400,900) because it breaks the pattern, eg. I, II, III then IV (is 5-1 instead of I+I+I+I).
    var romanResult = ""; 

//Loop over the every element of the array
for (var i=0; i<=decimal.length; i++) {
    //while loop to keep trying the num until it doesn't fit before it goes onto the next array position. 
    while (decimal[i] <= num) { 
        romanResult += romanNumeral[i]; //add the roman numeral to the result
        num -= decimal[i]; //subtract the decimal value from the number
    }
}

 return romanResult;
}

convertToRoman(36);