// ------------------------------------------- 0 -------------------------------- //
// make a variable called `name`
// on another line, set it to your name

var name;
name = "Devin Wilcox";


// create a function called `shout`
// in that function, it will `console.log` the input into the function

function shout(x){
    console.log(x.toUpperCase());
}
shout(name);
// pass your name into the function you made
// if it outputs your name in all caps, you're good to go on









// ------------------------------------------- 1 -------------------------------- //
// now make another variable called `num` and set it to any number you choose

var num = 97;


// create a function called `add` that takes in two numbers
// output from it those two numbers added together

// var add = (num1, num2) => num1 + num2;

// add(3, 7);//?

function add(num1, num2){
    return num1 + num2;//?
}



// create another function called `add5` that only accepts one number
// output from it the result of `add` passing in the passed-in number and 5

// function add5(numToAdd){
//     return add(numToAdd, 5);
// }

function add5(num){
    var result = add(num, 5);
    return result;
}

add5(num)//?





// console.log the output of `add5` called with your number
// as long as it's your number plus 5, you're good to continue

console.log(add5(num))






// ------------------------------------------- 2 -------------------------------- //
// make another variable called `arr`
// assign an array to it with all kinds of values, and as many as you want

var arr = [1, "hello", true]
console.log(arr.length)
console.log(typeof arr[0])

// console.log the length of the array (not by counting it yourself, use the special property on it)





// log out the type of the first index of the array
// * EXTRA CREDIT * use a javascript keyword to get the type instead of explicitly saying it