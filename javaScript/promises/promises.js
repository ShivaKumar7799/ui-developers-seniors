

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then((result) => {
//     return result.json()
// })
// .then((res) => {
//     console.log(res, "comments")
// })
// .catch( (err) => {
//     console.log(err, "errors while fetching data from c api")
// })

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((result) => {
//     return result.json()
// })
// .then((res) => {
//     console.log(res, "users")
// })
// .catch( (err) => {
//     console.log(err, "errors while fetching data from users api")
// })

console.log("shiva");
var a = 10;
var b = 20;

const moneyPromise = new Promise( (resolve, reject) => {
    var moneyGiven = true;
    if(moneyGiven){
        resolve("money given properly")
    } else {
        reject("money not given")
    }
} )

moneyPromise
.then( (result) => {
    console.log(result, "success")
} )
.catch( (err) => {
    console.log(err, "failed")
} )

var sum = a+b;
console.log(sum)

async function getUsersData(){
//    const result = await fetch("https://jsonplaceholder.typicode.com/users");
//    console.log( await result.json())
   try{
    const result = await moneyPromise;
    console.log(result)
   } catch(err){
    console.log(err)
   }
}

getUsersData()