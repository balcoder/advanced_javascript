const img1 = document.getElementById("foo");
const img = new Image();
img.src = "./img/hotel-1.jpg";
img.setAttribute("width", "50%");
img.setAttribute("height", "50%");
img1.appendChild(img);

// Advanced_javascript code

//define our own forEach function
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

//sforEach([1,2,3,4], function(val){ console.log(val*2)});

/*
Write a function called doubleValues which accepts an array and returns a new array with all
the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}

//console.log(doubleValues([1,2,3,4]));

/*
Write a function called onlyEvenValues which accepts an array and returns a new
array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach((el) => {
    if (el % 2 == 0) {
      newArr.push(el);
    }
  });
  return newArr;
}

//console.log(onlyEvenValues([1,2,3,4]));

/*
Write a function called showFirstAndLast which accepts an array of strings and
returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach((el) => {
    let str = el[0] + el.slice(-1);
    newArr.push(str);
  });
  return newArr;
}

//console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key,
and a value and returns the array passed to the function with the new key and value
added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

function addKeyAndValue(arr, key, value) {
  //let newArr = [];
  arr.forEach((el) => {
    el[key] = value;
  });
  return arr;
}
//console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys
as the vowel and the values as the number of times the vowel appears in the string.
This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let lowerCase = str.toLowerCase().split("");
  let count = {};
  lowerCase.forEach((el) => {
    if (vowel.includes(el)) {
      if (el in count) {
        count[el] += 1;
      } else {
        count[el] = 1;
      }
    }
  });
  return count;
}

//console.log(vowelCount('I Am awesome and so are you'));

// My map function

function myMap(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

//console.log(myMap([1,2,3,4], function(el) { return el * 2}));

/*
Write a function called doubleValues which accepts an array and returns a new array
with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/
function doubleValues(arr) {
  return arr.map((el) => el * 2);
}

//console.log(doubleValues([1,2,3]));

/*
Write a function called valTimesIndex which accepts an array and returns a new array
with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  return arr.map(function (el, index) {
    return el * index;
  });
}

//console.log(valTimesIndex([1,-2,-3]));

/*
Write a function called extractKey which accepts an array of objects and some key and
returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')
    // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
  return arr.map((el) => {
    return el[key];
  });
}

//console.log( extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));

/*
Write a function called extractFullName which accepts an array of objects and returns a
new array with the value of the key with a name of "first" and the value of a key with
the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])
     // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
  return arr.map((el) => {
    return el["first"] + " " + el["last"];
  });
}

// console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"},
// {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));

// My filter function
function myFilter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new
array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner')
    // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
  return arr.filter((el) => {
    return el[key] !== undefined;
  });
}

// console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true},
// {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'));

/*
Write a function called find which accepts an array and a value and returns the first element in the
array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, value) {
  return arr.filter((el) => {
    return el === value;
  })[0];
}

// console.log(find([1,2,3,4,5], 3));
// console.log(find([1,2,3,4,5], 10));

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search
for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true)
    // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, value) {
  return arr.filter((el) => {
    return el[key] === true;
  })[0];
}

// console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true},
// {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true));

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels
(both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
  let lower = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  return lower
    .filter((el) => {
      return vowels.indexOf(el) == -1;
    })
    .join("");
}

//console.log(removeVowels('Elie'));

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with
all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter
the odd numbers.

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  return arr
    .filter((el) => {
      return el % 2 != 0;
    })
    .map((num) => {
      return num * 2;
    });
}

// console.log(doubleOddNumbers([1,2,3,4,5]));

// MySome function
function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

// My every function
function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

//  console.log(myEvery([2,4,5], (val) => val % 2 === 0));

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains
at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
  return arr.some((num) => {
    return num % 2 != 0;
  });
}

//console.log(hasOddNumber([2,2,2,2,2,2,4]));

/*
Write a function called hasAZero which accepts a number and returns true if that number contains
at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some((val) => {
      return val === "0";
    });
}

// console.log(hasAZero(3332123213101232321));
// console.log( hasAZero(1212121));

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single
number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
  return arr.every((num) => {
    return num % 2 !== 0;
  });
}

// console.log(hasOnlyOddNumbers([1,2,3,5,7]));
// console.log(hasOnlyOddNumbers([1,3,5,7]));

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate
values (more than one element in the array that has the same value as another). If there are any duplicates,
the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
  return arr.every(function (el, i, array) {
    return array.filter((val) => val === el).length !== 2;
  });
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if
every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/
function hasCertainKey(arr, key) {
  return arr.every((obj) => {
    return obj[key] !== undefined;
  });
}

// var arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
// ]

// console.log(hasCertainKey(arr,'isCatOwner'));

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value,
and returns true if every single object in the array contains that value for the specific key.
Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/
function hasCertainValue(arr, key, value) {
  return arr.every((ob) => {
    return ob[key] === value;
  });
}

// var arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
// ]

// console.log(hasCertainValue(arr,'title','Instructor'));
// console.log(hasCertainValue(arr,'first','Elie'));

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new
array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
function extractValue(arr, key) {
  return arr.reduce((acc, currValue) => {
    if (currValue[key]) {
      acc.push(currValue[key]);
    }
    return acc;
  }, []);
}

// var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {foo: 'Bar'}]
// console.log(extractValue(arr,'name')); // ['Elie', 'Tim', 'Matt', 'Colt']

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the
vowel and the values as the number of times the vowel appears in the string. This function should be
case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = str.toLowerCase().split("");
  return letters.reduce((acc, next) => {
    if (vowels.indexOf(next) > -1) {
      if (acc[next] !== undefined) {
        acc[next] += 1;
      } else {
        acc[next] = 1;
      }
    }
    return acc;
  }, {});
}

// console.log(vowelCount('I Am awesome and so are you'));

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array
of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
  // return arr.reduce((acc, next) => {
  //     console.log(next);
  //     let newKey = Object.keys(next)[0];
  //     let newName = Object.values(next)[0]
  //     debugger;
  //     acc.push({key:value, [newKey]:newName })
  //     return acc;
  // }, [])
  return arr.reduce((acc, next) => {
    next[key] = value;
    return acc;
  }, arr);
}

// var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

// console.log(addKeyAndValue(arr, 'title', 'Instructor'));

/*
Write a function called partition which accepts an array and a callback and returns an array with
two arrays inside of it. The partition function should run the callback function on each value in
the array and if the result of the callback function at that specific value is true, the value should
be placed in the first subarray. If the result of the callback function at that specific value is
false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
  return arr.reduce(
    (acc, next) => {
      if (callback(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []],
  );
}

function isEven(val) {
  return val % 2 === 0;
}

// var arr = [1,2,3,4,5,6,7,8];

// console.log(partition(arr, isEven)); // [[2,4,6,8], [1,3,5,7]];

// Using Clousers in functions

/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both
parameters, it should return the product of the two. If the function is only passed one parameter -
it should return a function which can later be passed another parameter to return the product. You
will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(num1, num2) {
  if (arguments.length > 1) {
    return num1 * num2;
  }
  return function (num) {
    return num1 * num;
  };
}

// console.log(specialMultiply(3,4));
// console.log(specialMultiply(3)(5));

/* 
Write a function called guessingGame which takes in one parameter amount. The
function should return another function that takes in a parameter called guess.
In the outer function, you should create a variable called answer which is the
result of a random number between 0 and 10 as well as a variable called guesses
which should be set to 0.

In the inner function, if the guess passed in is the same as the random number
(defined in the outer function) - you should return the string "You got it!".
If the guess is too high return "Your guess is too high!" and if it is too low,
return "Your guess is too low!". You should stop the user from guessing if the
amount of guesses they have made is greater than the initial amount passed to the
outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/
function guessingGame(numOfGuesses) {
  let guesses = 0;
  let rndNum = Math.floor(Math.random() * 10 + 1);
  return function game(guess) {
    if (guesses === numOfGuesses) {
      return "You're all done playing";
    }
    guesses++;
    if (guess < rndNum) {
      return "You're too low";
    } else if (guess > rndNum) {
      return "You're too high";
    } else {
      guesses = numOfGuesses;
      return "You got it. Well done!";
    }
  };
}

// The keyword "this" and call, apply and bind

// Given
// var divs = document.getElementsByTagName('div');
// How do we find the divs that have the text "Price"?
// Using filter would be nice but the divs object is not an array, it's an array
// like object made of dom nodes
// We will have to covert it into an array by using slice but with a differnece.

// var divsArray = [].slice.call(divs);

/*
Write a function called arrayFrom which converts an array-like-object into an
array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrLikeObj) {
  return [].slice.apply(arrLikeObj);
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments
passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/
// arguments is an arraylike object
function sumEvenArguments() {
  let newArr = [].slice.apply(arguments);
  return newArr.reduce((acc, next) => {
    if (next % 2 === 0) {
      return acc + next;
    }
    return acc;
  }, 0);
}

// console.log(sumEvenArguments(1,2,3,4));

/* 
Write a function called invokeMax which accepts a function and a maximum amount.
invokeMax should return a function that when called increments a counter. If the
counter is greater than the maximum amount, the inner function should return
"Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, counter) {
  let max = 0;
  return function () {
    if (max >= counter) return "Maxed out!";
    max++;
    return fn.apply(this, arguments);
  };
}

/* 
Write a function called once which accepts two parameters, a function and a value
for the keyword 'this'. Once should return a new function that can only be
invoked once, with the value of the keyword this in the function set to be the
second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
    
    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined  

*/

