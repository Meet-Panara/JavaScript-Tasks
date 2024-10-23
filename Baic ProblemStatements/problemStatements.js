

//------->(1) Array Sum
// Example: Given [1, 2, 3, 4, 5], the function should return 15.

// function sumReduce(numArray){
//     return numArray.reduce((sum, currentValue) => {
//         return(sum += currentValue);
//     })
// }

// function sumFor(numArray){
//     let sum = 0;
//     for(let i = 0; i < numArray.length; i++ ){
//         sum += numArray[i];
//     }
//     return sum;
// }

// function sumMap(numArray){   //same with forEach
//     let sum = 0;
//     numArray.map((elem) => {
//         sum += elem;
//     });
//     return sum;
// }


// console.log(sumReduce([1, 2, 3, 4, 5]));
// console.log(sumFor([1, 2, 3, 4, 5]));
// console.log(sumMap([1, 2, 3, 4, 5]));




// ------->(2) string Reverse
// Example: Given 'hello', the function should return 'olleh'.

// function reverseString(str){
//     let reverseStr = str.split("").reverse().join("");

//     return reverseStr;    
// }


// function reverseString(str) {
//     let newReversedStr = "";
//     for(let i = str.length-1; i >= 0; i--){
//         newReversedStr = newReversedStr + str[i];
//     }
//     return newReversedStr;
// }

// console.log(reverseString('hello'));


// ------->(3) Odd or Even
// Example: Given 7, the function should return 'odd'.

// function oddEven(num){
//     return (num % 2 === 0) ? `${num} is even number` : `${num} is odd number`;
// }

// console.log(oddEven(7));


// ------>(4) Find Maximum
// Example: Given [3, 6, 2, 8, 4], the function should return 8.

// function maxNum(numArray) {
//     return numArray.reduce((acc, elem) => {
//         return(Math.max(acc, elem));
//     })
// }

// function maxNum(numArray){ //same for map()
//     let maximumNum = 0;
//     numArray.forEach((elem) => {
//         maximumNum = Math.max(maximumNum, elem);
//     });
//     return maximumNum;
// }

// console.log(maxNum([3, 6, 2, 8, 4]));


// ---------(5) Vowel Count
// Example: Given 'apple', the function should return 2

// function vowelCount(str){
//     let count = 0;
//     let vowelArr = ['a', 'e', 'i', 'o', 'u'];

//     str.split("").reduce((acc, currStr) => {
//         // console.log(acc, currStr);
//         return vowelArr.includes(currStr) ? count += 1 : count;        
//     }, 0);

//     return count;
// }


// function vowelCount(str){
//     let count = 0;
//     let vowelArr = ['a', 'e', 'i', 'o', 'u'];

//     for(let i=0; i<str.length; i++){
//         vowelArr.includes(str[i]) ? count += 1 : count;
//     }

//     return count;
// }

// console.log(vowelCount('aappleee'));


// ---------(6) Check for Substring
// Example: Given the string 'hello world' and the substring 'world', the function should return True.

// function checkSubStr(str ,substring){
//     // can even use indexOf lastIndexOf
//     return str.search(substring) !== -1 ? "True" : "False";
// }

// function checkSubStr(str, substring){
//     return str.includes(substring) ? "True" : "False";
// }

// console.log(checkSubStr('hello world', 'wokmmrld'));


// ---------(7) Array Length Check
// Example: Given [1, 2, 3, 4, 5], the function should return True.

// function checkLength(arr){
//     return arr.length ? "True" : "False";
// }

// console.log(checkLength([]))
// console.log(checkLength([1, 2, 3, 4, 5]))


// ---------->(8) Capitalize First Letter
// Example: Given 'hello world', the function should return 'Hello World'

// function strCapitalize(str) {
//     return str.split(" ").map((elem) => {  //forEach can also be used
//         // return (elem[0].toUpperCase() + elem.slice(1));
//         return elem.replace(elem[0], elem[0].toUpperCase());
//     }).join(" ");
// }

// console.log(strCapitalize('hello world'));



