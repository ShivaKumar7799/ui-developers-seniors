async function getUsers(){
    console.log("first")

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json)).catch(err => console.log(err))
     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     response = await response.json()
     console.log(response)
     console.log("third")
}

getUsers()

// setTimeout(() => {
//     setInterval
// }, timeout);(() => {
//     console.log("hello")
// },3000)

localStorage.setItem("name" ,"shiva")
console.log(localStorage.getItem("name"))


const moneyPromise = new Promise((resolve, reject) => {
    const moneyGiven = false;
    if(moneyGiven){
        resolve("money given")
    }else {
        reject("money not given")
    }
})

moneyPromise.then((result)=> {
    console.log(result)
}).catch((err) => {
    console.log(err)
})