function once(fn, key) {
  let called = false;
  return function () {
    if (!called) {
      // check for called = true
      called = true;
      return fn.apply(key, arguments);
    }
  };
}

// ES2015

/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the
smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/

function smallestValue() {
  return Math.min(...arguments);
}

/* 
Write a function called placeInMiddle which accepts two parameters, an array and
another array. This function should return the first array with all of the values
in the second array placed in the middle of the first array.

Examples:
    placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
    placeInMiddle([1],[3,4,5]) // [3,4,5,1]
    placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
    placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

function placeInMiddle(arr1, arr2) {
  let middle = Math.floor(arr1.length / 2);
  arr1.splice(middle, 0, ...arr2);
  return arr1;
}

// console.log(placeInMiddle([1,2,6,7],[3,4,5])) // [1,2,3,4,5,6,7])

/* 
Write a function called joinArrays which accepts a variable number of parameters
(you can assume that each argument to this function will be an array) and returns
an array of all of the parameters concatenated together

Examples:

    joinArrays([1],[2],[3]) // [1,2,3]
    joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
    joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
    joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/

function joinArrays() {
  let arrs = [...arguments];
  return arrs.reduce((acc, next) => {
    acc.push(...next);
    return acc;
  }, []);
}

// console.log(joinArrays([1],[3],[0],[7]));

/* 
// Write a function called sumEvenArgs which takes all of the parameters passed
to a function and returns the sum of the even ones.

Examples:
    sumEvenArgs(1,2,3,4) // 6
    sumEvenArgs(1,2,6) // 8
    sumEvenArgs(1,2) // 2
*/