// ----------->(9) Filter Even Numbers
// Example: Given [1, 2, 3, 4, 5], the function should return [2, 4]

// function evenNumbers(numArr) {
//     let evenArr = [];

//     numArr.map((elem) => {
//         elem % 2 === 0 ? evenArr.push(elem) : evenArr;
//     })
//     return evenArr;
// }


// function evenNumbers(numArr) {
//     let evenArr = []; 
//     for(let i = 0; i< numArr.length; i++) {
//         numArr[i] % 2 === 0 ? evenArr.push(numArr[i]) : evenArr;
//     }

//     return evenArr;
// }


// function evenNumbers(numArr) {
//     let evenArr = [];

//     return numArr.reduce((acc, curr) => {
//         curr % 2 === 0 ? evenArr.push(curr) : evenArr; 
//         return evenArr;
//     }, []);
// }

// console.log(evenNumbers([1, 2, 3, 4, 5]));




// -------> (10) Palindrome Check
// Example: Given 'madam', the function should return True.

// function palindrom(str) {
//     let reverseStr = str.split("").reverse().join("");

//     return reverseStr === str ? "True" : "False";
// }


// function palindrom(str) {
//     let reverseStr = "";
//     for(let i = str.length-1; i >= 0; i--){
//         reverseStr = reverseStr + str[i];
//     }

//     return str === reverseStr ? "True" : "False";
// }

// console.log(palindrom("madam"));



// ----------> (11) Remove Duplicates from Array
// Example: Given [1, 2, 2, 3, 4, 4], the function should return [1, 2, 3, 4].

// function uniqueArr(numArr) {
//     let newArray = [];

//     numArr.map((elem) => {
//         newArray.includes(elem) ? newArray : newArray.push(elem) ;
//         console.log(newArray)
//     })
//     return newArray;
// }

// console.log(uniqueArr([1, 2, 2, 3, 4, 4]));


// ---------> (12) Find Prime Numbers
// Example: The function should return all prime numbers between 1 and 100.

// function prime(){
//     let count=0;
//     let primeNums = [];

//     for(let i=2; i<=100; i++){  
//         for(let j=1; j<=i; j++){
//             if(i%j == 0)
//             count++; //requires count = 2 for making it prime.
//         }

//         // checking if count is 2 then pushing num to arr.
//         if(count==2){
//             primeNums.push(i);
//         }

//         // making count 0 for next iteration
//         count=0;    
//     }
//     return primeNums;
// }

// console.log(prime());



// ------->(13) Find Longest Word
// Example: Given 'The quick brown fox', the function should return 'quick'

// function longestString(str) {
//     let maxCount = 0;
//     let longestStr = "";

//     str.split(' ').map((elem) => {
//         if(elem.length > maxCount) {
//             maxCount = elem.length;
//             longestStr = elem;
//         }
//     });
//     return longestStr;
// }

// console.log(longestString("The brown quickjj fox"));



// ------->(14) Count Occurrences
// Example: Given [1, 2, 2, 3], the function should return 2 for the element '2'

function countOccurrence(numArray, countElem) {
    let count = 0;

    numArray.map((elem) => {
        countElem === elem ? count += 1 : count;
    })
    return count;
}

// console.log(countOccurrence([1, 2, 2, 3], 2));



// --------->(15) String to Array
// Example: Given 'a,b,c', the function should return ['a', 'b', 'c']

// function strToArr(str) {
//     return str.split(",");
// }

// console.log(strToArr('a,b,c'));


// --------->(16) Check if Array is Sorted
// Example: Given [1, 2, 3, 4], the function should return True.

// function sortedOrNot(arr) {
//     return arr === arr.sort((a, b) => a - b ) ? "True" : "False";
// }

// function sortedOrNot(numArr){
//     for(let i = 0; i < numArr.length; i++){
//         if(numArr[i] > numArr[i+1]) {
//             return "False";
//         }
//     }
//     return "True";
// }

// console.log(sortedOrNot([1, 2, 3, 4]));



// -------->(17) Flatten Array
// Example: Given [[1, 2], [3, 4]], the function should return [1, 2, 3, 4]

