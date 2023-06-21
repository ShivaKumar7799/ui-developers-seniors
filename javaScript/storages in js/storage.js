var count = 0;

 
count = Number(localStorage.getItem("count"))
document.getElementById("countValue").innerHTML = `count: ${count}`
document.getElementById("myName").innerHTML = localStorage.getItem("name")

function increaseCount(){
    count = count + 1;
    document.getElementById("countValue").innerHTML = `count: ${count}`
    localStorage.setItem("count",count)
}

const resetCount = () => {
    localStorage.removeItem("count");
    count = 0
    document.getElementById("countValue").innerHTML = `count: ${0}`
}


const saveName = () => {
    var name = document.getElementById("name").value;
    document.getElementById("myName").innerHTML = name
    localStorage.setItem("name", name)
}

const showName = () => {
    document.getElementById("myName").innerHTML = localStorage.getItem("name")
}

const removeName = () => {
    localStorage.removeItem("name")
    document.getElementById("myName").innerHTML = ""
}

// event listeners in js 

document.getElementById("increase").addEventListener("click", increaseCount )

document.getElementById("showAlert").addEventListener("click", () => {
    alert("showing alert using event listeners")
} )