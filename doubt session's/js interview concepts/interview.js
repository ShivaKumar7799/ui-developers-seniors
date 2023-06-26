function showPopUp(){
    alert("this is alert message")
}

document.getElementById("popup").addEventListener("click", showPopUp)


function showTable(){
    var tableNumber = parseInt(document.getElementById("tableNumber").value)
    var uptoNumber = parseInt(window.prompt("enter upto value"))
    for(let i = 1; i <= uptoNumber; i++){
        console.log(  `${tableNumber} * ${i} = ${tableNumber * i} ` )
    }
    
}