// function FlattenArray(arr) {
//     return arr.reduce((acc, elem) => {
//         return acc.concat(elem);
//     })
// }

// function FlattenArray(arr){
//     return arr.flat(Infinity);
// }

// console.log(FlattenArray([[1, 2], 7, 8, [3, 4]]));



// ---------------------------------------------->(18) String Character Frequency
// Example: Given 'hello', the function should return {'h': 1, 'e': 1, 'l': 2, 'o': 1}.

function charFrequency(str) {
    let frequencyObj = {};
    str.split("").map((elem) => frequencyObj[elem] = countOccurrence(str.split(""), elem));
    return frequencyObj;
}

// console.log(charFrequency('hello'));



// --------->(19) Merge Two Arrays
// Example: Given [1, 2] and [3, 4], the function should return [1, 2, 3, 4].

// function concatArray(arr1, arr2){
//     let newArray = arr1.concat(arr2);
//     return newArray;
// }

// console.log(concatArray([1, 2], [3, 4]));


// ---------->(20) FizzBuzz
// Example: The function should print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both.

// function fizzBuzz(num){
//     if(num % 15 === 0) return "Fizz Buzz"; 
//     else if(num % 3 === 0) return "Fizz"; 
//     else if(num % 5 === 0) return "Buzz"; 
//     return num.toString();
// }

// console.log(fizzBuzz(30));



// ---------->(21) Array of Squares
// Example: Given [1, 2, 3], the function should return [1, 4, 9].

// function sqaresArray(arr) {
//     return arr.map((elem) => Math.pow(elem, 2))
// }

// function sqaresArray(arr) {
//     return arr.map((elem) => {
//         return elem ** 2;
//     })
// }

// function sqaresArray(arr) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i] ** 2);
//     }
//     return newArr;
// }

// console.log(sqaresArray([1, 2, 3]));



// --------->(22) Remove Falsy Values
// Example: Given [0, 1, false, 2, '', 3], the function should return [1, 2, 3].

// function removeFalsy(arr) {

//     return arr.filter((elem) => {
//         if(elem) {
//             return elem;
//         }
//     })

// }

// console.log(removeFalsy([0, 1, false, 2, ' ', 3]));




// ------------------------>(23) Find Missing Number
// Example: Given [1, 2, 4, 5], the function should return 3.

// function missing(numArr) {
//     for(let i = 0; i <= numArr.length; i++){
//         let nextNum = numArr[i]+1;
        
//         let missingValues = [];
//         if(numArr[i+1] === nextNum){
//             continue;
//         }else{
//             missingValues.push(nextNum);
//         }
//         return missingValues;
//     }
// }


// function missing(numArr) {
//     numArr.sort((a, b) => a-b);

//     let start = numArr[0];
//     let end = numArr[numArr.length - 1];
//     let newComplitArr = [];
//     let result = [];

//     for(let i=start; i<end; i++){
//         newComplitArr.push(i);
//     }

//     newComplitArr.filter((elem) => {
//         numArr.includes(elem) ? result : result.push(elem);
//     });

//     return result;
// }


// console.log(missing([4, 5, 7]));



// -------->(24) Anagram Check
// Example: Given 'listen' and 'silent', the function should return True.

// function anagram(str1, str2) {
//     let anagramStr1 = str1.split("").reduce((acc, elem) => {
//         return ((str2.includes(elem) ? true : false) && acc);
//     },true)

//     let anagramStr2 = str2.split("").reduce((acc, elem) => {
//         return ((str1.includes(elem) ? true : false) && acc);
//     }, true)

//     return(anagramStr1 && anagramStr2);
// }

// console.log(anagram('listen', 'silent'))



// ---------------------------?(25) Array Chunking
// Example: Given [1, 2, 3, 4, 5] with size 2, the function should return [[1, 2], [3, 4], [5]].


// function chunking(numArr, size) {
//     if(!numArr.length)
//         return "Array is Emply";

//     let arr = [];
    
