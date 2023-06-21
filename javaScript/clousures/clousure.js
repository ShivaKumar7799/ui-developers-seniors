// higher order function 

// if we are passing a function as an argument or returning a function 


// function parent(){
//     return () => {
//         console.log("child")
//     }
// }

// console.log(parent())





function increment(){
    // var count = 0;
    // count = count + 1
    // console.log(count)
    var count = 0
    return () => {
        count = count + 1;
        console.log(count)
    }
}

function attacker(){
    count = 24545;
}
  
var venuGopalScore =  increment();

console.log(venuGopalScore)

var rajeshScore = increment();


document.getElementById("title").addEventListener("click", venuGopalScore)


document.getElementById("inc").addEventListener("click", increment);

document.getElementById("attack").addEventListener("click", attacker);


document.getElementById("rajesh").addEventListener("click", rajeshScore )
document.getElementById("venu").addEventListener("click", venuGopalScore )
