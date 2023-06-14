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
                        console.log(this.firstName + " " + this.lastName)
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

// this keyword in js
// this refers to the context it was called 

var a = 20;

const sachin = {
  firstName : "Sachin",
  lastName : "Tendulkar",
  // fullName : function(){
  //               console.log(`sachin full name is ${this.firstName} ${this.lastName}`);
  //               function x(){
  //                 console.log(this)
  //               }
  //               x()
  //             },

  fullName : () => {
    console.log(this)
    console.log(`sachin full name is ${this} ${this}`);
  }

}

sachin.fullName()



function greetings(name){
  console.log("good morning" + name);
  console.log(`good morning ${name}`);
}

greetings("sachin")


// alert("ksdjfjkdf")
console.log(window.a)

// creating object using literals

const bike = {}
bike.tyres = 2;
bike.color = "black";
console.log(bike)


// creating object using new keyword

const car = new Object();

car.color = "blue";
car.capacity = 5
console.log(car)

// creating object using object.assing method

const ram = {
  mobileNumber : 5545454,
  bloodGroup : "A",
  city : "Hyderabad",
  schoolName : "ABC School"
}

const lakshman = Object.assign({}, ram);
lakshman.bloodGroup = "O"
console.log(ram, lakshman)

// creating object using constructor function

// const student1 = {
//   name : "ADI",
//   phNumber : 546565,
//   city : "hydereabed",
//   pincode : 566856
// }
// const student2 = {
//   name : "sharmila",
//   phNumber : 798795,
//   city : "mumbai",
//   pincode : 589554
// }
// const student3 = {
//   name : "gnan kumar",
//   phNumber : 45454,
//   city : "benguluru",
//   pincode : 589554
// }
// const student4 = {
//   name : "Hari kumar",
//   phNumber : 645454,
//   city : "chennai",
//   pincode : 589554
// }

function Student(name, mobileNumber, city, pincode){
    this.name = name;
    this.phNumber = mobileNumber;
    this.city = city;
    this.pincode = pincode
}

const student1 = new Student("ADI",546565, "hyderabad",566856 );
const student2 = new Student("sharmila", 798795, "mumbai", 589554)
const student3 = new Student("gnan kumar", 45454, "benguluru", 589554)

console.log(student1, student2, student3);

//venu created resume in his father laptop

const venu = {
  name : "Venu",
  phoneNumber : 89898989954,
  fatherName : "qwerty",
  city : "Delhi",
  bloodGroup : "A+",
  schoolName : "ABC School"
}

// const venky = Object.assign({},venu )
// venky.name = "Venky";
// venky.bloodGroup = "AB-"
// console.log(venu,venky)

console.clear()

const venky = venu;  // never do copying objects like this

//venky used the same word file to create his resume

venky.name = "Venky"
venky.bloodGroup = "AB-"

// venu again opened the resume then his name is changed to venky

venu.name = "Venu"

// venu agian changed name to venu 


console.log( venu, venky)


// shallow copy - (shadow copy) - copying objects using assignment operator
// deep copy  - copying objects using object.assign(), spread operator








