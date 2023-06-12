// const ravi = ["Ravi Kumar", 24, "Hyderabad", "ABC College", true, ["Maths", "science"]];

// const raviFullName = "Ravi Kumar"
// const raviAge = 25
// const raviCity = "Hyd"

const ravi = {
  fullName : "Ravi Kumar",
  age : 24,
  city : "Hyderabad",
  college : "ABC College",
  isStudent : true,
  favouriteSubjects : ["Maths", "Science"],
  subjectMarks : {
    telugu : 70,
    hindi : 65,
    english : 18,
    mathematics : 100,
    science : 90,
    social : 75
  }
}


console.log(ravi.fullName)
console.log(ravi.age)
console.log(ravi.city)
console.log(ravi.favouriteSubjects)
console.log(ravi.subjectMarks.mathematics)
console.log(ravi.subjectMarks.social)


const suresh = {
  fullName : "Suresh",
  age : 16,
  city : "Benguluru",
  college : "ABC College"
}
console.log(suresh, "before adding isStudent key")

suresh.isStudent = true
suresh.favouriteSubjects = ["Hindi", "Mathematics"]
suresh.age = 24
suresh.city = "Visakhapatnam"

delete suresh.college

console.log(suresh, "after adding isStudent key")

console.log("-----------------------");

const benz = {
  noOfTyres : 4,
  color : "white",
  seatingCapacity : 5,
  mode : "Automatic"
}

console.log(benz);

benz.model = "BS 6";
benz.carNumber = "AP 02 C 4565";
benz.seatingCapacity = 7
delete benz.color


console.log(benz)

const shiva = {
  firstName : "Shiva",
  lastName : "Shankar",
  fullName : function(){
                        console.log(this.firstName + this.lastName)
                      },
  age : function(){
            const date = new Date()
            var currentYear = date.getFullYear()
            const presentAge = Math.abs(this.birthYear - currentYear)
            console.log(this.firstName + " " + this.lastName + " age =", presentAge)
        }
}

shiva.birthYear = 1999;

shiva.fullName()
shiva.age()

console.log(shiva)