function sumEvenArgs() {
  return [...arguments]
    .filter((val) => val % 2 === 0)
    .reduce((acc, next) => acc + next);
}

// console.log(sumEvenArgs(1,2,3,4));

/* 
Write a function called flip which accepts a function and a value for the keyword
this. Flip should return a new function that when invoked, will invoke the
function passed to flip with the correct value of the keyword this and all of the
parameters passed to the function REVERSED. HINT - if you pass more than two
parameters to flip, those parameters should be included as parameters to the
inner function when it is invoked. You will have to make use of closure!

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/

function flip(fn, thisVal, ...outerArgs) {
  return function (...innerArgs) {
    let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
    return fn.apply(thisVal, allArgs.reverse());
  };
}
function personSubtract(a, b, c) {
  return this.firstName + " subtracts " + (a - b - c);
}

// var person = {
//     firstName: 'Elie'
// }

// var flipFn = flip(personSubtract, person);
// console.log(flipFn(3,2,1));

/* 
Write a function called bind which accepts a function and a value for the keyword
this. Bind should return a new function that when invoked, will invoke the
function passed to bind with the correct value of the keyword this. HINT - if you
pass more than two parameters to bind, those parameters should be included as
parameters to the inner function when it is invoked. You will have to make use of
closure!



Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/
function bind(fn, thisArg, ...outerArgs) {
  return function (...innerArgs) {
    return fn.apply(thisArg, [...outerArgs, ...innerArgs]);
  };
}

function firstNameFavoriteColor(favoriteColor) {
  return this.firstName + "'s favorite color is " + favoriteColor;
}

// var person = {
//     firstName: 'Elie'
// }

// var bindFn = bind(firstNameFavoriteColor, person);
// console.log(bindFn('green'));
// var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
// console.log(bindFn2('green'));

/////////////////////////////////////////////////////////////////////////////////
//New Keyword and Prototypes
/////////////////////////////////////////////////////////////////////////////////

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = () => console.log(`${name} just barked`);
}
// var rusty = new Dog("Rusty", 3);
// var fido = new Dog("Fido", 1);
// rusty.bark();
// fido.bark();

//make a motorcycle  costructor functon that inherits from the Car constructor

function Car2(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle2() {
  Car2.apply(this, arguments);
  this.numWheels = 2;
}
// var myBike = new Motorcycle2("Yamaha", "ZBR", 2007);
// console.log(myBike.numWheels);

// Given the following code - refactor the Child function to remove all the duplication from the Parent function.
//  You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
}

function Child() {
  Parent.apply(this, arguments);
}

// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor,
//  favoriteNumber)
// 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property
//of an object created by the Person
// constructor concatenated together.
// 3 -  Add a property on the object created from the Person function called family which is an empty array.
//  This will involve you going back and adding an additional line of code to your Person constructor you
//  previously created in exercise 1.
//  4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the
//  Person constructor to the family array. To make sure that the object you are adding is an object construced
//  from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array
//  does not include duplicates! This method should return the length of the family array.
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.family = [];
}
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
Person.prototype.addToFamily = function (member) {
  let personCheck = this.family.filter((p) => p === member);
  if (member instanceof Person && personCheck.length === 0) {
    this.family.push(member);
  }
  return this.family.length;
};

// var elie = new Person("Elie", "Schoppik", "purple", 34);
// var frank = new Person("Frank", "Schoppik", "blue", 12);
// elie.addToFamily(frank);
// console.log(elie.family.length);
// console.log("Add same family member again");
// elie.addToFamily(frank);
// console.log(elie.family.length);
// console.log("Add new family member");
// var anne = new Person("Anne", "Schoppik", "pink", 10);
// elie.addToFamily(anne);
// console.log(elie.family.length);

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback
// and return a new array with the result of the callback for each value in the array.

Array.prototype.map = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/
String.prototype.reverse = function () {
  var newStr = "";
  for (var i = this.length - 1; i >= 0; i--) {
    newStr += this[i];
  }
  return newStr;
};
/////////////////////////////////////////////////////////////////////////////////
//Destructoring
/////////////////////////////////////////////////////////////////////////////////

/* 
Write a function called displayStudentInfo which accepts an object and returns
the string "Your full name is" concatenated with the value of the first key and a
space and then the value of the last key. See if you can destructure this object
inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is
    Elie Schoppik'
*/

