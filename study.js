/*
function outer(greeting, msg="It's a fine day to learn") { // 2
    const innerFunction =  function(name, lang="Python") { // 3
      return `${greeting}, ${name}! ${msg} ${lang}`; // 4
    }
    return innerFunction("student", "JavaScript"); // 5
}
 
console.log(outer("Hello")); //1
//=> Hello, student! It's a fine day to learn JavaScript
console.log(outer("Hola", "Don't feel like studying"));
//=> Hola, student! Don't feel like studying JavaScript
*/



/*
function outer(greeting, msg="It's a fine day to learn") {
    const innerFunction =  function(name, lang="Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    }
    return innerFunction;
}

// The return value of outer is now an anonymous function
console.log(outer());
//=> [Function: innerFunction]
console.log(outer()());
//=> undefined, undefined! It's a fine day to learn Python
console.log(outer("Hello")("student", "JavaScript"));
//=> Hello, student! It's a fine day to learn JavaScript

const storedFunction = outer("Hello");
console.log(storedFunction("student", "JavaScript"));
//=> Hello, student! It's a fine day to learn JavaScript
*/



/*
function outer(greeting, msg="It's a fine day to learn") {
    return function(name, lang="Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    }
}

console.log(outer("Hello")("student", "JavaScript"))
//=> Hello, student! It's a fine day to learn JavaScript
*/


const array = (
    function(thingToAdd) {
      const base = 3;
      return [
        function() { return base + thingToAdd; },
        function() { return base; }
      ];
    }
)(2)

console.log(array);
//=>[ [Function (anonymous)], [Function (anonymous)] ]

console.log(array[0]);
//=> [Function (anonymous)]
console.log(array[1]);
//=> [Function (anonymous)]


console.log(array[0]()); 
//=> 5
console.log(array[1]());
//=> 3