//     for(let i=0; i < numArr.length; i+=size){ // i+=size will jump 2 elems //0 //2 //4
//         let row = [];
//         for(let j=i; j < i+size && j <numArr.length; j++){ //0<2 && 0<5 // i+size -> 2 elems in []
//             row.push(numArr[j]); //[1], [1,2] //
//         }
//         arr.push(row); //[[1, 2]] //[[1, 2], [3, 4]]
//     }

//     return arr;
// }

// console.log(chunking([1, 2, 3, 4, 5], 2));



// -------->(26) Remove Specific Element
// Example: Given [1, 2, 2, 3] and 2, the function should return [1, 3].

// function removeElem(numArr, removeElem){
//     return numArr.filter((elem) => elem !== removeElem)
// }

// function removeElem(numArr, removeElem){
//     let arr = [];
//     for(let i=0; i<numArr.length; i++){
//         numArr[i] !== removeElem ? arr.push(numArr[i]) : arr;
//     }
//     return arr;
// }

// console.log(removeElem([1, 2, 2, 3], 2))


// --------------------------->(27) Longest Substring Without Repeating Characters
// Example: Given 'abcabcbb', the function should return 3.

// function longestSubStr(str){
//     let subStr = "";

//     str.split("").map((char) => {
//         subStr.includes(char)  ? subStr : (subStr += char);
//     })

//     return subStr.length;
// }


function longestSubStr(str) {
    let longestStr = 0;
    let left = 0;
    let right = 0;
    let longestStrArray = [];

    while(right < str.length){
        let char = str[right];

        if(!longestStrArray.includes(char)){
            longestStrArray.push(char);
            longestStr = Math.max(longestStr, longestStrArray.length);
            right++;
        }else{
            console.log(longestStrArray);
            longestStrArray.splice(left+1);
            left++;
        }
    }

    return longestStr;
}

console.log(longestSubStr("abcabcbb"));


// -------->(28) Count Words in String
// Example: Given 'hello world', the function should return 2.


// function countWord(str){
//     return str.split(" ").length;
// }

// console.log(countWord("hello world njmn"));


// --------(29) Array Intersection
// Example: Given [1, 2, 3] and [2, 3, 4], the function should return [2, 3].


// function arrInterSection(arr1, arr2){
//     return arr1.filter((elem) => arr2.includes(elem));
// }

// function arrInterSection(arr1, arr2){
//     let intersectionArr = [];

//     arr1.map((elem) => arr2.includes(elem) ? intersectionArr.push(elem) : intersectionArr);

//     return intersectionArr;
// }

// console.log(arrInterSection([1, 2, 3], [2, 3, 4]));


// --------->(30) Convert Array of Objects to Object
// Example: Given [{'key': 'value'}], the function should return {'key': 'value'}.

// function arrToObj(arr){
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// function arrToObj(arr){
//     arr.map((elem) => console.log(elem));
// }

// console.log(arrToObj([{'key': 'value'}]));
// arrToObj([{'key': 'value'}]);



// --------->(31) Map Method
// Example: Given [1, 2, 3], the function should return [2, 4, 6].

// function arrMapMethod(arr) {
//     return arr.map((elem) => elem * 2)
// }

// console.log(arrMapMethod([1, 2, 3]));


// -------->(32) Filter Method
// Example: Given [5, 12, 8, 130], the function should return [12, 130].


// function arrFilterMethod(arr) {
//     return arr.filter((elem) => elem > 10);
// }

// console.log(arrFilterMethod([5, 12, 8, 130]));


// -------->(33) Reduce Method
// Example: Given [1, 2, 3, 4], the function should return 10.

// function arrReduceMethod(arr) {
//     return arr.reduce((acc, elem) => acc + elem ,0 )
// }

// console.log(arrReduceMethod([1, 2, 3, 4]));


// -------->(34) Sort Method
// Example: Given ['banana', 'apple', 'cherry'], the function should return ['apple', 'banana', 'cherry']

// function sortStringMethod(strArray){
//     return strArray.sort();
// }

// console.log(sortStringMethod(['banana', 'apple', 'cherry']));


// --------->(35) Find Method
// Example: Given [10, 20, 150], the function should return 150.