function displayStudentInfo(obj) {
  let { first, last } = obj;
  return `Your full name is ${first} ${last}`;
}

/* 
Write a function called printFullName which accepts an object and returns the
string "Your full name is" concatenated with the value of the first key and a
space and then the value of the last key. See if you can destructure this
object DIRECTLY from the parameters. The output of the printFullName function
should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie
    Schoppik'
*/

function printFullName({ first = "John", last = "Wick" } = {}) {
  return `Your full name is ${first} ${last}`;
}

// console.log(printFullName({first: 'Elie', last:'Schoppik'}));
// console.log(printFullName());

/* 
Write a function called createStudent which accepts as a parameter, a default
parameter which is a destructured object with the key of likesES2015 and value
of true, and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function
    should return the string 'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string
    'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the
    string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function
    should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student
    does not like much...')
*/

// you will have to pass in the correct parameters for this function!
function createStudent({ likesES2015 = true, likesJavaScript = true } = {}) {
  if (likesES2015 && likesJavaScript)
    return "The student likes JavaScript and ES2015!";
  else if (!likesES2015 && likesJavaScript)
    return "The student likes JavaScript!";
  else if (likesES2015 && !likesJavaScript) return "The student likes ES2015!";
  else return "The student does not like much...";
}

/* 
Write a function called reverseArray which accepts an array and returns the
array with all values reversed. See if you can do this without creating a new
array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

function reverseArray() {
  //return arr.reverse();
  // using destructoring
  for (var i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

///////////////////////////////////////////////////////////////////////////////
// ES2015 Classes
///////////////////////////////////////////////////////////////////////////////

// 1 - Create a class for a Person. Each person should have a firstName,
// lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one
parameter and returns the product of the parameter multiplied with the
favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

// class Person {
//     constructor (firstName,lastName, favoriteColor, favoriteNumber) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.favoriteColor = favoriteColor;
//         this.favoriteNumber = favoriteNumber;
//     }
//     multiplyFavoriteNumber(num) {
//         return this.favoriteNumber * num;
//     }
// }

// const elie = new Person("Elie", "Schoppik", "purple", 34)
// console.log(elie.multiplyFavoriteNumber(10));

// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model
//and year property.

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make
//, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    return "VROOM!";
  }

  toString() {
    return `The make, model, and year are ${this.make}, ${this.model} and ${this.year}`;
  }
}

// var vehicle = new Vehicle("Tractor", "John Deere", 1999)
// console.log(vehicle.toString())

// 4 - Create a class for a Car. Each object created from the Car function
// should also have a make, model, and year and a property called numWheels
// which should be 4. The Car prototype should inherit all of the methods from
// the Vehicle prototype

class Car extends Vehicle {
  constructor() {
    // super(make, model, year);
    super(...arguments);
    this.numWheels = 4;
  }
}

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle
// function should also have a make, model, and year and a property called
// numWheels which should be 2. The Motorcycle prototype should inherit all of the
// methods from the Vehicle prototype

class Motorcycle extends Vehicle {
  constructor() {
    super(...arguments);
    this.numWheesl = 2;
  }
}

/*
   In your constructor method, you should assign two properties for each object
   created from the MessageBoard class. The first should be a property called
   messages which is an empty Map, and the second is a property called id which
   has a value of 1.
   
   var m = new MessageBoard
   
   m.hasOwnProperty('messages') // true
   m.messages.constructor // function Map() { [native code] }
   m.hasOwnProperty('id') // true
   m.id // 1
*/
/*
   
   Add a method called addMessage which accepts a string. The function should
   add a key and value to the messages map with a key of whatever the value of
   this.id is and a value of whatever the string is that is passed to the
   function. The function should return the object created from the class so
   that the method can be chained. (HINT - to implement the last part, make
   sure to return this).
   
   var m = new MessageBoard
   m.addMessage('hello');
   m.messages.size // 1
   m.addMessage('awesome!') // m
   m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')
   */
