const suresh = {
    firstName : "suresh",
    lastName : "kumar",
}

const ramesh = {
    firstName : "ramesh",
    lastName : "kumar",
}

const sriram = {
    firstName : "kavuri",
    lastName : "sriramchandu",
}

const personFullName = {
    fullName : function(city, phNumber){
        console.log(`${this.firstName} ${this.lastName} ${city} ${phNumber} `)
    }
}

personFullName.fullName.bind(ramesh)("hyd",56565)

// call method 

personFullName.fullName.call(suresh, "hyderabad", 446456546)
personFullName.fullName.call(ramesh, "vizag", 545454)
personFullName.fullName.call(sriram, "benguluru", 5656565)


// apply method 

const sureshData = ["hyderabad", 446456546]

personFullName.fullName.apply(suresh,sureshData)
personFullName.fullName.apply(ramesh,["vizag",7457878])
personFullName.fullName.apply(sriram, ["delhi", 565656])

//bind method


const person = {
    firstName : "ravi",
    lastName : "kumar",
    fullName : function(){
        console.log(this.firstName + this.lastName)
        return this.firstName + this.lastName
    }
}

const student1 = {
    firstName : "hari",
    lastName : "krishna"
}
const student2 = {
    firstName :"rama",
    lastName : "krishna"
}
person.fullName.bind(student1)()
person.fullName.bind(student2)()