// function findMethod(arr) {
//     return arr.find((elem) => elem > 100);
// }

// console.log(findMethod([10, 20, 250, 150]));


// -------->(36) ForEach Method
// Example: Given [1, 2, 3], the function should log 1, 2, and 3.


// function forEachMethod(arr) {
//     return arr.forEach((elem) => {
//         console.log(elem);
//     })
// }

// forEachMethod([1, 2, 3]);


// -------->(37) Every Method //returns true if every element satisfies condition
// Example: Given [1, 2, 3], the function should return True.

// function everyMethod(arr) {
//     return (arr.every((elem) => elem > 0));
// }

// console.log(everyMethod([1, 2, 3]));


// ------->(38) Some Method  //returns true if any element satisfies condition
// Example: Given [10, 20, 51], the function should return True.

// function someMethod(arr) {
//     return arr.some((elem) => elem < 10);
// }

// console.log(someMethod([10, 20, 51]));


// ---------->(39) Concat Method
// Example: Given [1, 2] and [3, 4], the function should return [1, 2, 3, 4].

// function concateArray(...arr){
//     let newArr = [];
//     arr.map((elem) => {
//         newArr = newArr.concat(elem);
//     });
//     return newArr;
// }

// console.log(concateArray([1, 2], [3, 4], [3, 4]));


// -------->(40) Includes Method
// Example: Given [1, 2, 3] and 2, the function should return True.

// function includesMethod(arr, includesValue) {
//     return arr.includes(includesValue) ? "True" : "False" ;
// }

// console.log(includesMethod([1, 2, 3], 2));


// --------->(41) String Split
// Example: Given 'hello world', the function should return ['hello', 'world'].

// function splitMethod(str) {
//     return str.split(" ");
// }

// console.log(splitMethod("hello World"));


// ------->(42) String Replace
// Example: Given 'apple', the function should return 'bpple'.

// function replaceMethod(str, replacableStr, updatedStr) {
//     return str.replace(replacableStr, updatedStr);
// }

// console.log(replaceMethod('apple', 'a', 'b'));


// -------->(43) String Trim
// Example: Given ' hello ', the function should return 'hello'.

// function trimMethod(str) {
//     return str.trim();
// }

// console.log(trimMethod('   hello  '));


// -------->(44) String UpperCase
// Example: Given 'hello', the function should return 'HELLO'.

// function upperCaseMethod(str) {
//     return str.toUpperCase();
// }

// console.log(upperCaseMethod('hello'));


// -------->(45) String LowerCase
// Example: Given 'HELLO', the function should return 'hello'.


// function lowerCaseMethod(str) {
//     return str.toLowerCase();
// }

// console.log(lowerCaseMethod('HELLO'));


// -------->(46) String Repeat
// Example: Given 'hi' and 3, the function should return 'hihihi'.


// function strRepeat(str, count){
//     return str.repeat(count);
// }

// function strRepeat(str, count) {
//     let newStr = "";
//     for(let i = 0; i < count; i++) {
//         newStr += str;
//     }
//     return newStr;
// }

// console.log(strRepeat('hi', 3));


// -------->(47) String Slice
// Example: Given 'hello world', the function should return 'hello'.

// function strSlice(str){
//     return str.slice(0 , str.indexOf(" "));
// }

// console.log(strSlice('hello world!'));


// --------->(48) String StartsWith
// Example: Given 'hello' and 'he', the function should return True.

// function startsWithMethod(str, startsStr) {
//     return str.startsWith(startsStr) ? "True" : "False";
// }

// console.log(startsWithMethod('hello', 'he'));


// ------->(49) String EndsWith
// Example: Given 'hello' and 'lo', the function should return True.

// function endsWithMethod(str, endsWithStr) {
//     return str.endsWith(endsWithStr) ? "True" : "False";
// }

// console.log(endsWithMethod('hello', 'lo'));


// -------->(50) String Substring
// Example: Given 'hello world', the function should return 'ello' for indices 1 and 5.

// function subStrMethod(str, start, end){
//     return str.substr(start, end);
// }

// console.log(subStrMethod('hello world', 1, 5));