/*
    Add a method called findMessageById which accepts a number and returns the
    message in the messages map with the same key as the number passed to the
    function. If the key is not found in the messages map, the function should
    return undefined.
    
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */
/*
    Add a method called findMessageByValue which accepts a string and returns
    the message in the messages map with the same value as the string passed to
    function. If the value is not found in the messages map, the function should
    return undefined.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */

/*
    Add a method called removeMessage which accepts a number and removes a
    message in the messages map with a key of the number passed to the function.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */

/*
    Add a method called numberOfMessages which returns the number of keys in the
    messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.numberOfMessages() // 3
    */
/*
    Add a method called messagesToArray which returns an array of all of the
    values in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
    */

class MessageBoard {
  constructor() {
    this.message = new Map();
    this.id = 1;
  }
  addMessage(newMessage) {
    this.message.set(this.id, newMessage);
    this.id++;
    return this;
  }
  findMessageById(id) {
    return this.message.get(id);
  }
  fintMessageByValue(val) {
    const iterator1 = this.message[Symbol.iterator]();
    for (let item of iterator1) {
      if (val === item[1]) {
        return item[1];
      }
    }
    return undefined;
  }
  removeMessage(num) {
    return this.message.delete(num);
  }
  numberOfMessages() {
    return this.message.size;
  }
  messagesToArray() {
    // return Array.from(this.message.values());
    const iterator2 = this.message.values();
    let arr = [];
    for (let item of iterator2) {
      arr.push(item);
    }
    return arr;
  }
}

// const m = new MessageBoard;
// m.addMessage('hello!');
// m.addMessage('hi!');
// m.addMessage('whats up?');

// console.log(m.fintMessageByValue('hello!'));
// console.log(m.messagesToArray());

