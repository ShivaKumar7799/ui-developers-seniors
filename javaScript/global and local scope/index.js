var a = 10;

function increment(){
    a += 1;
    console.log(a)
}

function decrement(){
    a -= 1
    console.log(a)
}

document.getElementById("inc").addEventListener("click", increment)
document.getElementById("dec").addEventListener("click", decrement)


var x = 10;
function printX(){
    var x = 2;
    console.log(x)
}
printX()
console.log(x)




var y = 19;
{
    var y = 2;
    console.log(y)
}
console.log(y)