console.log("mumbai")

// setTimeout(() => {
//     console.log("hydereabad")
// },0);

let timer;

timer = setInterval(() => {
    console.log("delhi")
}, 3000);

setTimeout(() => {
    clearInterval(timer)
}, 10000);


console.log("benguluru")