/*
Write a function called uniqueValues which accepts an array and returns the
number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(arr) {
  let values = new Set(arr);
  return values.size;
}

// console.log(uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]));

/*

Write a function called hasDuplicates which accepts an array and returns true if
there are duplicate values in the array, otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(arr) {
  // return new Set(arr).size !== arr.length
  let uniqueLength = new Set(arr).size;
  if (uniqueLength === arr.length) {
    return false;
  }
  return true;
}

// console.log(hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]));
// console.log(hasDuplicates([1,2,3,4,5,6]));

/*

Write a function called countPairs which accepts an array of numbers and a
number. The function should return the number of unique pairs (two numbers) that
sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(arr, num) {
  // use a set to see if the other pair exists
  const dupSet = new Set(arr);
  let count = 0;
  for (let val of arr) {
    dupSet.delete(val);
    if (dupSet.has(num - val)) {
      count++;
    }
  }
  return count;
}

// countPairs([8,2,6,4,10,0],10);
/*
1. Write a function called getMostFollowers, which accepts a variable number of
arguments. You should then make an AJAX call to the Github User API
(https://developer.github.com/v3/users/#get-a-single-user) to get the name and
number of followers of each argument. The function should return a promise,
which when resolved, returns a string which displays the username who has the
most followers.
*/

function getMostFollowers(...names) {
  let baseUrl = "https://api.github.com/users/";
  let promises = names.map((name) =>
    fetch(baseUrl + name).then((res) => res.json()),
  );
  Promise.all(promises)
    .then((data) => {
      let mostFollowers = { name: "Jonh Doe", followers: 0 };
      data.forEach((val) => {
        console.log(val.name, val.followers);
        if (val.followers > mostFollowers.followers) {
          mostFollowers.name = val.name;
          mostFollowers.followers = val.followers;
        }
      });
      console.log(
        `The person with the most followers is ${mostFollowers.name} with ${mostFollowers.followers} followers`,
      );
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// getMostFollowers('elie','tigarcia','colt');

/* Write a function called getCountryData, which accepts a name. You should
then make an AJAX call to the restcountries API
(https://restcountries.com/v3.1/name/{name}?fullText=true ) to search for the 
name passed to the function. Your function should
return a promise that when resolved will console.log the name, poplulation,
currency and region of the country.
*/
function getCountryData(name) {
  let str = "";
  return new Promise((res, rej) => {
    let data = fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`,
    ).then((info) => info.json());
    if (data) {
      res(data);
    } else {
      rej("Error fetching data");
    }
  })
    .then((res) => {
      str += `${res[0].name.common} has a population of ${res[0].population}
        and is in the continent of ${res[0].continents[0]}`;
      return str;
    })
    .then((finalString) => finalString);
}

// getCountryData("Ireland")
// .then(data => console.log(data))
// .catch(error => console.log(error));

///////////////////////////////////////////////////////////////////////////////
// Async Functions
///////////////////////////////////////////////////////////////////////////////

// Write a function called hasMostFollowers, which accepts a variable number of
// arguments. You should then make an AJAX call to the Github User API
// (https://developer.github.com/v3/users/#get-a-single-user) to get the name
// and number of followers of each argument. The function should return a string
// which displays the username who has the most followers.

// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX
// methods ($.getJSON, $.ajax, etc.) return a promise.

// hasMostFollowers('elie','tigarcia','colt').then(function(data){
//     console.log(data)
// });

// "Colt has the most followers with 424"

async function hasMostFollowers(...args) {
  // Create an array of promises using map
  const promiseInfo = args.map((name) => {
    const url = `https://api.github.com/users/${name}`;
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .catch((error) => console.error("Fetching error:", error.message));
  });
  try {
    // Wait for all promises to resolve
    const users = await Promise.all(promiseInfo);
    let followers = 0;
    let mostFollowers = "";
    // Log each user information
    users.forEach((user) => {
      if (user) {
        if (user.following > followers) {
          followers = user.followers;
          mostFollowers = user.name;
        }
        // console.log(user.name);
      }
    });
    console.log(`${mostFollowers} has the most followers at ${followers}`);
  } catch (error) {
    console.error("Error in Promise.all:", error);
  }
  // const nameList = await Promise.all(promiseInfo);
  // nameList.forEach(val => console.log(val.name))
}

// hasMostFollowers('balcoder', 'colt', 'elie');

async function starWarsString(num) {
  const baseUrl = "https://swapi.dev/api/films/";
  const movieInfo = fetch(baseUrl + num)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => console.error("Fetching error:", error.message));
  try {
    let startTime = performance.now();
    const movie = await movieInfo;
    let endTime = performance.now();
    console.log(movie.title);
    console.log(`Get movie data took ${endTime - startTime} milliseconds`);
  } catch (error) {
    console.error("Error in fetch:", error);
  }
}

starWarsString(2);
