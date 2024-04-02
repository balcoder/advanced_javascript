const img1 = document.getElementById('foo');
const img = new Image();
img.src = "./img/hotel-1.jpg";
img.setAttribute('width', '50%');
img.setAttribute('height', '50%');
img1.appendChild(img);

// Advanced_javascript code

//define our own forEach function
function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {        
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
    arr.forEach(function(val){
        newArr.push(val * 2);
    })
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
        if(el % 2 == 0) {
            newArr.push(el);
        }
    })
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
    arr.forEach((el)=> {
        let str = el[0] + el.slice(-1);
        newArr.push(str)
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
    arr.forEach(el=> {
        el[key] = value;
    })
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
    const vowel = ["a", "e", "i", "o", "u"]
    let lowerCase = str.toLowerCase().split('');    
    let count = {};
    lowerCase.forEach(el => {        
        if(vowel.includes(el)) {
            if(el in count){
                count[el] += 1;
            } else {
                count[el] = 1;
            }
        }
    })
    return count;
}

//console.log(vowelCount('I Am awesome and so are you'));

// My map function

function myMap(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {        
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
function doubleValues(arr){
    return arr.map((el) => el * 2)
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
    return arr.map(function(el, index){
        return el * index;
    })
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
    return arr.map(el => {
        return el[key];
    })
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
    return arr.map(el => {
        return el['first'] + " " + el['last'];
    })
}

// console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"},
// {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));


// My filter function
function myFilter(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) {
            newArr.push(arr[i])
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
    return arr.filter(el => {
        return el[key] !== undefined;
    })
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
    return arr.filter(el => {
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

function findInObj(arr, key, value){
    return arr.filter(el => {
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
    let vowels = ["a","e","i","o","u"];
    return lower.filter(el => {
        return vowels.indexOf(el) == -1;
    }).join('');
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
    return arr.filter(el => {
        return el % 2 != 0;
    }).map(num => {
        return num * 2;
    })
}

// console.log(doubleOddNumbers([1,2,3,4,5]));

// MySome function
function mySome(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

// My every function
function myEvery(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(!callback(arr[i], i, arr)) {
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
    return arr.some(num => {
        return num % 2 !=0;
    })
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
    return num.toString().split("").some(val => {
        return val === "0";
    })
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
    return arr.every(num => {
        return num % 2 !== 0;
    })
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
    return arr.every(function(el, i, array){
        return array.filter(val => val === el).length !== 2;
    })
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
    return arr.every(obj => {
        return obj[key] !== undefined;
    })
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
    return arr.every(ob => {
        return ob[key] === value;
    })
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
        if(currValue[key]) {
        acc.push(currValue[key]);
        }
        return acc;
    }, [])
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
    const vowels = ["a","e","i","o","u"];
    const letters = str.toLowerCase().split("");           
    return letters.reduce((acc, next)=> {
        if(vowels.indexOf(next) > -1){
            if(acc[next] !== undefined) {
                acc[next] += 1;
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    },{})
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
    }, arr)
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
    return arr.reduce((acc, next)=> {
        if(callback(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    },[[],[]])
}

function isEven(val){
    return val % 2 === 0;
}

var arr = [1,2,3,4,5,6,7,8];

console.log(partition(arr, isEven)); // [[2,4,6,8], [1,3,5,7]];