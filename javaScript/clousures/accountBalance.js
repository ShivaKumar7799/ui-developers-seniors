



function deposite(){
    var balance = 0;
    return (amount) => {
        balance += amount;
        console.log(balance)
    }
}

function hacker(){
    balance = 0;
}

setInterval(() => {
    hacker()
}, 20000);


var shivakumarBalance = deposite()  // return function with new balance = 0 scope variable

var sekharBalance = deposite()  // return function with new balance = 0 scope varaible

document.getElementById("shiva").addEventListener( "click", () => {
    var amount = Number(document.getElementById("deposite").value);
    shivakumarBalance(amount)
} )

document.getElementById("sekhar").addEventListener( "click", () => {
    var amount = Number(document.getElementById("deposite").value);
    sekharBalance(amount)
} )

// clousure is nothing but returning a function along with its lexical scope.
// whenever we call the higherorder function, it will return a function and we can store
// that inside another varible, whenever we are saving that function call inside a variable it 
// will store that function with a new scope varibles which are dependent.

// whenver we call this newly created varible, it will call the return function and it will 
// change the newly created variable only

