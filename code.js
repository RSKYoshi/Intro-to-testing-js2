// helloWorld function 
// function statement syntax
// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

helloWorld();

//example that works
function foo(){
    return 2
}

//before adding more questions
//sayHello
// function sayHello(x){
//     input=x
//     if(input==="Alex"){
//         return "Hello, Alex!"
//     } else if(input==="Pat"){
//         return "Hello, Pat!"
//     } else return "Hello, Jane!"
// }

// to refactor
function sayHello(x){
    if(typeof x==='undefined'){
        return "Hello, World!"
    } else if(x === true){
        return "Hello, World!"
    } else if(x === false) {
        return "Hello, World!"
    } else if(x=x) {
        return "Hello, " + x + "!";
    }
}

// refactored above code to use switch statements
// why does this return 'Hello, undefined' ?
// function sayHello(x){
//     switch(x) {
//         case(typeof x ==='undefined'):
//             return "Hello, World!" ;
//             break;
//         case x === true:
//             return "Hello, World!";
//             break;
//         case x === false:
//             return "Hello, World!" ;
//             break;
//         case x=x:
//             return "Hello, " + x + "!";
//     }
// }

//isFive problems

function isFive(x){
    return x === 5 || x==="5";
}













